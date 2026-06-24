import { Switch } from '@fluentui/react-components';
import { useCallback, useMemo, useState } from 'react';

export default function Component() {
  const [checked, setChecked] = useState(false);

  const label = useMemo(() => (checked ? 'On' : 'Off'), [checked]);
  const onChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, [setChecked]);

  return <Switch checked={checked} onChange={onChange} label={label} />;
}
