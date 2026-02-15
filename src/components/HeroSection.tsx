import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Terminal, Sparkles, Cpu } from "lucide-react";

// Données pour portfolio.ts
const portfolioCode = [
  { code: 'const developer = {', delay: 0 },
  { code: '  name: "Dame SECK",', delay: 0.3 },
  { code: '  role: "FullStack Developer",', delay: 0.6 },
  { code: '  location: "Casablanca, Maroc",', delay: 0.9 },
  { code: '  email: "dameseck207@gmail.com",', delay: 1.2 },
  { code: '  github: "github.com/Dame002",', delay: 1.5 },
  { code: '  linkedin: "linkedin.com/in/dame-seck",', delay: 1.8 },
  { code: '  available: true,', delay: 2.1 },
  { code: '  passion: "Créer des applications innovantes"', delay: 2.4 },
  { code: '};', delay: 2.7 },
  { code: '', delay: 3 },
  { code: 'export default developer;', delay: 3.3 },
];

// Données pour skills.json
const skillsCode = [
  { code: '{', delay: 0 },
  { code: '  "frontend": [', delay: 0.3 },
  { code: '    "React", "TypeScript", "Next.js",', delay: 0.6 },
  { code: '    "Tailwind CSS", "Framer Motion"', delay: 0.9 },
  { code: '  ],', delay: 1.2 },
  { code: '  "backend": [', delay: 1.5 },
  { code: '    "Node.js", "Express", "Python",', delay: 1.8 },
  { code: '    "Django", "GraphQL", "REST APIs"', delay: 2.1 },
  { code: '  ],', delay: 2.4 },
  { code: '  "database": [', delay: 2.7 },
  { code: '    "PostgreSQL", "MongoDB", "Redis"', delay: 3.0 },
  { code: '  ],', delay: 3.3 },
  { code: '  "devops": [', delay: 3.6 },
  { code: '    "Docker", "AWS", "CI/CD"', delay: 3.9 },
  { code: '  ]', delay: 4.2 },
  { code: '}', delay: 4.5 },
];

// Données pour config.ts
const configCode = [
  { code: 'interface Config {', delay: 0 },
  { code: '  theme: "dark" | "light";', delay: 0.3 },
  { code: '  language: "fr" | "en";', delay: 0.6 },
  { code: '  animations: boolean;', delay: 0.9 },
  { code: '  notifications: boolean;', delay: 1.2 },
  { code: '}', delay: 1.5 },
  { code: '', delay: 1.8 },
  { code: 'export const config: Config = {', delay: 2.1 },
  { code: '  theme: "dark",', delay: 2.4 },
  { code: '  language: "fr",', delay: 2.7 },
  { code: '  animations: true,', delay: 3.0 },
  { code: '  notifications: true,', delay: 3.3 },
  { code: '};', delay: 3.6 },
];

// Mapping des fichiers avec leurs données
const fileContents: Record<string, typeof portfolioCode> = {
  'portfolio.ts': portfolioCode,
  'skills.json': skillsCode,
  'config.ts': configCode,
};

const floatingSnippets = [
  { code: 'npm run build', x: '5%', y: '15%', duration: 7 },
  { code: 'git push origin main', x: '80%', y: '10%', duration: 8 },
  { code: 'docker compose up', x: '10%', y: '80%', duration: 9 },
  { code: 'SELECT * FROM skills', x: '70%', y: '85%', duration: 6 },
  { code: 'export default App', x: '85%', y: '60%', duration: 7.5 },
  { code: 'yarn deploy --prod', x: '15%', y: '40%', duration: 8.5 },
  { code: 'console.log("hello")', x: '45%', y: '20%', duration: 9.5 },
  { code: 'git commit -m "feat"', x: '60%', y: '45%', duration: 8 },
];

