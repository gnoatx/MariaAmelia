import { BenefitsItem } from './BenefitsItem'
import styles from './styles.module.css'

export default function Benefits() {
  return (
    <section id="beneficios">
      <h2 className={`${styles.sectionTitle} bold-open`}>Lorem ipsum dolor sit amet</h2>
      <div className={styles.benefits}>
        <BenefitsItem icon="placeholder-icon" title="Lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."  />
        <BenefitsItem icon="placeholder-icon" title="Lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."  />
        <BenefitsItem icon="placeholder-icon" title="Lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."  />
        <BenefitsItem icon="placeholder-icon" title="Lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."  />
      </div>
      <a href="#contact" className={`${styles.info} button`}>Quero saber mais</a>
    </section>
  )
}