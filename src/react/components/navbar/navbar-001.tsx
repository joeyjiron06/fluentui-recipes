import {
  Button,
  makeStyles,
  tokens,
  Link,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from '@fluentui/react-components';
import { useCallback } from 'react';
import { breakpoints } from '@/theme';
import { NavigationFilled } from '@fluentui/react-icons';

export default function Component() {
  const styles = useStyles();

  const handleSignIn = useCallback(() => {
    console.log('Sign In clicked');
  }, []);

  const handleGetStarted = useCallback(() => {
    console.log('Get Started clicked');
  }, []);

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Menu positioning={{ autoSize: true }}>
            <MenuTrigger disableButtonEnhancement>
              <Button
                className={styles.menu}
                icon={<NavigationFilled />}
                aria-label='menu'
                appearance='transparent'></Button>
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                <MenuItem className={styles.menuItem}>
                  <Link appearance='subtle' href='/'>
                    Home
                  </Link>
                </MenuItem>
                <MenuItem className={styles.menuItem}>
                  <Link appearance='subtle' href='/features'>
                    Features
                  </Link>
                </MenuItem>
                <MenuItem className={styles.menuItem}>
                  <Link appearance='subtle' href='/pricing'>
                    Pricing
                  </Link>
                </MenuItem>
                <MenuItem className={styles.menuItem}>
                  <Link appearance='subtle' href='/about'>
                    About
                  </Link>
                </MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>

          <a href='/' className={styles.logoLink}>
            <svg
              width='18'
              height='30'
              viewBox='0 0 18 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={styles.logo}>
              <path
                d='M8.17362 0.673779L0.678882 4.86611C0.259079 5.10094 0 5.53796 0 6.01127V24.2645C0 24.7378 0.25908 25.1748 0.678882 25.4096L7.83414 29.4121C8.28326 29.6633 8.84208 29.3459 8.84208 28.8395V20.0839L16.6606 15.7105C17.1131 15.4573 17.1131 14.8185 16.6606 14.5653L8.84208 10.1919L16.6606 5.81844C17.1131 5.56528 17.1131 4.92645 16.6606 4.67328L9.51054 0.673779C9.09635 0.442074 8.58781 0.442074 8.17362 0.673779Z'
                fill='currentColor'
              />
            </svg>
          </a>

          <div className={styles.navLinks}>
            <Link appearance='subtle' href='/'>
              Home
            </Link>
            <Link appearance='subtle' href='/features'>
              Features
            </Link>
            <Link appearance='subtle' href='/pricing'>
              Pricing
            </Link>
            <Link appearance='subtle' href='/about'>
              About
            </Link>
          </div>
        </div>

        <div className={styles.rightSection}>
          <Button
            href='/signin'
            onClick={handleSignIn}
            appearance='transparent'
            className={styles.actionButton}>
            Sign In
          </Button>
          <Button
            appearance='primary'
            onClick={handleGetStarted}
            className={styles.actionButton}>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    padding: `${tokens.spacingVerticalS} 0`,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `0 ${tokens.spacingHorizontalL}`,
  },
  menu: {
    display: 'block',
    [breakpoints.lg]: {
      display: 'none',
    },
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    marginRight: tokens.spacingHorizontalL,
    textDecoration: 'none',
  },
  logo: {
    height: '30px',
    width: 'auto',
  },
  navLinks: {
    display: 'none',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,

    [breakpoints.lg]: {
      display: 'flex',
      gap: tokens.spacingHorizontalL,
    },
  },
  menuItem: {
    padding: 0,

    '& a': {
      display: 'block',
      paddingRight: tokens.spacingVerticalSNudge,
      paddingLeft: tokens.spacingVerticalSNudge,
      paddingTop: tokens.spacingVerticalSNudge,
      paddingBottom: tokens.spacingVerticalSNudge,
    },
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  actionButton: {
    flexShrink: 0,
  },
});
