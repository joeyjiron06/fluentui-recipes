'use client';

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
  MenuItemLink,
  MenuDivider,
  MenuGroup,
  MenuGroupHeader,
  Text,
  Input,
  Switch,
  Label,
  Popover,
  PopoverTrigger,
  PopoverSurface,
} from '@fluentui/react-components';
import { useId, useState } from 'react';
import { breakpoints } from '@/theme';
import {
  SearchRegular,
  Grid16Regular,
  Info16Regular,
  Alert16Regular,
  Settings16Regular,
  Add16Regular,
  BookRegular,
  PersonSupportRegular,
  ChatRegular,
} from '@fluentui/react-icons';

export default function Component() {
  const styles = useStyles();
  const id = useId();
  const [checked, setChecked] = useState(true);

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Input
            className={styles.search}
            contentBefore={<SearchRegular />}
            placeholder='Search...'
            type='search'
          />
        </div>

        <div className={styles.rightSection}>
          <div className={styles.testMode}>
            <Label htmlFor={`switch-${id}`} weight='semibold'>
              Test mode
            </Label>
            <Switch
              id={`switch-${id}`}
              checked={checked}
              onChange={(_e, data) => setChecked(data.checked)}
              aria-label='Toggle test mode'
            />
          </div>

          <div className={styles.iconGroup}>
            <Button
              appearance='subtle'
              shape='circular'
              icon={<Grid16Regular />}
              aria-label='Open layout menu'
            />
            <InfoMenu />
            <NotificationMenu />
            <SettingsMenu />
          </div>

          <Button
            appearance='primary'
            shape='circular'
            icon={<Add16Regular />}
            aria-label='Add new item'
          />
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

export function SettingsMenu() {
  return (
    <Menu positioning='below-end'>
      <MenuTrigger disableButtonEnhancement>
        <Button
          appearance='subtle'
          shape='circular'
          icon={<Settings16Regular />}
          aria-label='Settings'
        />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem>Appearance</MenuItem>
          <MenuItem>Preferences</MenuItem>
          <MenuItem>API Settings</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

const initialNotifications = [
  { id: 1, user: 'Chris Tompson', action: 'requested review on', target: 'PR #42', timestamp: '15 minutes ago', unread: true },
  { id: 2, user: 'Emma Davis', action: 'shared', target: 'New component library', timestamp: '45 minutes ago', unread: true },
  { id: 3, user: 'James Wilson', action: 'assigned you to', target: 'API integration task', timestamp: '4 hours ago', unread: false },
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
                setNotifications(notifications.map((n) => ({ ...n, unread: false })))
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
                      x.id === n.id ? { ...x, unread: false } : x
                    )
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
    flex: 1,
    minWidth: 0,
  },
  search: {
    width: '100%',
    maxWidth: '320px',
    minWidth: 0,
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
    flexShrink: 0,
  },
  testMode: {
    display: 'none',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    [breakpoints.lg]: {
      display: 'inline-flex',
    },
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
