import styles from './styles.module.css'

export default function TopBar() {
  return (
    <header id="hero" className={styles.hero}>
      <div className={styles.title}>
        <h1 className="light-lato">
          Psicoterapia lorem ipsum dolor sit amet
        </h1>
        <a href="#contato" className={styles.contact}>Mude sua vida</a>
      </div>
    </header>
  )
}