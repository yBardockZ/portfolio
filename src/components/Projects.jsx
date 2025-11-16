import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'Web Blog - MM',
      description: 'Blog web completo desenvolvido com PHP, Laravel e MySQL. Sistema de gerenciamento de conteúdo com autenticação, comentários e categorização de posts.',
      technologies: ['PHP', 'Laravel', 'Blade', 'MySQL', 'Boostrap5'],
      features: ['CRUD', 'Sistema de Autenticação', 'Gerenciamento de Posts', 'Responsivo'],
      link: 'https://movimentofuturo.org',
      github: 'https://github.com/yBardockZ/Blog-MM',
    },
    {
      title: 'API REST - Spring Boot',
      description: 'API robusta desenvolvida com Spring Boot, seguindo padrões SOLID e implementando segurança com Spring Security e Cache',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
      features: ['Autenticação JWT', 'Cache Systems', 'Testes Unitários', 'Documentação Swagger'],
      github: 'https://github.com/yBardockZ/DeliveryFoods',
      featured: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-800/50">
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
              Projetos Recentes
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Alguns dos projetos em que trabalhei ou estou trabalhando</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative rounded-lg border transition-all hover:shadow-glow overflow-hidden h-full ${
                project.featured
                  ? 'lg:col-span-2 bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-blue-500/40 hover:border-blue-400/60'
                  : 'bg-gradient-to-br from-slate-700/50 to-slate-800/50 border-blue-500/20 hover:border-blue-400/60'
              }`}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex-1">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="ml-4 px-3 py-1 bg-blue-500/40 text-blue-200 rounded-full text-xs border border-blue-400/50 font-semibold whitespace-nowrap">
                      Em Desenvolvimento
                    </span>
                  )}
                </div>

                <p className="text-gray-300 mb-6 flex-1">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm text-blue-400 font-semibold mb-3">Destaques:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-400/30">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 font-semibold mb-3">Tecnologias:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-xs border border-blue-400/20 hover:border-blue-400/60 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-blue-500/20">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <FiExternalLink /> Ver Projeto
                    </motion.a>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FiGithub /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/yBardockZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/60 rounded-lg font-semibold text-blue-300 hover:bg-blue-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub /> Ver Mais Projetos no GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
