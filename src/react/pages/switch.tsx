import { Fragment } from 'react';
import ComponentsLayout from '../layouts/componentsLayout';
import ComponentPreview from '../components/componentPreview';
import Switch001 from '@/components/switch/switch001';
import Switch001Code from '@/components/switch/switch001?raw';
import Switch002 from '@/components/switch/switch002';
import Switch002Code from '@/components/switch/switch002?raw';
import Switch003 from '@/components/switch/switch003';
import Switch003Code from '@/components/switch/switch003?raw';
import Switch004 from '@/components/switch/switch004';
import Switch004Code from '@/components/switch/switch004?raw';
import Switch005 from '@/components/switch/switch005';
import Switch005Code from '@/components/switch/switch005?raw';
import Switch006 from '@/components/switch/switch006';
import Switch006Code from '@/components/switch/switch006?raw';
import Switch007 from '@/components/switch/switch007';
import Switch007Code from '@/components/switch/switch007?raw';
import Switch008 from '@/components/switch/switch008';
import Switch008Code from '@/components/switch/switch008?raw';
import Switch009 from '@/components/switch/switch009';
import Switch009Code from '@/components/switch/switch009?raw';
import Switch010 from '@/components/switch/switch010';
import Switch010Code from '@/components/switch/switch010?raw';
import Switch011 from '@/components/switch/switch011';
import Switch011Code from '@/components/switch/switch011?raw';
import Switch012 from '@/components/switch/switch012';
import Switch012Code from '@/components/switch/switch012?raw';
import Switch013 from '@/components/switch/switch013';
import Switch013Code from '@/components/switch/switch013?raw';
import Switch014 from '@/components/switch/switch014';
import Switch014Code from '@/components/switch/switch014?raw';
import Switch015 from '@/components/switch/switch015';
import Switch015Code from '@/components/switch/switch015?raw';
import Switch016 from '@/components/switch/switch016';
import Switch016Code from '@/components/switch/switch016?raw';
import Switch017 from '@/components/switch/switch017';
import Switch017Code from '@/components/switch/switch017?raw';

type Props = {
  title: string;
  description: string;
};

const switches = [
  { name: 'switch001', Component: Switch001, code: Switch001Code },
  { name: 'switch002', Component: Switch002, code: Switch002Code },
  { name: 'switch003', Component: Switch003, code: Switch003Code },
  { name: 'switch004', Component: Switch004, code: Switch004Code },
  { name: 'switch005', Component: Switch005, code: Switch005Code },
  { name: 'switch006', Component: Switch006, code: Switch006Code },
  { name: 'switch007', Component: Switch007, code: Switch007Code },
  { name: 'switch008', Component: Switch008, code: Switch008Code },
  { name: 'switch009', Component: Switch009, code: Switch009Code },
  { name: 'switch010', Component: Switch010, code: Switch010Code },
  { name: 'switch011', Component: Switch011, code: Switch011Code },
  { name: 'switch012', Component: Switch012, code: Switch012Code },
  { name: 'switch013', Component: Switch013, code: Switch013Code },
  { name: 'switch014', Component: Switch014, code: Switch014Code },
  { name: 'switch015', Component: Switch015, code: Switch015Code },
  { name: 'switch016', Component: Switch016, code: Switch016Code },
  { name: 'switch017', Component: Switch017, code: Switch017Code },
];

export default function SwitchPage({ title, description }: Props) {
  return (
    <ComponentsLayout title={title} description={description}>
      {switches.map(({ name, Component, code }) => (
        <Fragment key={name}>
          <ComponentPreview size='sm' name={name} code={code}>
            <Component />
          </ComponentPreview>
        </Fragment>
      ))}
    </ComponentsLayout>
  );
}
