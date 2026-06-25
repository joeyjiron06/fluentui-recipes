import BasicLayout from '../layouts/basicLayout';
import {
  Display,
  Body1Strong,
  Body1Stronger,
  Subtitle2,
  Subtitle1,
  makeStyles,
  tokens,
  Card,
  CardPreview,
  CardFooter,
} from '@fluentui/react-components';
import { breakpoints, customTokens } from '@/theme';
import FluentLogo from '../icons/fluent';
import ReactLogo from '../icons/react';
import FileUploadImg from '../icons/file-upload.png';
import NavbarImg from '../icons/navbar.png';
import SwitchImg from '../icons/switch.png';
import AccordionIcon from '../icons/accordion';

const useStyles = makeStyles({
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: tokens.spacingHorizontalXXXL,
    padding: `${tokens.spacingVerticalXXXL} 0`,
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
    height: tokens.spacingVerticalXXXL,
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
    gridAutoRows: customTokens.containerXs,
    [breakpoints.lg]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },

  categoryCard: {
    height: '100%',

    '& .fui-CardPreview': {
      minHeight: 0,
    },

    '& .fui-CardFooter': {
      flexGrow: 1,
      alignItems: 'flex-end',
    },
  },

  comingSoon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: customTokens.spacing9XL,
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
    title: 'Accordion',
    description: '20 components',
    href: 'accordion',
    image: (
      <AccordionIcon
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
    ),
  },
  {
    title: 'File Upload',
    description: '12 components',
    href: 'file-upload',
    image: (
      <img
        src={FileUploadImg.src}
        width={FileUploadImg.width}
        height={FileUploadImg.height}
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        alt='file upload'
      />
    ),
  },
  {
    title: 'Navbar',
    description: '12 components',
    href: 'navbar',
    image: (
      <img
        src={NavbarImg.src}
        width={NavbarImg.width}
        height={NavbarImg.height}
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        alt='navbar'
      />
    ),
  },
  {
    title: 'Switch',
    description: '12 components',
    href: 'switch',
    image: (
      <img
        src={SwitchImg.src}
        width={SwitchImg.width}
        height={SwitchImg.height}
        alt='switch'
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
    ),
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
            <a href={category.href} key={category.title}>
              <Card className={styles.categoryCard}>
                <CardPreview>{category.image}</CardPreview>

                <CardFooter>
                  <Body1Stronger>{category.title}</Body1Stronger>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>

        <div className={styles.comingSoon}>
          <Body1Stronger>More coming soon</Body1Stronger>
        </div>
      </section>
    </BasicLayout>
  );
}
