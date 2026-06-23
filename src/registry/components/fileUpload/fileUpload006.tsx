import {
  Body1,
  Button,
  Caption1,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import {
  ArrowUploadRegular,
  DismissRegular,
  AttachRegular,
  DocumentArrowUpRegular,
} from '@fluentui/react-icons';
import { useCallback } from 'react';
import useFileUpload from '@/hooks/useFileUpload';

const initialFiles = [
  {
    name: 'document.pdf',
    size: 528737,
    type: 'application/pdf',
    url: 'https://example.com/document.pdf',
    id: 'document.pdf-1744638436563-8u5xuls',
  },
];

export default function Component() {
  const styles = useStyles();

  const {
    files,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    getInputProps,
    clearFiles,
    openFileDialog,
  } = useFileUpload({ initialFiles });

  const firstFile = files[0];
  const fileName = firstFile?.file.name;
  const hasFile = !!fileName;

  const buttonClicked = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();
      openFileDialog();
    },
    [openFileDialog],
  );

  const removeButtonClicked = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();
      clearFiles();
    },
    [clearFiles],
  );

  return (
    <div className={styles.fileUpload}>
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
          disabled={hasFile}
        />

        <Button
          appearance='outline'
          color='informative'
          shape='circular'
          onClick={buttonClicked}
          disabled={hasFile}
          icon={
            hasFile ? (
              <AttachRegular />
            ) : (
              <DocumentArrowUpRegular className={styles.buttonIcon} />
            )
          }
          aria-label={hasFile ? 'Change file' : 'Upload file'}></Button>

        <Body1>Drop your file here or click to browse</Body1>
        <Button
          appearance='outline'
          onClick={buttonClicked}
          icon={<ArrowUploadRegular />}
          disabled={hasFile}>
          Select file
        </Button>
      </div>

      {firstFile ? (
        <div className={styles.fileCard}>
          <div className={styles.fileCardNameContainer}>
            <AttachRegular />
            <span>{fileName}</span>
          </div>

          <Button
            size='small'
            appearance='transparent'
            shape='square'
            onClick={removeButtonClicked}
            className={styles.closeButton}>
            <DismissRegular />
          </Button>
        </div>
      ) : null}

      <Caption1>Single file uploader w/ list</Caption1>
    </div>
  );
}

// STYLES

const useStyles = makeStyles({
  fileUpload: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.spacingVerticalM,
    marginBottom: tokens.spacingVerticalM,
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
    gap: tokens.spacingHorizontalM,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
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
});
