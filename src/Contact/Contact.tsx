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
          <span className={styles.creditContainer}>
            <a className={styles.credit} href={VAR.creditCode.href}>
              Site programado por <span className={styles.creditLink}>{VAR.creditCode.name}</span> @ {VAR.creditCode.year}
            </a>
            <a className={styles.credit} href={VAR.creditDesign.href}>
              Design e ilustrações por <span className={styles.creditLink}>{VAR.creditDesign.name}</span> @ {VAR.creditDesign.year}
            </a>
          </span>
        </div>
        <p className={styles.disclaimer}>
          {VAR.legalDisclaimer}
        </p>
      </div>
    </footer>
  )
}