import { Checkbox, makeStyles } from '@fluentui/react-components';

export default function Component() {
  const styles = useStyles();
  return (
    <Checkbox
      className={styles.checkbox}
      labelPosition='before'
      label='Right aligned checkbox'
    />
  );
}

const useStyles = makeStyles({
  checkbox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
});
