import { Checkbox, makeStyles, tokens } from '@fluentui/react-components';

export default function Component() {
  const styles = useStyles();
  return (
    <Checkbox
      className={styles.checkbox}
      defaultChecked
      label='Colored checkbox'
    />
  );
}

const useStyles = makeStyles({
  checkbox: {
    '&:has(input:checked) .fui-Checkbox__indicator': {
      backgroundColor: tokens.colorPalettePurpleBorderActive,
      'border-color': tokens.colorPalettePurpleBorderActive,
      color: tokens.colorNeutralForegroundInverted,
    },
  },
});
