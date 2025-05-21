import {
  Badge,
  Button,
  Caption1,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { ArrowUploadFilled, AttachFilled } from "@fluentui/react-icons";
import { useCallback, useRef, useState, type ChangeEvent } from "react";

export default function Component() {
  const styles = useStyles();
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
    [setFiles]
  );

  const buttonClicked = useCallback(() => {
    const input = inputRef.current;

    if (!input) {
      return;
    }

    if (!input.value) {
      input.click();
    } else {
      input.value = "";
      setFiles(undefined);
    }
  }, []);

  const fileName = files && files[0].name;
  const hasFile = !!fileName;

  return (
    <div className={styles.fileUpload}>
      <label className={styles.actions}>
        <input
          ref={inputRef}
          type="file"
          hidden
          name="my-file"
          onChange={fileChanged}
        />
        <Badge
          appearance="outline"
          color="informative"
          shape="rounded"
          size="extra-large"
          icon={hasFile ? <AttachFilled /> : <ArrowUploadFilled />}
        ></Badge>
        <Button appearance="primary" onClick={buttonClicked}>
          {hasFile ? "Remove file" : "Upload file"}
        </Button>
      </label>

      <Caption1>{fileName ?? "Basic file uploader"}</Caption1>
    </div>
  );
}

const useStyles = makeStyles({
  fileUpload: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingHorizontalM,
  },
});
