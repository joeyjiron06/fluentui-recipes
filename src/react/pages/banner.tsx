import { Fragment } from 'react';
import ComponentsLayout from '../layouts/componentsLayout';
import ComponentPreview from '../components/componentPreview';
import Banner1 from '@/components/banner/banner001';
import Banner1Code from '@/components/banner/banner001?raw';
import Banner2 from '@/components/banner/banner002';
import Banner2Code from '@/components/banner/banner002?raw';
import Banner3 from '@/components/banner/banner003';
import Banner3Code from '@/components/banner/banner003?raw';
import Banner4 from '@/components/banner/banner004';
import Banner4Code from '@/components/banner/banner004?raw';
import Banner5 from '@/components/banner/banner005';
import Banner5Code from '@/components/banner/banner005?raw';
import Banner6 from '@/components/banner/banner006';
import Banner6Code from '@/components/banner/banner006?raw';
import Banner7 from '@/components/banner/banner007';
import Banner7Code from '@/components/banner/banner007?raw';
import Banner8 from '@/components/banner/banner008';
import Banner8Code from '@/components/banner/banner008?raw';
import Banner9 from '@/components/banner/banner009';
import Banner9Code from '@/components/banner/banner009?raw';
import Banner10 from '@/components/banner/banner010';
import Banner10Code from '@/components/banner/banner010?raw';
import Banner11 from '@/components/banner/banner011';
import Banner11Code from '@/components/banner/banner011?raw';
import Banner12 from '@/components/banner/banner012';
import Banner12Code from '@/components/banner/banner012?raw';

type Props = {
  title: string;
  description: string;
};

const items = [
  { name: 'banner001', Component: Banner1, code: Banner1Code },
  { name: 'banner002', Component: Banner2, code: Banner2Code },
  { name: 'banner003', Component: Banner3, code: Banner3Code },
  { name: 'banner004', Component: Banner4, code: Banner4Code },
  { name: 'banner005', Component: Banner5, code: Banner5Code },
  { name: 'banner006', Component: Banner6, code: Banner6Code },
  { name: 'banner007', Component: Banner7, code: Banner7Code },
  { name: 'banner008', Component: Banner8, code: Banner8Code },
  { name: 'banner009', Component: Banner9, code: Banner9Code },
  { name: 'banner010', Component: Banner10, code: Banner10Code },
  { name: 'banner011', Component: Banner11, code: Banner11Code },
  { name: 'banner012', Component: Banner12, code: Banner12Code },
];

export default function Banner({ title, description }: Props) {
  return (
    <ComponentsLayout title={title} description={description}>
      {items.map(({ name, Component, code }) => (
        <Fragment key={name}>
          <ComponentPreview size='lg' name={name} code={code}>
            <Component />
          </ComponentPreview>
        </Fragment>
      ))}
    </ComponentsLayout>
  );
}
