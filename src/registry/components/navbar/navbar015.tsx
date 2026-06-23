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
  MenuDivider,
  MenuGroup,
  MenuGroupHeader,
  Text,
  Dropdown,
  Option,
} from '@fluentui/react-components';
import {
  BotRegular,
  Chat16Regular,
  SettingsRegular,
  SignOutRegular,
  PersonEditRegular,
} from '@fluentui/react-icons';

const models = [
  { value: 'orion-alpha-45', label: 'Orion-Alpha 4.5', desc: 'Balanced performance and creativity' },
  { value: 'orion-code-4', label: 'Orion-Code 4', desc: 'Optimized for code generation and understanding' },
  { value: 'nova-chat-4', label: 'Nova-Chat 4', desc: 'Excels at natural, engaging conversations' },
  { value: 'galaxy-max-4', label: 'Galaxy-Max 4', desc: 'Most powerful model for complex tasks' },
];

export default function Component() {
  const styles = useStyles();

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Dropdown
            aria-label='Select AI model'
            defaultValue='Orion-Alpha 4.5'
            defaultSelectedOptions={['orion-alpha-45']}
            button={{ icon: <BotRegular /> }}
            className={styles.modelDropdown}
            listbox={{ className: styles.modelListbox }}>
            <OptionGroupModels />
          </Dropdown>
        </div>

        <div className={styles.rightSection}>
          <Button
            appearance='transparent'
            shape='circular'
            icon={<Chat16Regular />}
            aria-label='Temporary chat'
          />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}

function OptionGroupModels() {
  const styles = useStyles();
  return (
    <>
      {models.map((m) => (
        <Option key={m.value} value={m.value} text={m.label}>
          <div className={styles.modelOption}>
            <Text size={300}>{m.label}</Text>
            <Text size={200} className={styles.muted}>
              {m.desc}
            </Text>
          </div>
        </Option>
      ))}
    </>
  );
}

export function UserMenu() {
  return (
    <Menu positioning='below-end'>
      <MenuTrigger disableButtonEnhancement>
        <Button appearance='transparent' style={{ padding: 0, minWidth: 0 }}>
          <Avatar name='Keith Kennedy' image={{ src: 'https://i.pravatar.cc/100' }} />
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
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  modelDropdown: {
    minWidth: '220px',
  },
  modelListbox: {
    maxWidth: '320px',
  },
  modelOption: {
    display: 'flex',
    flexDirection: 'column',
  },
  muted: {
    color: tokens.colorNeutralForeground3,
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
});
