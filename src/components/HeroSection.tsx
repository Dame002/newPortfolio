import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeSnippets = [
  { code: 'const developer = new FullStack();', delay: 0 },
  { code: 'async function buildApp(idea) {', delay: 0.5 },
  { code: '  const frontend = await React.create(idea);', delay: 1 },
  { code: '  const backend = await Node.deploy(api);', delay: 1.5 },
  { code: '  return { ...frontend, ...backend };', delay: 2 },
  { code: '}', delay: 2.5 },
  { code: '', delay: 3 },
  { code: 'interface Skills {', delay: 3.2 },
  { code: '  languages: ["TypeScript", "Python", "Go"];', delay: 3.7 },
  { code: '  passion: "infinite";', delay: 4.2 },
  { code: '}', delay: 4.5 },
];

const floatingSnippets = [
  { code: 'npm run build', x: '10%', y: '20%', duration: 7 },
  { code: 'git push origin main', x: '70%', y: '15%', duration: 8 },
  { code: 'docker compose up', x: '15%', y: '70%', duration: 9 },
  { code: 'SELECT * FROM skills', x: '65%', y: '75%', duration: 6 },
  { code: 'export default App', x: '80%', y: '45%', duration: 7.5 },
  { code: 'yarn deploy --prod', x: '5%', y: '50%', duration: 8.5 },
];

function syntaxHighlight(code: string) {
  const keywords = ['const', 'async', 'function', 'await', 'return', 'new', 'interface', 'export', 'default'];
  const types = ['FullStack', 'React', 'Node', 'Skills', 'App'];
  const strings = /"[^"]*"|'[^']*'/g;
  const numbers = /\b\d+\b/g;

  let parts: { text: string; className: string }[] = [];
  let remaining = code;

  // Simple tokenizer
  const tokens = remaining.split(/(\s+|[{}();,.:=]|"[^"]*"|'[^']*'|\[.*?\])/);
  
  return tokens.map((token, i) => {
    if (keywords.includes(token)) return <span key={i} className="syntax-keyword">{token}</span>;
    if (types.includes(token)) return <span key={i} className="syntax-type">{token}</span>;
    if (token.match(/^["']/) || token.match(/^\[/)) return <span key={i} className="syntax-string">{token}</span>;
    if (token.match(/^\d+$/)) return <span key={i} className="syntax-number">{token}</span>;
    if (['=', '>', '{', '}', '(', ')', ';', ',', '.', ':', '...'].includes(token)) return <span key={i} className="syntax-operator">{token}</span>;
    if (token.match(/^[a-z]/)) return <span key={i} className="syntax-variable">{token}</span>;
    return <span key={i}>{token}</span>;
  });
}

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= codeSnippets.length) return prev;
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Holographic background glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(180 80% 60% / 0.3), transparent)',
            left: '20%',
            top: '20%',
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(200 100% 50% / 0.3), transparent)',
            right: '15%',
            bottom: '25%',
          }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Floating code snippets (hologram effect) */}
      {floatingSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute text-xs font-mono opacity-0 pointer-events-none"
          style={{ left: snippet.x, top: snippet.y, color: 'hsl(var(--holo-glow) / 0.4)' }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.4, 0.15],
            rotateX: [0, 5, 0],
          }}
          transition={{ duration: snippet.duration, repeat: Infinity, delay: i * 0.8 }}
        >
          <span className="drop-shadow-[0_0_8px_hsl(var(--holo-glow)/0.5)]">{snippet.code}</span>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="text-sm text-muted-foreground mb-4 tracking-widest uppercase">
            <span className="syntax-comment">{'// welcome to my portfolio'}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 holo-text">
            Dev FullStack
          </h1>
          <p className="text-lg text-muted-foreground font-sans">
            Architecte de solutions web modernes
          </p>
        </motion.div>

        {/* Code editor hologram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="holo-border holo-glow rounded-lg overflow-hidden scanline"
          style={{ perspective: '1000px' }}
        >
          {/* Editor title bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(40 80% 55%)' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(120 50% 45%)' }} />
            </div>
            <span className="text-xs text-muted-foreground ml-2">portfolio.ts — VS Code</span>
          </div>

          {/* Editor tabs */}
          <div className="flex border-b border-border">
            <div className="editor-tab active">
              <span>📄</span> portfolio.ts
            </div>
            <div className="editor-tab">
              <span>📄</span> skills.json
            </div>
          </div>

          {/* Code content */}
          <div className="py-4 bg-background/80 backdrop-blur-sm min-h-[280px]">
            {codeSnippets.map((snippet, i) => (
              <motion.div
                key={i}
                className="code-line"
                initial={{ opacity: 0, x: -10 }}
                animate={i < visibleLines ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3 }}
              >
                <span className="line-number">{i + 1}</span>
                <span className="flex-1">
                  {i < visibleLines ? syntaxHighlight(snippet.code) : ''}
                  {i === visibleLines - 1 && (
                    <motion.span
                      className="inline-block w-2 h-4 bg-foreground ml-0.5"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
