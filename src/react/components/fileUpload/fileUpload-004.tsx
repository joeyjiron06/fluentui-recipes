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
} from '@fluentui/react-icons';
import {
  useCallback,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type InputHTMLAttributes,
} from 'react';

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
  } = useFileUpload();

  const fileName = files && files[0].name;
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
        />

        <Button
          appearance='outline'
          color='informative'
          shape='circular'
          onClick={buttonClicked}
          icon={
            hasFile ? (
              <AttachRegular />
            ) : (
              <ArrowUploadRegular className={styles.buttonIcon} />
            )
          }
          aria-label={hasFile ? 'Change file' : 'Upload file'}></Button>

        {fileName ? (
          <div className={styles.fileNameContainer}>
            <span className={styles.fileNameOverflowContainer}>
              <div className={styles.fileName}>{fileName} </div>
            </span>

            <Button
              className={styles.closeButton}
              appearance='primary'
              size='small'
              shape='circular'
              icon={<DismissRegular className={styles.closeIcon} />}
              aria-label='Remove image'
              onClick={removeButtonClicked}></Button>
          </div>
        ) : (
          <Body1>Drop your image here or click to browse</Body1>
        )}
      </div>

      <Caption1> {'Single file uploader w/ max size'}</Caption1>
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
    padding: tokens.spacingVerticalL,
    alignSelf: 'stretch',
    minHeight: '13rem',

    ':has(input:focus-visible)': {
      outline: `solid ${tokens.strokeWidthThick} ${tokens.colorNeutralStrokeAccessible}`,
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
    width: '1rem',
    height: '1rem',
    maxWidth: '1rem',
    minWidth: '1rem',
    maxHeight: '1rem',
    minHeight: '1rem',
    padding: '0.25rem',
  },
  input: {
    appearance: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
});

// HOOKS

function useFileUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[] | undefined>();

  const fileChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.target;
      const files = input.files;

      if (files) {
        setFiles(Array.from(files));
      }
    },
    [setFiles],
  );

  const clearFiles = useCallback(() => {
    setFiles(undefined);
    const input = inputRef.current;
    if (input) {
      input.value = '';
    }
  }, [setFiles]);

  const getInputProps: () => InputHTMLAttributes<HTMLInputElement> =
    useCallback(() => {
      return {
        type: 'file',
        onChange: fileChanged,
        ref: inputRef,
      };
    }, [fileChanged, inputRef]);

  const openFileDialog = useCallback(() => {
    const input = inputRef.current;
    if (input) {
      input.click();
    }
  }, []);

  const handleDrop = useCallback((event: DragEvent<HTMLElement>) => {
    event.preventDefault();

    if (event.dataTransfer.files) {
      setFiles(Array.from(event.dataTransfer.files));
    }
  }, []);

  const handleDragEnter = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }
  }, []);

  const handleDragOver = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return {
    files,
    getInputProps,
    clearFiles,
    openFileDialog,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
  };
}
