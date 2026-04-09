'use client'

import styles from './CTA.module.css'
import RevealWrapper from './RevealWrapper'

export default function CTA() {
  return (
    <section className={styles.section} id="download">
      <RevealWrapper>
        <h2 className={styles.title}>
          Download BludLink.<br />Start saving lives today.
        </h2>
        <p className={styles.sub}>Coming soon to Android and iOS. Free for donors and hospitals.</p>
        <div className={styles.buttons}>
          <button
            className={styles.storeBtn}
            style={{ border: '1px solid rgba(200,16,46,0.4)' }}
            onClick={() => window.alert("BloodLink is coming to Google Play very soon! We'll announce the launch date on this page. Thank you for your interest.")}
          >
            <div className={styles.storeIcon}>🤖</div>
            <div>
              <div className={styles.storeSub}>Get it on</div>
              <div className={styles.storeName}>Google Play</div>
            </div>
          </button>
          <button
            className={styles.storeBtn}
            onClick={() => window.alert("BloodLink is not yet available on the App Store. We'll announce when it launches. Thank you for your interest.")}
          >
            <div className={styles.storeIcon}>🍎</div>
            <div>
              <div className={styles.storeSub}>Coming soon on</div>
              <div className={styles.storeName}>App Store</div>
            </div>
          </button>
        </div>
      </RevealWrapper>
    </section>
  )
}