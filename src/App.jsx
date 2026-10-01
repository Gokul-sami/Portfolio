import About from './components/About'
import BackToTop from './components/BackToTop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Skills from './components/Skills'
import Work from './components/Work'
import useParallax from './hooks/useParallax'

/**
 * Single-page portfolio: masthead, work, about, skills and contact are all
 * sections of one document — no routing, no page reloads. The order puts the
 * work directly under the masthead: a portfolio is read for the projects first.
 */
export default function App() {
  // Backdrop layers sit in fixed elements, so they drift with the page offset.
  // Different distances and directions give the background depth.
  const orbGlow = useParallax(40, 'window')
  const orbCounter = useParallax(-28, 'window')
  const orbSteel = useParallax(18, 'window')

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="backdrop" aria-hidden="true">
        <span className="backdrop__grid" />
        <span className="backdrop__orb backdrop__orb--glow" ref={orbGlow} />
        <span className="backdrop__orb backdrop__orb--counter" ref={orbCounter} />
        <span className="backdrop__orb backdrop__orb--steel" ref={orbSteel} />
      </div>

      <ScrollProgress />
      <Navbar />

      <div className="app">
        <main id="main">
          <Hero />
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
