import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'

const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'National Institute of Technology Raipur',
    year: '2022 - 2026',
    grade: '8.16/10.0 CGPA',
    color: 'cyber-primary',
    details: 'Pursuing B.Tech with focus on Software Development, Data Structures, Algorithms, and Machine Learning'
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: 'Narayana Junior College, Vijayawada',
    year: '2022',
    grade: '89.5%',
    color: 'cyber-accent',
    details: 'MPC (Mathematics, Physics, Chemistry) with JEE preparation'
  },
  {
    degree: 'Secondary School (Class X)',
    institution: 'Viswabharati English Medium High School',
    year: '2020',
    grade: '99.34%',
    color: 'cyber-secondary',
    details: 'SSC with distinction, foundation in Mathematics and Science'
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <div className="w-24 h-1 bg-cyber-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div key={edu.degree} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                        className="glass-card p-6 md:p-8 relative overflow-hidden group">
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${edu.color} group-hover:w-2 transition-all`} />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-${edu.color}/10 rounded-lg`}>
                    <HiAcademicCap className={`text-2xl text-${edu.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-ocean-foam">{edu.institution}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className={`inline-block px-4 py-2 bg-${edu.color}/10 text-${edu.color} rounded-lg font-mono font-bold`}>
                    {edu.grade}
                  </span>
                  <p className="text-ocean-foam text-sm mt-1">{edu.year}</p>
                </div>
              </div>
              <p className="text-ocean-foam pl-16">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}