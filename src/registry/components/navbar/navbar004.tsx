import {
  Button,
  makeStyles,
  tokens,
  Link,
  Input,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItemLink,
  MenuDivider,
  MenuItem,
} from '@fluentui/react-components';
import { breakpoints } from '@/theme';
import { NavigationFilled, SearchRegular } from '@fluentui/react-icons';

const navigationLinks = [
  { href: '/products', label: 'Products' },
  { href: '/categories', label: 'Categories' },
  { href: '/deals', label: 'Deals' },
];

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
                <MenuDivider />
                <MenuItemLink href='/signin'>Sign In</MenuItemLink>
                <MenuItem>Cart (2)</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>

          <div className={styles.mainNav}>
            <a href='/' className={styles.logoLink}>
              <Logo />
            </a>

            <div className={styles.navLinks}>
              {navigationLinks.map((link) => (
                <Link appearance='subtle' href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>

            <Input
              className={styles.search}
              contentBefore={<SearchRegular />}
              placeholder='Search...'
              type='search'
              size='small'
            />
          </div>
        </div>

        <div className={styles.rightSection}>
          <Button appearance='transparent' style={{ minWidth: 0 }}>Sign In</Button>
          <Button appearance='primary'>
            Cart <span className={styles.cartCount}>2</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <svg
      width='18'
      height='30'
      viewBox='0 0 18 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ height: '30px', width: 'auto' }}>
      <path
        d='M8.17362 0.673779L0.678882 4.86611C0.259079 5.10094 0 5.53796 0 6.01127V24.2645C0 24.7378 0.25908 25.1748 0.678882 25.4096L7.83414 29.4121C8.28326 29.6633 8.84208 29.3459 8.84208 28.8395V20.0839L16.6606 15.7105C17.1131 15.4573 17.1131 14.8185 16.6606 14.5653L8.84208 10.1919L16.6606 5.81844C17.1131 5.56528 17.1131 4.92645 16.6606 4.67328L9.51054 0.673779C9.09635 0.442074 8.58781 0.442074 8.17362 0.673779Z'
        fill='currentColor'
      />
    </svg>
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
    flex: 1,
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
  },
  mainNav: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
    justifyContent: 'space-between',
    [breakpoints.lg]: {
      justifyContent: 'flex-start',
    },
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'none',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
    [breakpoints.lg]: {
      display: 'flex',
    },
  },
  search: {
    display: 'inline-flex',
  },
  rightSection: {
    display: 'none',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    [breakpoints.lg]: {
      display: 'flex',
    },
  },
  cartCount: {
    marginLeft: tokens.spacingHorizontalXS,
    opacity: 0.7,
    fontSize: tokens.fontSizeBase200,
  },
});
