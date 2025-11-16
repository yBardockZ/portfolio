import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

export default function Experience() {
  const experiences = [
    {
      company: 'Movimento Futuro',
      position: 'Desenvolvedor Full-stack',
      type: 'Trabalho Voluntário',
      period: '2025 - Presente',
      location: 'Remoto',
      description: [
        'Implementei um web blog utilizando PHP, Laravel, React e PostgreSQL',
        'Criação e manutenção de páginas com CMS Wordpress',
        'Desenvolvimento de APIs RESTful e componentes React interativos',
      ],
      skills: ['PHP', 'Laravel', 'React', 'PostgreSQL', 'Wordpress'],
      color: 'from-blue-400 to-cyan-400',
    },
  ]

  const education = [
    {
      institution: 'Faculdade Descomplica',
      degree: 'Ciência da Computação',
      period: 'Dezembro 2022 - Cursando (7° período)',
      description: 'Formação com foco em desenvolvimento full-stack, metodologias ágeis, CI/CD e computação distribuída',
      skills: ['Java', 'Python', 'C#', 'HTML/CSS/JS', 'Metodologias Ágeis', 'CI/CD'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experiência Profissional
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">Minha jornada no desenvolvimento de software</p>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20 hover:border-blue-400/60 transition-all hover:shadow-glow"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-blue-400">{exp.company}</p>
                    </div>
                    <span className="text-sm bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 border border-blue-400/30">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-400 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <FiCalendar />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex gap-3">
                        <span className="text-blue-400 font-bold">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-400/30"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Educação
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">Formação acadêmica e desenvolvimento contínuo</p>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-400/60 transition-all hover:shadow-glow"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-cyan-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-4 flex items-center gap-2">
                    <FiCalendar /> {edu.period}
                  </p>
                  <p className="text-gray-300 mb-6">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-400/30"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
