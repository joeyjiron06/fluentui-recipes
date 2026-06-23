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
import { useCallback } from 'react';
import useFileUpload from '@/hooks/useFileUpload';

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

  const fileName = files[0]?.file?.name;
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
