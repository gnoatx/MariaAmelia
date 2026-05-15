import styles from './styles.module.css'
import { type RefObject } from 'react'
import { contactVariables as VAR } from '../variables'

interface Props {
  hideTriggerRef: RefObject<HTMLAnchorElement | null>
}

export default function Contact({ hideTriggerRef }: Props) {
  return(
    <footer id={VAR.id} className={styles.footer}>
      <div className={styles.footerTop}>
        <a href="#" ref={hideTriggerRef} className={styles.titleContainer}>
          <h1 className={styles.sectionTitle}>{VAR.sectionTitle}</h1>
        </a>
        <nav className={styles.social}>
          {VAR.social.map((item, i) => (
            <a key={i} href={item.href}>
              <item.icon width={36} /> {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.names}>
          <span className={styles.document}>
            {VAR.documents.name}<br />
            CRP {VAR.documents.crp}<br />
            CNPJ {VAR.documents.cnpj}
          </span>
          <a className={styles.credit} href={VAR.credit.href}>
            Site por <span className={styles.creditLink}>{VAR.credit.name}</span> @ {VAR.credit.year}
          </a>
        </div>
        <p className={styles.disclaimer}>
          {VAR.legalDisclaimer}
        </p>
      </div>
    </footer>
  )
}