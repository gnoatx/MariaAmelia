import styles from './styles.module.css'
import { type RefObject } from 'react'
import { Instagram, Linkedin, Whatsapp } from '@thesvg/react'

interface Props {
  hideTriggerRef: RefObject<HTMLAnchorElement | null>
}

export default function Contact({ hideTriggerRef }: Props) {
  const instagramUrl = 'https://www.instagram.com/mameliaaltobelli/'
  const linkedinUrl = 'https://www.linkedin.com/in/maria-am%C3%A9lia-altobelli-teixeira-pinto-a6148824/'
  const whatsappUrl = 'https://wa.me/+5511999282406'
  const whatsappNumber = '(11) 99928-2406'

  const crp = '00000'
  const cnpj = '00.000.000/0000-00'
  const disclaimer = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat velit veritatis! Iste quod explicabo ea sed maxime expedita ipsum inventore quis asperiores, numquam nisi aspernatur repudiandae, architecto ducimus obcaecati? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, unde corporis. Eos, nisi! Provident cum placeat fugit, doloribus minus similique quos esse quia vitae dolorem, neque quod a unde harum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores similique ab voluptatibus explicabo quisquam aliquid delectus consectetur incidunt quibusdam laboriosam, illum optio odit debitis necessitatibus commodi hic fugiat nulla saepe?'
  
  const creditUrl = 'https://portfolio-gnoatx.vercel.app/'

  return(
    <footer id="contato" className={styles.footer}>
      <div className={styles.footerTop}>
        <a href="#" ref={hideTriggerRef}>
          <div className={styles.icon}></div>
        </a>
        <nav className={styles.social}>
          <a href={instagramUrl}>
            <Instagram width={36} /> Instagram
          </a>
          <a href={linkedinUrl}>
            <Linkedin width={36} /> LinkedIn
          </a>
          <a href={whatsappUrl}>
            <Whatsapp width={36} />{whatsappNumber}
          </a>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.names}>
          <span className={styles.document}>
            Psicóloga Maria Amélia Altobelli<br />
            CRP {crp}<br />
            CNPJ {cnpj}
          </span>
          <a className={styles.credit} href={creditUrl}>
            Site por <span className={styles.creditLink}>Victor Gnoato</span> @ 2026
          </a>
        </div>
        <p className={styles.disclaimer}>
          {disclaimer}
        </p>
      </div>
    </footer>
  )
}