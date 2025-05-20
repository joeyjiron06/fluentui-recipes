import FluentProvider from "../components/utils/fluentProvider.tsx";
import Footer from "../components/footer";
import Header from "../components/header";

type Props = React.PropsWithChildren & {
  className?: string;
};

export default function BasicLayout({ children, className }: Props) {
  return (
    <FluentProvider>
      <div>
        <Header />
        <main className={className}>{children}</main>
        <Footer />
      </div>
    </FluentProvider>
  );
}
