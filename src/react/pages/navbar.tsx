import ComponentsLayout from '../layouts/componentsLayout';
import ComponentPreview from '../components/componentPreview';
import Navbar001 from '../components/navbar/navbar-001';
import Navbar001Code from '../components/navbar/navbar-001?raw';
import Navbar002 from '../components/navbar/navbar-002';
import Navbar002Code from '../components/navbar/navbar-002?raw';
import Navbar003 from '../components/navbar/navbar-003';
import Navbar003Code from '../components/navbar/navbar-003?raw';
import Navbar004 from '../components/navbar/navbar-004';
import Navbar004Code from '../components/navbar/navbar-004?raw';
import Navbar005 from '../components/navbar/navbar-005';
import Navbar005Code from '../components/navbar/navbar-005?raw';
import { Divider, makeStyles, tokens } from '@fluentui/react-components';

type Props = {
  title: string;
  description: string;
};

export default function NavbarPage({ title, description }: Props) {
  const styles = useStyles();
  return (
    <ComponentsLayout title={title} description={description}>
      <ComponentPreview
        size='lg'
        code={Navbar001Code}
        className={styles.componentPreview}>
        <Navbar001 />
      </ComponentPreview>

      <Divider style={{ gridColumn: 'span 12 / span 12' }}></Divider>

      <ComponentPreview
        size='lg'
        code={Navbar002Code}
        className={styles.componentPreview}>
        <Navbar002 />
      </ComponentPreview>

      <Divider style={{ gridColumn: 'span 12 / span 12' }}></Divider>

      <ComponentPreview
        size='lg'
        code={Navbar003Code}
        className={styles.componentPreview}>
        <Navbar003 />
      </ComponentPreview>

      <Divider style={{ gridColumn: 'span 12 / span 12' }}></Divider>

      <ComponentPreview
        size='lg'
        code={Navbar004Code}
        className={styles.componentPreview}>
        <Navbar004 />
      </ComponentPreview>

      <Divider style={{ gridColumn: 'span 12 / span 12' }}></Divider>

      <ComponentPreview
        size='lg'
        code={Navbar005Code}
        className={styles.componentPreview}>
        <Navbar005 />
      </ComponentPreview>
    </ComponentsLayout>
  );
}

const useStyles = makeStyles({
  componentPreview: {
    paddingInline: tokens.spacingHorizontalXS,
  },
});
