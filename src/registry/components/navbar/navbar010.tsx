import {
  Button,
  makeStyles,
  tokens,
  Input,
  Tooltip,
  ToggleButton,
} from '@fluentui/react-components';
import { useState } from 'react';
import { breakpoints } from '@/theme';
import {
  SearchRegular,
  Mic16Regular,
  WeatherMoon16Regular,
  WeatherSunny16Regular,
} from '@fluentui/react-icons';

export default function Component() {
  const styles = useStyles();

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logoWrap}>
          <a href='/' className={styles.logoLink}>
            <Logo />
          </a>
        </div>

        <div className={styles.middle}>
          <Input
            className={styles.search}
            contentBefore={<SearchRegular />}
            contentAfter={
              <Button
                appearance='transparent'
                size='small'
                icon={<Mic16Regular />}
                aria-label='Press to speak'
              />
            }
            placeholder='Search...'
            type='search'
          />
        </div>

        <div className={styles.rightSection}>
          <Button appearance='transparent' className={styles.actionButton}>
            Community
          </Button>
          <Button appearance='primary' className={styles.actionButton}>
            Get Started
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <Tooltip content={dark ? 'Switch to light mode' : 'Switch to dark mode'} relationship='label'>
      <ToggleButton
        appearance='subtle'
        shape='circular'
        checked={dark}
        onClick={() => setDark((p) => !p)}
        icon={dark ? <WeatherMoon16Regular /> : <WeatherSunny16Regular />}
        aria-label='Toggle theme'
      />
    </Tooltip>
  );
}

function Logo() {
  return (
    <svg
      width='18'
      height='30'
      viewBox='0 0 18 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ height: '30px', width: 'auto' }}>
      <path
        d='M8.17362 0.673779L0.678882 4.86611C0.259079 5.10094 0 5.53796 0 6.01127V24.2645C0 24.7378 0.25908 25.1748 0.678882 25.4096L7.83414 29.4121C8.28326 29.6633 8.84208 29.3459 8.84208 28.8395V20.0839L16.6606 15.7105C17.1131 15.4573 17.1131 14.8185 16.6606 14.5653L8.84208 10.1919L16.6606 5.81844C17.1131 5.56528 17.1131 4.92645 16.6606 4.67328L9.51054 0.673779C9.09635 0.442074 8.58781 0.442074 8.17362 0.673779Z'
        fill='currentColor'
      />
    </svg>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  container: {
    display: 'flex',
    height: '64px',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: tokens.spacingHorizontalM,
    padding: `0 ${tokens.spacingHorizontalL}`,
  },
  logoWrap: {
    flex: 1,
  },
  logoLink: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  middle: {
    flexGrow: 1,
    display: 'none',
    justifyContent: 'center',
    [breakpoints.md]: {
      display: 'flex',
    },
  },
  search: {
    width: '100%',
    maxWidth: '320px',
  },
  rightSection: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: tokens.spacingHorizontalS,
  },
  actionButton: {
    whiteSpace: 'nowrap',
  },
});
