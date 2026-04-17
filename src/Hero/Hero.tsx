import styles from './styles.module.css'
import { type RefObject } from 'react'

interface Props {
  scrollTriggerRef: RefObject<HTMLDivElement | null>
}

export default function Hero({scrollTriggerRef}: Props) {
  return (
    <header id="hero" className={styles.hero}>
      <div className={styles.title}>
        <div ref={scrollTriggerRef} className={styles.sentinel}></div>
        <h1 className="light-lato">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h1>
        <a href="#contato" className="buttonColor">Mude sua vida</a>
      </div>
    </header>
  )
}