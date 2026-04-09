import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.grid} />
      <div className={styles.content}>
        <div className={styles.badge}>
          <div className={styles.badgeDot} />
          Live across Ghana
        </div>
        <h1 className={styles.title}>
          Every second counts.<br />
          <em>Find blood donors</em><br />
          instantly.
        </h1>
        <p className={styles.sub}>
          BludLink connects hospitals with eligible blood donors within 50km — in real time. When lives are on the line, every minute matters.
        </p>
        <div className={styles.actions}>
          <a href="#download" className={styles.btnPrimary}>
            📱 Download the app
          </a>
          <a href="#how" className={styles.btnSecondary}>
            See how it works →
          </a>
        </div>
        <div className={styles.stats}>
          {[
            { num: '16+', label: 'Regions covered' },
            { num: '50km', label: 'Matching radius' },
            { num: '<60s', label: 'To notify donors' },
            { num: '8', label: 'Blood types' },
          ].map((s) => (
            <div className={styles.stat} key={s.label}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}