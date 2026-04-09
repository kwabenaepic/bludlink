import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.logo}>BludLink</div>
        <div className={styles.tagline}>Saving lives across Ghana · 2026</div>
      </div>
      <ul className={styles.links}>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="mailto:support@BludLink.gh">Contact</a></li>
      </ul>
    </footer>
  )
}