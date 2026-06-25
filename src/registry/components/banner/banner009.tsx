import {
  Button,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarTitle,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { DismissRegular, RocketRegular } from '@fluentui/react-icons';
import { useState } from 'react';

export default function Component() {
  const styles = useStyles();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <MessageBar
      className={styles.banner}
      icon={
        <span aria-hidden className={styles.iconCircle}>
          <RocketRegular fontSize={16} />
        </span>
      }>
      <MessageBarBody className={styles.body}>
        <MessageBarTitle>Boost your experience with Fluent UI</MessageBarTitle>
        <span className={styles.description}>
          The new feature is live! Try it out and let us know what you think.
        </span>
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
          Try now
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
  iconCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.25rem',
    height: '2.25rem',
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
  },
  description: {
    color: tokens.colorNeutralForeground3,
  },
});
