import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'thalles_leopoldino@outlook.com',
      link: 'mailto:thalles_leopoldino@outlook.com',
    },
    {
      icon: FiPhone,
      label: 'Telefone',
      value: '(21) 96561-5548',
      link: 'tel:+5521965615548',
    },
    {
      icon: FiMapPin,
      label: 'Localização',
      value: 'Fonseca, Niterói - RJ',
      link: '#',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Thalles Leopoldino',
      link: 'https://www.linkedin.com/in/thalles-leopoldino',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estou sempre aberto para novas oportunidades e conversas. Sinta-se à vontade para me contactar através de qualquer um dos canais abaixo!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:border-blue-400/60 transition-all hover:shadow-glow"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-4xl text-blue-400 mb-4 flex justify-center"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon />
                  </motion.div>
                  <p className="text-gray-400 text-sm mb-2">{method.label}</p>
                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors break-words">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="relative bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm p-12 rounded-lg border border-blue-500/40 text-center overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Pronto para começar algo novo?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Tenho interesse em trabalhar em desafios interessantes. Deixe-me saber como posso ajudar!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="mailto:thalles_leopoldino@outlook.com"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-glow-lg transition-all inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail /> Me Envie um Email
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/thalles-leopoldino"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin /> Conecte no LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
