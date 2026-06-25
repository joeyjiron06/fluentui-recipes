import {
  Link,
  MessageBar,
  MessageBarBody,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { EyeRegular } from '@fluentui/react-icons';

export default function Component() {
  const styles = useStyles();

  return (
    <MessageBar className={styles.banner} icon={null}>
      <MessageBarBody className={styles.body}>
        <EyeRegular className={styles.icon} fontSize={16} />
        <span>
          Get the most out of your app with real-time updates and analytics{' '}
          <span className={styles.dot}>·</span> <Link href='#'>Upgrade</Link>
        </span>
      </MessageBarBody>
    </MessageBar>
  );
}

const useStyles = makeStyles({
  banner: {
    width: '100%',
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.spacingHorizontalS,
    textAlign: 'center',
    fontSize: tokens.fontSizeBase200,
  },
  icon: {
    flexShrink: 0,
    opacity: 0.6,
  },
  dot: {
    color: tokens.colorNeutralForeground3,
  },
});
