import {
  makeStyles,
  mergeClasses,
  Switch,
  tokens,
} from '@fluentui/react-components';
import { WeatherMoonRegular, WeatherSunnyRegular } from '@fluentui/react-icons';
import { useCallback, useState } from 'react';

// wide segmented dark/light toggle with fully rounded edges
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
        aria-label='Toggle between dark and light mode'
        indicator={
          <div
            className={mergeClasses(styles.thumb, 'fui-Switch__thumb')}></div>
        }
      />
      <span
        className={mergeClasses(styles.icon, !checked && styles.iconActive)}>
        <WeatherMoonRegular />
      </span>
      <span className={mergeClasses(styles.icon, checked && styles.iconActive)}>
        <WeatherSunnyRegular />
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
      borderRadius: tokens.borderRadiusCircular,
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
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow2,
    transition: `transform ${tokens.durationNormal} ${tokens.curveEasyEase}`,
  },
  icon: {
    position: 'relative',
    zIndex: 10,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '2rem',
    color: tokens.colorNeutralForegroundDisabled,
    transition: `color ${tokens.durationNormal} ${tokens.curveEasyEase}`,
  },
  iconActive: {
    color: tokens.colorNeutralForeground1,
  },
});
