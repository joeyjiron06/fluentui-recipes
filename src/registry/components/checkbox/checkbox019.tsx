import { Checkbox, makeStyles, tokens } from '@fluentui/react-components';
import { useId } from 'react';

export default function Component() {
  const styles = useStyles();
  const id = useId();

  const items = [
    { defaultChecked: true, label: 'Monday', value: '1' },
    { defaultChecked: true, label: 'Tuesday', value: '2' },
    { label: 'Wednesday', value: '3' },
    { defaultChecked: true, label: 'Thursday', value: '4' },
    { defaultChecked: true, label: 'Friday', value: '5' },
    { label: 'Saturday', value: '6' },
    { disabled: true, label: 'Sunday', value: '7' },
  ];

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Days of the week</legend>
      <div className={styles.days}>
        {items.map((item) => {
          const itemId = `${id}-${item.value}`;
          return (
            <label className={styles.day} htmlFor={itemId} key={itemId}>
              <Checkbox
                className={styles.srOnly}
                defaultChecked={item.defaultChecked}
                disabled={item.disabled}
                id={itemId}
                value={item.value}
              />
              <span aria-hidden='true' className={styles.letter}>
                {item.label[0]}
              </span>
              <span className={styles.srOnly}>{item.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

const useStyles = makeStyles({
  fieldset: {
    border: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
  },
  legend: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightMedium,
    color: tokens.colorNeutralForeground1,
  },
  days: {
    display: 'flex',
    gap: tokens.spacingHorizontalXS,
  },
  day: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.25rem',
    height: '2.25rem',
    borderRadius: tokens.borderRadiusCircular,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow2,
    cursor: 'pointer',
    transition: `background-color ${tokens.durationNormal} ${tokens.curveEasyEase}, color ${tokens.durationNormal} ${tokens.curveEasyEase}, border-color ${tokens.durationNormal} ${tokens.curveEasyEase}`,
    '&:has(input:checked)': {
      backgroundColor: tokens.colorBrandBackground,
      color: tokens.colorNeutralForegroundOnBrand,
      'border-color': tokens.colorBrandBackground,
    },
    '&:has(input:disabled)': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
  letter: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightMedium,
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  },
});
