import {
  Avatar,
  Button,
  makeStyles,
  tokens,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuItemLink,
  MenuDivider,
  MenuGroup,
  MenuGroupHeader,
  Text,
  Tooltip,
  ToggleButton,
  Dropdown,
  Option,
} from '@fluentui/react-components';
import { useState } from 'react';
import { breakpoints } from '@/theme';
import {
  NavigationFilled,
  Home16Regular,
  LayerRegular,
  DocumentText16Regular,
  People16Regular,
  WeatherMoon16Regular,
  WeatherSunny16Regular,
  SettingsRegular,
  BookOpenRegular,
  PinRegular,
  PersonEditRegular,
  SignOutRegular,
} from '@fluentui/react-icons';

const navigationLinks = [
  { href: '/', icon: <Home16Regular />, label: 'Dashboard' },
  { href: '/projects', icon: <LayerRegular />, label: 'Projects' },
  { href: '/docs', icon: <DocumentText16Regular />, label: 'Documentation' },
  { href: '/team', icon: <People16Regular />, label: 'Team' },
];

const languages = ['En', 'Es', 'Fr', 'De', 'Ja'];

export default function Component() {
  const styles = useStyles();

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
                  <MenuItemLink
                    key={link.href}
                    href={link.href}
                    icon={link.icon}>
                    {link.label}
                  </MenuItemLink>
                ))}
              </MenuList>
            </MenuPopover>
          </Menu>

          <div className={styles.mainNav}>
            <a href='/' className={styles.logoLink}>
              <Logo />
            </a>
            <div className={styles.iconNav}>
              {navigationLinks.map((link) => (
                <Tooltip
                  key={link.href}
                  content={link.label}
                  relationship='label'
                  positioning='below'>
                  <Button
                    as='a'
                    href={link.href}
                    appearance='subtle'
                    icon={link.icon}
                  />
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <ThemeToggle />
          <Dropdown
            aria-label='Select language'
            defaultValue='En'
            defaultSelectedOptions={['En']}
            className={styles.langDropdown}>
            {languages.map((lang) => (
              <Option key={lang} text={lang}>
                {lang}
              </Option>
            ))}
          </Dropdown>
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <Tooltip
      content={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      relationship='label'>
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

export function UserMenu() {
  return (
    <Menu positioning='below-end'>
      <MenuTrigger disableButtonEnhancement>
        <Button appearance='transparent' style={{ padding: 0, minWidth: 0 }}>
          <Avatar
            name='Keith Kennedy'
            image={{ src: 'https://i.pravatar.cc/100' }}
          />
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuGroup>
            <MenuGroupHeader>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Text weight='semibold' size={200}>
                  Keith Kennedy
                </Text>
                <Text size={100}>k.kennedy@coss.com</Text>
              </div>
            </MenuGroupHeader>
          </MenuGroup>
          <MenuDivider />
          <MenuItem icon={<SettingsRegular />}>Settings</MenuItem>
          <MenuItem icon={<BookOpenRegular />}>Knowledge base</MenuItem>
          <MenuDivider />
          <MenuItem icon={<PinRegular />}>Pinned</MenuItem>
          <MenuItem icon={<PersonEditRegular />}>Edit profile</MenuItem>
          <MenuDivider />
          <MenuItem icon={<SignOutRegular />}>Logout</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
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
    flex: 1,
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
  },
  mainNav: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  iconNav: {
    display: 'none',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    [breakpoints.lg]: {
      display: 'flex',
    },
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  langDropdown: {
    minWidth: '72px',
    border: 'none',
    '::after': {
      display: 'none',
    },
  },
});
