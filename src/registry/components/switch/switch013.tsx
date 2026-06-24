import {
  makeStyles,
  mergeClasses,
  Switch,
  tokens,
} from '@fluentui/react-components';

// M2-style thin-track switch with overhanging thumb
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
      width: '2.25rem',
      height: '0.5rem',
      border: 'none',
      overflow: 'visible',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: tokens.colorNeutralBackground6,
    },
    '&:has(input:checked) .fui-Switch__indicator': {
      backgroundColor: tokens.colorBrandBackground2,
    },
    '&:has(input:checked) .fui-Switch__thumb': {
      transform: 'translateX(20px)',
      backgroundColor: tokens.colorBrandBackground,
      'border-color': tokens.colorBrandBackground,
    },
  },
  indicator: {
    width: '1.25rem',
    height: '1.25rem',
    marginLeft: '-2px',
    boxSizing: 'border-box',
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow4,
    transition: `background-color ${tokens.durationNormal} ${tokens.curveEasyEase}, transform ${tokens.durationNormal} ${tokens.curveEasyEase}`,
  },
});
