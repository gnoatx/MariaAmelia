import { BenefitsItem } from './BenefitsItem'
import styles from './styles.module.css'

export default function Benefits() {
  return (
    <section>
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className={styles.benefits}>
        <BenefitsItem icon="placeholder-icon" title="Lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempora iure quis, magnam totam alias!"  />
      </div>
    </section>
  )
}