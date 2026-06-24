import Fluent2Logo from '../icons/fluent';
import {
  Body1Strong,
  Button,
  makeStyles,
  mergeClasses,
  tokens,
} from '@fluentui/react-components';
import { WeatherMoonRegular, WeatherSunnyRegular } from '@fluentui/react-icons';
import GithubIcon from '../icons/github';

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');

  let isDark: boolean;
  if (current === 'dark') {
    isDark = true;
  } else if (current === 'light') {
    isDark = false;
  } else {
    isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  const next = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

export default function Header() {
  const styles = useStyles();
  return (
    <header className={styles.root}>
      <div className={mergeClasses('container', styles.container)}>
        <div className={styles.logoContainer}>
          <a href={import.meta.env.BASE_URL} aria-label='home'>
            {<Fluent2Logo className={styles.logo} />}
          </a>

          <div className={styles.divider}></div>

          <div className={styles.titleContainer}>
            <Body1Strong>Recipes</Body1Strong>
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

          <Button
            type='button'
            onClick={toggleTheme}
            aria-label='toggle theme'
            className={styles.themeToggle}
            appearance='subtle'
            shape='circular'
            icon={
              <>
                {/* Both icons are rendered; the global.css file determines which one is visible based on the active color-scheme. */}
                <WeatherSunnyRegular id='light-icon' />
                <WeatherMoonRegular id='dark-icon' />
              </>
            }></Button>
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
  },
  themeToggle: {
    '&:hover svg': {
      color: tokens.colorNeutralForeground1,
    },
  },
});
