import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Code2, Sparkles, Cpu, Terminal, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Coin des Vip",
    description: "Coin des VIPs est une plateforme exclusive fondée pour rassembler les passionnés de mode et les adeptes de tendances haut de gamme. Elle propose une sélection raffinée de vêtements et accessoires pour hommes et femmes, allant des robes élégantes aux vestes modernes, en passant par les tops et pantalons les plus en vogue. L’objectif est d’offrir une expérience shopping unique, mêlant qualité, style contemporain et exclusivité, pour une clientèle exigeante à la recherche de pièces qui se démarquent.",
    tech: ["HTML", "CSS", "JavaScript", "Laravel"],
    filename: "coin-des-vip.blade.php",
    github: "https://github.com/Dame002/projetFin",
    demo: "https://coindesvips.netlify.app/",
  },
  {
    title: "Daarul Alam",
    description: "Fondé en 2024, Daarul Alam est une initiative pionnière d'enseignement islamique en ligne, offrant un accès facile et authentique aux sciences religieuses pour les musulmans francophones à travers le monde.",
    tech: ["HTML", "CSS", "SCSS", "JavaScript", "Laravel"],
    filename: "daarul-alam.blade.php",
    github: "https://github.com/Dame002/lms-d.alam",
    demo: "#",
  },
  {
    title: "MiniShop UI",
    description: "MiniShop UI est un mini-projet Flutter centré sur la conception d'une interface moderne de boutique. L'application propose deux écrans — Produits et Commandes — permettant d'afficher une grille de produits avec images, prix et actions, ainsi qu'une vue panier simulée. L'objectif principal est de maîtriser la mise en page, la navigation et le design (cartes, couleurs, icônes) plutôt que la logique métier.",
    tech: ["C++", "Dart", "CMake", "Swift", "C", "HTML"],
    filename: "minishop-ui.dart",
    github: "https://github.com/Dame002/miniProjetFlutter",
    demo: "#",
  },
  {
    title: "Rafet AI",
    description: "Rafet AI est un système expert de diagnostic dermatologique panafricain qui utilise l'intelligence artificielle pour analyser les affections cutanées, assister les professionnels de santé et améliorer l'accès à un diagnostic rapide, fiable et adapté aux réalités locales.",
    tech: ["TypeScript", "CSS", "Other"],
    filename: "rafet-ai.tsx",
    github: "https://github.com/Dame002/rafetAI",
    demo: "#",
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
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
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

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge "// projects.map()" centré */}
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
                <span className="syntax-variable">projects.map()</span>
              </span>
              <FolderOpen className="w-3 h-3 syntax-operator" />
            </div>
          </motion.div>

          {/* Titre "Mes Projets" en holo-text */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-center holo-text"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Mes Projets
          </motion.h1>

          <motion.p 
            className="text-lg text-muted-foreground font-sans text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Des réalisations concrètes pour des besoins réels
          </motion.p>

          {/* VS Code Window */}
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
                      <span className="syntax-variable">projects</span>
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

              {/* Editor tabs for projects */}
              <div className="flex border-b border-border bg-secondary/30 overflow-x-auto">
                {projects.map((p, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleTabClick(i)}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-mono border-r border-border transition-all ${
                      i === activeTab 
                        ? 'bg-secondary/50 text-foreground border-b-2 border-primary' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/20'
                    }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className={i === activeTab ? 'syntax-string' : 'syntax-comment'}>📄</span>
                    <span className={i === activeTab ? 'syntax-variable' : ''}>{p.filename}</span>
                    {i === activeTab && (
                      <>
                        <X className="w-3 h-3 ml-1 opacity-50 hover:opacity-100" />
                        <motion.span 
                          className="w-1 h-1 rounded-full bg-primary ml-1"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Projects grid */}
              <div className="p-6 bg-background/90 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project, i) => (
                    <motion.div
                      key={i}
                      ref={(el) => { cardRefs.current[i] = el; }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                      animate={i === activeTab ? { scale: 1.02, borderColor: "hsl(var(--primary))" } : { scale: 1 }}
                      className={`rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 border ${
                        i === activeTab 
                          ? 'border-primary/50 bg-primary/5' 
                          : 'border-border hover:border-primary/30'
                      }`}
                      onClick={() => setActiveTab(i)}
                    >
                      <div className="p-5">
                        {/* Code-style header avec numéro de ligne */}
                        <div className="flex items-center gap-2 text-xs mb-3">
                          <span className="text-gray-500 font-mono">{i + 1}</span>
                          <span className="syntax-keyword">export</span>
                          <span className="syntax-keyword">const</span>
                          <span className="syntax-function">{project.title.replace(/\s/g, '')}</span>
                          <span className="syntax-operator">= {'{'}</span>
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:holo-text transition-all duration-500">
                          {project.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4 font-sans leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tags techniques */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-1 rounded bg-secondary/30 border border-border/50 syntax-variable"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Liens */}
                        <div className="flex items-center justify-between">
                          <div className="flex gap-4">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-3.5 h-3.5 syntax-variable" />
                              <span className="syntax-comment">// code</span>
                            </motion.a>
                            
                            {/* Lien demo - conditionnel */}
                            {project.demo !== "#" ? (
                              <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="w-3.5 h-3.5 syntax-string" />
                                <span className="syntax-comment">// demo</span>
                              </motion.a>
                            ) : (
                              <span className="flex items-center gap-1 text-xs text-muted-foreground opacity-50 cursor-not-allowed">
                                <ExternalLink className="w-3.5 h-3.5 syntax-string" />
                                <span className="syntax-comment">// bientôt</span>
                              </span>
                            )}
                          </div>
                          
                          {/* Indicateur de fichier actif */}
                          {i === activeTab && (
                            <motion.span 
                              className="w-1.5 h-1.5 rounded-full bg-primary"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          )}
                        </div>

                        {/* Fermeture */}
                        <div className="text-xs mt-3">
                          <span className="syntax-operator">{'}'}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Editor footer */}
              <div className="flex items-center justify-between px-4 py-2 bg-secondary/30 border-t border-border text-[10px] font-mono">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="syntax-variable">TypeScript</span>
                  </span>
                  <span className="syntax-operator">|</span>
                  <span className="syntax-string">{projects.length} projets</span>
                  <span className="syntax-operator">|</span>
                  <span className="syntax-number">tab size: 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="syntax-comment">Ln {activeTab + 1}, Col 1</span>
                  <span className="syntax-keyword">UTF-8</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom indicator */}
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