import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce complète avec paiement Stripe, gestion de stock et dashboard admin.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    filename: "ecommerce.tsx",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Real-Time Chat App",
    description: "Application de messagerie temps réel avec WebSockets, auth JWT et notifications push.",
    tech: ["TypeScript", "Socket.io", "Redis", "Docker"],
    filename: "chat-app.tsx",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Dashboard d'analytics avec visualisations de données interactives et rapports automatisés.",
    tech: ["Next.js", "D3.js", "Python", "AWS"],
    filename: "analytics.tsx",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "API Gateway",
    description: "API Gateway microservices avec rate limiting, caching et monitoring intégré.",
    tech: ["Go", "gRPC", "Kubernetes", "Prometheus"],
    filename: "gateway.go",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs text-muted-foreground mb-6 tracking-widest uppercase">
            <span className="syntax-comment">{'// projects.map()'}</span>
          </div>

          {/* Editor tabs for projects */}
          <div className="flex border-b border-border overflow-x-auto">
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(i)}
                className={`editor-tab ${i === activeTab ? 'active' : ''} whitespace-nowrap`}
              >
                <span>📄</span> {p.filename}
                {i === activeTab && (
                  <X className="w-3 h-3 ml-1 opacity-50 hover:opacity-100" />
                )}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -5 }}
                animate={i === activeTab ? { scale: 1, borderColor: "hsl(var(--primary))" } : { scale: 1 }}
                className={`rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ${
                  i === activeTab ? "holo-border holo-glow ring-1 ring-primary/50" : "holo-border"
                }`}
                onClick={() => setActiveTab(i)}
              >
                <div className="p-6 bg-card/80 backdrop-blur-sm h-full">
                  {/* Code-style header */}
                  <div className="text-xs mb-4">
                    <span className="syntax-keyword">export</span>{' '}
                    <span className="syntax-keyword">const</span>{' '}
                    <span className="syntax-function">{project.title.replace(/\s/g, '')}</span>{' '}
                    <span className="syntax-operator">= {'{'}</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:holo-text transition-all duration-500">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 font-sans leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded bg-secondary/80 syntax-variable border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 text-muted-foreground">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 text-xs hover:text-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 text-xs hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
                    </motion.a>
                  </div>

                  <div className="text-xs mt-4">
                    <span className="syntax-operator">{'}'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
