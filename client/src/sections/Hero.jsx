import { motion } from 'framer-motion'
import { HiArrowDown, HiMail } from 'react-icons/hi'

export default function Hero() {
  const stats = [
    { value: '8.16', label: 'CGPA' },
    { value: '1700+', label: 'LeetCode Rating' },
    { value: '1050+', label: 'Problems Solved' },
    { value: '3★', label: 'CodeChef' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                      className="inline-block mb-6 px-6 py-2 rounded-full bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary text-sm font-mono">
            Full Stack Developer & Competitive Programmer
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text neon-text">Gonugutla Varun</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-ocean-foam max-w-3xl mx-auto mb-8 leading-relaxed">
            Building digital experiences with <span className="text-cyber-primary">React</span>, 
            <span className="text-cyber-accent"> Node.js</span>, and 
            <span className="text-cyber-secondary"> PostgreSQL</span>. 
            Passionate about creating scalable web applications and solving complex algorithmic challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-xl font-bold text-cyber-darker flex items-center gap-2 hover-glow">
              View My Work <HiArrowDown className="animate-bounce" />
            </motion.a>
            
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-cyber-primary/50 rounded-xl font-bold text-cyber-primary hover:bg-cyber-primary/10 transition-all flex items-center gap-2">
              <HiMail /> Get In Touch
            </motion.a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }}
                          className="glass-card p-6 hover-glow">
                <div className="text-3xl font-bold text-cyber-primary">{stat.value}</div>
                <div className="text-sm text-ocean-foam mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
        <div className="w-6 h-10 border-2 border-cyber-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyber-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}