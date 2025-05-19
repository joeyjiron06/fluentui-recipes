import {
  FluentProvider,
  webLightTheme,
  createDOMRenderer,
  RendererProvider,
  renderToStyleElements,
} from "@fluentui/react-components";
import { renderToStaticMarkup } from "react-dom/server";

const renderer = createDOMRenderer();

export function getFluentStyleElements() {
  return renderToStaticMarkup(<>{renderToStyleElements(renderer)}</>);
}

export default function FluentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RendererProvider renderer={renderer}>
      <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
    </RendererProvider>
  );
}
