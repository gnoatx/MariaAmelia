import './styles.css'
import TopBar from "./TopBar"
import Hero from "./Hero"
import { useState, useEffect, useRef } from 'react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cachedTrigger = scrollTriggerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      { threshold: [0, 0.1] }
    );

    if (cachedTrigger) observer.observe(cachedTrigger);

    return() => {
      if(cachedTrigger) observer.unobserve(cachedTrigger);
    }
  }, []);

  return (
    <>
      <TopBar isScrolled={isScrolled} />
      <Hero scrollTriggerRef={scrollTriggerRef} />
    </>
  )
}

export default App
