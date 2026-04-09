'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoDrop} />
        <span className={styles.logoText}>BloodLink</span>
      </Link>
      <ul className={styles.links}>
        <li><a href="#how">How it works</a></li>
        <li><a href="#who">For you</a></li>
        <li><a href="#coverage">Coverage</a></li>
        <li><a href="#download" className={styles.cta}>Get the app</a></li>
      </ul>
    </nav>
  )
}