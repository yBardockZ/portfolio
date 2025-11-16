import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiTool, FiBook } from 'react-icons/fi'

export default function Skills() {
  const skillsData = [
    {
      category: 'Backend',
      icon: FiCode,
      skills: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'Spring Security', 'SOLID Patterns'],
    },
    {
      category: 'Database',
      icon: FiDatabase,
      skills: ['MySQL', 'PostgreSQL', 'Oracle DB', 'MongoDB', 'Cache Systems'],
    },
    {
      category: 'Frontend',
      icon: FiTool,
      skills: ['React', 'HTML/CSS', 'JavaScript', 'Tailwind CSS', 'Alpine.js'],
    },
    {
      category: 'DevOps & Testing',
      icon: FiBook,
      skills: ['Docker', 'JUnit', 'Testes Automatizados', 'CI/CD', 'Git'],
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-800/50">
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
              Habilidades & Tecnologias
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Tecnologias que domino e uso no dia a dia</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:border-blue-400/60 transition-all hover:shadow-glow"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="text-4xl text-blue-400 mb-4">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {skill.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30 hover:bg-blue-500/40 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Outros Destaques</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-blue-400 font-semibold mb-2">🌍 Linguagem</h4>
              <p className="text-gray-300">Inglês para leitura, escrita e conversação (B1)</p>
            </div>
            <div>
              <h4 className="text-blue-400 font-semibold mb-2">📚 Metodologias</h4>
              <p className="text-gray-300">SOLID, Design Patterns, Metodologias Ágeis</p>
            </div>
            <div>
              <h4 className="text-blue-400 font-semibold mb-2">🎓 Educação</h4>
              <p className="text-gray-300">Ciência da Computação - 7° período (Descomplica)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
