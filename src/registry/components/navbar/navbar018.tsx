import {
  Button,
  makeStyles,
  tokens,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Tab,
  TabList,
  type SelectTabEvent,
  type SelectTabData,
} from '@fluentui/react-components';
import { useState } from 'react';
import {
  ChevronUpDownRegular,
  ArrowUploadRegular,
  SparkleRegular,
} from '@fluentui/react-icons';

const teams = ['Acme Inc.', 'coss.com', 'Junon'];

export default function Component() {
  const styles = useStyles();

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <TeamSwitcher teams={teams} defaultTeam={teams[0]} />
        </div>

        <AppToggle />

        <div className={styles.rightSection}>
          <Button
            appearance='transparent'
            icon={<ArrowUploadRegular />}
            className={styles.actionButton}>
            <span className={styles.actionLabel}>Export</span>
          </Button>
          <Button
            appearance='primary'
            icon={<SparkleRegular />}
            className={styles.actionButton}>
            <span className={styles.actionLabel}>Upgrade</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function TeamSwitcher({ teams, defaultTeam }: { teams: string[]; defaultTeam: string }) {
  const styles = useStyles();
  const [selected, setSelected] = useState(defaultTeam);

  return (
    <Menu positioning='below-start'>
      <MenuTrigger disableButtonEnhancement>
        <Button appearance='transparent' className={styles.teamButton}>
          <span className={styles.teamBadge}>{selected.charAt(0).toUpperCase()}</span>
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

export function AppToggle() {
  const [value, setValue] = useState('wireframe');
  return (
    <TabList
      selectedValue={value}
      onTabSelect={(_e: SelectTabEvent, data: SelectTabData) =>
        setValue(data.value as string)
      }
      appearance='subtle'
      size='small'>
      <Tab value='sitemap'>Sitemap</Tab>
      <Tab value='wireframe'>Wireframe</Tab>
    </TabList>
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
    flex: 1,
    alignItems: 'center',
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
  rightSection: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: tokens.spacingHorizontalS,
  },
  actionButton: {
    minWidth: 0,
  },
  actionLabel: {
    display: 'none',
    '@media (min-width: 1023px)': {
      display: 'inline',
    },
  },
});
