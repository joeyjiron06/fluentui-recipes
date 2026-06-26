import { Checkbox, makeStyles } from '@fluentui/react-components';

export default function Component() {
  const styles = useStyles();
  return (
    <Checkbox
      className={styles.checkbox}
      defaultChecked
      label='Simple todo item'
    />
  );
}

const useStyles = makeStyles({
  checkbox: {
    '&:has(input:checked) .fui-Checkbox__label': {
      textDecorationLine: 'line-through',
    },
  },
});
