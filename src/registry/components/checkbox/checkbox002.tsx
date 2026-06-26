import { Checkbox } from '@fluentui/react-components';
import { useState } from 'react';

export default function Component() {
  const [checked, setChecked] = useState<boolean | 'mixed'>('mixed');

  return (
    <Checkbox
      label='Indeterminate checkbox'
      checked={checked}
      onChange={(_, data) => setChecked(data.checked)}
    />
  );
}
