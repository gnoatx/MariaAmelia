import styles from './styles.module.css'
import { topBarVariables as VAR } from '../variables'

interface Props {
  isScrolled: boolean,
  isAtContact: boolean
}

export default function TopBar({ isScrolled, isAtContact }: Props) {
  return (
    <>
      <div className={`${styles.shadow}
        ${isScrolled ? styles.scrolled : ''}
        ${isAtContact ? styles.hidden : ''}
      `}>
      </div>
      <header className={`${styles.topBar}
        ${isScrolled ? styles.scrolled : ''}
        ${isAtContact ? styles.hidden : ''}
      `}>
        <div className={styles.container}>
          <a href="#">
            <div className={`${styles.logo} light-lato ${isScrolled ? styles.scrolled : ''}`} title={VAR.logoTitle}></div>
          </a>
          <nav className={`${styles.nav} normal-open`}>
            {VAR.navItems.map((item, i) => (
              <a href={item.href} key={i}>{item.text}</a>
            ))}
          </nav>
          <a href={VAR.contactButton.href} className="buttonColor">{VAR.contactButton.text}</a>
        </div>
      </header>
    </>
  )
}