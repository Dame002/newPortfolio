import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const aboutLines = [
  { prompt: "~/portfolio$", command: "cat about.md", isCommand: true },
  { text: "" },
  { text: "## 👋 Hello World!" },
  { text: "" },
  {
    text: "Je suis Dame SECK, FullStack Developer spécialisé en Web, Mobile & IA.",
  },
  { text: "Je crée des applications performantes, élégantes et évolutives." },
  { text: "" },
  { text: "> React, TypeScript, Node.js & architectures cloud" },
  { text: "> Déploiement IA et solutions sur mesure pour vos projets" },
  { text: "> Passionné, méthodique et orienté résultats" },
  { text: "" },
  { prompt: "~/portfolio$", command: "echo $LOCATION", isCommand: true },
  { text: "Casablanca, Maroc 🇲🇦" },
  { text: "" },
  { prompt: "~/portfolio$", command: "_", isCommand: true, cursor: true },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs text-muted-foreground mb-6 tracking-widest uppercase">
            <span className="syntax-comment">{"// about.section"}</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile photo with hologram effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 mx-auto md:mx-0"
            >
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-holo-glow/40 via-primary/30 to-holo-glow-2/40 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden holo-border">
                  <img
                    src={profilePhoto}
                    alt="Photo de profil de Dame SECK"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-holo-glow/5 to-transparent pointer-events-none scanline" />
                </div>
              </div>
              <div className="text-center mt-3 text-xs text-muted-foreground">
                <span className="syntax-comment">{"// profile.jpg"}</span>
              </div>
            </motion.div>

            {/* Terminal */}
            <div className="holo-border rounded-lg overflow-hidden holo-glow flex-1">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "hsl(40 80% 55%)" }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "hsl(120 50% 45%)" }}
                  />
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  Terminal — zsh
                </span>
              </div>

              <div className="p-6 bg-background/80 backdrop-blur-sm font-mono text-sm leading-relaxed">
                {aboutLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="min-h-[1.5em]"
                  >
                    {line.isCommand ? (
                      <div className="flex items-center gap-2">
                        <span className="syntax-variable">{line.prompt}</span>
                        <span className="text-foreground">{line.command}</span>
                        {line.cursor && (
                          <motion.span
                            className="inline-block w-2 h-4 bg-foreground"
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          />
                        )}
                      </div>
                    ) : line.text?.startsWith("##") ? (
                      <span className="text-lg font-bold holo-text">
                        {line.text.replace("## ", "")}
                      </span>
                    ) : line.text?.startsWith(">") ? (
                      <span className="syntax-string">{line.text}</span>
                    ) : (
                      <span className="text-muted-foreground">{line.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
