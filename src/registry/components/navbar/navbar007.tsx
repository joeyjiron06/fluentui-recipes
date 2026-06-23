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
  MenuDivider,
  MenuGroup,
  MenuGroupHeader,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  Popover,
  PopoverTrigger,
  PopoverSurface,
} from '@fluentui/react-components';
import { useState } from 'react';
import { breakpoints } from '@/theme';
import {
  Alert16Regular,
  SettingsRegular,
  SignOutRegular,
  PersonEditRegular,
  ChevronUpDown16Regular,
} from '@fluentui/react-icons';

export default function Component() {
  const styles = useStyles();

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <a href='/' className={styles.logoLink}>
            <Logo />
          </a>
          <Breadcrumb>
            <BreadcrumbItem className={styles.hideOnMobile}>
              <BreadcrumbButton href='#'>Personal Account</BreadcrumbButton>
            </BreadcrumbItem>
            <BreadcrumbDivider className={styles.hideOnMobile} />
            <BreadcrumbItem className={styles.hideOnMobile}>
              <BreadcrumbButton href='#'>Projects</BreadcrumbButton>
            </BreadcrumbItem>
            <BreadcrumbDivider />
            <BreadcrumbItem>
              <ProjectMenu />
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className={styles.rightSection}>
          <NotificationMenu />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}

const projects = ['Main project', 'Origin project'];

export function ProjectMenu() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <Menu positioning='below-start'>
      <MenuTrigger disableButtonEnhancement>
        <Button
          appearance='subtle'
          aria-label='Select project'
          icon={<ChevronUpDown16Regular />}
          iconPosition='after'>
          {selectedProject}
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {projects.map((project) => (
            <MenuItem key={project} onClick={() => setSelectedProject(project)}>
              {project}
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
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  hideOnMobile: {
    display: 'none',
    [breakpoints.lg]: {
      display: 'inline-flex',
    },
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
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
