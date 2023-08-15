
import Head from 'next/head';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AppContextProvider } from './Utils/context/AppContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import LandingPage from './LandingPage/page';
import Footer from './components/Footer/Footer';
import Header  from './components/Header/Header';

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        </Head>
        <AppContextProvider>
          <body>
          {<Header/>}
            <div className='container'>
              <Navbar />
              <Hero />
              <br /> <br /> <br /> <br />
              {children}
              <Footer />
            </div>
          </body>
        </AppContextProvider>
      </html>
  )
}
