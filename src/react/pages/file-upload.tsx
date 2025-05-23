import ComponentsLayout from '../layouts/componentsLayout';
import ComponentPreview from '../components/componentPreview';
import FileUploadHookCode from '@/hooks/useFileUpload?raw';
import FileUpload1 from '../components/fileUpload/fileUpload-001';
import FileUpload1Code from '../components/fileUpload/fileUpload-001?raw';
import FileUpload2 from '../components/fileUpload/fileUpload-002';
import FileUpload2Code from '../components/fileUpload/fileUpload-002?raw';
import FileUpload3 from '../components/fileUpload/fileUpload-003';
import FileUpload3Code from '../components/fileUpload/fileUpload-003?raw';
import FileUpload4 from '../components/fileUpload/fileUpload-004';
import FileUpload4Code from '../components/fileUpload/fileUpload-004?raw';
import FileUpload5 from '../components/fileUpload/fileUpload-005';
import FileUpload5Code from '../components/fileUpload/fileUpload-005?raw';
import FileUpload6 from '../components/fileUpload/fileUpload-006';
import FileUpload6Code from '../components/fileUpload/fileUpload-006?raw';
import FileUpload7 from '../components/fileUpload/fileUpload-007';
import FileUpload7Code from '../components/fileUpload/fileUpload-007?raw';
import FileUpload8 from '../components/fileUpload/fileUpload-008';
import FileUpload8Code from '../components/fileUpload/fileUpload-008?raw';
import FileUpload9 from '../components/fileUpload/fileUpload-009';
import FileUpload9Code from '../components/fileUpload/fileUpload-009?raw';
import './file-upload.scss';

type Props = {
  title: string;
  description: string;
};

const fileUploadDependency = {
  title: '@/hooks/useFileUpload',
  code: FileUploadHookCode,
  key: 'fileUploadHook',
};

export default function FileUpload({ title, description }: Props) {
  return (
    <ComponentsLayout title={title} description={description}>
      <div className='grid-cols-12 component-preview-grid'>
        <ComponentPreview
          className='component-preview component-preview-sm'
          code={FileUpload1Code}>
          <FileUpload1 />
        </ComponentPreview>

        <ComponentPreview
          className='component-preview component-preview-sm'
          code={FileUpload2Code}>
          <FileUpload2 />
        </ComponentPreview>

        <ComponentPreview
          className='component-preview component-preview-sm'
          code={FileUpload3Code}
          codeDependencies={[fileUploadDependency]}>
          <FileUpload3 />
        </ComponentPreview>

        <ComponentPreview
          className='component-preview component-preview-md'
          code={FileUpload4Code}
          codeDependencies={[fileUploadDependency]}>
          <FileUpload4 />
        </ComponentPreview>

        <ComponentPreview
          className='component-preview component-preview-md'
          code={FileUpload5Code}
          codeDependencies={[fileUploadDependency]}>
          <FileUpload5 />
        </ComponentPreview>

        <ComponentPreview
          className='component-preview component-preview-md'
          code={FileUpload6Code}
          codeDependencies={[fileUploadDependency]}>
          <FileUpload6 />
        </ComponentPreview>

        <ComponentPreview
          className='component-preview component-preview-md'
          code={FileUpload7Code}
          codeDependencies={[fileUploadDependency]}>
          <FileUpload7 />
        </ComponentPreview>

        <ComponentPreview
          className='component-preview component-preview-md'
          code={FileUpload8Code}
          codeDependencies={[fileUploadDependency]}>
          <FileUpload8 />
        </ComponentPreview>

        <ComponentPreview
          className='component-preview component-preview-lg'
          code={FileUpload9Code}
          codeDependencies={[fileUploadDependency]}>
          <FileUpload9 />
        </ComponentPreview>
      </div>
    </ComponentsLayout>
  );
}
