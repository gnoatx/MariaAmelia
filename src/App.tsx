import { useState, useEffect, useRef } from 'react'
import './styles.css'
import TopBar from './TopBar'
import Hero from './Hero'
import Benefits from './Benefits'
import Testimonials, { type TestimonialsItemType } from './Testimonials'
import testimonialsData from './assets/testimonials.json'
import Service from './Service'

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
        <Service id='servicos' title='Psicoterapia' buttonText='Exemplo de CTA' image='Toa-Heftiba' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo dolores modi consequuntur suscipit! Architecto sapiente, et ducimus culpa vitae libero dolorem aliquid ab in delectus cupiditate possimus odio consequuntur?' />
        <Service id='orientacao' title='Orientação Profissional' buttonText='Exemplo de CTA' image='Sandy-Ching' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo dolores modi consequuntur suscipit! Architecto sapiente, et ducimus culpa vitae libero dolorem aliquid ab in delectus cupiditate possimus odio consequuntur?' />
        {/* <Service id='orientacao' title='Orientação Profissional' buttonText='Exemplo de CTA' image='Vitaly-Gariev1' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo dolores modi consequuntur suscipit! Architecto sapiente, et ducimus culpa vitae libero dolorem aliquid ab in delectus cupiditate possimus odio consequuntur?' /> */}
        {/* <Service id='orientacao' title='Orientação Profissional' buttonText='Exemplo de CTA' image='Vitaly-Gariev2' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo dolores modi consequuntur suscipit! Architecto sapiente, et ducimus culpa vitae libero dolorem aliquid ab in delectus cupiditate possimus odio consequuntur?' /> */}
        {/* <Service id='orientacao' title='Orientação Profissional' buttonText='Exemplo de CTA' image='Vitaly-Gariev3' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima explicabo dolores modi consequuntur suscipit! Architecto sapiente, et ducimus culpa vitae libero dolorem aliquid ab in delectus cupiditate possimus odio consequuntur?' /> */}
      </main>
    </>
  )
}

export default App
