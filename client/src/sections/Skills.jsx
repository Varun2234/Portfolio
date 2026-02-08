import { motion } from 'framer-motion'
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiJavascript, SiPython, SiCplusplus, SiHtml5, SiCss3,
  SiTailwindcss, SiGit, SiGithub, SiFigma, SiPostman,
  SiStripe, SiRazorpay, SiScikitlearn, SiPandas
} from 'react-icons/si'
import { FaDatabase, FaServer, FaCode, FaLayerGroup, FaNetworkWired, FaMemory } from 'react-icons/fa'
import { BsDiagram3Fill } from 'react-icons/bs'

const skillCategories = [
  {
    title: 'Languages',
    icon: FaCode,
    color: 'cyber-primary',
    skills: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
    ]
  },
  {
    title: 'Frontend',
    icon: FaLayerGroup,
    color: 'cyber-accent',
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ]
  },
  {
    title: 'Backend',
    icon: FaServer,
    color: 'cyber-secondary',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: FaServer },
      { name: 'JWT Auth', icon: FaCode },
    ]
  },
  {
    title: 'Database',
    icon: FaDatabase,
    color: 'cyber-primary',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 'Intermediate' },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'SQL', icon: FaDatabase },
    ]
  },
  {
    title: 'CS Fundamentals',
    icon: BsDiagram3Fill,
    color: 'cyber-accent',
    skills: [
      { name: 'OOPs', icon: FaCode },
      { name: 'Operating Systems', icon: FaMemory, level: 'Intermediate' },
      { name: 'DBMS', icon: FaDatabase },
      { name: 'Computer Networks', icon: FaNetworkWired, level: 'Intermediate' },
    ]
  },
  {
    title: 'Tools & Utilities',
    icon: FaCode,
    color: 'cyber-secondary',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Figma', icon: SiFigma, level: 'Intermediate' },
      { name: 'Postman', icon: SiPostman },
    ]
  },
  {
    title: 'Payment & ML',
    icon: FaLayerGroup,
    color: 'cyber-primary',
    skills: [
      { name: 'Stripe', icon: SiStripe, level: 'Intermediate' },
      { name: 'Razorpay', icon: SiRazorpay, level: 'Intermediate' },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Pandas', icon: SiPandas },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="w-24 h-1 bg-cyber-primary mx-auto rounded-full mb-4" />
          <p className="text-ocean-foam max-w-2xl mx-auto">Proficient in modern web technologies with strong computer science fundamentals</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                        className="glass-card p-6 hover-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-${category.color}/10 rounded-lg`}>
                  <category.icon className={`text-2xl text-${category.color}`} />
                </div>
                <h3 className={`text-xl font-bold text-${category.color}`}>{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 p-3 bg-cyber-dark/50 rounded-lg hover:bg-cyber-primary/5 transition-colors group">
                    <skill.icon className={`text-xl text-${category.color} group-hover:scale-110 transition-transform`} />
                    <div>
                      <p className="text-sm font-medium text-white">{skill.name}</p>
                      {skill.level && (
                        <p className="text-xs text-ocean-foam">{skill.level}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}