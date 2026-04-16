import { BenefitsItem } from './BenefitsItem'
import styles from './styles.module.css'

export default function Benefits() {
  const benefitsList = [
    {
      icon: "placeholder-icon", 
      title: "Lorem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "placeholder-icon", 
      title: "Lorem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "placeholder-icon", 
      title: "Lorem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "placeholder-icon", 
      title: "Lorem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ]

  return (
    <section id="beneficios">
      <h2 className={`${styles.sectionTitle} bold-open`}>Lorem ipsum dolor sit amet</h2>
      <div className={styles.benefits}>
        {benefitsList.map((item, i) => (
          <BenefitsItem key={i} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
      <a href="#contato" className="buttonOutline">Quero saber mais</a>
    </section>
  )
}