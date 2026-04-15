import { useState, useEffect, useRef } from 'react'
import './styles.css'
import TopBar from "./TopBar"
import Hero from "./Hero"
import Benefits from './Benefits';
import Testimonials, { type TestimonialsItemType } from './Testimonials';
import testimonialsData from './assets/testimonials.json'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollTriggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cachedTrigger = scrollTriggerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      { threshold: [0, 0.1] }
    )

    if (cachedTrigger) observer.observe(cachedTrigger)

    return() => {
      if(cachedTrigger) observer.unobserve(cachedTrigger)
    }
  }, [])

  const testimonialsList = testimonialsData as TestimonialsItemType[]

  return (
    <>
      <TopBar isScrolled={isScrolled} />
      <Hero scrollTriggerRef={scrollTriggerRef} />
      <main>
        <Benefits />
        <Testimonials list={testimonialsList} />
        <section>a</section>
        <section>a</section>
        <section>a</section>
      </main>
    </>
  )
}

export default App
