import { Fragment } from 'react';
import ComponentsLayout from '../layouts/componentsLayout';
import ComponentPreview from '../components/componentPreview';
import Breadcrumb001 from '@/components/breadcrumb/breadcrumb001';
import Breadcrumb001Code from '@/components/breadcrumb/breadcrumb001?raw';
import Breadcrumb002 from '@/components/breadcrumb/breadcrumb002';
import Breadcrumb002Code from '@/components/breadcrumb/breadcrumb002?raw';
import Breadcrumb003 from '@/components/breadcrumb/breadcrumb003';
import Breadcrumb003Code from '@/components/breadcrumb/breadcrumb003?raw';
import Breadcrumb004 from '@/components/breadcrumb/breadcrumb004';
import Breadcrumb004Code from '@/components/breadcrumb/breadcrumb004?raw';
import Breadcrumb005 from '@/components/breadcrumb/breadcrumb005';
import Breadcrumb005Code from '@/components/breadcrumb/breadcrumb005?raw';
import Breadcrumb006 from '@/components/breadcrumb/breadcrumb006';
import Breadcrumb006Code from '@/components/breadcrumb/breadcrumb006?raw';
import Breadcrumb007 from '@/components/breadcrumb/breadcrumb007';
import Breadcrumb007Code from '@/components/breadcrumb/breadcrumb007?raw';
import Breadcrumb008 from '@/components/breadcrumb/breadcrumb008';
import Breadcrumb008Code from '@/components/breadcrumb/breadcrumb008?raw';

type Props = {
  title: string;
  description: string;
};

const breadcrumbs = [
  { name: 'breadcrumb001', Component: Breadcrumb001, code: Breadcrumb001Code },
  { name: 'breadcrumb002', Component: Breadcrumb002, code: Breadcrumb002Code },
  { name: 'breadcrumb003', Component: Breadcrumb003, code: Breadcrumb003Code },
  { name: 'breadcrumb004', Component: Breadcrumb004, code: Breadcrumb004Code },
  { name: 'breadcrumb005', Component: Breadcrumb005, code: Breadcrumb005Code },
  { name: 'breadcrumb006', Component: Breadcrumb006, code: Breadcrumb006Code },
  { name: 'breadcrumb007', Component: Breadcrumb007, code: Breadcrumb007Code },
  { name: 'breadcrumb008', Component: Breadcrumb008, code: Breadcrumb008Code },
];

export default function BreadcrumbPage({ title, description }: Props) {
  return (
    <ComponentsLayout title={title} description={description}>
      {breadcrumbs.map(({ name, Component, code }) => (
        <Fragment key={name}>
          <ComponentPreview size='sm' name={name} code={code}>
            <Component />
          </ComponentPreview>
        </Fragment>
      ))}
    </ComponentsLayout>
  );
}
