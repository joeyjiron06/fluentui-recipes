import { Checkbox, makeStyles, tokens } from '@fluentui/react-components';

export default function Component() {
  const styles = useStyles();
  return (
    <div className={styles.group}>
      <Checkbox label='React' />
      <Checkbox label='Next.js' />
      <Checkbox label='Astro' />
    </div>
  );
}

const useStyles = makeStyles({
  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
});
