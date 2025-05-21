import ComponentsLayout from "../layouts/componentsLayout";
import ComponentPreview from "../components/componentPreview";
import FileUpload1 from "../components/fileUpload/fileUpload-001";
import FileUpload1Code from "../components/fileUpload/fileUpload-001?raw";
import FileUpload2 from "../components/fileUpload/fileUpload-002";
import FileUpload2Code from "../components/fileUpload/fileUpload-002?raw";
import FileUpload3 from "../components/fileUpload/fileUpload-003";
import FileUpload3Code from "../components/fileUpload/fileUpload-003?raw";
import FileUpload4 from "../components/fileUpload/fileUpload-004";
import FileUpload4Code from "../components/fileUpload/fileUpload-004?raw";
import "./file-upload.scss";

export const title = "File Upload";
export const description =
  "A collection of file upload components built with React and Fluent UI 2";

export default function FileUpload() {
  return (
    <ComponentsLayout title={title} description={description}>
      <div className="grid-cols-12 component-preview-grid">
        <ComponentPreview
          className="component-preview component-preview-sm"
          code={FileUpload1Code}
        >
          <FileUpload1 />
        </ComponentPreview>

        <ComponentPreview
          className="component-preview component-preview-sm"
          code={FileUpload2Code}
        >
          <FileUpload2 />
        </ComponentPreview>

        <ComponentPreview
          className="component-preview component-preview-sm"
          code={FileUpload3Code}
        >
          <FileUpload3 />
        </ComponentPreview>

        <ComponentPreview
          className="component-preview component-preview-md"
          code={FileUpload4Code}
        >
          <FileUpload4 />
        </ComponentPreview>
      </div>
    </ComponentsLayout>
  );
}
