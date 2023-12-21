import { DM_Sans } from 'next/font/google';
import '../styles/globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Photosnap',
  description: 'Create & Share your photo stories.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className=""
    >
      <body className={`${dm_sans.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
