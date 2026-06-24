import { makeStyles, Switch } from '@fluentui/react-components';
import { WeatherMoonRegular, WeatherSunnyRegular } from '@fluentui/react-icons';
import { useCallback, useMemo, useState } from 'react';

export default function Component() {
  const [checked, setChecked] = useState(false);
  const styles = useStyles();

  const label = useMemo(
    () => (checked ? <WeatherSunnyRegular /> : <WeatherMoonRegular />),
    [checked],
  );
  const onChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, [setChecked]);

  return (
    <Switch
      className={styles.switch}
      checked={checked}
      onChange={onChange}
      label={label}
    />
  );
}

const useStyles = makeStyles({
  switch: {
    alignItems: 'center',
    '& .fui-Label': {
      padding: 0,
      lineHeight: 0,
    },
  },
});
