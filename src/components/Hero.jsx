import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Olá, eu sou{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Thalles
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-300 mb-8"
        >
          Desenvolvedor Full-stack | Java | Spring Boot | PHP | Laravel | React
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Com 2 anos de estudo e 5 meses de experiência prática, apaixonado por criar APIs robustas e aplicações web modernas. Sempre buscando aprender novas tecnologias e melhores práticas de desenvolvimento.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-glow transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/thalles-leopoldino"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 text-2xl text-gray-400"
        >
          <motion.a
            href="https://www.github.com/yBardockZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/thalles-leopoldino"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FiLinkedin />
          </motion.a>
          <motion.a
            href="mailto:thalles_leopoldino@outlook.com"
            className="hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FiMail />
          </motion.a>
          <motion.a
            href="tel:+5521965615548"
            className="hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FiPhone />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
