import styles from './styles.module.css'
import { type RefObject } from 'react'
import { heroVariables as VAR } from '../variables'

interface Props {
  styleTriggerRef: RefObject<HTMLDivElement | null>
}

export default function Hero({styleTriggerRef}: Props) {
  return (
    <header className={styles.hero}>
      <div className={styles.title}>
        <div ref={styleTriggerRef} className={styles.sentinel}></div>
        <h1 className="light-lato">
          {VAR.cardText}
        </h1>
        {/* <a href={VAR.button.href} className="buttonColor">{VAR.button.text}</a> */}
      </div>
    </header>
  )
}