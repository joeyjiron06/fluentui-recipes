import Footer from '../components/footer';
import Header from '../components/header';
import FluentProvider from '../styles/fluentProvider';

type Props = React.PropsWithChildren & {
  className?: string;
};

export default function BasicLayout({ children, className }: Props) {
  return (
    <FluentProvider>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </FluentProvider>
  );
}
