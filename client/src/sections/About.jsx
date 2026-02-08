import { motion } from 'framer-motion'
import { HiLocationMarker, HiCalendar, HiCode, HiAcademicCap, HiUserGroup } from 'react-icons/hi'
import { GiTrophy } from 'react-icons/gi'

const highlights = [
  {
    icon: HiCode,
    title: 'Full Stack Developer',
    desc: 'Engineered 15+ reusable React components, built 25+ REST API endpoints with Node.js & Express, integrated Razorpay & Stripe payment gateways',
    color: 'cyber-primary'
  },
  {
    icon: GiTrophy,
    title: 'Competitive Programmer',
    desc: '1700+ LeetCode rating with 1050+ problems solved, 3-Star CodeChef coder, AIR 12,907 in JEE Mains among 1M+ candidates',
    color: 'cyber-accent'
  },
  {
    icon: HiUserGroup,
    title: 'Leadership & Team Management',
    desc: 'Team Captain - NIT Raipur Volleyball Championship 2025 Winner, Design Executive - Go Green Eco-Social Committee',
    color: 'cyber-secondary'
  },
  {
    icon: HiAcademicCap,
    title: 'Machine Learning Enthusiast',
    desc: 'Built ML model with 98.8% accuracy for cardiovascular disease detection using Random Forest & GridSearchCV',
    color: 'cyber-primary'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-cyber-primary mx-auto rounded-full" />
        </motion.div>

        {/* Personal Info Card with Photo */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="glass-card p-8 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Photo Placeholder */}
            <div className="relative group">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-cyber-primary/30 group-hover:border-cyber-primary transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                {/* Replace src with your actual photo */}
                <img 
                  src="/your-photo.jpg" 
                  alt="Gonugutla Varun" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback if image not found */}
                <div className="hidden w-full h-full bg-cyber-primary/10 items-center justify-center text-cyber-primary text-6xl font-bold">
                  GV
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-cyber-primary text-cyber-darker px-4 py-1 rounded-full text-sm font-bold">
                Open to Work
              </div>
            </div>

            {/* Personal Details */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Gonugutla Varun</h3>
              <p className="text-cyber-primary text-lg mb-4">Full Stack Developer & Competitive Programmer</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center md:justify-start gap-3 text-ocean-foam">
                  <HiLocationMarker className="text-cyber-primary text-xl" />
                  <span>Anantapur, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 text-ocean-foam">
                  <HiCalendar className="text-cyber-accent text-xl" />
                  <span>Born on April 13, 2005</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 text-ocean-foam">
                  <HiAcademicCap className="text-cyber-secondary text-xl" />
                  <span>Pre-final Year Student at NIT Raipur</span>
                </div>
              </div>

              <p className="text-ocean-foam leading-relaxed">
                Passionate about building scalable web applications and solving complex algorithmic challenges. 
                Specializing in <span className="text-cyber-primary">React</span>, 
                <span className="text-cyber-accent"> Node.js</span>, 
                <span className="text-cyber-secondary"> Express</span>, and 
                <span className="text-cyber-primary"> MongoDB</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                        className="glass-card p-6 hover-glow group">
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-${item.color}/10 rounded-xl group-hover:scale-110 transition-transform`}>
                  <item.icon className={`text-2xl text-${item.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-ocean-foam leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}