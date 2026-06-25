import {
  Link,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { ArrowRightRegular, EyeRegular } from '@fluentui/react-icons';

export default function Component() {
  const styles = useStyles();

  return (
    <MessageBar
      className={styles.banner}
      icon={<EyeRegular className={styles.icon} />}>
      <MessageBarBody className={styles.body}>
        We just added something awesome to make your experience even better.
      </MessageBarBody>
      <MessageBarActions>
        <Link className={styles.link} href='#'>
          Learn more
          <ArrowRightRegular className={styles.arrow} fontSize={16} />
        </Link>
      </MessageBarActions>
    </MessageBar>
  );
}

const useStyles = makeStyles({
  banner: {
    width: '100%',
  },
  body: {
    fontSize: tokens.fontSizeBase200,
  },
  icon: {
    opacity: 0.6,
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    whiteSpace: 'nowrap',
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightMedium,
  },
  arrow: {
    opacity: 0.6,
  },
});
