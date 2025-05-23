import Fluent2Logo from '../icons/fluent';
import {
  Badge,
  Body1Strong,
  makeStyles,
  mergeClasses,
  tokens,
} from '@fluentui/react-components';

export default function Header() {
  const styles = useStyles();
  return (
    <header className={styles.root}>
      <div className={mergeClasses('container', styles.container)}>
        <div className={styles.logoContainer}>
          <a href='/' aria-label='home'>
            {<Fluent2Logo className={styles.logo} color='black' />}
          </a>

          <div className={styles.divider}></div>

          <div className={styles.titleContainer}>
            <Body1Strong>Recipes</Body1Strong>

            <Badge size='small'>unofficial</Badge>
          </div>
        </div>

        <div>right side</div>
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
});