function syntaxHighlight(code: string) {
  const keywords = ['const', 'async', 'function', 'await', 'return', 'new', 'interface', 'export', 'default', 'true', 'false'];
  const types = ['FullStack', 'React', 'Node', 'Skills', 'App', 'Config'];
  const jsonKeys = ['frontend', 'backend', 'database', 'devops', 'theme', 'language', 'animations', 'notifications'];

  const tokens = code.match(/(\b\w+\b|[{}();,.:=[\]]|["'][^"']*["'])/g) || [];

  return tokens.map((token, i) => {
    if (keywords.includes(token)) return <span key={i} className="syntax-keyword">{token}</span>;
    if (types.includes(token) || jsonKeys.includes(token)) return <span key={i} className="syntax-type">{token}</span>;
    if (/^["']/.test(token) || /^\[/.test(token)) return <span key={i} className="syntax-string">{token}</span>;
    if (/^\d+$/.test(token)) return <span key={i} className="syntax-number">{token}</span>;
    if (['=', '>', '{', '}', '(', ')', ';', ',', '.', ':'].includes(token)) return <span key={i} className="syntax-operator">{token}</span>;
    return <span key={i} className="syntax-variable">{token}</span>;
  });
}

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [currentContent, setCurrentContent] = useState(portfolioCode);

  const tabs = ['portfolio.ts', 'skills.json', 'config.ts'];

  // Mettre à jour le contenu quand l'onglet change
  useEffect(() => {
    setCurrentContent(fileContents[tabs[activeTab]]);
    setVisibleLines(0); // Reset l'animation
  }, [activeTab]);

  // Animation de typing
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => (prev >= currentContent.length ? prev : prev + 1));
    }, 400);
    return () => clearInterval(timer);
  }, [currentContent]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced holographic background glow */}
      <div className="absolute inset-0">
        {/* Primary glow */}
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
        
        {/* Secondary glow */}
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

        {/* Accent glow */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(280 80% 60% / 0.25), transparent 70%)',
            left: '40%',
            bottom: '30%',
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating code snippets with enhanced animation */}
      {floatingSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute text-xs font-mono pointer-events-none"
          style={{ left: snippet.x, top: snippet.y }}
          animate={{
            y: [0, -40, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            opacity: [0.1, 0.5, 0.1],
            rotate: [0, i % 2 === 0 ? 5 : -5, 0],
          }}
          transition={{ 
            duration: snippet.duration, 
            repeat: Infinity, 
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          <span className="drop-shadow-[0_0_12px_hsl(var(--holo-glow)/0.7)]">
            <span className="syntax-comment">{'// '}</span>
            <span className="syntax-string">{snippet.code}</span>
          </span>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/30 border border-border/50 backdrop-blur-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-mono">
              <span className="syntax-comment">{"// "}</span>
              <span className="syntax-variable">Disponible pour missions</span>
            </span>
            <Cpu className="w-3 h-3 syntax-operator" />
          </motion.div>

          {/* Main title with enhanced glow */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 relative"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30" />
              <span className="relative holo-text">Dev FullStack</span>
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-muted-foreground font-sans max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="syntax-comment">{'/* '}</span>
            Architecte de solutions web modernes
            <span className="syntax-comment">{' */'}</span>
          </motion.p>
        </motion.div>

        {/* Code editor with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative group"
        >
          {/* Glow effect behind editor */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          
          {/* Editor container */}
          <div className="relative holo-border holo-glow rounded-xl overflow-hidden scanline">
            {/* Editor header with custom controls */}
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
                    <span className="syntax-variable">{tabs[activeTab]}</span>
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

            {/* Editor tabs with improved design - DYNAMIQUES */}
            <div className="flex border-b border-border bg-secondary/30">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-mono border-r border-border transition-all ${
                    index === activeTab 
                      ? 'bg-secondary/50 text-foreground border-b-2 border-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/20'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={index === activeTab ? 'syntax-string' : 'syntax-comment'}>📄</span>
                  <span className={index === activeTab ? 'syntax-variable' : ''}>{tab}</span>
                  {index === activeTab && (
                    <motion.span 
                      className="w-1 h-1 rounded-full bg-primary"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Code content with line numbers - DYNAMIQUE */}
            <div className="py-4 bg-background/90 backdrop-blur-sm min-h-[320px]">
              <div className="relative">
                {/* Line numbers background */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-secondary/20 border-r border-border" />
                
                {currentContent.map((snippet, i) => (
                  <motion.div
                    key={i}
                    className="code-line relative hover:bg-secondary/10 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={i < visibleLines ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <span className="line-number relative z-10">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex-1 ml-4 relative z-10">
                      {i < visibleLines ? (
                        <span className="flex items-center gap-1">
                          {syntaxHighlight(snippet.code)}
                        </span>
                      ) : (
                        <span className="opacity-0">placeholder</span>
                      )}
                      {i === visibleLines - 1 && (
                        <motion.span
                          className="inline-block w-2.5 h-5 bg-primary ml-1"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Editor footer - DYNAMIQUE */}
            <div className="flex items-center justify-between px-4 py-2 bg-secondary/30 border-t border-border text-[10px] font-mono">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="syntax-variable">
                    {activeTab === 0 ? 'TypeScript' : activeTab === 1 ? 'JSON' : 'TypeScript'}
                  </span>
                </span>
                <span className="syntax-operator">|</span>
                <span className="syntax-string">UTF-8</span>
                <span className="syntax-operator">|</span>
                <span className="syntax-number">
                  {activeTab === 0 ? 'developer' : activeTab === 1 ? 'skills' : 'config'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="syntax-comment">Ln {visibleLines}, Col 1</span>
                <span className="syntax-keyword">Spaces: 2</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
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
      </div>
    </section>
  );
}