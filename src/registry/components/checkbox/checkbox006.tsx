import { Checkbox, makeStyles, tokens } from '@fluentui/react-components';

export default function Component() {
  const styles = useStyles();
  return (
    <Checkbox
      className={styles.checkbox}
      defaultChecked
      label='Fancy todo item'
    />
  );
}

const useStyles = makeStyles({
  checkbox: {
    '& .fui-Checkbox__indicator': {
      borderRadius: tokens.borderRadiusCircular,
    },
    '&:has(input:checked) .fui-Checkbox__indicator': {
      backgroundColor: tokens.colorPaletteGreenBackground3,
      'border-color': tokens.colorPaletteGreenBackground3,
      color: tokens.colorNeutralForegroundInverted,
    },
    '& .fui-Checkbox__label': {
      position: 'relative',
      color: tokens.colorNeutralForeground1,
      transition: `color ${tokens.durationNormal} ${tokens.curveEasyEase}`,
    },
    '& .fui-Checkbox__label::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: 0,
      height: '1px',
      width: '100%',
      backgroundColor: tokens.colorNeutralForeground3,
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: `transform ${tokens.durationNormal} ${tokens.curveEasyEase}`,
    },
    '&:has(input:checked) .fui-Checkbox__label': {
      color: tokens.colorNeutralForeground3,
    },
    '&:has(input:checked) .fui-Checkbox__label::after': {
      transform: 'scaleX(1)',
    },
  },
});
