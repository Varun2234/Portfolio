import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyber-dark/90 backdrop-blur-lg border-b border-cyber-primary/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold gradient-text font-mono">
            &lt;Varun /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} 
                 className="text-ocean-foam hover:text-cyber-primary transition-colors text-sm font-medium">
                {item.name}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/50 rounded-lg text-cyber-primary hover:bg-cyber-primary/20 transition-all">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-cyber-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cyber-dark border-b border-cyber-primary/20">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} 
                 className="block text-ocean-foam hover:text-cyber-primary transition-colors"
                 onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}