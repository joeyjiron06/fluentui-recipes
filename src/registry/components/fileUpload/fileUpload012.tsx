import {
  Body1Strong,
  Button,
  Caption1,
  makeStyles,
  mergeClasses,
  tokens,
} from '@fluentui/react-components';
import {
  ArrowUpload16Regular,
  Delete16Regular,
  DismissFilled,
  Document20Regular,
  ErrorCircleRegular,
  ImageRegular,
  MusicNote2Regular,
  VideoRegular,
  FolderZipRegular,
} from '@fluentui/react-icons';
import { useCallback } from 'react';
import useFileUpload, {
  formatBytes,
  type FileWithPreview,
} from '@/hooks/useFileUpload';

const initialFiles = [
  {
    name: 'intro.zip',
    size: 252873,
    type: 'application/zip',
    url: 'https://example.com/intro.zip',
    id: 'intro.zip-1744638436563-8u5xuls',
  },
  {
    name: 'image-01.jpg',
    size: 1528737,
    type: 'image/jpeg',
    url: 'https://picsum.photos/400/300?grayscale&random=1',
    id: 'image-01-123456789',
  },
  {
    name: 'audio.mp3',
    size: 1528737,
    type: 'audio/mpeg',
    url: 'https://example.com/audio.mp3',
    id: 'audio-123456789',
  },
];

function getFileIcon(file: FileWithPreview) {
  const fileObj = file.file;
  const type = fileObj instanceof File ? fileObj.type : fileObj.type;
  const name = fileObj instanceof File ? fileObj.name : fileObj.name;

  if (type.startsWith('image/')) return <ImageRegular />;
  if (type.startsWith('audio/')) return <MusicNote2Regular />;
  if (type.startsWith('video/')) return <VideoRegular />;
  if (
    type.includes('zip') ||
    type.includes('archive') ||
    name.endsWith('.zip') ||
    name.endsWith('.rar')
  )
    return <FolderZipRegular />;
  return <Document20Regular />;
}

export default function Component() {
  const styles = useStyles();
  const maxFiles = 6;
  const maxSizeMB = 5;
  const maxSize = maxSizeMB * 1024 * 1024;

  const {
    files,
    isDragging,
    errors,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    getInputProps,
    removeFile,
    openFileDialog,
    clearFiles,
  } = useFileUpload({ maxFiles, maxSize, multiple: true, initialFiles });

  const uploadButtonClicked = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();
      openFileDialog();
    },
    [openFileDialog],
  );

  return (
    <div className={styles.root}>
      <div
        className={mergeClasses(
          styles.dropZone,
          isDragging && styles.dropZoneDragging,
          files.length > 0 && styles.dropZoneWithFiles,
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <input
          {...getInputProps()}
          aria-label='Upload files'
          className={styles.hiddenInput}
        />

        {files.length > 0 ? (
          <div className={styles.filesContent}>
            <div className={styles.filesHeader}>
              <Body1Strong>Files ({files.length})</Body1Strong>
              <div className={styles.headerActions}>
                <Button
                  appearance='outline'
                  size='small'
                  icon={<ArrowUpload16Regular />}
                  onClick={uploadButtonClicked}>
                  Add files
                </Button>
                <Button
                  appearance='outline'
                  size='small'
                  icon={<Delete16Regular />}
                  onClick={clearFiles}>
                  Remove all
                </Button>
              </div>
            </div>

            <div className={styles.grid}>
              {files.map((file) => (
                <div key={file.id} className={styles.card}>
                  <div className={styles.cardPreview}>
                    {file.file instanceof File &&
                    file.file.type.startsWith('image/') ? (
                      <img
                        src={file.preview}
                        alt={file.file.name}
                        className={styles.previewImage}
                      />
                    ) : !(file.file instanceof File) &&
                      (file.file as any).type?.startsWith('image/') &&
                      file.preview ? (
                      <img
                        src={file.preview}
                        alt={file.file.name}
                        className={styles.previewImage}
                      />
                    ) : (
                      <span className={styles.fileIconLarge}>
                        {getFileIcon(file)}
                      </span>
                    )}
                  </div>

                  <Button
                    appearance='primary'
                    shape='circular'
                    size='small'
                    icon={<DismissFilled className={styles.dismissIcon} />}
                    className={styles.removeButton}
                    onClick={() => removeFile(file.id)}
                    aria-label={`Remove ${file.file.name}`}
                  />

                  <div className={styles.cardInfo}>
                    <Caption1 className={styles.fileName}>
                      {file.file.name}
                    </Caption1>
                    <Caption1 className={styles.fileSize}>
                      {formatBytes(file.file.size)}
                    </Caption1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <ImageRegular />
            </div>
            <Body1Strong>Drop your files here</Body1Strong>
            <Caption1 className={styles.emptyHint}>
              Max {maxFiles} files · Up to {maxSizeMB}MB
            </Caption1>
            <Button
              appearance='outline'
              icon={<ArrowUpload16Regular />}
              onClick={uploadButtonClicked}
              className={styles.uploadButton}>
              Select images
            </Button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div className={styles.errorContainer}>
          <ErrorCircleRegular />
          <Caption1>{errors[0]}</Caption1>
        </div>
      )}

      <Caption1 className={styles.caption}>
        Mixed content w/ image grid preview
      </Caption1>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
  },
  dropZone: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '13rem',
    borderRadius: tokens.borderRadiusXLarge,
    border: `${tokens.strokeWidthThin} dashed ${tokens.colorNeutralStroke1}`,
    padding: tokens.spacingHorizontalL,
    transition: 'background-color 0.2s, border-color 0.2s',
    overflow: 'hidden',
    ':has(input:focus-visible)': {
      borderColor: tokens.colorBrandStroke1,
      boxShadow: `0 0 0 2px ${tokens.colorBrandStroke1}`,
    },
  },
  dropZoneDragging: {
    backgroundColor: tokens.colorNeutralBackground1Hover,
    borderColor: tokens.colorBrandStroke1,
  },
  dropZoneWithFiles: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  hiddenInput: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  },
  filesContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    width: '100%',
  },
  filesHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: tokens.spacingHorizontalM,
  },
  headerActions: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: tokens.spacingHorizontalM,
  },
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    overflow: 'visible',
  },
  cardPreview: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: '1',
    overflow: 'hidden',
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: `${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0`,
  },
  previewImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  fileIconLarge: {
    fontSize: '24px',
    color: tokens.colorNeutralForeground3,
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
  cardInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    padding: tokens.spacingHorizontalS,
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    minWidth: 0,
  },
  fileName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: tokens.fontWeightSemibold,
  },
  fileSize: {
    color: tokens.colorNeutralForeground3,
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${tokens.spacingVerticalXL} ${tokens.spacingHorizontalL}`,
    textAlign: 'center',
    gap: tokens.spacingVerticalXS,
  },
  emptyIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.75rem',
    height: '2.75rem',
    borderRadius: '50%',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    marginBottom: tokens.spacingVerticalXS,
    fontSize: '20px',
    color: tokens.colorNeutralForeground3,
  },
  emptyHint: {
    color: tokens.colorNeutralForeground3,
  },
  uploadButton: {
    marginTop: tokens.spacingVerticalM,
  },
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    color: tokens.colorStatusDangerForeground1,
  },
  caption: {
    textAlign: 'center',
    color: tokens.colorNeutralForeground3,
    marginTop: tokens.spacingVerticalS,
  },
});
