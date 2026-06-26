import {
  Checkbox,
  Label,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import {
  ColorRegular,
  CutRegular,
  EraserRegular,
  PaintBrushRegular,
} from '@fluentui/react-icons';
import { useId } from 'react';

export default function Component() {
  const styles = useStyles();
  const id = useId();

  const items = [
    { defaultChecked: true, Icon: ColorRegular, label: 'Palette', value: '1' },
    { Icon: PaintBrushRegular, label: 'Brush', value: '2' },
    { Icon: EraserRegular, label: 'Eraser', value: '3' },
    { Icon: CutRegular, label: 'Cut', value: '4' },
  ];

  return (
    <div className={styles.grid}>
      {items.map((item) => {
        const itemId = `${id}-${item.value}`;
        return (
          <div className={styles.card} key={itemId}>
            <div className={styles.header}>
              <Checkbox
                className={styles.checkbox}
                defaultChecked={item.defaultChecked}
                id={itemId}
                value={item.value}
              />
              <item.Icon
                aria-hidden='true'
                className={styles.icon}
                fontSize={16}
              />
            </div>
            <Label htmlFor={itemId}>{item.label}</Label>
          </div>
        );
      })}
    </div>
  );
}

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: tokens.spacingHorizontalM,
  },
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
    padding: tokens.spacingHorizontalL,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow2,
    cursor: 'pointer',
    '&:has(input:checked)': {
      'border-color': tokens.colorBrandStroke1,
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: tokens.spacingHorizontalS,
  },
  checkbox: {
    order: 1,
    position: 'static',
    '& .fui-Checkbox__input': {
      position: 'static',
    },
    '& .fui-Checkbox__input::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: 10,
    },
  },
  icon: {
    color: tokens.colorNeutralForeground3,
  },
});
