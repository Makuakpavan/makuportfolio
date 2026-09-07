import { About } from './components/About'
import { AmbientField, ScrollReadout } from './components/AmbientField'
import { Contact, Colophon } from './components/Contact'
import { Hero } from './components/Hero'
import { Masthead } from './components/Masthead'
import { StackSection } from './components/StackSection'
import { Work } from './components/Work'

export default function App() {
  return (
    <>
      <AmbientField />
      <ScrollReadout />
      <Masthead />
      <main id="top">
        <Hero />
        <Work />
        <StackSection />
        <About />
        <Contact />
      </main>
      <Colophon />
    </>
  )
}
