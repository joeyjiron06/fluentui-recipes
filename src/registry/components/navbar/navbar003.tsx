import {
  Button,
  makeStyles,
  tokens,
  Tab,
  TabList,
  type SelectTabEvent,
  type SelectTabData,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItemLink,
} from '@fluentui/react-components';
import { useState, useCallback } from 'react';
import { breakpoints } from '@/theme';
import { NavigationFilled } from '@fluentui/react-icons';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export default function Component() {
  const styles = useStyles();
  const [selected, setSelected] = useState('/');

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
                {navigationLinks.map((link) => (
                  <MenuItemLink key={link.href} href={link.href}>
                    {link.label}
                  </MenuItemLink>
                ))}
              </MenuList>
            </MenuPopover>
          </Menu>

          <a href='/' className={styles.logoLink}>
            <Logo />
          </a>

          <TabList
            className={styles.tabs}
            selectedValue={selected}
            onTabSelect={(_e: SelectTabEvent, data: SelectTabData) =>
              setSelected(data.value as string)
            }>
            {navigationLinks.map((link) => (
              <Tab key={link.href} value={link.href}>
                {link.label}
              </Tab>
            ))}
          </TabList>
        </div>

        <div className={styles.rightSection}>
          <Button
            onClick={handleSignIn}
            appearance='transparent'
            style={{ minWidth: 0 }}
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
  menu: {
    display: 'block',
    [breakpoints.lg]: {
      display: 'none',
    },
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
    height: '100%',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  tabs: {
    display: 'none',
    [breakpoints.lg]: {
      display: 'flex',
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
