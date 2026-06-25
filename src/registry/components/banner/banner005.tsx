import {
  Button,
  Link,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import {
  ArrowRightRegular,
  DismissRegular,
  EyeRegular,
} from '@fluentui/react-icons';
import { useState } from 'react';

export default function Component() {
  const styles = useStyles();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <MessageBar
      className={styles.banner}
      icon={<EyeRegular className={styles.icon} />}>
      <MessageBarBody className={styles.body}>
        We just added something awesome to make your experience even better.
      </MessageBarBody>
      <MessageBarActions
        containerAction={
          <Button
            appearance='transparent'
            size='small'
            icon={<DismissRegular />}
            aria-label='Close banner'
            onClick={() => setIsVisible(false)}
          />
        }>
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
