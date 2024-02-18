import Footer from '@components/website/layout/Footer/Footer';
import Header from '@components/website/layout/Header/Header';

export const revalidate = false;

const WebsiteLayout = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
