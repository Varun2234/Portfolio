import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiPython, SiRazorpay } from 'react-icons/si'

const projects = [
  {
    title: 'Hospital Management System',
    duration: 'Sept 2025',
    description: 'Engineered a responsive healthcare platform with React.js, developing 15+ reusable components for appointment scheduling and user dashboards supporting 3 distinct roles (Admin, Doctor, Patient).',
    achievements: [
      'Built secure RESTful API with 25+ endpoints using Node.js & Express',
      'Implemented JWT-based authentication for role-based access control',
      'Integrated Razorpay API for payment processing (initiation, capture, verification)',
      'Seamless appointment scheduling and management system'
    ],
    tech: [
      { name: 'React', icon: SiReact, color: 'text-cyber-primary' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-cyber-accent' },
      { name: 'Express', icon: SiExpress, color: 'text-white' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-cyber-secondary' },
      { name: 'Razorpay', icon: SiRazorpay, color: 'text-cyber-primary' },
    ],
    color: 'cyber-primary',
    github: 'https://github.com/Varun2234/Hospital',
    live: '#'
  },
  {
    title: 'ML Cardiovascular Disease Detection',
    duration: 'Dec 2025',
    description: 'Developed a machine learning model to predict cardiovascular disease risk, achieving 98.8% accuracy on test dataset by leveraging over 1,000 patient clinical records.',
    achievements: [
      'Trained and evaluated 4 classification algorithms',
      'Identified Random Forest as optimal model using GridSearchCV',
      'Achieved Precision of 0.93 and Recall of 0.90',
      'Generated actionable insights using Matplotlib & Seaborn visualizations'
    ],
    tech: [
      { name: 'Python', icon: SiPython, color: 'text-cyber-accent' },
      { name: 'Scikit-learn', icon: SiPython, color: 'text-cyber-secondary' },
      { name: 'Pandas', icon: SiPython, color: 'text-cyber-primary' },
      { name: 'Matplotlib', icon: SiPython, color: 'text-cyber-accent' },
    ],
    color: 'cyber-accent',
    github: '#',
    live: '#'
  },
  {
    title: 'E-commerce Web Application',
    duration: 'July 2025',
    description: 'Built a full-stack e-commerce platform featuring 10+ core functionalities including user authentication, product listings, cart management, and multi-step checkout process.',
    achievements: [
      'Integrated Stripe API for secure online payments',
      'Used MongoDB with Mongoose for efficient data storage',
      'Integrated Cloudinary CDN reducing page load times by 20%',
      'Complete order management and tracking system'
    ],
    tech: [
      { name: 'React', icon: SiReact, color: 'text-cyber-primary' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-cyber-accent' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-cyber-secondary' },
      { name: 'Stripe', icon: SiRazorpay, color: 'text-cyber-primary' },
    ],
    color: 'cyber-secondary',
    github: 'https://github.com/Varun2234/forever',
    live: '#'
  },
  {
    title: 'Travel Planner Web App',
    duration: 'April 2025',
    description: 'Built a responsive Travel Planner web app using React.js, allowing users to explore and plan travel destinations interactively with seamless user experience.',
    achievements: [
      'Implemented fully responsive, mobile-first design',
      'Ensured compatibility across screen sizes from 360px to 1920px',
      'Interactive destination exploration features',
      'Optimized performance for mobile devices'
    ],
    tech: [
      { name: 'React', icon: SiReact, color: 'text-cyber-primary' },
      { name: 'HTML5', icon: SiReact, color: 'text-cyber-accent' },
      { name: 'CSS3', icon: SiReact, color: 'text-cyber-secondary' },
    ],
    color: 'cyber-primary',
    github: 'https://github.com/Varun2234/travel',
    live: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-cyber-primary mx-auto rounded-full mb-4" />
          <p className="text-ocean-foam max-w-2xl mx-auto">Showcasing real-world applications built with modern technologies</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                        className="glass-card overflow-hidden group hover-glow">
              <div className={`h-1 bg-${project.color}`} />
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`text-sm text-${project.color} font-mono`}>{project.duration}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyber-primary transition-colors mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.live} className={`p-2 rounded-lg bg-cyber-surface hover:bg-${project.color}/20 transition-colors`}>
                      <HiExternalLink className={`text-${project.color}`} />
                    </a>
                    <a href={project.github} className={`p-2 rounded-lg bg-cyber-surface hover:bg-${project.color}/20 transition-colors`}>
                      <HiCode className={`text-${project.color}`} />
                    </a>
                  </div>
                </div>

                <p className="text-ocean-foam mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-ocean-foam flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-${project.color} mt-1.5 flex-shrink-0`} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-cyber-primary/10">
                  {project.tech.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-1 px-3 py-1 rounded-full bg-cyber-dark/50 border border-cyber-primary/20">
                      <tech.icon className={`text-sm ${tech.color}`} />
                      <span className="text-xs text-ocean-foam">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}