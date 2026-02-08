import { motion } from 'framer-motion'
import { HiAcademicCap, HiCode, HiUserGroup, HiPencil } from 'react-icons/hi'
import { GiTrophy } from 'react-icons/gi'

const achievements = [
  {
    icon: HiAcademicCap,
    title: 'JEE Mains Excellence',
    description: 'Secured All India Rank (AIR) 12,907 in JEE Mains examination among 1,000,000+ candidates',
    color: 'cyber-primary'
  },
  {
    icon: HiCode,
    title: 'LeetCode Mastery',
    description: 'Contest Rating: 1700+ with 1050+ problems solved consistently',
    color: 'cyber-accent'
  },
  {
    icon: GiTrophy,
    title: 'CodeChef Achievement',
    description: '3-Star Competitive Programmer with Global Rank 32154 in Starters 66',
    color: 'cyber-secondary'
  },
  {
    icon: HiUserGroup,
    title: 'Sports Leadership',
    description: 'Team Captain - Led NIT Raipur Volleyball Championship 2025 to victory',
    color: 'cyber-primary'
  },
  {
    icon: HiPencil,
    title: 'Design Executive',
    description: 'Go Green, The Eco-Social Committee of NIT Raipur (Jan 2023 - May 2024)',
    color: 'cyber-accent'
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Achievements & Leadership</h2>
          <div className="w-24 h-1 bg-cyber-primary mx-auto rounded-full mb-4" />
          <p className="text-ocean-foam max-w-2xl mx-auto">Academic excellence, competitive programming milestones, and leadership roles</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                        className="glass-card p-8 text-center hover-glow group">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}
                          className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${item.color}/10 flex items-center justify-center border-2 border-${item.color}/30 group-hover:border-${item.color} transition-colors`}>
                <item.icon className={`text-4xl text-${item.color}`} />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-ocean-foam leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}