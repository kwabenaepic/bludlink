import styles from './Coverage.module.css'
import RevealWrapper from './RevealWrapper'

const REGIONS = [
  'Greater Accra', 'Ashanti', 'Western', 'Central', 'Eastern',
  'Volta', 'Northern', 'Oti', 'Savannah', 'Upper East',
  'Upper West', 'Bono', '+4 more',
]

export default function Coverage() {
  return (
    <section className={styles.section} id="coverage">
      <div className={styles.inner}>
        <RevealWrapper>
          <div className={styles.label}>Coverage</div>
          <h2 className={styles.title}>All 16 regions<br />of Ghana</h2>
          <p className={styles.sub}>
            From Greater Accra to Upper West — BludLink works wherever you are.
            Our PostGIS matching finds the closest compatible donor to every hospital.
          </p>
          <div className={styles.pills}>
            {REGIONS.map(r => (
              <div className={styles.pill} key={r}>{r}</div>
            ))}
          </div>
        </RevealWrapper>
        <RevealWrapper delay={200}>
          <div className={styles.mapVisual}>
            <div className={styles.c1} />
            <div className={styles.c2} />
            <div className={styles.c3} />
            <div className={styles.c4} />
            <div className={styles.mapCenter} />
            <div className={styles.pins}>
              <div className={`${styles.pin} ${styles.p1}`} />
              <div className={`${styles.pin} ${styles.p2}`} />
              <div className={`${styles.pin} ${styles.p3}`} />
              <div className={`${styles.pin} ${styles.p4}`} />
              <div className={`${styles.pin} ${styles.p5}`} />
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}