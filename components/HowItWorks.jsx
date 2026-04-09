import styles from './HowItWorks.module.css'
import RevealWrapper from './RevealWrapper'

const STEPS = [
  { num: '01', icon: '🏥', title: 'Hospital posts request', body: 'Verified hospitals post urgent blood requests specifying blood type, units needed and urgency level.' },
  { num: '02', icon: '📍', title: 'Donors are matched', body: 'Our system instantly finds compatible, available donors within 50km using GPS-based matching.' },
  { num: '03', icon: '📲', title: 'Donors are notified', body: 'Critical requests trigger instant SMS alerts. Normal requests send push notifications to donors.' },
  { num: '04', icon: '🩸', title: 'Life is saved', body: 'The hospital confirms the donation. The donor\'s record updates. A life continues.' },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <RevealWrapper>
        <div className={styles.header}>
          <div className={styles.label}>How it works</div>
          <h2 className={styles.title}>From request to donor<br />in minutes</h2>
          <p className={styles.sub}>A simple process designed for emergencies — no friction, no delays.</p>
        </div>
      </RevealWrapper>
      <RevealWrapper delay={100}>
        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div className={styles.step} key={step.num}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <div className={styles.stepBody}>{step.body}</div>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </section>
  )
}