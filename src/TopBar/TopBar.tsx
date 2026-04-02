import styles from './styles.module.css'

export default function TopBar() {
  return (
    <header className={styles.topBar}>
      <a href="#hero">
        <div className={`${styles.logo} light-lato`}>Maria Amélia Psicoterapia</div>
      </a>
      <nav className={styles.nav}>
        <a href="#beneficios">Benefícios</a>
        <a href="#testemunhos">Testemunhos</a>
        <a href="#servicos">Serviços</a>
      </nav>
      <a href="#contato" className={styles.contact}>Contato</a>
    </header>
  )
}