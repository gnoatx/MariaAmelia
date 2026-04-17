import styles from './styles.module.css'
import { type TestimonialsItemType } from './Testimonials'

export function TestimonialsItem({ name, photo, text }: TestimonialsItemType) {
  const photoUrl = new URL(`../assets/testimonials/${photo}.avif`, import.meta.url).href

  return (
    <figure className={styles.item}>
      <img className={styles.photo}
        src={photoUrl}
        alt={`Foto por ${photo.replaceAll('-',' ')} em Unsplash`}
        title={`Foto por ${photo.replaceAll('-',' ')} em Unsplash`}
        width={400}
      />
      <q className={styles.testimonial}>{text}</q>
      <figcaption className={styles.citeCaption}>
          <div className={styles.citeDot}></div>
          <cite className={`${styles.cite} normal-open`}>{name}</cite>
      </figcaption>
    </figure>
  )
}