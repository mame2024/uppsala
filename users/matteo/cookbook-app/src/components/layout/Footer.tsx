import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Flow Cookbook. All recipes contributed by our wonderful employees.
        </p>
      </div>
    </footer>
  );
}
