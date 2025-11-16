import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="border-t border-blue-500/20 bg-gradient-to-b from-slate-800/50 to-slate-900/80 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Thalles
            </h3>
            <p className="text-gray-400">Desenvolvedor Full-stack | Java | PHP | React</p>
          </motion.div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Home', 'Skills', 'Experiência', 'Projetos', 'Contato'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase().replace(/ê|ã/, '')}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    → {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/yBardockZ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/thalles-leopoldino"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="mailto:thalles_leopoldino@outlook.com"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white hover:shadow-glow transition-all"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-blue-500/20 pt-8 mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              © {currentYear} Thalles Leopoldino. Todos os direitos reservados.
            </p>
            <p className="text-center sm:text-right">
              Desenvolvido com <span className="text-blue-400">React</span> +{' '}
              <span className="text-cyan-400">Tailwind CSS</span> + Framer Motion
            </p>
          </div>
        </motion.div>

        {/* Scroll to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-glow hover:shadow-glow-lg transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-xl">↑</span>
        </motion.button>
      </div>
    </motion.footer>
  )
}
