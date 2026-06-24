import BasicLayout from '../layouts/basicLayout';
import {
  Display,
  Body1Strong,
  Body1Stronger,
  Subtitle2,
  Subtitle1,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { breakpoints, customTokens } from '@/theme';
import FluentLogo from '../icons/fluent';
import ReactLogo from '../icons/react';
import FileUploadImg from '../icons/file-upload.png';
import NavbarImg from '../icons/navbar.png';

const useStyles = makeStyles({
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: tokens.spacingHorizontalXXXL,
    padding: `${customTokens.size320} 0`,
  },
  heroTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingHorizontalXXXL,
    maxWidth: '50rem',
    '& hgroup': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  heroLogosContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXXXL,
  },
  heroLogoReactIconContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  heroLogoReactIcon: {
    height: customTokens.size320,
  },
  componentsSection: {
    '& hgroup': {
      marginBottom: tokens.spacingVerticalXXXL,
    },
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: tokens.spacingHorizontalXXXL,
    alignItems: 'stretch',
    justifyContent: 'stretch',
    [breakpoints.lg]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  categoryCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingHorizontalL,
    borderRadius: tokens.borderRadiusXLarge,
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
    cursor: 'pointer',
  },
  categoryCardImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `solid ${tokens.strokeWidthThin} ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'cover',
    },
  },
  categoryCardText: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingHorizontalXXS,
  },
});

type Category = {
  title: string;
  description: string;
  href: string;
  image: React.ReactNode;
};

const categories: Category[] = [
  {
    title: 'File Upload',
    description: '12 components',
    href: 'file-upload',
    image: <img src={FileUploadImg.src} alt='file upload' />,
  },
  {
    title: 'Navbar',
    description: '12 components',
    href: 'navbar',
    image: <img src={NavbarImg.src} alt='navbar' />,
  },
  {
    title: 'Switch',
    description: '12 components',
    href: 'switch',
    image: <img src={SwitchImg.src} alt='switch' />,
  },
];

export default function Home() {
  const styles = useStyles();
  return (
    <BasicLayout className='container'>
      <section className={styles.hero}>
        <div className={styles.heroTextContainer}>
          <hgroup>
            <Body1Strong>UI BLOCKS WRITTEN IN REACT</Body1Strong>
            <Display as='h1'>
              Beautiful UI components, crafted with Fluent UI
            </Display>
          </hgroup>

          <div className={styles.heroLogosContainer}>
            <FluentLogo />

            <div className={styles.heroLogoReactIconContainer}>
              <ReactLogo className={styles.heroLogoReactIcon} />
              <Body1Stronger>React</Body1Stronger>
            </div>
          </div>

          <Subtitle2>
            Professionally designed, fully responsive, expertly crafted
            component examples that you can copy/paste into your apps built with
            Fluent UI 2 React and customize to your hearts content.
          </Subtitle2>

          <div>{/* <Button appearance='primary'>Read Docs</Button> */}</div>
        </div>

        <div></div>
      </section>

      <section className={styles.componentsSection}>
        <hgroup>
          <Subtitle1 as='h2'>Components</Subtitle1>
        </hgroup>
        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <a
              href={category.href}
              key={category.title}
              className={styles.categoryCard}>
              <div className={styles.categoryCardImage}>{category.image}</div>
              <div className={styles.categoryCardText}>
                <Body1Stronger>{category.title}</Body1Stronger>
                {/* <Caption1>{category.description}</Caption1> */}
              </div>
            </a>
          ))}

          <span className={styles.categoryCard}>
            <div
              className={styles.categoryCardImage}
              style={{ flexGrow: 1, marginBottom: '3.25rem' }}>
              More coming soon
            </div>

            <div className='category-card-text'>
              <Body1Stronger
                style={{ visibility: 'hidden' }}
                aria-hidden='true'>
                _
              </Body1Stronger>
            </div>
          </span>
        </div>
      </section>
    </BasicLayout>
  );
}
