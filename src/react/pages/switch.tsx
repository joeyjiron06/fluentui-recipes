import ComponentsLayout from '../layouts/componentsLayout';
import ComponentPreview from '../components/componentPreview';
import Switch001 from '../components/switch/switch-001';
import Switch001Code from '../components/switch/switch-001?raw';
import Switch002 from '../components/switch/switch-002';
import Switch002Code from '../components/switch/switch-002?raw';
import Switch003 from '../components/switch/switch-003';
import Switch003Code from '../components/switch/switch-003?raw';
import Switch004 from '../components/switch/switch-004';
import Switch004Code from '../components/switch/switch-004?raw';
import Switch005 from '../components/switch/switch-005';
import Switch005Code from '../components/switch/switch-005?raw';
import Switch006 from '../components/switch/switch-006';
import Switch006Code from '../components/switch/switch-006?raw';
import Switch007 from '../components/switch/switch-007';
import Switch007Code from '../components/switch/switch-007?raw';
import Switch008 from '../components/switch/switch-008';
import Switch008Code from '../components/switch/switch-008?raw';
import Switch009 from '../components/switch/switch-009';
import Switch009Code from '../components/switch/switch-009?raw';
import Switch010 from '../components/switch/switch-010';
import Switch010Code from '../components/switch/switch-010?raw';

type Props = {
  title: string;
  description: string;
};

export default function NavbarPage({ title, description }: Props) {
  return (
    <ComponentsLayout title={title} description={description}>
      <ComponentPreview size='sm' code={Switch001Code}>
        <Switch001 />
      </ComponentPreview>
      <ComponentPreview size='sm' code={Switch002Code}>
        <Switch002 />
      </ComponentPreview>
      <ComponentPreview size='sm' code={Switch003Code}>
        <Switch003 />
      </ComponentPreview>
      <ComponentPreview size='sm' code={Switch004Code}>
        <Switch004 />
      </ComponentPreview>
      <ComponentPreview size='sm' code={Switch005Code}>
        <Switch005 />
      </ComponentPreview>
      <ComponentPreview size='sm' code={Switch006Code}>
        <Switch006 />
      </ComponentPreview>
      <ComponentPreview size='sm' code={Switch007Code}>
        <Switch007 />
      </ComponentPreview>
      <ComponentPreview size='sm' code={Switch008Code}>
        <Switch008 />
      </ComponentPreview>
      <ComponentPreview size='sm' code={Switch009Code}>
        <Switch009 />
      </ComponentPreview>
      <ComponentPreview size='sm' code={Switch010Code}>
        <Switch010 />
      </ComponentPreview>
    </ComponentsLayout>
  );
}
