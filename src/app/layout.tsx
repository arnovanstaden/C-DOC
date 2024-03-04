import localFont from 'next/font/local';
import '@styles/global.scss';
import ProviderWrapper from 'src/context/ProviderWrapper';

// If loading a variable font, you don't need to specify the font weight
const MyriadPro = localFont({
  src: [
    {
      path: '../styles/fonts/MyriadPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../styles/fonts/MyriadPro-Light-Italic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../styles/fonts/MyriadPro-Regular.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/fonts/MyriadPro-Semibold.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/MyriadPro-Bold.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-myriad-pro',
  display: 'swap',
});

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={MyriadPro.className}>
      <link rel="icon" type="image/png" href="/images/logos/favicon.png" />
      <body>
        <ProviderWrapper>
          {children}
        </ProviderWrapper>
      </body>
    </html>
  );
};
export default RootLayout;