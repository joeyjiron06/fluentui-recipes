import { makeStyles, tokens } from '@fluentui/react-components';

const year = new Date().getFullYear();

export default function Footer() {
  const styles = useStyles();
  return (
    <footer className={styles.root}>
      <span>
        © {year}{' '}
        <a href='https://joeyjiron.com' className={styles.footerLink}>
          Joey Jiron
        </a>{' '}
        . All rights reserved.
      </span>
    </footer>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${tokens.spacingVerticalXXXL} 0`,
    margin: `${tokens.spacingVerticalXXXL} 0`,
  },
  footerLink: {
    textDecoration: 'underline',
  },
});
