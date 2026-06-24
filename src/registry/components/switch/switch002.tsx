import { makeStyles, Switch } from '@fluentui/react-components';

// small switch
export default function Component() {
  const styles = useStyles();
  return <Switch className={styles.switch} />;
}

const useStyles = makeStyles({
  switch: {
    '& .fui-Switch__indicator': {
      width: '2rem',
      height: '1rem',
    },
    '& .fui-Switch__indicator svg': {
      width: 'auto',
      height: '100%',
      aspectRatio: '1 / 1',
    },
    '&:has(input:checked) .fui-Switch__indicator svg': {
      transform: 'translateX(1rem)',
    },
  },
});
