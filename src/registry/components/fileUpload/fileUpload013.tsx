import {
  Body1Strong,
  Button,
  Caption1,
  makeStyles,
  mergeClasses,
  ProgressBar,
  tokens,
} from '@fluentui/react-components';
import {
  ArrowUpload16Regular,
  Delete16Regular,
  DismissRegular,
  Document20Regular,
  ErrorCircleRegular,
  FolderZipRegular,
  ImageRegular,
  MusicNote2Regular,
  VideoRegular,
} from '@fluentui/react-icons';
import { useCallback, useRef, useState } from 'react';
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

type UploadProgress = {
  fileId: string;
  progress: number;
  completed: boolean;
};

function simulateUpload(
  totalBytes: number,
  onProgress: (progress: number) => void,
  onComplete: () => void,
): () => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  let uploadedBytes = 0;
  let lastProgressReport = 0;

  const simulateChunk = () => {
    const chunkSize = Math.floor(Math.random() * 300000) + 2000;
    uploadedBytes = Math.min(totalBytes, uploadedBytes + chunkSize);

    const progressPercent = Math.floor((uploadedBytes / totalBytes) * 100);

    if (progressPercent > lastProgressReport) {
      lastProgressReport = progressPercent;
      onProgress(progressPercent);
    }

    if (uploadedBytes < totalBytes) {
      const delay = Math.floor(Math.random() * 450) + 50;
      const extraDelay = Math.random() < 0.05 ? 500 : 0;
      timeoutId = setTimeout(simulateChunk, delay + extraDelay);
    } else {
      onComplete();
    }
  };

  timeoutId = setTimeout(simulateChunk, 100);

  return () => {
    if (timeoutId) clearTimeout(timeoutId);
  };
}

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

  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);
  const cleanupRef = useRef<Array<() => void>>([]);

  const handleFilesAdded = useCallback((addedFiles: FileWithPreview[]) => {
    const newProgressItems = addedFiles.map((file) => ({
      fileId: file.id,
      progress: 0,
      completed: false,
    }));

    setUploadProgress((prev) => [...prev, ...newProgressItems]);

    for (const file of addedFiles) {
      const fileSize =
        file.file instanceof File ? file.file.size : file.file.size;

      const cleanup = simulateUpload(
        fileSize,
        (progress) => {
          setUploadProgress((prev) =>
            prev.map((item) =>
              item.fileId === file.id ? { ...item, progress } : item,
            ),
          );
        },
        () => {
          setUploadProgress((prev) =>
            prev.map((item) =>
              item.fileId === file.id ? { ...item, completed: true } : item,
            ),
          );
        },
      );
      cleanupRef.current.push(cleanup);
    }
  }, []);

  const handleFileRemoved = useCallback((fileId: string) => {
    setUploadProgress((prev) => prev.filter((item) => item.fileId !== fileId));
  }, []);

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
  } = useFileUpload({
    maxFiles,
    maxSize,
    multiple: true,
    initialFiles,
    onFilesAdded: handleFilesAdded,
  });

  const uploadButtonClicked = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();
      openFileDialog();
    },
    [openFileDialog],
  );

  const clearAllClicked = useCallback(() => {
    cleanupRef.current.forEach((fn) => fn());
    cleanupRef.current = [];
    setUploadProgress([]);
    clearFiles();
  }, [clearFiles]);

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
                  onClick={clearAllClicked}>
                  Remove all
                </Button>
              </div>
            </div>

            <div className={styles.fileList}>
              {files.map((file) => {
                const fileProgress = uploadProgress.find(
                  (p) => p.fileId === file.id,
                );
                const isUploading = fileProgress && !fileProgress.completed;

                return (
                  <div
                    key={file.id}
                    className={mergeClasses(
                      styles.fileCard,
                      isUploading && styles.fileCardUploading,
                    )}>
                    <div className={styles.fileCardRow}>
                      <div className={styles.fileCardInfo}>
                        <div className={styles.fileIconContainer}>
                          {getFileIcon(file)}
                        </div>
                        <div className={styles.fileNameContainer}>
                          <Caption1 className={styles.fileName}>
                            {file.file.name}
                          </Caption1>
                          <Caption1 className={styles.fileSize}>
                            {formatBytes(file.file.size)}
                          </Caption1>
                        </div>
                      </div>
                      <Button
                        appearance='transparent'
                        size='small'
                        className={styles.closeButton}
                        onClick={() => {
                          handleFileRemoved(file.id);
                          removeFile(file.id);
                        }}
                        aria-label={`Remove ${file.file.name}`}>
                        <DismissRegular />
                      </Button>
                    </div>

                    {isUploading && (
                      <div className={styles.progressRow}>
                        <ProgressBar
                          value={fileProgress.progress / 100}
                          className={styles.progressBar}
                        />
                        <Caption1 className={styles.progressText}>
                          {fileProgress.progress}%
                        </Caption1>
                      </div>
                    )}
                  </div>
                );
              })}
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
              Select files
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
        File upload with simulated progress
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
  fileList: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
    width: '100%',
  },
  fileCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    padding: tokens.spacingHorizontalS,
  },
  fileCardUploading: {
    opacity: 0.85,
  },
  closeButton: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    padding: `0 ${tokens.spacingHorizontalXS}`,
    minWidth: '0',
  },
  fileCardRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: tokens.spacingHorizontalS,
  },
  fileCardInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    minWidth: 0,
    flex: 1,
  },
  fileIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.5rem',
    height: '2.5rem',
    flexShrink: 0,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    color: tokens.colorNeutralForeground3,
  },
  fileNameContainer: {
    display: 'flex',
    flexDirection: 'column',
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
  progressRow: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    marginTop: tokens.spacingVerticalXS,
  },
  progressBar: {
    flex: 1,
  },
  progressText: {
    width: '2.5rem',
    textAlign: 'right',
    color: tokens.colorNeutralForeground3,
    fontVariantNumeric: 'tabular-nums',
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
