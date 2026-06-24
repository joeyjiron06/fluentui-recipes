import { makeStyles, Switch, tokens } from '@fluentui/react-components';

export default function Component() {
  const styles = useStyles();
  return <Switch className={styles.switch} />;
}

const useStyles = makeStyles({
  switch: {
    '&:has(input:enabled:not(checked)) .fui-Switch__indicator': {
      backgroundColor: tokens.colorNeutralBackground6,
      'border-color': `transparent !important`,
    },
  },
});
