import styles from './styles.module.css'

interface Props {
  isScrolled: boolean
}

export default function TopBar({ isScrolled }: Props) {
  return (
    <>
      <div className={`${styles.shadow} ${isScrolled ? styles.scrolled : ''}`}>
      </div>
      <header className={`${styles.topBar} ${isScrolled ? styles.scrolled : ''}`}>
        <a href="#hero">
          <div className={`${styles.logo} light-lato ${isScrolled ? styles.scrolled : ''}`} title="Maria Amélia Psicoterapia"></div>
        </a>
        <nav className={`${styles.nav} normal-open`}>
          <a href="#beneficios">Benefícios</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#servicos">Serviços</a>
        </nav>
        <a href="#contato" className={`${styles.contact} button`}>Contato</a>
      </header>
    </>
  )
}