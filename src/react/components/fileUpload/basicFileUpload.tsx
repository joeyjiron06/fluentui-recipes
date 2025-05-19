import { Badge, Button, Caption1 } from "@fluentui/react-components";
import { PersonCircleRegular } from "@fluentui/react-icons";

import "./basicFileUpload.css";

export default function BasicFileUpload() {
  return (
    <div className="basic-file-upload">
      <div className="basic-file-upload-actions">
        <Badge
          appearance="outline"
          color="informative"
          shape="rounded"
          size="extra-large"
          icon={<PersonCircleRegular />}
        ></Badge>
        <Button appearance="primary">Upload image</Button>
      </div>

      <Caption1>Basic image uploader</Caption1>
    </div>
  );
}
