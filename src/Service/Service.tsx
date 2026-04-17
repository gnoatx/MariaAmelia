import styles from './styles.module.css'

interface Props {
  id: string,
  title: string,
  description: string,
  buttonText: string,
  image: string
}

export default function Service({ id, title, description, buttonText, image }: Props) {
  const imageUrl = new URL(`../assets/${image}.avif`, import.meta.url).href

  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <h1 className={`${styles.sectionTitle} light-lato`}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <a href="#contact" className="buttonOutline">{buttonText}</a>
      </div>
      <img className={styles.image} src={imageUrl} alt={title} title={`Foto por ${image.replaceAll('-',' ')} em Unsplash`} />
    </section>
  )
}