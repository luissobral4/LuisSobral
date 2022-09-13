import '../styles/globals.css';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import {ThemeProvider} from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className="dark:bg-green-900 bg-white w-full min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp
