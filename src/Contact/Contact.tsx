import styles from './styles.module.css'
import { type RefObject } from 'react'

interface Props {
  hideTriggerRef: RefObject<HTMLDivElement | null>
}

export default function Contact({ hideTriggerRef }: Props) {
  return(
    <footer id="contato" className={styles.footer}>
      <div className={styles.icon} ref={hideTriggerRef}></div>
      <div className={styles.contact}>
        <nav className={styles.social}>
          <a href="https://www.instagram.com/mameliaaltobelli/">Instagram</a>
          <a href="https://www.linkedin.com/in/maria-am%C3%A9lia-altobelli-teixeira-pinto-a6148824/">LinkedIn</a>
        </nav>
        <address>
          <span>WhatsApp</span>
          <a href="https://wa.me/+5511999282406">(11) 99928-2406</a>
        </address>
      </div>
    </footer>
  )
}