import { useState, useEffect, useRef } from 'react'
import './styles.css'
import TopBar from './TopBar'
import Hero from './Hero'
import Benefits from './Benefits'
import Testimonials, { type TestimonialsItemType } from './Testimonials'
import testimonialsData from './assets/testimonials/testimonials.json'
import Service from './Service'
import { serviceVariables } from './variables'
import Contact from './Contact'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAtContact, setIsAtContact] = useState(false)

  const styleTriggerRef = useRef<HTMLDivElement>(null)
  const hideTriggerRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const styleTrigger = styleTriggerRef.current
    const hideTrigger = hideTriggerRef.current

    const styleObserver = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      { threshold: [0, 0.1] }
    )

    const hideObserver = new IntersectionObserver(
      ([entry]) => {
        setIsAtContact(entry.isIntersecting)
      },
      { threshold: [1.0] }
    )

    if (styleTrigger) styleObserver.observe(styleTrigger)
    if (hideTrigger) hideObserver.observe(hideTrigger)

    return() => {
      styleObserver.disconnect()
      hideObserver.disconnect()
    }
  }, [])

  const testimonialsList = testimonialsData as TestimonialsItemType[]

  return (
    <>
      <TopBar isScrolled={isScrolled} isAtContact={isAtContact} />
      <Hero styleTriggerRef={styleTriggerRef} />
      <main>
        <Benefits />
        <Testimonials list={testimonialsList} />
        {serviceVariables.serviceList.map((item, i) => (
          <Service key={i} service={item} />
        ))}
      </main>
      <Contact hideTriggerRef={hideTriggerRef} />
    </>
  )
}

export default App
