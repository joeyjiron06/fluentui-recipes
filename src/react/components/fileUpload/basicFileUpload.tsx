import { Badge, Button, Caption1, makeStyles, tokens } from "@fluentui/react-components";
import { PersonCircleRegular } from "@fluentui/react-icons";


const useStyles = makeStyles({
  basicFileUpload: {
display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'

  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingHorizontalM,
  }
})

export default function BasicFileUpload() {
  const styles = useStyles();

  return (
    <div className={styles.basicFileUpload}>
      <div className={styles.actions}>
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
