import FluentProvider from "../components/utils/fluentProvider.tsx";
import Footer from "../components/footer";
import Header from "../components/header";

type Props = React.PropsWithChildren;

export default function BasicLayout({ children }: Props) {
  return (
    <FluentProvider>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </FluentProvider>
  );
}
