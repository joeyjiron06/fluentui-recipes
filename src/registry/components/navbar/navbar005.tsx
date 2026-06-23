import {
  Avatar,
  Button,
  makeStyles,
  tokens,
  Link,
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
  Popover,
  PopoverTrigger,
  PopoverSurface,
} from '@fluentui/react-components';
import { useState } from 'react';
import { breakpoints } from '@/theme';
import {
  NavigationFilled,
  Info16Regular,
  Alert16Regular,
  BookRegular,
  PersonSupportRegular,
  ChatRegular,
  SettingsRegular,
  LayerRegular,
  BookOpenRegular,
  PinRegular,
  PersonEditRegular,
  SignOutRegular,
} from '@fluentui/react-icons';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

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
                  <MenuItemLink key={link.href} href={link.href}>
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
            <div className={styles.navLinks}>
              {navigationLinks.map((link) => (
                <Link appearance='subtle' href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.iconGroup}>
            <InfoMenu />
            <NotificationMenu />
          </div>
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}

export function InfoMenu() {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button
          appearance='subtle'
          shape='circular'
          icon={<Info16Regular />}
          aria-label='Help menu'
        />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuGroup>
            <MenuGroupHeader>Need help?</MenuGroupHeader>
            <MenuItemLink href='#' icon={<BookRegular />}>
              Documentation
            </MenuItemLink>
            <MenuItemLink href='#' icon={<PersonSupportRegular />}>
              Support
            </MenuItemLink>
            <MenuItemLink href='#' icon={<ChatRegular />}>
              Contact us
            </MenuItemLink>
          </MenuGroup>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

const initialNotifications = [
  {
    id: 1,
    user: 'Chris Tompson',
    action: 'requested review on',
    target: 'PR #42',
    timestamp: '15 minutes ago',
    unread: true,
  },
  {
    id: 2,
    user: 'Emma Davis',
    action: 'shared',
    target: 'New component library',
    timestamp: '45 minutes ago',
    unread: true,
  },
  {
    id: 3,
    user: 'James Wilson',
    action: 'assigned you to',
    target: 'API integration task',
    timestamp: '4 hours ago',
    unread: false,
  },
  {
    id: 4,
    user: 'Alex Morgan',
    action: 'replied to your comment in',
    target: 'Authentication flow',
    timestamp: '12 hours ago',
    unread: false,
  },
  {
    id: 5,
    user: 'Sarah Chen',
    action: 'commented on',
    target: 'Dashboard redesign',
    timestamp: '2 days ago',
    unread: false,
  },
];

export function NotificationMenu() {
  const styles = useStyles();
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <Popover positioning='below-end' withArrow>
      <PopoverTrigger disableButtonEnhancement>
        <div className={styles.notificationButton}>
          <Button
            appearance='subtle'
            shape='circular'
            icon={<Alert16Regular />}
            aria-label='Open notifications'></Button>
          {unreadCount > 0 && <span className={styles.notificationDot} />}
        </div>
      </PopoverTrigger>
      <PopoverSurface className={styles.notificationSurface}>
        <div className={styles.notificationHeader}>
          <Text weight='semibold'>Notifications</Text>
          {unreadCount > 0 && (
            <Link
              as='button'
              onClick={() =>
                setNotifications(
                  notifications.map((n) => ({ ...n, unread: false })),
                )
              }>
              Mark all as read
            </Link>
          )}
        </div>
        <MenuDivider />
        {notifications.map((n) => (
          <div key={n.id} className={styles.notificationItem}>
            <div style={{ flex: 1 }}>
              <Link
                as='button'
                style={{ textAlign: 'left' }}
                onClick={() =>
                  setNotifications(
                    notifications.map((x) =>
                      x.id === n.id ? { ...x, unread: false } : x,
                    ),
                  )
                }>
                <Text size={200}>
                  <Text weight='semibold' size={200}>
                    {n.user}
                  </Text>{' '}
                  {n.action}{' '}
                  <Text weight='semibold' size={200}>
                    {n.target}
                  </Text>
                  .
                </Text>
              </Link>
              <div>
                <Text size={100} className={styles.muted}>
                  {n.timestamp}
                </Text>
              </div>
            </div>
            {n.unread && <span className={styles.unreadDot} />}
          </div>
        ))}
      </PopoverSurface>
    </Popover>
  );
}

export function UserMenu() {
  return (
    <Menu positioning='below-end'>
      <MenuTrigger disableButtonEnhancement>
        <Button
          appearance='transparent'
          className='userMenuTrigger'
          style={{ padding: 0, minWidth: 0 }}>
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
          <MenuItem icon={<LayerRegular />}>Workspaces</MenuItem>
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
  navLinks: {
    display: 'none',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
    [breakpoints.lg]: {
      display: 'flex',
    },
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
  },
  iconGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  notificationButton: {
    position: 'relative',
    minWidth: 0,
  },
  notificationDot: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: tokens.colorBrandBackground,
    zIndex: 1,
  },
  notificationSurface: {
    width: '320px',
    padding: tokens.spacingVerticalXS,
  },
  notificationHeader: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
  },
  notificationItem: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    borderRadius: tokens.borderRadiusMedium,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  muted: {
    color: tokens.colorNeutralForeground3,
  },
  unreadDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: tokens.colorBrandBackground,
    flexShrink: 0,
    marginTop: '6px',
  },
});
