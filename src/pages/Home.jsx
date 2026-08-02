import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import TechStack from '../sections/TechStack'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'

/**
 * All sections are now real — see src/sections/Hero.jsx, About.jsx,
 * Skills.jsx, TechStack.jsx, Projects.jsx, Experience.jsx, and
 * Contact.jsx.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
