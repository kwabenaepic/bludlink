import styles from './ForWho.module.css'
import RevealWrapper from './RevealWrapper'

export default function ForWho() {
  return (
    <section className={styles.section} id="who">
      <RevealWrapper>
        <div className={styles.header}>
          <div className={styles.label}>Built for everyone</div>
          <h2 className={styles.title}>Whether you give<br />or receive</h2>
          <p className={styles.sub}>BloodLink serves two sides of the same life-saving mission.</p>
        </div>
      </RevealWrapper>
      <RevealWrapper delay={100}>
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.cardDonor}`}>
            <div className={styles.cardDecor} />
            <div className={`${styles.badge} ${styles.badgeRed}`}>🩸 Blood Donors</div>
            <h3 className={styles.cardTitle}>Register once.<br />Save lives forever.</h3>
            <p className={styles.cardBody}>Sign up as a donor in under 3 minutes. Get notified when a nearby hospital needs your blood type.</p>
            <ul className={styles.features}>
              {['Register with your phone number', 'Set your availability anytime', 'Get matched by blood type + location', 'SMS alerts for urgent requests', 'Track your donation history'].map(f => (
                <li key={f}><div className={`${styles.dot} ${styles.dotRed}`} />{f}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.card} ${styles.cardHospital}`}>
            <div className={styles.cardDecor} />
            <div className={`${styles.badge} ${styles.badgeBlue}`}>🏥 Hospitals</div>
            <h3 className={styles.cardTitle}>Find donors.<br />Not excuses.</h3>
            <p className={styles.cardBody}>Verified hospitals can post blood requests and reach hundreds of compatible donors instantly.</p>
            <ul className={styles.features}>
              {['Apply for verification online', 'Post requests in seconds', 'Critical alerts via SMS blast', 'See donor responses in real time', 'Analytics dashboard included'].map(f => (
                <li key={f}><div className={`${styles.dot} ${styles.dotBlue}`} />{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </RevealWrapper>
    </section>
  )
}