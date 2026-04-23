import styles from './styles.module.css'

interface Props {
  service: {
    id: string,
    title: string,
    description: string,
    button: {
      href: string,
      text: string
    },
    image: string
  }
}

export default function Service({ service }: Props) {
  const imageUrl = new URL(`../assets/${service.image}.avif`, import.meta.url).href

  return (
    <section id={service.id} className={styles.section}>
      <div className={styles.container}>
        <h1 className={`${styles.sectionTitle} light-lato`}>{service.title}</h1>
        <p className={styles.description}>{service.description}</p>
        <a href={service.button.href} className="buttonOutline">{service.button.text}</a>
      </div>
      <img className={styles.image} src={imageUrl} alt={service.title} title={`Foto por ${service.image.replaceAll('-',' ')} em Unsplash`} />
    </section>
  )
}