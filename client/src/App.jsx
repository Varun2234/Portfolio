import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import InternshipsExperience from './sections/InternshipsExperience'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-cyber-darker cyber-grid relative overflow-x-hidden">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyber-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-cyber-accent/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyber-secondary/10 rounded-full blur-[120px] animate-pulse delay-2000" />
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <InternshipsExperience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <footer className="bg-cyber-dark border-t border-cyber-primary/20 py-8 text-center relative z-10">
        <p className="text-ocean-foam text-sm">
          © 2024 Gonugutla Varun • Built with 
          <span className="text-cyber-primary mx-1">React</span> + 
          <span className="text-cyber-accent mx-1">Node.js</span>
        </p>
      </footer>
    </div>
  )
}

export default App