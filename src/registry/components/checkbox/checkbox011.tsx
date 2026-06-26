import {
  Caption1,
  Checkbox,
  Label,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { useId } from 'react';

export default function Component() {
  const styles = useStyles();
  const id = useId();
  const descId = `${id}-description`;
  return (
    <div className={styles.root}>
      <Checkbox id={id} aria-describedby={descId} />
      <div className={styles.text}>
        <Label htmlFor={id}>
          Label <span className={styles.sublabel}>(Sublabel)</span>
        </Label>
        <Caption1 id={descId} className={styles.description}>
          You can use this checkbox with a label and a description.
        </Caption1>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: tokens.spacingHorizontalS,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  sublabel: {
    color: tokens.colorNeutralForeground3,
    fontWeight: tokens.fontWeightRegular,
  },
  description: {
    color: tokens.colorNeutralForeground3,
  },
});
