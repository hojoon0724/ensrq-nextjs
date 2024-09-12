import '@/styles/globals.css';
import Navbar from './components/00-nav/nav';
import Footer from './components/99-footer/footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
