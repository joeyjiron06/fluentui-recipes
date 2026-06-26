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
    <div className={styles.card}>
      <Checkbox className={styles.checkbox} id={id} aria-describedby={descId} />
      <div className={styles.text}>
        <Label htmlFor={id}>
          Label <span className={styles.sublabel}>(Sublabel)</span>
        </Label>
        <Caption1 id={descId} className={styles.description}>
          A short description goes here.
        </Caption1>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  card: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    gap: tokens.spacingHorizontalS,
    width: '100%',
    padding: tokens.spacingHorizontalL,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow2,
    '&:has(input:checked)': {
      'border-color': tokens.colorBrandStroke1,
    },
  },
  checkbox: {
    order: 1,
    position: 'static',
    '& .fui-Checkbox__input': {
      position: 'static',
    },
    '& .fui-Checkbox__input::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: 10,
    },
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
    flexGrow: 1,
  },
  sublabel: {
    color: tokens.colorNeutralForeground3,
    fontWeight: tokens.fontWeightRegular,
  },
  description: {
    color: tokens.colorNeutralForeground3,
  },
});
