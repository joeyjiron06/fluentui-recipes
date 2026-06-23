import {
  Button,
  Caption1,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  makeStyles,
  mergeClasses,
  Slider,
  tokens,
} from '@fluentui/react-components';
import {
  ArrowLeftRegular,
  DismissFilled,
  PersonCircleRegular,
  ZoomInRegular,
  ZoomOutRegular,
} from '@fluentui/react-icons';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type DragEvent,
  type ChangeEvent,
  type InputHTMLAttributes,
} from 'react';

type Area = { x: number; y: number; width: number; height: number };

async function getCroppedImg(
  imageSrc: string,
  cropArea: Area,
  zoom: number,
): Promise<Blob | null> {
  return new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(null);
        return;
      }

      const outputSize = 256;
      canvas.width = outputSize;
      canvas.height = outputSize;

      // Calculate crop based on zoom
      const cropWidth = image.width / zoom;
      const cropHeight = image.height / zoom;
      const cropX = (image.width - cropWidth) / 2;
      const cropY = (image.height - cropHeight) / 2;

      ctx.drawImage(
        image,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        outputSize,
        outputSize,
      );

      canvas.toBlob((blob) => resolve(blob), 'image/jpeg', 0.9);
    };
    image.onerror = () => resolve(null);
    image.src = imageSrc;
  });
}

export default function Component() {
  const styles = useStyles();

  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [finalImageUrl, setFinalImageUrl] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState(1);

  const processFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setZoom(1);
    setIsDialogOpen(true);
  }, []);

  const fileChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) processFile(file);
      if (inputRef.current) inputRef.current.value = '';
    },
    [processFile],
  );

  const openFileDialog = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleDragEnter = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) processFile(file);
    },
    [processFile],
  );

  const handleApply = useCallback(async () => {
    if (!previewUrl) return;

    const blob = await getCroppedImg(
      previewUrl,
      { x: 0, y: 0, width: 256, height: 256 },
      zoom,
    );
    if (blob) {
      if (finalImageUrl) URL.revokeObjectURL(finalImageUrl);
      setFinalImageUrl(URL.createObjectURL(blob));
    }

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setIsDialogOpen(false);
  }, [previewUrl, zoom, finalImageUrl]);

  const handleCancel = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setIsDialogOpen(false);
  }, [previewUrl]);

  const handleRemove = useCallback(() => {
    if (finalImageUrl) URL.revokeObjectURL(finalImageUrl);
    setFinalImageUrl(null);
  }, [finalImageUrl]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      if (finalImageUrl) URL.revokeObjectURL(finalImageUrl);
    };
  }, []);

  const getInputProps =
    useCallback((): InputHTMLAttributes<HTMLInputElement> => {
      return {
        type: 'file',
        accept: 'image/*',
        onChange: fileChanged,
        ref: inputRef,
      };
    }, [fileChanged]);

  return (
    <div className={styles.root}>
      <div className={styles.avatarWrapper}>
        <button
          className={mergeClasses(
            styles.dropZone,
            isDragging && styles.dropZoneDragging,
            !!finalImageUrl && styles.dropZoneWithImage,
          )}
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          type='button'
          aria-label={finalImageUrl ? 'Change image' : 'Upload image'}>
          {finalImageUrl ? (
            <img
              src={finalImageUrl}
              alt='User avatar'
              className={styles.avatarImage}
            />
          ) : (
            <PersonCircleRegular className={styles.avatarPlaceholder} />
          )}
        </button>

        {finalImageUrl && (
          <Button
            appearance='primary'
            shape='circular'
            size='small'
            icon={<DismissFilled className={styles.dismissIcon} />}
            className={styles.removeButton}
            onClick={handleRemove}
            aria-label='Remove image'
          />
        )}

        <input {...getInputProps()} hidden />
      </div>

      {/* Crop Dialog */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={(_e, data) => {
          if (!data.open) handleCancel();
        }}>
        <DialogSurface className={styles.dialogSurface}>
          <DialogBody>
            <DialogTitle
              action={
                <Button
                  appearance='primary'
                  onClick={handleApply}
                  disabled={!previewUrl}>
                  Apply
                </Button>
              }>
              <div className={styles.dialogTitleContent}>
                <Button
                  appearance='subtle'
                  icon={<ArrowLeftRegular />}
                  onClick={handleCancel}
                  aria-label='Cancel'
                />
                <span>Crop image</span>
              </div>
            </DialogTitle>

            <DialogContent className={styles.dialogContent}>
              {previewUrl && (
                <div className={styles.cropContainer}>
                  <div className={styles.cropOverlay}>
                    <div className={styles.cropCircle} />
                  </div>
                  <img
                    src={previewUrl}
                    alt='Crop preview'
                    className={styles.cropImage}
                    style={{ transform: `scale(${zoom})` }}
                  />
                </div>
              )}
            </DialogContent>

            <DialogActions className={styles.dialogFooter}>
              <div className={styles.zoomControls}>
                <ZoomOutRegular className={styles.zoomIcon} />
                <Slider
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(_e, data) => setZoom(data.value)}
                  className={styles.zoomSlider}
                  aria-label='Zoom'
                />
                <ZoomInRegular className={styles.zoomIcon} />
              </div>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>

      <Caption1 className={styles.helperText}>
        Avatar uploader with cropper
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
  dialogSurface: {
    maxWidth: '36rem',
  },
  dialogTitleContent: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  dialogContent: {
    padding: '0',
  },
  cropContainer: {
    position: 'relative',
    width: '100%',
    height: '20rem',
    overflow: 'hidden',
    backgroundColor: tokens.colorNeutralBackground3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cropImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    transition: 'transform 0.1s ease-out',
  },
  cropOverlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    pointerEvents: 'none',
  },
  cropCircle: {
    width: '12rem',
    height: '12rem',
    borderRadius: '50%',
    border: `2px solid white`,
    boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
  },
  dialogFooter: {
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
  },
  zoomControls: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    width: '100%',
    maxWidth: '20rem',
    margin: '0 auto',
  },
  zoomSlider: {
    flex: 1,
  },
  zoomIcon: {
    flexShrink: 0,
    opacity: 0.6,
  },
});
