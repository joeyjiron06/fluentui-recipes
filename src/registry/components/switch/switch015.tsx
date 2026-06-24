import {
  makeStyles,
  mergeClasses,
  Switch,
  tokens,
} from '@fluentui/react-components';
import { useCallback, useState } from 'react';

// wide segmented On/Off text toggle with sliding thumb
export default function Component() {
  const styles = useStyles();
  const [checked, setChecked] = useState(true);

  const onChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, [setChecked]);

  return (
    <div className={styles.root} data-checked={checked}>
      <Switch
        className={styles.switch}
        checked={checked}
        onChange={onChange}
        aria-label='Toggle on or off'
        indicator={
          <div
            className={mergeClasses(styles.thumb, 'fui-Switch__thumb')}></div>
        }
      />
      <span
        className={mergeClasses(styles.label, !checked && styles.labelActive)}>
        Off
      </span>
      <span
        className={mergeClasses(styles.label, checked && styles.labelActive)}>
        On
      </span>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    height: '2.25rem',
    '&[data-checked="true"] .fui-Switch__thumb': {
      transform: 'translateX(100%)',
    },
  },
  switch: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    '& .fui-Switch__indicator': {
      width: '100%',
      height: '100%',
      margin: 0,
      padding: '2px',
      border: 'none',
      borderRadius: tokens.borderRadiusMedium,
      backgroundColor: tokens.colorNeutralBackground6,
    },
    '& input': {
      width: '100%',
      height: '100%',
    },
  },
  thumb: {
    width: '50%',
    height: '100%',
    boxSizing: 'border-box',
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow2,
    transition: `transform ${tokens.durationNormal} ${tokens.curveEasyEase}`,
  },
  label: {
    position: 'relative',
    zIndex: 10,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '2.5rem',
    padding: `0 ${tokens.spacingHorizontalS}`,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightMedium,
    textTransform: 'uppercase',
    color: tokens.colorNeutralForegroundDisabled,
    transition: `color ${tokens.durationNormal} ${tokens.curveEasyEase}`,
  },
  labelActive: {
    color: tokens.colorNeutralForeground1,
  },
});
