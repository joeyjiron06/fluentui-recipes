import { Fragment } from 'react';
import ComponentsLayout from '../layouts/componentsLayout';
import ComponentPreview from '../components/componentPreview';
import Checkbox001 from '@/components/checkbox/checkbox001';
import Checkbox001Code from '@/components/checkbox/checkbox001?raw';
import Checkbox002 from '@/components/checkbox/checkbox002';
import Checkbox002Code from '@/components/checkbox/checkbox002?raw';
import Checkbox003 from '@/components/checkbox/checkbox003';
import Checkbox003Code from '@/components/checkbox/checkbox003?raw';
import Checkbox004 from '@/components/checkbox/checkbox004';
import Checkbox004Code from '@/components/checkbox/checkbox004?raw';
import Checkbox005 from '@/components/checkbox/checkbox005';
import Checkbox005Code from '@/components/checkbox/checkbox005?raw';
import Checkbox006 from '@/components/checkbox/checkbox006';
import Checkbox006Code from '@/components/checkbox/checkbox006?raw';
import Checkbox007 from '@/components/checkbox/checkbox007';
import Checkbox007Code from '@/components/checkbox/checkbox007?raw';
import Checkbox008 from '@/components/checkbox/checkbox008';
import Checkbox008Code from '@/components/checkbox/checkbox008?raw';
import Checkbox009 from '@/components/checkbox/checkbox009';
import Checkbox009Code from '@/components/checkbox/checkbox009?raw';
import Checkbox010 from '@/components/checkbox/checkbox010';
import Checkbox010Code from '@/components/checkbox/checkbox010?raw';
import Checkbox011 from '@/components/checkbox/checkbox011';
import Checkbox011Code from '@/components/checkbox/checkbox011?raw';
import Checkbox012 from '@/components/checkbox/checkbox012';
import Checkbox012Code from '@/components/checkbox/checkbox012?raw';
import Checkbox013 from '@/components/checkbox/checkbox013';
import Checkbox013Code from '@/components/checkbox/checkbox013?raw';
import Checkbox014 from '@/components/checkbox/checkbox014';
import Checkbox014Code from '@/components/checkbox/checkbox014?raw';
import Checkbox015 from '@/components/checkbox/checkbox015';
import Checkbox015Code from '@/components/checkbox/checkbox015?raw';
import Checkbox016 from '@/components/checkbox/checkbox016';
import Checkbox016Code from '@/components/checkbox/checkbox016?raw';
import Checkbox017 from '@/components/checkbox/checkbox017';
import Checkbox017Code from '@/components/checkbox/checkbox017?raw';
import Checkbox018 from '@/components/checkbox/checkbox018';
import Checkbox018Code from '@/components/checkbox/checkbox018?raw';
import Checkbox019 from '@/components/checkbox/checkbox019';
import Checkbox019Code from '@/components/checkbox/checkbox019?raw';

type Props = { title: string; description: string };

const items = [
  { name: 'checkbox001', Component: Checkbox001, code: Checkbox001Code },
  { name: 'checkbox002', Component: Checkbox002, code: Checkbox002Code },
  { name: 'checkbox003', Component: Checkbox003, code: Checkbox003Code },
  { name: 'checkbox004', Component: Checkbox004, code: Checkbox004Code },
  { name: 'checkbox005', Component: Checkbox005, code: Checkbox005Code },
  { name: 'checkbox006', Component: Checkbox006, code: Checkbox006Code },
  { name: 'checkbox007', Component: Checkbox007, code: Checkbox007Code },
  { name: 'checkbox008', Component: Checkbox008, code: Checkbox008Code },
  { name: 'checkbox009', Component: Checkbox009, code: Checkbox009Code },
  { name: 'checkbox010', Component: Checkbox010, code: Checkbox010Code },
  { name: 'checkbox011', Component: Checkbox011, code: Checkbox011Code },
  { name: 'checkbox012', Component: Checkbox012, code: Checkbox012Code },
  { name: 'checkbox013', Component: Checkbox013, code: Checkbox013Code },
  { name: 'checkbox014', Component: Checkbox014, code: Checkbox014Code },
  { name: 'checkbox015', Component: Checkbox015, code: Checkbox015Code },
  { name: 'checkbox016', Component: Checkbox016, code: Checkbox016Code },
  { name: 'checkbox017', Component: Checkbox017, code: Checkbox017Code },
  { name: 'checkbox018', Component: Checkbox018, code: Checkbox018Code },
  { name: 'checkbox019', Component: Checkbox019, code: Checkbox019Code },
];

export default function CheckboxPage({ title, description }: Props) {
  return (
    <ComponentsLayout title={title} description={description}>
      {items.map(({ name, Component, code }) => (
        <Fragment key={name}>
          <ComponentPreview size='sm' name={name} code={code}>
            <Component />
          </ComponentPreview>
        </Fragment>
      ))}
    </ComponentsLayout>
  );
}
