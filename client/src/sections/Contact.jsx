import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { IoSend } from 'react-icons/io5'
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData)
      if (response.data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.response?.data?.error || 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-cyber-primary mx-auto rounded-full mb-4" />
          <p className="text-ocean-foam max-w-2xl mx-auto">Have a project in mind or want to collaborate? Let's connect!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="p-4 bg-cyber-primary/10 rounded-xl">
                <HiMail className="text-2xl text-cyber-primary" />
              </div>
              <div>
                <h3 className="text-sm text-ocean-foam">Email</h3>
                <a href="mailto:varunchinnu2005@gmail.com" className="text-lg text-white hover:text-cyber-primary transition-colors">
                  varunchinnu2005@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4">
              <div className="p-4 bg-cyber-accent/10 rounded-xl">
                <HiPhone className="text-2xl text-cyber-accent" />
              </div>
              <div>
                <h3 className="text-sm text-ocean-foam">Phone</h3>
                <a href="tel:+919701637301" className="text-lg text-white hover:text-cyber-accent transition-colors">
                  +91-9701637301
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4">
              <div className="p-4 bg-cyber-secondary/10 rounded-xl">
                <HiLocationMarker className="text-2xl text-cyber-secondary" />
              </div>
              <div>
                <h3 className="text-sm text-ocean-foam">Location</h3>
                <p className="text-lg text-white">NIT Raipur, Chhattisgarh, India</p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Coding Profiles</h3>
              <div className="space-y-3">
                <a href="https://leetcode.com/Varun2234" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-3 text-ocean-foam hover:text-cyber-primary transition-colors group">
                  <SiLeetcode className="text-xl group-hover:scale-110 transition-transform" />
                  <span>LeetCode: Varun2234 (1700+ Rating)</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-3 text-ocean-foam hover:text-cyber-accent transition-colors group">
                  <SiCodeforces className="text-xl group-hover:scale-110 transition-transform" />
                  <span>Codeforces: [Profile Link]</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-3 text-ocean-foam hover:text-cyber-secondary transition-colors group">
                  <SiCodechef className="text-xl group-hover:scale-110 transition-transform" />
                  <span>CodeChef: 3-Star Coder</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              {status.message && (
                <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'}`}>
                  {status.message}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ocean-foam mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                         className="w-full px-4 py-3 bg-cyber-dark border border-cyber-primary/30 rounded-lg focus:outline-none focus:border-cyber-primary text-white placeholder-ocean-foam/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ocean-foam mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                         className="w-full px-4 py-3 bg-cyber-dark border border-cyber-primary/30 rounded-lg focus:outline-none focus:border-cyber-primary text-white placeholder-ocean-foam/50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ocean-foam mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
                       className="w-full px-4 py-3 bg-cyber-dark border border-cyber-primary/30 rounded-lg focus:outline-none focus:border-cyber-primary text-white placeholder-ocean-foam/50" />
              </div>

              <div>
                <label className="block text-sm font-medium text-ocean-foam mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"
                          className="w-full px-4 py-3 bg-cyber-dark border border-cyber-primary/30 rounded-lg focus:outline-none focus:border-cyber-primary text-white placeholder-ocean-foam/50 resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-lg font-bold text-cyber-darker flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50">
                {isSubmitting ? 'Sending...' : <><IoSend /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}