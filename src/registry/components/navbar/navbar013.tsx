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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
} from '@fluentui/react-components';
import { useState } from 'react';
import { breakpoints } from '@/theme';
import {
  NavigationFilled,
  SettingsRegular,
  Settings16Regular,
  SignOutRegular,
  PersonEditRegular,
  ChevronUpDown16Regular,
  MoreHorizontal16Regular,
} from '@fluentui/react-icons';

const navigationLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/docs', label: 'Docs' },
  { href: '/api', label: 'API reference' },
];

const accountTypes = ['Personal', 'Team', 'Business'];
const projects = ['Main project', 'Origin project'];

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

          <Breadcrumb>
            <BreadcrumbItem>
              <SelectMenu
                aria-label='Select account type'
                options={accountTypes}
                collapsible
              />
            </BreadcrumbItem>
            <BreadcrumbDivider />
            <BreadcrumbItem>
              <SelectMenu aria-label='Select project' options={projects} />
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.navGroup}>
            <div className={styles.navLinks}>
              {navigationLinks.map((link) => (
                <Link appearance='subtle' href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            <SettingsMenu />
          </div>
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}

export function SelectMenu({
  options,
  'aria-label': ariaLabel,
  collapsible = false,
}: {
  options: string[];
  'aria-label': string;
  collapsible?: boolean;
}) {
  const styles = useStyles();
  const [selected, setSelected] = useState(options[0]);

  return (
    <Menu positioning='below-start'>
      <MenuTrigger disableButtonEnhancement>
        {collapsible ? (
          <Button
            appearance='subtle'
            aria-label={ariaLabel}
            className={styles.collapsibleButton}>
            <MoreHorizontal16Regular className={styles.dotsIcon} />
            <span className={styles.collapsibleLabel}>{selected}</span>
            <ChevronUpDown16Regular className={styles.collapsibleChevron} />
          </Button>
        ) : (
          <Button
            appearance='subtle'
            aria-label={ariaLabel}
            icon={<ChevronUpDown16Regular />}
            iconPosition='after'>
            {selected}
          </Button>
        )}
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {options.map((option) => (
            <MenuItem key={option} onClick={() => setSelected(option)}>
              {option}
            </MenuItem>
          ))}
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
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
  },
  navGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  navLinks: {
    display: 'none',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
    [breakpoints.lg]: {
      display: 'flex',
    },
  },
  collapsibleButton: {
    minWidth: 0,
  },
  dotsIcon: {
    display: 'inline-flex',
    [breakpoints.md]: {
      display: 'none',
    },
  },
  collapsibleLabel: {
    display: 'none',
    [breakpoints.md]: {
      display: 'inline',
    },
  },
  collapsibleChevron: {
    display: 'none',
    [breakpoints.md]: {
      display: 'inline-flex',
      marginLeft: tokens.spacingHorizontalXS,
    },
  },
});
