import {
  makeStyles,
  mergeClasses,
  Switch,
  tokens,
} from '@fluentui/react-components';
import { WeatherMoonRegular, WeatherSunnyRegular } from '@fluentui/react-icons';
import { useCallback, useState } from 'react';

export default function Component() {
  const [checked, setChecked] = useState(false);
  const styles = useStyles();

  const onChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, [setChecked]);

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={styles.switch}
      indicator={
        <div className={mergeClasses(styles.indicator)} data-checked={checked}>
          <WeatherSunnyRegular
            className={mergeClasses(
              styles.lightModeIcon,
              'fui-Switch__lightIcon',
            )}
          />

          <WeatherMoonRegular
            className={mergeClasses(
              styles.darkModeIcon,
              'fui-Switch__darkIcon',
            )}
          />

          <div
            className={mergeClasses(styles.thumb, 'fui-Switch__thumb')}></div>
        </div>
      }
    />
  );
}

const useStyles = makeStyles({
  switch: {
    '&:has(input:disabled) .fui-Switch__thumb': {
      backgroundColor: tokens.colorNeutralForegroundDisabled,
    },
  },
  indicator: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',

    '&[data-checked="false"]': {
      '& .fui-Switch__darkIcon': {
        translate: '0',
        opacity: 1,
      },

      '& .fui-Switch__lightIcon': {
        translate: '50% 0',
        opacity: 0,
      },
      '& .fui-Switch__thumb': {
        backgroundColor: tokens.colorNeutralStrokeAccessible,
      },
    },

    '&[data-checked="true"]': {
      transform: 'none !important',

      '& .fui-Switch__thumb': {
        left: 'calc(100% - 0.9rem - 1px)',
        backgroundColor: tokens.colorNeutralForegroundInverted,
      },

      '& .fui-Switch__darkIcon': {
        translate: '-50% 0',
        opacity: 0,
      },

      '& .fui-Switch__lightIcon': {
        translate: '0 0',
        opacity: 1,
      },
    },
  },

  lightModeIcon: {
    position: 'absolute',
    top: 0,
    left: '0.125rem',
    zIndex: 5,
    transition: `all ${tokens.durationNormal} ${tokens.curveEasyEase}`,
  },
  darkModeIcon: {
    position: 'absolute',
    top: 0,
    right: '0.125rem',
    zIndex: 5,
    transition: `all ${tokens.durationNormal} ${tokens.curveEasyEase}`,
  },
  thumb: {
    width: '0.9rem',
    height: '0.9rem',
    position: 'absolute',
    top: '50%',
    translate: '0 -50%',
    left: '1px',
    zIndex: 10,
    transition: `all ${tokens.durationNormal} ${tokens.curveEasyEase}`,
    boxSizing: 'border-box',
    borderRadius: tokens.borderRadiusCircular,
  },
});
