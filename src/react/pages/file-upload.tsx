import ComponentsLayout from '../layouts/componentsLayout';
import ComponentPreview from '../components/componentPreview';
import FileUpload1 from '@/components/fileUpload/fileUpload001';
import FileUpload1Code from '@/components/fileUpload/fileUpload001?raw';
import FileUpload2 from '@/components/fileUpload/fileUpload002';
import FileUpload2Code from '@/components/fileUpload/fileUpload002?raw';
import FileUpload3 from '@/components/fileUpload/fileUpload003';
import FileUpload3Code from '@/components/fileUpload/fileUpload003?raw';
import FileUpload4 from '@/components/fileUpload/fileUpload004';
import FileUpload4Code from '@/components/fileUpload/fileUpload004?raw';
import FileUpload5 from '@/components/fileUpload/fileUpload005';
import FileUpload5Code from '@/components/fileUpload/fileUpload005?raw';
import FileUpload6 from '@/components/fileUpload/fileUpload006';
import FileUpload6Code from '@/components/fileUpload/fileUpload006?raw';
import FileUpload7 from '@/components/fileUpload/fileUpload007';
import FileUpload7Code from '@/components/fileUpload/fileUpload007?raw';
import FileUpload8 from '@/components/fileUpload/fileUpload008';
import FileUpload8Code from '@/components/fileUpload/fileUpload008?raw';
import FileUpload9 from '@/components/fileUpload/fileUpload009';
import FileUpload9Code from '@/components/fileUpload/fileUpload009?raw';
import FileUpload10 from '@/components/fileUpload/fileUpload010';
import FileUpload10Code from '@/components/fileUpload/fileUpload010?raw';
import FileUpload11 from '@/components/fileUpload/fileUpload011';
import FileUpload11Code from '@/components/fileUpload/fileUpload011?raw';
import FileUpload12 from '@/components/fileUpload/fileUpload012';
import FileUpload12Code from '@/components/fileUpload/fileUpload012?raw';
import FileUpload13 from '@/components/fileUpload/fileUpload013';
import FileUpload13Code from '@/components/fileUpload/fileUpload013?raw';
import FileUpload14 from '@/components/fileUpload/fileUpload014';
import FileUpload14Code from '@/components/fileUpload/fileUpload014?raw';

type Props = {
  title: string;
  description: string;
};

export default function FileUpload({ title, description }: Props) {
  return (
    <ComponentsLayout title={title} description={description}>
      <ComponentPreview size='sm' name='fileUpload001' code={FileUpload1Code}>
        <FileUpload1 />
      </ComponentPreview>

      <ComponentPreview size='sm' name='fileUpload002' code={FileUpload2Code}>
        <FileUpload2 />
      </ComponentPreview>

      <ComponentPreview
        size='sm'
        name='fileUpload003' code={FileUpload3Code}>
        <FileUpload3 />
      </ComponentPreview>

      <ComponentPreview
        size='md'
        name='fileUpload004' code={FileUpload4Code}>
        <FileUpload4 />
      </ComponentPreview>

      <ComponentPreview
        size='md'
        name='fileUpload005' code={FileUpload5Code}>
        <FileUpload5 />
      </ComponentPreview>

      <ComponentPreview
        size='md'
        name='fileUpload006' code={FileUpload6Code}>
        <FileUpload6 />
      </ComponentPreview>

      <ComponentPreview
        size='md'
        name='fileUpload007' code={FileUpload7Code}>
        <FileUpload7 />
      </ComponentPreview>

      <ComponentPreview
        size='md'
        name='fileUpload008' code={FileUpload8Code}>
        <FileUpload8 />
      </ComponentPreview>

      <ComponentPreview
        size='lg'
        name='fileUpload009' code={FileUpload9Code}>
        <FileUpload9 />
      </ComponentPreview>

      <ComponentPreview size='sm' name='fileUpload010' code={FileUpload10Code}>
        <FileUpload10 />
      </ComponentPreview>

      <ComponentPreview size='sm' name='fileUpload011' code={FileUpload11Code}>
        <FileUpload11 />
      </ComponentPreview>

      <ComponentPreview
        size='sm'
        name='fileUpload012' code={FileUpload12Code}>
        <FileUpload12 />
      </ComponentPreview>

      <ComponentPreview
        size='sm'
        name='fileUpload013' code={FileUpload13Code}>
        <FileUpload13 />
      </ComponentPreview>

      <ComponentPreview size='sm' name='fileUpload014' code={FileUpload14Code}>
        <FileUpload14 />
      </ComponentPreview>
    </ComponentsLayout>
  );
}
