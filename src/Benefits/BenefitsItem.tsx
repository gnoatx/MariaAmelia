import styles from './styles.module.css'

interface Props {
  icon: string,
  title: string,
  text: string
}

export function BenefitsItem({ icon, title, text }: Props) {
  return (
    <div className={styles.item}>
      <img src={`../assets/${icon}.png`} alt={title} />
      <p className={styles.description}>{text}</p>
    </div>
  )
}