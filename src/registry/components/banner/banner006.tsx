import {
  Button,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { DismissRegular, EyeRegular } from '@fluentui/react-icons';
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
        It&lsquo;s live and ready to use! Start exploring the latest addition to
        your toolkit.
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
        <Button appearance='primary' size='small'>
          Download
        </Button>
        <Button appearance='outline' size='small'>
          Learn more
        </Button>
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
});
