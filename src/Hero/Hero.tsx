import styles from './styles.module.css'
import { type RefObject } from 'react'

interface Props {
  scrollTriggerRef: RefObject<HTMLDivElement | null>
}

export default function TopBar({scrollTriggerRef}: Props) {
  return (
    <header id="hero" className={styles.hero}>
      <div className={styles.title}>
        <div ref={scrollTriggerRef} className={styles.sentinel}></div>
        <h1 className="light-lato">
          Psicoterapia lorem ipsum dolor sit amet
        </h1>
        <a href="#contato" className={styles.contact}>Mude sua vida</a>
      </div>
    </header>
  )
}