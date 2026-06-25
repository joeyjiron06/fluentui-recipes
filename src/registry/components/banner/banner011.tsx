import {
  Link,
  MessageBar,
  MessageBarBody,
  makeStyles,
  tokens,
} from '@fluentui/react-components';

export default function Component() {
  const styles = useStyles();

  return (
    <MessageBar className={styles.banner} icon={null}>
      <MessageBarBody className={styles.body}>
        <span>
          <span aria-hidden className={styles.emoji}>
            📫
          </span>
          Subscribe to our newsletter and get 10% off your first order!{' '}
          <span className={styles.dot}>·</span> <Link href='#'>Subscribe</Link>
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
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: tokens.fontSizeBase200,
  },
  emoji: {
    marginRight: tokens.spacingHorizontalXS,
  },
  dot: {
    color: tokens.colorNeutralForeground3,
  },
});
