import {
  makeStyles,
  mergeClasses,
  Switch,
  tokens,
} from '@fluentui/react-components';

export default function Component() {
  const styles = useStyles();
  return (
    <Switch
      className={styles.switch}
      indicator={
        <div
          className={mergeClasses(styles.indicator, 'fui-Switch__thumb')}></div>
      }
    />
  );
}

const useStyles = makeStyles({
  switch: {
    '& .fui-Switch__indicator': {
      borderRadius: tokens.borderRadiusLarge,
      display: 'flex',
      alignItems: 'center',
      padding: '0 1px',
    },
    '&:has(input:checked) .fui-Switch__thumb': {
      transform: 'translateX(20px)',
      backgroundColor: tokens.colorNeutralForegroundInverted,
    },
  },
  indicator: {
    width: '1rem',
    height: '1rem',
    borderRadius: tokens.borderRadiusLarge,
    backgroundColor: tokens.colorNeutralStrokeAccessible,
    transition: `background-color ${tokens.durationNormal} ${tokens.curveEasyEase}, transform ${tokens.durationNormal} ${tokens.curveEasyEase}`,
  },
});
