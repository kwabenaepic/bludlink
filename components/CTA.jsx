import styles from './CTA.module.css'
import RevealWrapper from './RevealWrapper'

export default function CTA() {
  return (
    <section className={styles.section} id="download">
      <RevealWrapper>
        <h2 className={styles.title}>
          Download BloodLink.<br />Start saving lives today.
        </h2>
        <p className={styles.sub}>Available on Android. Free for donors and hospitals.</p>
        <div className={styles.buttons}>
          <a href="#" className={styles.storeBtn}>
            <div className={styles.storeIcon}>🤖</div>
            <div>
              <div className={styles.storeSub}>Get it on</div>
              <div className={styles.storeName}>Google Play</div>
            </div>
          </a>
          <a href="#" className={styles.storeBtn}>
            <div className={styles.storeIcon}>🍎</div>
            <div>
              <div className={styles.storeSub}>Coming soon on</div>
              <div className={styles.storeName}>App Store</div>
            </div>
          </a>
        </div>
      </RevealWrapper>
    </section>
  )
}