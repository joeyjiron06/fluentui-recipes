import {
  makeStyles,
  mergeClasses,
  Switch,
  tokens,
} from '@fluentui/react-components';
import { useCallback, useState } from 'react';
import { WeatherMoonRegular, WeatherSunnyRegular } from '@fluentui/react-icons';

export default function Component() {
  const styles = useStyles();
  const [checked, setChecked] = useState(false);

  const onChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, [setChecked]);

  return (
    <div className={styles.root} data-checked={checked}>
      <span
        className={mergeClasses(
          styles.label,
          !checked && styles.labelHighlighted,
        )}>
        <WeatherMoonRegular />
      </span>

      <Switch checked={checked} onChange={onChange} />

      <span
        className={mergeClasses(
          styles.label,
          checked && styles.labelHighlighted,
        )}>
        <WeatherSunnyRegular />
      </span>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    '&[data-checked="true"]': {},
  },
  label: {
    color: tokens.colorNeutralForegroundDisabled,
  },
  labelHighlighted: {
    color: tokens.colorNeutralForeground1,
  },
});
