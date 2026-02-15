import { motion } from "framer-motion";

const skillCategories = [
  {
    label: 'Frontend',
    color: 'syntax-function',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vue.js'],
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
    label: 'DevOps & Cloud',
    color: 'syntax-keyword',
    skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    label: 'Tools & Productivity',
    color: 'syntax-type',
    skills: ['Git', 'VS Code', 'Linux', 'Figma', 'Vite', 'Webpack'],
  },
  {
    label: 'AI / ML',
    color: 'syntax-number',
    skills: ['Python ML', 'TensorFlow', 'PyTorch', 'OpenCV', 'scikit-learn', 'Rafet AI'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs text-muted-foreground mb-6 tracking-widest uppercase">
            <span className="syntax-comment">{'// skills.json'}</span>
          </div>

          <div className="holo-border rounded-lg overflow-hidden holo-glow">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(40 80% 55%)' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(120 50% 45%)' }} />
              </div>
              <span className="text-xs text-muted-foreground ml-2">skills.json — VS Code</span>
            </div>

            <div className="p-6 bg-background/80 backdrop-blur-sm">
              <div className="code-line mb-4">
                <span className="line-number">1</span>
                <span className="syntax-operator">{'{'}</span>
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
                  <div className="code-line">
                    <span className="line-number">{catIdx * 3 + 2}</span>
                    <span className="ml-4">
                      <span className="syntax-function">"{category.label}"</span>
                      <span className="syntax-operator">: [</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">{catIdx * 3 + 3}</span>
                    <span className="ml-8 flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.span
                          key={skill}
                          className={`inline-block px-2.5 py-1 rounded text-xs border border-border bg-secondary/50 hover:holo-glow transition-all duration-300 cursor-default ${category.color}`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: catIdx * 0.1 + i * 0.05 }}
                        >
                          "{skill}"
                          {i < category.skills.length - 1 && <span className="syntax-operator">,</span>}
                        </motion.span>
                      ))}
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">{catIdx * 3 + 4}</span>
                    <span className="ml-4 syntax-operator">
                      ]{catIdx < skillCategories.length - 1 ? ',' : ''}
                    </span>
                  </div>
                </motion.div>
              ))}

              <div className="code-line">
                <span className="line-number">{skillCategories.length * 3 + 2}</span>
                <span className="syntax-operator">{'}'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
