import styles from './style.module.css'

interface Props {
  title: string,
  description: string,
  buttonText: string,
  image: string
}

export default function Service({ title, description, buttonText, image }: Props) {
  return (
    <section>
      <div>
        <h1 className={styles.sectionTitle}>{title}</h1>
        <a href="" className="buttonOutline">{buttonText}</a>
      </div>

    </section>
  )
}