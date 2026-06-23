import {
  Badge,
  Button,
  Caption1,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { ArrowUploadFilled, AttachFilled } from '@fluentui/react-icons';
import { useCallback } from 'react';
import useFileUpload from '@/hooks/useFileUpload';

export default function Component() {
  const styles = useStyles();
  const { files, getInputProps, openFileDialog, clearFiles } = useFileUpload();

  const buttonClicked = useCallback(() => {
    if (!files || files.length === 0) {
      openFileDialog();
    } else {
      clearFiles();
    }
  }, [openFileDialog, clearFiles, files]);

  const fileName = files && files[0]?.file?.name;
  const hasFile = !!fileName;

  return (
    <div className={styles.fileUpload}>
      <label className={styles.actions}>
        <input {...getInputProps()} hidden name='my-file' />
        <Badge
          appearance='outline'
          color='informative'
          shape='rounded'
          size='extra-large'
          icon={hasFile ? <AttachFilled /> : <ArrowUploadFilled />}></Badge>
        <Button appearance='primary' onClick={buttonClicked}>
          {hasFile ? 'Remove file' : 'Upload file'}
        </Button>
      </label>

      <Caption1>{fileName ?? 'Basic file uploader'}</Caption1>
    </div>
  );
}

const useStyles = makeStyles({
  fileUpload: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingHorizontalM,
  },
});
