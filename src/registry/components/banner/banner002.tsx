import {
  Link,
  MessageBar,
  MessageBarBody,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { ArrowRightRegular } from '@fluentui/react-icons';

export default function Component() {
  const styles = useStyles();

  return (
    <MessageBar className={styles.banner} icon={null}>
      <MessageBarBody className={styles.body}>
        <Link className={styles.link} href='#'>
          <span aria-hidden>✨</span>
          Introducing transactional and marketing emails
          <ArrowRightRegular className={styles.arrow} fontSize={16} />
        </Link>
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
    fontSize: tokens.fontSizeBase200,
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    fontSize: tokens.fontSizeBase200,
    ':hover .fui-arrow': {
      transform: 'translateX(2px)',
    },
  },
  arrow: {
    opacity: 0.6,
    transition: `transform ${tokens.durationNormal} ${tokens.curveEasyEase}`,
  },
});
