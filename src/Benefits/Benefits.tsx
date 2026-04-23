import { BenefitsItem } from './BenefitsItem'
import styles from './styles.module.css'
import { benefitsVariables as VAR } from '../variables'

export default function Benefits() {
  return (
    <section id={VAR.id}>
      <h2 className={`${styles.sectionTitle} bold-open`}>{VAR.sectionTitle}</h2>
      <div className={styles.benefits}>
        {VAR.itemList.map((item, i) => (
          <BenefitsItem key={i} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
      <a href={VAR.button.href} className="buttonOutline">{VAR.button.text}</a>
    </section>
  )
}