'use client';

import {
  Button,
  makeStyles,
  tokens,
  Tab,
  TabList,
  type SelectTabEvent,
  type SelectTabData,
  Badge,
  Switch,
  Label,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItemLink,
} from '@fluentui/react-components';
import { useId, useState } from 'react';
import { breakpoints } from '@/theme';
import {
  NavigationFilled,
  FlashRegular,
  ClockRegular,
} from '@fluentui/react-icons';

const navigationLinks = [
  { href: '/overview', label: 'Overview' },
  { href: '/graphs', label: 'Graphs' },
  { href: '/backups', label: 'Backups' },
];

export default function Component() {
  const styles = useStyles();
  const id = useId();
  const [selected, setSelected] = useState('/overview');
  const [checked, setChecked] = useState(true);

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
          <div className={styles.badges}>
            <Badge appearance='outline' color='success'>
              <span className={styles.onlineDot} />
              Online
            </Badge>
            <Badge
              appearance='outline'
              color='informative'
              icon={<FlashRegular />}>
              99.9%
            </Badge>
            <Badge
              appearance='outline'
              color='informative'
              icon={<ClockRegular />}>
              45ms
            </Badge>
          </div>

          <div className={styles.power}>
            <Switch
              id={id}
              checked={checked}
              onChange={(_e, data) => setChecked(data.checked)}
            />
            <Label htmlFor={id} className={styles.srOnly}>
              Power
            </Label>
          </div>
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
    height: '100%',
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
    gap: tokens.spacingHorizontalL,
  },
  badges: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  onlineBadge: {
    color: tokens.colorPaletteGreenForeground1,
  },
  onlineDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: tokens.colorStatusSuccessBackground3,
    marginRight: tokens.spacingHorizontalXS,
  },
  power: {
    display: 'flex',
    alignItems: 'center',
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
  },
});
