import { motion } from "framer-motion";
import { Code2, Sparkles, Cpu, Terminal } from "lucide-react";

const skillCategories = [
  {
    label: 'Frontend',
    color: 'syntax-function',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Framer Motion'],
  },
  {
    label: 'Backend',
    color: 'syntax-variable',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL', 'REST APIs'],
  },
  {
    label: 'Database',
    color: 'syntax-string',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase', 'Firebase'],
  },
  {
    label: 'DevOps',
    color: 'syntax-keyword',
    skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    label: 'Tools',
    color: 'syntax-type',
    skills: ['Git', 'VS Code', 'Figma', 'Linux', 'Webpack', 'Vite'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      {/* Background glow - comme HeroSection */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(180 80% 60% / 0.4), transparent 70%)',
            left: '15%',
            top: '15%',
          }}
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(200 100% 50% / 0.3), transparent 70%)',
            right: '10%',
            bottom: '10%',
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge "// skills.json" centré */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/30 border border-border/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-mono">
                <span className="syntax-comment">{"// "}</span>
                <span className="syntax-variable">skills.json</span>
              </span>
              <Cpu className="w-3 h-3 syntax-operator" />
            </div>
          </motion.div>

          {/* Titre "Mes Compétences" en holo-text */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-center holo-text"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Mes Compétences
          </motion.h1>

          <motion.p 
            className="text-lg text-muted-foreground font-sans text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Technologies et outils que je maîtrise au quotidien
          </motion.p>

          {/* Code editor - style HeroSection */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            {/* Glow effect behind editor */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
            {/* Editor container */}
            <div className="relative holo-border holo-glow rounded-xl overflow-hidden scanline">
              {/* Editor header */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-destructive/70"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full" 
                      style={{ background: 'hsl(40 80% 55%)' }}
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full" 
                      style={{ background: 'hsl(120 50% 45%)' }}
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <Code2 className="w-3 h-3 syntax-operator" />
                    <span className="text-xs font-mono">
                      <span className="syntax-variable">skills.json</span>
                      <span className="syntax-operator"> — </span>
                      <span className="syntax-string">VS Code</span>
                    </span>
                  </div>
                </div>
                
                {/* Window controls */}
                <div className="flex items-center gap-3">
                  <Terminal className="w-3 h-3 syntax-function" />
                  <Sparkles className="w-3 h-3 syntax-number" />
                </div>
              </div>

              {/* Code content avec numéros de ligne */}
              <div className="p-6 bg-background/90 backdrop-blur-sm">
                <div className="relative">
                  {/* Ligne d'ouverture */}
                  <div className="code-line mb-4">
                    <span className="line-number relative z-10">01</span>
                    <span className="flex-1 ml-4">
                      <span className="syntax-operator">{'{'}</span>
                    </span>
                  </div>

                  {skillCategories.map((category, catIdx) => (
                    <motion.div
                      key={category.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1, duration: 0.4 }}
                      className="mb-4"
                    >
                      {/* Nom de la catégorie */}
                      <div className="code-line">
                        <span className="line-number relative z-10">{String(catIdx * 3 + 2).padStart(2, '0')}</span>
                        <span className="ml-4">
                          <span className="syntax-function">"{category.label}"</span>
                          <span className="syntax-operator">: [</span>
                        </span>
                      </div>

                      {/* Skills */}
                      <div className="code-line">
                        <span className="line-number relative z-10">{String(catIdx * 3 + 3).padStart(2, '0')}</span>
                        <span className="ml-8 flex flex-wrap gap-2">
                          {category.skills.map((skill, i) => (
                            <motion.span
                              key={skill}
                              className={`inline-block px-3 py-1.5 rounded text-xs border border-border/50 bg-secondary/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 cursor-default ${category.color}`}
                              whileHover={{ scale: 1.05, y: -2 }}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: catIdx * 0.1 + i * 0.03 }}
                            >
                              "{skill}"
                              {i < category.skills.length - 1 && <span className="syntax-operator ml-0.5">,</span>}
                            </motion.span>
                          ))}
                        </span>
                      </div>

                      {/* Fermeture de la catégorie */}
                      <div className="code-line">
                        <span className="line-number relative z-10">{String(catIdx * 3 + 4).padStart(2, '0')}</span>
                        <span className="ml-4">
                          <span className="syntax-operator">
                            ]{catIdx < skillCategories.length - 1 ? ',' : ''}
                          </span>
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Fermeture finale */}
                  <div className="code-line">
                    <span className="line-number relative z-10">{String(skillCategories.length * 3 + 2).padStart(2, '0')}</span>
                    <span className="ml-4">
                      <span className="syntax-operator">{'}'}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Editor footer - comme HeroSection */}
              <div className="flex items-center justify-between px-4 py-2 bg-secondary/30 border-t border-border text-[10px] font-mono">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="syntax-variable">JSON</span>
                  </span>
                  <span className="syntax-operator">|</span>
                  <span className="syntax-string">UTF-8</span>
                  <span className="syntax-operator">|</span>
                  <span className="syntax-number">{skillCategories.length} catégories</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="syntax-comment">Ln 1, Col 1</span>
                  <span className="syntax-keyword">Spaces: 2</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom indicator - comme HeroSection */}
          <motion.div 
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary/30"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}