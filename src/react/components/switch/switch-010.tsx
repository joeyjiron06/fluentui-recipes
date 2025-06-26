import {
  Body1,
  Body1Strong,
  Caption1,
  Card,
  Label,
  makeStyles,
  Switch,
  tokens,
} from '@fluentui/react-components';
import { useId } from 'react';

// small switch
export default function Component() {
  const styles = useStyles();
  const id = useId();
  return (
    <Card className={styles.root}>
      <div className={styles.contents}>
        <Label htmlFor={id}>
          <Body1Strong>Label</Body1Strong>
          <Caption1>(Sublabel)</Caption1>
        </Label>
        <Body1 id={`${id}-description`}>A short description goes here.</Body1>
      </div>
      <Switch
        className={styles.switch}
        id={id}
        aria-describedby={`${id}-description`}
      />
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    gap: tokens.spacingHorizontalM,
    position: 'relative',
    border: 'solid 1px transparent',
    ':has(input:checked)': {
      'border-color': tokens.colorNeutralStroke1,
    },
  },
  switch: {
    flexShrink: 0,
    position: 'static',

    '& .fui-Switch__indicator': {
      width: '2rem',
      height: '1rem',
    },
    '& .fui-Switch__indicator svg': {
      width: 'auto',
      height: '100%',
      aspectRatio: '1 / 1',
    },
    '&:has(input:checked) .fui-Switch__indicator svg': {
      transform: 'translateX(1rem)',
    },

    '& input': {
      position: 'static',
    },
    '& input:after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: 10,
    },
  },
  contents: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: tokens.spacingVerticalXS,
    flexGrow: 1,
  },
});
