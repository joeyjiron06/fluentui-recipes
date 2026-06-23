import {
  Button,
  Caption1,
  makeStyles,
  mergeClasses,
  tokens,
} from '@fluentui/react-components';
import { DismissFilled, PersonCircleRegular } from '@fluentui/react-icons';
import useFileUpload from '@/hooks/useFileUpload';

export default function Component() {
  const styles = useStyles();
  const {
    files,
    isDragging,
    getInputProps,
    openFileDialog,
    clearFiles,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = useFileUpload({ accept: 'image/*' });

  const fileName = files && files[0]?.file?.name;
  const previewUrl = files && files[0]?.preview;
  const hasFile = !!previewUrl;

  return (
    <div className={styles.root}>
      <div className={styles.avatarWrapper}>
        <button
          className={mergeClasses(
            styles.dropZone,
            isDragging && styles.dropZoneDragging,
            hasFile && styles.dropZoneWithImage,
          )}
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          type='button'
          aria-label={hasFile ? 'Change image' : 'Upload image'}>
          {hasFile ? (
            <img
              src={previewUrl!}
              alt={fileName || 'Uploaded image'}
              className={styles.avatarImage}
            />
          ) : (
            <PersonCircleRegular className={styles.avatarPlaceholder} />
          )}
        </button>

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

      <Caption1 className={styles.helperText}>
        Avatar uploader with droppable area
      </Caption1>
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
  dropZone: {
    width: '4rem',
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: `${tokens.strokeWidthThin} dashed ${tokens.colorNeutralStroke1}`,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'background-color 0.2s, border-color 0.2s',
    outline: 'none',
    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
    '&:focus-visible': {
      borderColor: tokens.colorBrandStroke1,
      boxShadow: `0 0 0 2px ${tokens.colorBrandStroke1}`,
    },
  },
  dropZoneDragging: {
    backgroundColor: tokens.colorNeutralBackground1Hover,
    borderColor: tokens.colorBrandStroke1,
  },
  dropZoneWithImage: {
    border: 'none',
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
