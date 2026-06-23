import {
  Body1,
  Body1Strong,
  Button,
  Caption1,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import {
  DismissRegular,
  AttachRegular,
  DocumentArrowUpRegular,
  ErrorCircleRegular,
} from '@fluentui/react-icons';
import { useCallback } from 'react';
import useFileUpload, { formatBytes } from '@/hooks/useFileUpload';

// Create some dummy initial files
const initialFiles = [
  {
    name: 'document.pdf',
    size: 528737,
    type: 'application/pdf',
    url: 'https://example.com/document.pdf',
    id: 'document.pdf-1744638436563-8u5xuls',
  },
  {
    name: 'intro.zip',
    size: 252873,
    type: 'application/zip',
    url: 'https://example.com/intro.zip',
    id: 'intro.zip-1744638436563-8u5xuls',
  },
  {
    name: 'conclusion.xlsx',
    size: 352873,
    type: 'application/xlsx',
    url: 'https://example.com/conclusion.xlsx',
    id: 'conclusion.xlsx-1744638436563-8u5xuls',
  },
];

export default function Component() {
  const styles = useStyles();

  const maxFiles = 10;
  const {
    files,
    errors,
    removeFile,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    getInputProps,
    clearFiles,
    openFileDialog,
  } = useFileUpload({
    initialFiles,
    maxFiles,
    multiple: true,
  });

  const isDisabled = files.length >= maxFiles;

  const buttonClicked = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();
      openFileDialog();
    },
    [openFileDialog],
  );

  const removeAllButtonClicked = useCallback(() => {
    clearFiles();
  }, [clearFiles]);

  return (
    <div className={styles.root}>
      <div
        className={styles.container}
        onDrag={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <input
          {...getInputProps()}
          aria-label='Upload file'
          name='file-upload'
          className={styles.input}
          disabled={isDisabled}
        />

        <Button
          appearance='outline'
          color='informative'
          shape='circular'
          onClick={buttonClicked}
          disabled={isDisabled}
          icon={<DocumentArrowUpRegular className={styles.buttonIcon} />}
          aria-label='Upload file'></Button>

        <div className={styles.textContainer}>
          <Body1Strong as='p'>Upload files</Body1Strong>

          <Body1 as='p'>Drag & drop or click to browse</Body1>
          <Caption1>All files ∙ Max 10 files</Caption1>
        </div>
      </div>

      {errors.length > 0
        ? errors.map((error) => (
            <div key={error} className={styles.errorContainer}>
              <ErrorCircleRegular />
              <Caption1>{error}</Caption1>
            </div>
          ))
        : null}

      {files && files.length ? (
        <>
          <div className={styles.fileCardContainer}>
            {files.map((file) => (
              <div key={file.id} className={styles.fileCard}>
                <div className={styles.fileCardNameContainer}>
                  <div className={styles.fileCardIconContainer}>
                    <AttachRegular />
                  </div>
                  <div className={styles.fileNameContainer}>
                    <Body1>{file.file.name}</Body1>
                    <Caption1>{formatBytes(file.file.size)}</Caption1>
                  </div>
                </div>

                <Button
                  size='small'
                  appearance='transparent'
                  shape='square'
                  onClick={() => {
                    removeFile(file.id);
                  }}
                  className={styles.closeButton}>
                  <DismissRegular />
                </Button>
              </div>
            ))}
          </div>
          <Button appearance='outline' onClick={removeAllButtonClicked}>
            Remove all files
          </Button>
        </>
      ) : null}

      <Caption1 className={styles.caption}>
        Multiple file uploader w/ list
      </Caption1>
    </div>
  );
}

// STYLES

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: tokens.spacingVerticalM,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.spacingVerticalM,
    position: 'relative',
    borderRadius: tokens.borderRadiusLarge,
    'border-style': 'dashed',
    'border-color': tokens.colorNeutralStroke1,
    'border-width': tokens.strokeWidthThin,
    padding: tokens.spacingVerticalL,
    alignSelf: 'stretch',
    minHeight: '13rem',
    transition: 'background-color 100ms ease-in-out',

    ':hover:not:has(input:disabled)': {
      backgroundColor: tokens.colorNeutralBackground2,
    },

    ':has(input:focus-visible)': {
      outline: `solid ${tokens.strokeWidthThick} ${tokens.colorNeutralStrokeAccessible}`,
    },

    ':has(input:disabled)': {
      opacity: 0.5,
    },
  },
  closeIcon: {
    width: '0.625rem',
    height: '0.625rem',
    maxWidth: '0.625rem',
    maxHeight: '0.625rem',
  },
  buttonIcon: {
    color: tokens.colorNeutralForeground3,
  },
  fileNameContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  fileNameOverflowContainer: {
    minWidth: 0,
    overflow: 'hidden',
  },
  fileName: {
    flexGrow: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  closeButton: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    padding: `0 ${tokens.spacingHorizontalXS}`,
    minWidth: '0',
  },
  input: {
    appearance: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    visibility: 'hidden',
  },
  fileCard: {
    display: 'flex',
    gap: tokens.spacingHorizontalM,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: `solid ${tokens.strokeWidthThin} ${tokens.colorNeutralStroke1}`,
    'border-radius': tokens.borderRadiusMedium,
    padding: tokens.spacingHorizontalS,
  },
  fileCardNameContainer: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
    alignItems: 'center',
  },
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    color: tokens.colorStatusDangerForeground1,
    alignSelf: 'stretch',
  },
  fileCardIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2rem',
    height: '2rem',
    borderRadius: tokens.borderRadiusMedium,
    border: `solid ${tokens.strokeWidthThin} ${tokens.colorNeutralStroke1}`,
  },
  fileCardContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
    alignItems: 'stretch',
  },
  caption: {
    textAlign: 'center',
    width: '100%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXXS,
  },
});
