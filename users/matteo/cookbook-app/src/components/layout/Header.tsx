import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className={styles.header}>
      <div className={styles.date}>{today}</div>
      <div className={styles.masthead}>
        <Link href="/" className={styles.logo}>
          Flow Cookbook
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/recipes" className={styles.navLink}>Recipes</Link>
        <Link href="/recipes/new" className={styles.navLink}>Submit Recipe</Link>
      </nav>
    </header>
  );
}
