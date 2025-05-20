import { Body1, Title1 } from "@fluentui/react-components";
import BasicLayout from "./basicLayout";
import "./componentsLayout.css";

type Props = React.PropsWithChildren & {
  title: string;
  description: string;
};

export default function ComponentsLayout({
  children,
  title,
  description,
}: Props) {
  return (
    <BasicLayout className="container">
      <hgroup className="components-layout-header">
        <Title1>{title}</Title1>
        <Body1>{description}</Body1>
      </hgroup>
      {children}
    </BasicLayout>
  );
}
