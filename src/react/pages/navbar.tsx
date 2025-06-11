import ComponentsLayout from '../layouts/componentsLayout';
import ComponentPreview from '../components/componentPreview';
import Navbar001 from '../components/navbar/navbar-001';
import Navbar001Code from '../components/navbar/navbar-001?raw';
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
    </ComponentsLayout>
  );
}

const useStyles = makeStyles({
  componentPreview: {
    paddingInline: tokens.spacingHorizontalXS,
  },
});
