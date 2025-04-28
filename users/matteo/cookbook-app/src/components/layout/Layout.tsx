import { Inter, Libre_Baskerville } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

// Serif font for headings (like NYT)
const serif = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
});

// Sans-serif font for body text
const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${serif.variable} ${sans.variable} ${styles.container}`}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}