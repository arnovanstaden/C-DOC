// Components
import Footer from '../components/Footer/Footer';

// Global Styles
import '../styles/global.scss';
import '../assets/icons/style.css';

// Fonts

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
