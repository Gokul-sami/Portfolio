import About from './components/About'
import BackToTop from './components/BackToTop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Skills from './components/Skills'
import TechMarquee from './components/TechMarquee'
import Work from './components/Work'

/**
 * Single-page portfolio: hero, work, about, skills and contact are all
 * sections of one document — no routing, no page reloads.
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="backdrop" aria-hidden="true">
        <span className="backdrop__grid" />
        <span className="backdrop__orb backdrop__orb--teal" />
        <span className="backdrop__orb backdrop__orb--azure" />
        <span className="backdrop__orb backdrop__orb--steel" />
      </div>

      <ScrollProgress />
      <Navbar />

      <div className="app">
        <main id="main">
          <Hero />
          <TechMarquee />
          <Work />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

      <BackToTop />
      <span className="grain" aria-hidden="true" />
    </>
  )
}
