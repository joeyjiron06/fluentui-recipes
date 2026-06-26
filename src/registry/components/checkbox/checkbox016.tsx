import {
  Caption1,
  Checkbox,
  Label,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { useId } from 'react';

export default function Component() {
  const styles = useStyles();
  const id = useId();
  const descId = `${id}-description`;
  return (
    <div className={styles.card}>
      <Checkbox className={styles.checkbox} id={id} aria-describedby={descId} />
      <div className={styles.content}>
        <svg
          aria-hidden='true'
          className={styles.logo}
          height={32}
          width={32}
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='16' cy='16' fill='#121212' r='16' />
          <g clipPath='url(#sb-a)'>
            <path
              d='M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z'
              fill='url(#sb-b)'
            />
            <path
              d='M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z'
              fill='url(#sb-c)'
              fillOpacity='.2'
            />
            <path
              d='M14.375 6.367c.506-.638 1.532-.289 1.544.525l.078 11.903H8.094c-1.45 0-2.258-1.674-1.357-2.81l7.638-9.618Z'
              fill='#3ECF8E'
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits='userSpaceOnUse'
              id='sb-b'
              x1='15.907'
              x2='23.02'
              y1='15.73'
              y2='18.713'>
              <stop stopColor='#249361' />
              <stop offset='1' stopColor='#3ECF8E' />
            </linearGradient>
            <linearGradient
              gradientUnits='userSpaceOnUse'
              id='sb-c'
              x1='12.753'
              x2='15.997'
              y1='11.412'
              y2='17.519'>
              <stop />
              <stop offset='1' stopOpacity='0' />
            </linearGradient>
            <clipPath id='sb-a'>
              <path d='M6.354 6h19.292v20H6.354z' fill='#fff' />
            </clipPath>
          </defs>
        </svg>
        <div className={styles.text}>
          <Label htmlFor={id}>
            Label <span className={styles.sublabel}>(Sublabel)</span>
          </Label>
          <Caption1 id={descId} className={styles.description}>
            A short description goes here.
          </Caption1>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  card: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    gap: tokens.spacingHorizontalS,
    width: '100%',
    padding: tokens.spacingHorizontalL,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow2,
    '&:has(input:checked)': {
      'border-color': tokens.colorBrandStroke1,
    },
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
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    flexGrow: 1,
  },
  logo: {
    flexShrink: 0,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  sublabel: {
    color: tokens.colorNeutralForeground3,
    fontWeight: tokens.fontWeightRegular,
  },
  description: {
    color: tokens.colorNeutralForeground3,
  },
});
