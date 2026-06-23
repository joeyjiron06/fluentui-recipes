import {
  Avatar,
  Button,
  makeStyles,
  tokens,
  Text,
  Tooltip,
} from '@fluentui/react-components';
import {
  ChevronLeft16Regular,
  History16Regular,
  Comment16Regular,
  PersonAdd16Regular,
} from '@fluentui/react-icons';

const onlineUsers = [
  { name: 'Kelly King', status: 'available' as const },
  { name: 'Martha Johnson', status: 'offline' as const },
  { name: 'Linda Green', status: 'offline' as const },
];

export default function Component() {
  const styles = useStyles();

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Button
            as='a'
            href='#'
            appearance='subtle'
            icon={<ChevronLeft16Regular />}
            aria-label='Go back'
          />
          <Text weight='medium' size={300}>
            Basic UI
          </Text>
        </div>

        <div className={styles.rightSection}>
          <Tooltip content='History' relationship='label'>
            <Button appearance='transparent' shape='circular' icon={<History16Regular />} aria-label='History' />
          </Tooltip>
          <Tooltip content='Comments' relationship='label'>
            <Button appearance='transparent' shape='circular' icon={<Comment16Regular />} aria-label='Comments' />
          </Tooltip>
          <Tooltip content='Add user' relationship='label'>
            <Button appearance='transparent' shape='circular' icon={<PersonAdd16Regular />} aria-label='Add user' />
          </Tooltip>

          <div className={styles.avatars}>
            {onlineUsers.map((user, index) => (
              <Avatar
                key={user.name}
                name={user.name}
                badge={{ status: user.status }}
                image={{ src: 'https://i.pravatar.cc/100?u=' + encodeURIComponent(user.name) }}
                className={index > 0 ? styles.extraAvatar : undefined}
              />
            ))}
            <Button shape='circular' appearance='secondary' size='small' className={styles.more}>
              +3
            </Button>
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
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  avatars: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    marginLeft: tokens.spacingHorizontalS,
  },
  more: {
    minWidth: '32px',
  },
  extraAvatar: {
    display: 'none',
    '@media (min-width: 479px)': {
      display: 'inline-block',
    },
  },
});
