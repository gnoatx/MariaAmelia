import styles from './styles.module.css'

interface Props {
  icon: string,
  title: string,
  text: string
}

export function BenefitsItem({ icon, title, text }: Props) {
  const iconUrl = new URL(`../assets/${icon}.avif`, import.meta.url).href

  return (
    <div className={styles.item}>
      <img src={iconUrl} alt={title} title={title} width={100}/>
      <p className={styles.description}>{text}</p>
    </div>
  )
}