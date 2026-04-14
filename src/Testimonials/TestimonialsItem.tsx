import styles from './styles.module.css'

interface Props {
  name: string,
  photo: string,
  text: string
}

export function TestimonialsItem({ name, photo, text }: Props) {
const photoUrl = new URL(`../assets/testimonials/${photo}.avif`, import.meta.url).href

  return (
    <figure className={styles.item}>
      <img src={photoUrl} alt={`Foto de ${name}`} />
      <q className={styles.testimonial}>{text}</q>
      <figcaption>
        {/* Icon */}
        <cite>{name}</cite>
      </figcaption>
    </figure>
  )
}