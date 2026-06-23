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
  Popover,
  PopoverTrigger,
  PopoverSurface,
  Link,
} from '@fluentui/react-components';
import { useState } from 'react';
import { breakpoints } from '@/theme';
import {
  NavigationFilled,
  Home16Regular,
  CompassNorthwest16Regular,
  Edit16Regular,
  Search16Regular,
  Add16Regular,
  Alert16Regular,
  ChevronUpDownRegular,
  SettingsRegular,
  SignOutRegular,
  PersonEditRegular,
} from '@fluentui/react-icons';

const teams = ['Acme Inc.', 'coss.com', 'Junon'];

const navigationLinks = [
  { href: '/dashboard', icon: <Home16Regular />, label: 'Dashboard' },
  { href: '/explore', icon: <CompassNorthwest16Regular />, label: 'Explore' },
  { href: '/write', icon: <Edit16Regular />, label: 'Write' },
  { href: '/search', icon: <Search16Regular />, label: 'Search' },
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
          <TeamSwitcher teams={teams} defaultTeam={teams[0]} />
        </div>

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

        <div className={styles.rightSection}>
          <Button
            appearance='primary'
            icon={<Add16Regular />}
            className={styles.primaryActionButton}>
            <span className={styles.postLabel}>Post</span>
          </Button>
          <NotificationMenu />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}

export function TeamSwitcher({
  teams,
  defaultTeam,
}: {
  teams: string[];
  defaultTeam: string;
}) {
  const styles = useStyles();
  const [selected, setSelected] = useState(defaultTeam);

  return (
    <Menu positioning='below-start'>
      <MenuTrigger disableButtonEnhancement>
        <Button appearance='transparent' className={styles.teamButton}>
          <span className={styles.teamBadge}>
            {selected.charAt(0).toUpperCase()}
          </span>
          <span>{selected}</span>
          <ChevronUpDownRegular />
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {teams.map((team) => (
            <MenuItem key={team} onClick={() => setSelected(team)}>
              {team}
            </MenuItem>
          ))}
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
            appearance='transparent'
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
          <MenuItem icon={<PersonEditRegular />}>Edit profile</MenuItem>
          <MenuDivider />
          <MenuItem icon={<SignOutRegular />}>Logout</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
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
  teamButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  teamBadge: {
    display: 'flex',
    width: '32px',
    height: '32px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: tokens.spacingHorizontalL,
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
  primaryActionButton: {
    minWidth: 0,
    padding: tokens.spacingHorizontalXXS,
    '& .fui-Button__icon': {
      marginRight: 0,
    },
    [breakpoints.md]: {
      padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalM}`,
      '& .fui-Button__icon': {
        marginRight: 'inherit',
      },
    },
  },
  postLabel: {
    display: 'none',
    [breakpoints.md]: {
      display: 'inline',
    },
  },
});
