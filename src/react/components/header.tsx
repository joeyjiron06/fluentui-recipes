import Fluent2Logo from '../icons/fluent';
import {
  Badge,
  Body1Strong,
  makeStyles,
  mergeClasses,
  tokens,
} from '@fluentui/react-components';
import GithubIcon from '../icons/github';

export default function Header() {
  const styles = useStyles();
  return (
    <header className={styles.root}>
      <div className={mergeClasses('container', styles.container)}>
        <div className={styles.logoContainer}>
          <a href={import.meta.env.BASE_URL} aria-label='home'>
            {<Fluent2Logo className={styles.logo} color='black' />}
          </a>

          <div className={styles.divider}></div>

          <div className={styles.titleContainer}>
            <Body1Strong>Recipes</Body1Strong>

            <Badge size='small'>unofficial</Badge>
          </div>
        </div>

        <div className={styles.links}>
          <a
            href='https://www.buymeacoffee.com/joeyjiron06'
            target='_blank'
            rel='noreferrer'>
            <img
              src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
              alt='Buy Me A Coffee'
              style={{ height: 32, width: 'auto' }}
            />
          </a>

          <a
            href='https://github.com/joeyjiron06/fluentui-recipes'
            target='_blank'
            rel='noreferrer'
            aria-label='github'>
            <GithubIcon className={styles.githubIcon} width={24} height={24} />
          </a>
        </div>
      </div>
    </header>
  );
}

const useStyles = makeStyles({
  root: {
    borderBottom: `solid ${tokens.strokeWidthThin} ${tokens.colorNeutralStroke1}`,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalL}`,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '1.5rem',
    objectFit: 'contain',
    width: 'auto',
  },
  divider: {
    height: 'auto',
    alignSelf: 'stretch',
    width: '1px',
    borderLeft: `solid ${tokens.strokeWidthThin} ${tokens.colorNeutralStroke2}`,
    margin: `0 ${tokens.spacingHorizontalL}`,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
  },
  githubIcon: {
    width: '1.5rem',
    height: '1.5rem',
    color: tokens.colorNeutralForeground2,
    transition: 'color 100ms ease-in-out',

    ':hover': {
      color: tokens.colorBrandBackground,
    },
  },
});
