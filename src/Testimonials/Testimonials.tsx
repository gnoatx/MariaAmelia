import { useState, useCallback } from 'react'
import styles from './styles.module.css'
import { TestimonialsItem } from './TestimonialsItem'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { testimonialsVariables as VAR } from '../variables'

export type TestimonialsItemType = {
  name: string,
  photo: string,
  text: string
}

interface Props {
  list: TestimonialsItemType[]
}

export default function Testimonials({ list }: Props) {
  const buffer = 5
  const [currentIndex, setCurrentIndex] = useState(buffer)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const scrollList = [
    ...list.slice(-buffer),
    ...list,
    ...list.slice(0, buffer)
  ]

  const itemWidth = 400
  const itemMargin = 40
  const totalItemWidth = itemWidth + itemMargin * 2
  
  const handlePrev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }, [isTransitioning])

  const handleNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }, [isTransitioning])

  const handleTransitionEnd = () => {
    setIsTransitioning(false)

    if (currentIndex >= list.length + buffer) {
      setCurrentIndex(buffer)
    } else if (currentIndex < buffer) {
      setCurrentIndex(list.length + buffer - 1)
    }
  }

  return (
    <section id={VAR.id}>
      <h1 className={`${styles.sectionTitle} light-lato`}>{VAR.sectionTitle}</h1>
      <div className={styles.testimonialsContainer}>
        <nav className={styles.testimonialsNav}>
          <button className={styles.buttonNav} onClick={handlePrev}>
            <ArrowLeft />
          </button>
          <button className={styles.buttonNav} onClick={handleNext}>
            <ArrowRight />
          </button>
        </nav>
        <div className={`${styles.testimonials}
          ${isTransitioning ? styles.isTransitioning : ''}`}
          onTransitionEnd={handleTransitionEnd}
          style={{transform: `translateX(calc(
            -${currentIndex * totalItemWidth}px
            + 50vw
            - ${totalItemWidth / 2}px
          ))`}}
        >
          {scrollList.map((item, i) => (
            <TestimonialsItem key={i} name={item.name} photo={item.photo} text={item.text} />
          ))}
        </div>
      </div>
      <footer className={styles.calloutContainer}>
        <div className={styles.calloutTextContainer}>
          <h2 className={`${styles.callout} light-lato`}>{VAR.callout}</h2>
          <a href={VAR.button.href} className="buttonOutline">{VAR.button.text}</a>
        </div>
        <div className={styles.illustrationWrapper}>
          <img className={styles.illustration}
            src={VAR.illustration.url}
            alt={VAR.illustration.altText}
          />
        </div>
      </footer>
    </section>
  )
}