import { motion } from 'framer-motion'
import { HiBriefcase, HiAcademicCap, HiExternalLink } from 'react-icons/hi'
import { SiOpenai } from 'react-icons/si'
import { FaCode, FaPython, FaBrain } from 'react-icons/fa'

const experiences = [
  {
    title: 'AI Trainer',
    company: 'Outlier AI',
    type: 'Remote Internship',
    duration: 'Dec 2024 – Jan 2025',
    icon: SiOpenai,
    color: 'cyber-primary',
    link: '#',
    description: 'Collaborated on Reinforcement Learning from Human Feedback (RLHF) projects to improve Large Language Models (LLMs).',
    achievements: [
      'Evaluated and ranked AI-generated responses based on factuality and logical coherence',
      'Provided detailed qualitative justifications for model fine-tuning',
      'Refined model performance by identifying and correcting hallucinations',
      'Ensured high-quality training data for generative AI systems'
    ]
  },
  {
    title: 'Graph Theory Programming Camp',
    company: 'AlgoUniversity',
    type: 'Remote Training Program',
    duration: 'July 2025',
    icon: FaCode,
    color: 'cyber-accent',
    link: 'https://drive.google.com/file/d/1w20rQNmVuEnJxmPGeav3QPL9AvZod_UN/view',
    description: 'Intensive programming camp under mentorship of Manas Kumar Verma (Codeforces Master).',
    achievements: [
      'Mastered advanced graph algorithms: Shortest Paths, MST, Network Flow, DP on Graphs',
      'Solved complex competitive programming problems',
      'Enhanced algorithmic efficiency and deep-dived into advanced data structures'
    ]
  },
  {
    title: 'Machine Learning Intern',
    company: 'Navodita Infotech',
    type: 'Remote Internship',
    duration: 'May 2025 – June 2025',
    icon: FaBrain,
    color: 'cyber-secondary',
    link: 'https://drive.google.com/file/d/16c-B2vZ0P95jJdqZ-c0AdGx6iwpvOu85/view',
    description: 'Developed comprehensive Food Rating Review System using sentiment analysis on Amazon Fine Food Reviews dataset.',
    achievements: [
      'Implemented VADER and transformer-based RoBERTa models',
      'Achieved 97% classification accuracy through fine-tuning',
      'Gained hands-on experience in Deep Learning pipelines and NLP'
    ]
    }
//   },
//   {
//     title: 'Python Development Intern',
//     company: 'Octanet Services Pvt',
//     type: 'Remote Internship',
//     duration: 'June 2024 – July 2024',
//     icon: FaPython,
//     color: 'cyber-primary',
//     link: '#',
//     description: 'Architected fully functional ATM Interface from scratch using Python with OOP principles.',
//     achievements: [
//       'Developed secure user authentication system',
//       'Built real-time balance inquiries and cash withdrawals',
//       'Implemented transaction history tracking'
//     ]
//   }
]

export default function InternshipsExperience() {
  return (
    <section id="experience" className="py-20 bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Internships & Experience</h2>
          <div className="w-24 h-1 bg-cyber-primary mx-auto rounded-full mb-4" />
          <p className="text-ocean-foam max-w-2xl mx-auto">
            Professional experience and specialized training programs in AI, ML, and Competitive Programming
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 relative overflow-hidden group hover-glow"
            >
              {/* Accent Line */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${exp.color} group-hover:w-2 transition-all`} />
              
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className={`p-4 bg-${exp.color}/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <exp.icon className={`text-3xl text-${exp.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyber-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className={`text-${exp.color} font-medium`}>{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className="text-ocean-foam text-sm">{exp.duration}</span>
                      <span className={`ml-3 px-3 py-1 bg-${exp.color}/10 text-${exp.color} rounded-full text-xs`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-ocean-foam mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-ocean-foam flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-${exp.color} mt-1.5 flex-shrink-0`} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.link !== '#' && (
                    <a 
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-${exp.color} hover:underline text-sm font-medium`}
                    >
                      <HiExternalLink /> View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}