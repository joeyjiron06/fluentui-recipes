import { Fragment } from 'react';
import ComponentsLayout from '../layouts/componentsLayout';
import ComponentPreview from '../components/componentPreview';
import Accordion001 from '@/components/accordion/accordion001';
import Accordion001Code from '@/components/accordion/accordion001?raw';
import Accordion002 from '@/components/accordion/accordion002';
import Accordion002Code from '@/components/accordion/accordion002?raw';
import Accordion003 from '@/components/accordion/accordion003';
import Accordion003Code from '@/components/accordion/accordion003?raw';
import Accordion004 from '@/components/accordion/accordion004';
import Accordion004Code from '@/components/accordion/accordion004?raw';
import Accordion005 from '@/components/accordion/accordion005';
import Accordion005Code from '@/components/accordion/accordion005?raw';
import Accordion006 from '@/components/accordion/accordion006';
import Accordion006Code from '@/components/accordion/accordion006?raw';
import Accordion007 from '@/components/accordion/accordion007';
import Accordion007Code from '@/components/accordion/accordion007?raw';
import Accordion008 from '@/components/accordion/accordion008';
import Accordion008Code from '@/components/accordion/accordion008?raw';
import Accordion009 from '@/components/accordion/accordion009';
import Accordion009Code from '@/components/accordion/accordion009?raw';
import Accordion010 from '@/components/accordion/accordion010';
import Accordion010Code from '@/components/accordion/accordion010?raw';
import Accordion011 from '@/components/accordion/accordion011';
import Accordion011Code from '@/components/accordion/accordion011?raw';
import Accordion012 from '@/components/accordion/accordion012';
import Accordion012Code from '@/components/accordion/accordion012?raw';
import Accordion013 from '@/components/accordion/accordion013';
import Accordion013Code from '@/components/accordion/accordion013?raw';
import Accordion014 from '@/components/accordion/accordion014';
import Accordion014Code from '@/components/accordion/accordion014?raw';
import Accordion015 from '@/components/accordion/accordion015';
import Accordion015Code from '@/components/accordion/accordion015?raw';
import Accordion016 from '@/components/accordion/accordion016';
import Accordion016Code from '@/components/accordion/accordion016?raw';
import Accordion017 from '@/components/accordion/accordion017';
import Accordion017Code from '@/components/accordion/accordion017?raw';
import Accordion018 from '@/components/accordion/accordion018';
import Accordion018Code from '@/components/accordion/accordion018?raw';
import Accordion019 from '@/components/accordion/accordion019';
import Accordion019Code from '@/components/accordion/accordion019?raw';
import Accordion020 from '@/components/accordion/accordion020';
import Accordion020Code from '@/components/accordion/accordion020?raw';

type Props = {
  title: string;
  description: string;
};

const accordions = [
  { name: 'accordion001', Component: Accordion001, code: Accordion001Code },
  { name: 'accordion002', Component: Accordion002, code: Accordion002Code },
  { name: 'accordion003', Component: Accordion003, code: Accordion003Code },
  { name: 'accordion004', Component: Accordion004, code: Accordion004Code },
  { name: 'accordion005', Component: Accordion005, code: Accordion005Code },
  { name: 'accordion006', Component: Accordion006, code: Accordion006Code },
  { name: 'accordion007', Component: Accordion007, code: Accordion007Code },
  { name: 'accordion008', Component: Accordion008, code: Accordion008Code },
  { name: 'accordion009', Component: Accordion009, code: Accordion009Code },
  { name: 'accordion010', Component: Accordion010, code: Accordion010Code },
  { name: 'accordion011', Component: Accordion011, code: Accordion011Code },
  { name: 'accordion012', Component: Accordion012, code: Accordion012Code },
  { name: 'accordion013', Component: Accordion013, code: Accordion013Code },
  { name: 'accordion014', Component: Accordion014, code: Accordion014Code },
  { name: 'accordion015', Component: Accordion015, code: Accordion015Code },
  { name: 'accordion016', Component: Accordion016, code: Accordion016Code },
  { name: 'accordion017', Component: Accordion017, code: Accordion017Code },
  { name: 'accordion018', Component: Accordion018, code: Accordion018Code },
  { name: 'accordion019', Component: Accordion019, code: Accordion019Code },
  { name: 'accordion020', Component: Accordion020, code: Accordion020Code },
];

export default function AccordionPage({ title, description }: Props) {
  return (
    <ComponentsLayout title={title} description={description}>
      {accordions.map(({ name, Component, code }) => (
        <Fragment key={name}>
          <ComponentPreview size='md' name={name} code={code}>
            <Component />
          </ComponentPreview>
        </Fragment>
      ))}
    </ComponentsLayout>
  );
}
