import {
  Badge,
  Button,
  Caption1,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { ArrowUploadFilled, AttachFilled } from '@fluentui/react-icons';
import {
  useCallback,
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
} from 'react';

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

  const fileName = files && files[0].name;
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

  return {
    files,
    getInputProps,
    clearFiles,
    openFileDialog,
  };
}
