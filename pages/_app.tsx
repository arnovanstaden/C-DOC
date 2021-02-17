// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Global Styles
import '../styles/global.scss';
import "../assets/icons/style.css";

// Fonts

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
