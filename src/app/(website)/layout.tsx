import Footer from '@components/website/layout/Footer/Footer';
import Header from '@components/website/layout/Header/Header';

export const revalidate = process.env.NODE_ENV === 'development' ? 0 : false;

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
