import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.logo}>BloodLink</div>
        <div className={styles.tagline}>Saving lives across Ghana · 2026</div>
      </div>
      <ul className={styles.links}>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="mailto:support@bloodlink.gh">Contact</a></li>
      </ul>
    </footer>
  )
}