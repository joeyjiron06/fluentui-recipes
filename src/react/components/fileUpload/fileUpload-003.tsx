import {
  Button,
  Caption1,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import {
  DocumentArrowUpRegular,
  DismissFilled,
  AttachFilled,
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
    openFileDialog,
    clearFiles,
    getInputProps,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = useFileUpload();

  const buttonClicked = useCallback(() => {
    openFileDialog();
  }, [openFileDialog]);

  const removeButtonClicked = useCallback(() => {
    clearFiles();
  }, [clearFiles]);

  const fileName = files && files[0].name;
  const hasFile = !!fileName;

  return (
    <div className={styles.fileUpload}>
      <div className={styles.badge}>
        <input {...getInputProps()} hidden name='file-upload' />
        <Button
          appearance='outline'
          color='informative'
          icon={hasFile ? <AttachFilled /> : <DocumentArrowUpRegular />}
          className={styles.button}
          onClick={buttonClicked}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          aria-label={hasFile ? 'Change file' : 'Upload file'}></Button>

        {hasFile ? (
          <Button
            className={styles.closeButton}
            appearance='primary'
            size='small'
            shape='circular'
            icon={<DismissFilled className={styles.closeIcon} />}
            aria-label='Remove image'
            onClick={removeButtonClicked}></Button>
        ) : null}
      </div>

      <Caption1> {fileName ?? 'Upload file with droppable area'}</Caption1>
    </div>
  );
}

const useStyles = makeStyles({
  fileUpload: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  badge: {
    marginBottom: tokens.spacingVerticalM,
    position: 'relative',
  },
  button: {
    width: '3.5rem',
    maxWidth: '3.5rem',
    height: '3.5rem',
    maxHeight: '3.5rem',
    borderRadius: tokens.borderRadiusCircular,
    'border-style': 'dashed',
  },
  closeButton: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '1rem',
    height: '1rem',
    maxWidth: '1rem',
    minWidth: '1rem',
    maxHeight: '1rem',
    minHeight: '1rem',
    padding: '0.25rem',
  },
  closeIcon: {
    width: '0.625rem',
    height: '0.625rem',
    maxWidth: '0.625rem',
    maxHeight: '0.625rem',
  },
});

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
