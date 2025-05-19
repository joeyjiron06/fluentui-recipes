import ComponentsLayout from "../layouts/componentsLayout";
import BasicFileUpload from "../components/fileUpload/basicFileUpload";

export default function FileUpload() {
  return (
    <ComponentsLayout
      title="File Upload"
      description="A collection of file upload components built with React and Fluent UI 2"
    >
      <BasicFileUpload />
    </ComponentsLayout>
  );
}
