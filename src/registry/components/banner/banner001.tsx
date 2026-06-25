import {
  Button,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  makeStyles,
  tokens,
} from '@fluentui/react-components';

export default function Component() {
  const styles = useStyles();

  return (
    <MessageBar className={styles.banner} icon={null}>
      <MessageBarBody className={styles.body}>
        We use cookies to improve your experience, analyze site usage, and show
        personalized content.
      </MessageBarBody>
      <MessageBarActions>
        <Button appearance='primary' size='small'>
          Accept
        </Button>
        <Button appearance='outline' size='small'>
          Decline
        </Button>
      </MessageBarActions>
    </MessageBar>
  );
}

const useStyles = makeStyles({
  banner: {
    width: '100%',
    boxShadow: tokens.shadow8,
  },
  body: {
    fontSize: tokens.fontSizeBase200,
  },
});
