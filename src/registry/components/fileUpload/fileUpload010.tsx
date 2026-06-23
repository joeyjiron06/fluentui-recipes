import {
  Button,
  Caption1,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { DismissFilled, PersonCircleRegular } from '@fluentui/react-icons';

import useFileUpload from '@/hooks/useFileUpload';

export default function Component() {
  const styles = useStyles();
  const { files, getInputProps, openFileDialog, clearFiles } = useFileUpload({
    accept: 'image/*',
  });

  const fileName = files && files[0]?.file?.name;
  const previewUrl = files && files[0]?.preview;
  const hasFile = !!previewUrl;

  return (
    <div className={styles.root}>
      <div className={styles.avatarWrapper}>
        <Button
          appearance='outline'
          className={styles.avatarButton}
          onClick={openFileDialog}
          aria-label={hasFile ? 'Change image' : 'Upload image'}>
          {hasFile ? (
            <img
              src={previewUrl!}
              alt='Upload preview'
              className={styles.avatarImage}
            />
          ) : (
            <PersonCircleRegular className={styles.avatarPlaceholder} />
          )}
        </Button>

        {hasFile && (
          <Button
            appearance='primary'
            shape='circular'
            size='small'
            icon={<DismissFilled className={styles.dismissIcon} />}
            className={styles.removeButton}
            onClick={clearFiles}
            aria-label='Remove image'
          />
        )}

        <input {...getInputProps()} hidden />
      </div>

      {fileName && <Caption1>{fileName}</Caption1>}
      <Caption1 className={styles.helperText}>Avatar upload button</Caption1>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: tokens.spacingVerticalS,
  },
  avatarWrapper: {
    position: 'relative',
    display: 'inline-flex',
  },
  avatarButton: {
    width: '4rem',
    maxWidth: '4rem',
    height: '4rem',
    maxHeight: '4rem',
    minWidth: '4rem',
    padding: '0',
    overflow: 'hidden',
    borderRadius: tokens.borderRadiusMedium,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  avatarPlaceholder: {
    width: '1.5rem',
    height: '1.5rem',
    opacity: 0.6,
  },
  removeButton: {
    position: 'absolute',
    top: '-0.375rem',
    right: '-0.375rem',
    width: '1rem',
    height: '1rem',
    maxWidth: '1rem',
    minWidth: '1rem',
    maxHeight: '1rem',
    minHeight: '1rem',
    padding: '0',
  },
  dismissIcon: {
    width: '0.625rem',
    height: '0.625rem',
    maxWidth: '0.625rem',
    maxHeight: '0.625rem',
  },
  helperText: {
    opacity: 0.6,
    marginTop: tokens.spacingVerticalS,
  },
});
