import { Fragment } from 'react';
import ComponentsLayout from '../layouts/componentsLayout';
import ComponentPreview from '../components/componentPreview';
import { makeStyles, tokens } from '@fluentui/react-components';
import Navbar001 from '@/components/navbar/navbar001';
import Navbar001Code from '@/components/navbar/navbar001?raw';
import Navbar002 from '@/components/navbar/navbar002';
import Navbar002Code from '@/components/navbar/navbar002?raw';
import Navbar003 from '@/components/navbar/navbar003';
import Navbar003Code from '@/components/navbar/navbar003?raw';
import Navbar004 from '@/components/navbar/navbar004';
import Navbar004Code from '@/components/navbar/navbar004?raw';
import Navbar005 from '@/components/navbar/navbar005';
import Navbar005Code from '@/components/navbar/navbar005?raw';
import Navbar006 from '@/components/navbar/navbar006';
import Navbar006Code from '@/components/navbar/navbar006?raw';
import Navbar007 from '@/components/navbar/navbar007';
import Navbar007Code from '@/components/navbar/navbar007?raw';
import Navbar008 from '@/components/navbar/navbar008';
import Navbar008Code from '@/components/navbar/navbar008?raw';
import Navbar009 from '@/components/navbar/navbar009';
import Navbar009Code from '@/components/navbar/navbar009?raw';
import Navbar010 from '@/components/navbar/navbar010';
import Navbar010Code from '@/components/navbar/navbar010?raw';
import Navbar011 from '@/components/navbar/navbar011';
import Navbar011Code from '@/components/navbar/navbar011?raw';
import Navbar012 from '@/components/navbar/navbar012';
import Navbar012Code from '@/components/navbar/navbar012?raw';
import Navbar013 from '@/components/navbar/navbar013';
import Navbar013Code from '@/components/navbar/navbar013?raw';
import Navbar014 from '@/components/navbar/navbar014';
import Navbar014Code from '@/components/navbar/navbar014?raw';
import Navbar015 from '@/components/navbar/navbar015';
import Navbar015Code from '@/components/navbar/navbar015?raw';
import Navbar016 from '@/components/navbar/navbar016';
import Navbar016Code from '@/components/navbar/navbar016?raw';
import Navbar017 from '@/components/navbar/navbar017';
import Navbar017Code from '@/components/navbar/navbar017?raw';
import Navbar018 from '@/components/navbar/navbar018';
import Navbar018Code from '@/components/navbar/navbar018?raw';
import Navbar019 from '@/components/navbar/navbar019';
import Navbar019Code from '@/components/navbar/navbar019?raw';
import Navbar020 from '@/components/navbar/navbar020';
import Navbar020Code from '@/components/navbar/navbar020?raw';

type Props = {
  title: string;
  description: string;
};

const navbars = [
  { name: 'navbar001', Component: Navbar001, code: Navbar001Code },
  { name: 'navbar002', Component: Navbar002, code: Navbar002Code },
  { name: 'navbar003', Component: Navbar003, code: Navbar003Code },
  { name: 'navbar004', Component: Navbar004, code: Navbar004Code },
  { name: 'navbar005', Component: Navbar005, code: Navbar005Code },
  { name: 'navbar006', Component: Navbar006, code: Navbar006Code },
  { name: 'navbar007', Component: Navbar007, code: Navbar007Code },
  { name: 'navbar008', Component: Navbar008, code: Navbar008Code },
  { name: 'navbar009', Component: Navbar009, code: Navbar009Code },
  { name: 'navbar010', Component: Navbar010, code: Navbar010Code },
  { name: 'navbar011', Component: Navbar011, code: Navbar011Code },
  { name: 'navbar012', Component: Navbar012, code: Navbar012Code },
  { name: 'navbar013', Component: Navbar013, code: Navbar013Code },
  { name: 'navbar014', Component: Navbar014, code: Navbar014Code },
  { name: 'navbar015', Component: Navbar015, code: Navbar015Code },
  { name: 'navbar016', Component: Navbar016, code: Navbar016Code },
  { name: 'navbar017', Component: Navbar017, code: Navbar017Code },
  { name: 'navbar018', Component: Navbar018, code: Navbar018Code },
  { name: 'navbar019', Component: Navbar019, code: Navbar019Code },
  { name: 'navbar020', Component: Navbar020, code: Navbar020Code },
];

export default function NavbarPage({ title, description }: Props) {
  const styles = useStyles();
  return (
    <ComponentsLayout title={title} description={description}>
      {navbars.map(({ name, Component, code }) => (
        <Fragment key={name}>
          <ComponentPreview
            size='lg'
            name={name}
            code={code}
            className={styles.componentPreview}>
            <Component />
          </ComponentPreview>
        </Fragment>
      ))}
    </ComponentsLayout>
  );
}

const useStyles = makeStyles({
  componentPreview: {
    paddingInline: tokens.spacingHorizontalXS,
  },
});
