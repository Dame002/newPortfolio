import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, 
  Code2, Languages, Heart, BookOpen, Cpu, Download, 
  ChevronRight, Award, User, Globe, Sparkles, Terminal, HelpCircle
} from "lucide-react";
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

const cvData = {
  personal: {
    name: "Dame SECK",
    title: "Développeur Full Stack",
    location: "Casablanca, Maroc",
    email: "dameseck207@gmail.com",
    phone: "+212 (0) 6 45 95 08 58",
    address: "LOT OUMLIL RUE 14 NR 69 HAY EL HASSANI 20700 CASABLANCA"
  },
  education: [
    {
      period: "2023-2025",
      degree: "Technicien Spécialisé en Développement Informatique",
      school: "ISTA",
    },
    {
      period: "2022-2023",
      degree: "Baccalauréat",
    },
    {
      period: "2019-2020",
      degree: "Brevet de fin d'études moyennes",
    },
    {
      period: "2015-2016",
      degree: "Certificat de fin d'études élémentaires",
    }
  ],
  experience: [
    {
      period: "Mars - Avril 2024",
      title: "Stagiaire Développeur JavaScript",
      company: "Digicrafts, Casablanca",
      achievements: [
        "Développement de fonctionnalités en JavaScript",
        "Participation à des projets web",
        "Collaboration avec l'équipe technique"
      ]
    },
    {
      period: "2023 - Présent",
      title: "Community Manager",
      company: "Senmarocco",
      achievements: [
        "Gestion des pages Facebook et Instagram",
        "Réponse aux messages clients",
        "Gestion des commandes en ligne"
      ]
    }
  ],
  skills: {
    technical: ["JavaScript", "C/C++", "HTML/CSS", "React", "TypeScript", "Node.js", "Microsoft Word"],
    languages: [
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Notions de base" }
    ],
    soft: [
      "Travail en équipe",
      "Bonne élocution",
      "Sens des responsabilités",
      "Résolution de problèmes",
      "Fiabilité et ponctualité",
      "Professionnalisme"
    ]
  },
  interests: ["Football", "Lecture", "Technologies"]
};

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'about' | 'cv'>('about');

  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
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
          {/* Badge "// about.section" centré */}
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
                <span className="syntax-variable">about.section</span>
              </span>
              <Terminal className="w-3 h-3 syntax-operator" />
            </div>
          </motion.div>

          {/* Titre "À Propos" en holo-text */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-center holo-text"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            À Propos
          </motion.h1>

          <motion.p 
            className="text-lg text-muted-foreground font-sans text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Qui je suis et ce que je fais
          </motion.p>

          {/* Tabs pour switcher entre About et CV - AVEC TOOLTIPS AMÉLIORÉS */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {/* Bouton About avec tooltip */}
            <div className="relative group">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
                  activeTab === 'about'
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                <span className="syntax-keyword">cat</span>
                <span className="syntax-operator"> </span>
                <span className="syntax-string">about.md</span>
              </button>
              
              {/* Tooltip pour les novices */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap">
                <div className="bg-secondary/90 backdrop-blur-sm border border-border text-foreground text-xs rounded-lg py-1 px-2">
                  <span className="text-blue-400">📄</span> À propos de moi
                </div>
              </div>
            </div>

            {/* Bouton CV avec tooltip */}
            <div className="relative group">
              <button
                onClick={() => setActiveTab('cv')}
                className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
                  activeTab === 'cv'
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                <span className="syntax-keyword">./show-cv</span>
                <span className="syntax-operator"> </span>
                <span className="syntax-string">--format=full</span>
              </button>
              
              {/* Tooltip pour les novices */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap">
                <div className="bg-secondary/90 backdrop-blur-sm border border-border text-foreground text-xs rounded-lg py-1 px-2">
                  <span className="text-green-400">📋</span> Voir mon CV détaillé
                </div>
              </div>
            </div>

            {/* Petit indicateur d'aide */}
            <div className="relative group ml-2">
              <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap">
                <div className="bg-secondary/90 backdrop-blur-sm border border-border text-foreground text-xs rounded-lg py-2 px-3">
                  <p className="font-medium text-purple-400">Navigation</p>
                  <p className="text-muted-foreground text-[10px]">Cliquez sur les boutons pour changer de vue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu principal - Vue About (original restauré) */}
          {activeTab === 'about' && (
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

              {/* Terminal avec about.md original */}
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
                    Terminal — zsh — ~/about
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
          )}

          {/* Contenu principal - Vue CV (format lisible) */}
          {activeTab === 'cv' && (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Colonne gauche - Infos perso */}
              <div className="space-y-4">
                <div className="bg-secondary/20 backdrop-blur-sm rounded-xl border border-border p-5">
                  <h3 className="text-sm font-mono mb-4 flex items-center gap-2">
                    <User className="w-4 h-4 syntax-function" />
                    <span className="syntax-comment">{"// "}</span>
                    <span className="syntax-string">Informations</span>
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 syntax-variable" />
                      <span className="text-muted-foreground">{cvData.personal.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 syntax-string" />
                      <span className="text-muted-foreground">{cvData.personal.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 syntax-number" />
                      <span className="text-muted-foreground">{cvData.personal.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/20 backdrop-blur-sm rounded-xl border border-border p-5">
                  <h3 className="text-sm font-mono mb-4 flex items-center gap-2">
                    <Heart className="w-4 h-4 syntax-function" />
                    <span className="syntax-comment">{"// "}</span>
                    <span className="syntax-string">Centres d'intérêt</span>
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {cvData.interests.map(interest => (
                      <span key={interest} className="px-3 py-1 text-xs rounded-full bg-secondary/50 border border-border syntax-variable">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Colonne du milieu - Formation & Expériences */}
              <div className="md:col-span-2 space-y-4">
                {/* Formation */}
                <div className="bg-secondary/20 backdrop-blur-sm rounded-xl border border-border p-5">
                  <h3 className="text-sm font-mono mb-4 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 syntax-function" />
                    <span className="syntax-comment">{"// "}</span>
                    <span className="syntax-string">Formation</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {cvData.education.map((edu, i) => (
                      <div key={i} className="border-l-2 border-border pl-4">
                        <div className="flex items-center gap-2 text-xs syntax-number mb-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </div>
                        <div className="font-medium syntax-variable">{edu.degree}</div>
                        {edu.school && (
                          <div className="text-xs text-muted-foreground">{edu.school}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expériences */}
                <div className="bg-secondary/20 backdrop-blur-sm rounded-xl border border-border p-5">
                  <h3 className="text-sm font-mono mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 syntax-function" />
                    <span className="syntax-comment">{"// "}</span>
                    <span className="syntax-string">Expériences professionnelles</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {cvData.experience.map((exp, i) => (
                      <div key={i} className="border-l-2 border-border pl-4">
                        <div className="flex items-center gap-2 text-xs syntax-number mb-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                        <div className="font-medium syntax-variable">{exp.title}</div>
                        <div className="text-xs text-muted-foreground mb-2">{exp.company}</div>
                        <ul className="space-y-1">
                          {exp.achievements.map((ach, j) => (
                            <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="syntax-operator">→</span>
                              {ach}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compétences (en bas sur toute la largeur) */}
              <div className="md:col-span-3">
                <div className="bg-secondary/20 backdrop-blur-sm rounded-xl border border-border p-5">
                  <h3 className="text-sm font-mono mb-4 flex items-center gap-2">
                    <Code2 className="w-4 h-4 syntax-function" />
                    <span className="syntax-comment">{"// "}</span>
                    <span className="syntax-string">Compétences</span>
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Techniques */}
                    <div>
                      <h4 className="text-xs font-mono syntax-keyword mb-3">Techniques</h4>
                      <div className="flex flex-wrap gap-2">
                        {cvData.skills.technical.map(skill => (
                          <span key={skill} className="px-2 py-1 text-xs rounded bg-secondary/50 border border-border syntax-variable">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Langues */}
                    <div>
                      <h4 className="text-xs font-mono syntax-keyword mb-3">Langues</h4>
                      <div className="space-y-2">
                        {cvData.skills.languages.map(lang => (
                          <div key={lang.name} className="flex items-center gap-2">
                            <Globe className="w-3 h-3 syntax-string" />
                            <span className="text-xs text-muted-foreground">{lang.name} :</span>
                            <span className="text-xs syntax-number">{lang.level}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Soft skills */}
                    <div>
                      <h4 className="text-xs font-mono syntax-keyword mb-3">Soft Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {cvData.skills.soft.map(skill => (
                          <span key={skill} className="px-2 py-1 text-xs rounded bg-secondary/50 border border-border syntax-string">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom indicator - comme HeroSection */}
          <motion.div 
            className="flex justify-center gap-2 mt-12"
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