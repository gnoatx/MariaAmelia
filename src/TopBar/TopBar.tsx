import styles from './styles.module.css'

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
        <a href="#">
          <div className={`${styles.logo} light-lato ${isScrolled ? styles.scrolled : ''}`} title="Maria Amélia Psicoterapia"></div>
        </a>
        <nav className={`${styles.nav} normal-open`}>
          <a href="#beneficios">Benefícios</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#servicos">Serviços</a>
        </nav>
        <a href="#contato" className="buttonColor">Contato</a>
      </header>
    </>
  )
}