import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Calendar, Clock, CheckCircle, AlertCircle, Code2, Sparkles, Cpu, Terminal, Mail as MailIcon, User, MessageSquare, AtSign } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    const params = new URLSearchParams({
      'form-name': 'contact',
      'name': formState.name,
      'email': formState.email,
      'message': formState.message,
      '_replyto': formState.email,
      '_subject': `📬 Portfolio - Message de ${formState.name || 'visiteur'}`,
    });
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  const contactLinks = [
    {
      icon: Github,
      label: 'github.com/Dame002',
      href: 'https://github.com/Dame002',
      color: 'syntax-variable',
      description: 'Voir mes projets',
    },
    {
      icon: Linkedin,
      label: 'linkedin.com/in/dame-seck',
      href: 'https://www.linkedin.com/in/dame-seck-9ba393293/',
      color: 'syntax-string',
      description: 'Mon réseau pro',
    },
  ];

  const availabilityInfo = [
    { icon: MapPin, text: 'Basé à Casablanca', color: 'syntax-function' },
    { icon: Calendar, text: 'Disponible immédiatement', color: 'syntax-number' },
    { icon: Clock, text: 'Réponse sous 24h', color: 'syntax-variable' },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(180 80% 60% / 0.4), transparent 70%)',
            left: '5%',
            top: '10%',
          }}
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(200 100% 50% / 0.3), transparent 70%)',
            right: '5%',
            bottom: '5%',
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge explicatif */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/50 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm md:text-xs font-mono">
                <span className="syntax-comment">{"// "}</span>
                <span className="syntax-variable">Formulaire de contact</span>
              </span>
              <MailIcon className="w-3.5 h-3.5 md:w-3 md:h-3 syntax-operator" />
            </div>
          </motion.div>

          {/* Titre */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-4 text-center holo-text px-2"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Discutons de votre projet
          </motion.h1>

          <motion.p 
            className="text-base md:text-lg text-muted-foreground font-sans text-center mb-8 md:mb-12 px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Une idée ? Un projet ? Remplissez le formulaire et je vous réponds dans la journée !
          </motion.p>

          {/* VS Code Window */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
            {/* Editor container */}
            <div className="relative holo-border holo-glow rounded-xl overflow-hidden scanline">
              {/* Editor header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-4 py-3 md:px-4 md:py-3 bg-secondary/50 border-b border-border">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 md:w-3 md:h-3 rounded-full bg-destructive/70" />
                    <div className="w-3 h-3 md:w-3 md:h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 md:w-3 md:h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex items-center gap-1 ml-1 md:ml-2">
                    <Code2 className="w-4 h-4 md:w-3.5 md:h-3.5 syntax-operator" />
                    <span className="text-xs md:text-xs font-mono truncate max-w-[180px] sm:max-w-none">
                      <span className="syntax-variable">contact.tsx</span>
                      <span className="syntax-operator hidden xs:inline"> — </span>
                      <span className="syntax-string hidden xs:inline">VS Code</span>
                    </span>
                  </div>
                </div>
                
                {/* Message d'aide */}
                <div className="flex items-center gap-1 px-3 py-1 md:px-2 md:py-1 bg-primary/10 rounded w-full sm:w-auto justify-center sm:justify-start">
                  <span className="text-xs md:text-xs text-primary">ⓘ</span>
                  <span className="text-xs md:text-xs text-muted-foreground">Remplissez les champs</span>
                </div>
              </div>

              {/* Contenu principal - MOBILE : 1 colonne, DESKTOP : 2 colonnes */}
              <div className="p-5 md:p-6 bg-background/90 backdrop-blur-sm">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Colonne gauche - Formulaire */}
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {/* Indication visuelle */}
                    <div className="flex items-center gap-2 mb-4 md:mb-4 text-sm md:text-xs text-muted-foreground">
                      <User className="w-4 h-4 md:w-3.5 md:h-3.5" />
                      <span>Vos informations</span>
                    </div>

                    <form 
                      onSubmit={handleSubmit}
                      className="space-y-5 md:space-y-5"
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <input type="hidden" name="bot-field" />

                      {/* Nom */}
                      <div className="space-y-2 md:space-y-2">
                        <div className="flex items-center gap-2 md:gap-2 text-xs md:text-xs">
                          <span className="syntax-variable">const</span>
                          <span className="text-foreground">userName</span>
                          <span className="text-muted-foreground">=</span>
                          <span className="text-green-400 text-xs md:text-xs truncate">"Votre nom"</span>
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="Ex: Dame SECK"
                          className="w-full px-4 py-3 md:px-4 md:py-3 text-base md:text-base bg-secondary/30 border border-border/50 rounded-lg focus:border-primary outline-none transition-colors text-foreground"
                        />
                        <p className="text-xs md:text-xs text-muted-foreground">🔹 Entrez votre nom complet</p>
                      </div>

                      {/* Email */}
                      <div className="space-y-2 md:space-y-2">
                        <div className="flex items-center gap-2 md:gap-2 text-xs md:text-xs">
                          <span className="syntax-variable">const</span>
                          <span className="text-foreground">userEmail</span>
                          <span className="text-muted-foreground">=</span>
                          <span className="text-blue-400 text-xs md:text-xs truncate">"email@exemple.com"</span>
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="Ex: dame.seck@email.com"
                          className="w-full px-4 py-3 md:px-4 md:py-3 text-base md:text-base bg-secondary/30 border border-border/50 rounded-lg focus:border-primary outline-none transition-colors text-foreground"
                        />
                        <p className="text-xs md:text-xs text-muted-foreground">🔹 Pour que je puisse vous répondre</p>
                      </div>

                      {/* Message */}
                      <div className="space-y-2 md:space-y-2">
                        <div className="flex items-center gap-2 md:gap-2 text-xs md:text-xs">
                          <span className="syntax-variable">const</span>
                          <span className="text-foreground">userMessage</span>
                          <span className="text-muted-foreground">=</span>
                          <span className="text-purple-400 text-xs md:text-xs truncate">"Votre message"</span>
                        </div>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={3}
                          placeholder="Ex: Bonjour, je souhaiterais discuter..."
                          className="w-full px-4 py-3 md:px-4 md:py-3 text-base md:text-base bg-secondary/30 border border-border/50 rounded-lg focus:border-primary outline-none transition-colors text-foreground resize-none"
                        />
                        <p className="text-xs md:text-xs text-muted-foreground">🔹 Décrivez votre projet</p>
                      </div>

                      {/* Bouton submit */}
                      <div className="space-y-2 md:space-y-2 pt-2">
                        <button
                          type="submit"
                          disabled={submitStatus === 'loading'}
                          className="w-full relative group overflow-hidden rounded-lg"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-80 group-hover:opacity-100 transition-opacity" />
                          <div className="relative px-4 py-3.5 md:px-6 md:py-3 flex items-center justify-center gap-2 md:gap-2 text-white text-base md:text-base font-medium">
                            {submitStatus === 'loading' ? (
                              <>
                                <div className="w-4 h-4 md:w-4 md:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Envoi en cours...</span>
                              </>
                            ) : submitStatus === 'success' ? (
                              <>
                                <CheckCircle className="w-4 h-4 md:w-4 md:h-4" />
                                <span>Message envoyé !</span>
                              </>
                            ) : submitStatus === 'error' ? (
                              <>
                                <AlertCircle className="w-4 h-4 md:w-4 md:h-4" />
                                <span>Erreur - Réessayer</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 md:w-4 md:h-4" />
                                <span>Envoyer le message</span>
                                <span className="text-xs md:text-xs opacity-60 ml-1 hidden xs:inline">// submit()</span>
                              </>
                            )}
                          </div>
                        </button>
                        <p className="text-xs md:text-xs text-center text-muted-foreground">
                          🔒 Formulaire sécurisé
                        </p>
                      </div>
                    </form>
                  </motion.div>

                  {/* Colonne droite - Infos */}
                  <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="space-y-5 md:space-y-6 mt-6 lg:mt-0"
                  >
                    {/* Indication visuelle */}
                    <div className="flex items-center gap-2 text-sm md:text-xs text-muted-foreground">
                      <AtSign className="w-4 h-4 md:w-3.5 md:h-3.5" />
                      <span>Mes coordonnées</span>
                    </div>

                    {/* Carte disponibilité */}
                    <div className="bg-secondary/20 backdrop-blur-sm rounded-xl border border-border/50 p-4 md:p-5">
                      <h3 className="text-base md:text-sm font-mono mb-3 md:mb-3 flex items-center gap-2 md:gap-2">
                        <span className="syntax-comment text-sm md:text-xs">{"// "}</span>
                        <span className="syntax-variable text-base md:text-sm">Disponibilité</span>
                      </h3>
                      <div className="space-y-3 md:space-y-3">
                        {availabilityInfo.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-3 md:gap-3"
                          >
                            <div className={`p-2 md:p-2 rounded-lg bg-secondary/50 ${item.color} shrink-0`}>
                              <item.icon className="w-4 h-4 md:w-4 md:h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className={`text-base md:text-sm ${item.color} block truncate`}>{item.text}</span>
                              <p className="text-xs md:text-xs text-muted-foreground">
                                {i === 0 && "Je travaille depuis Casablanca"}
                                {i === 1 && "Prêt pour de nouvelles missions"}
                                {i === 2 && "Je réponds rapidement"}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Contacts directs */}
                    <div className="bg-secondary/20 backdrop-blur-sm rounded-xl border border-border/50 p-4 md:p-5">
                      <h3 className="text-base md:text-sm font-mono mb-3 md:mb-3 flex items-center gap-2 md:gap-2">
                        <span className="syntax-comment text-sm md:text-xs">{"// "}</span>
                        <span className="syntax-variable text-base md:text-sm">Contact direct</span>
                      </h3>
                      
                      {/* Email direct */}
                      <motion.a
                        href="mailto:dameseck207@gmail.com"
                        className="flex items-center gap-3 md:gap-3 p-3 md:p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors mb-3 md:mb-3 group"
                        whileHover={{ x: 3 }}
                      >
                        <Mail className="w-5 h-5 md:w-5 md:h-5 text-blue-400 shrink-0" />
                        <div className="min-w-0 flex-1">
                          <span className="text-base md:text-sm text-foreground block truncate">dameseck207@gmail.com</span>
                          <p className="text-xs md:text-xs text-muted-foreground">Cliquez pour m'écrire</p>
                        </div>
                        <Send className="w-4 h-4 md:w-3.5 md:h-3.5 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </motion.a>

                      {/* Réseaux sociaux */}
                      <div className="space-y-2 md:space-y-2">
                        {contactLinks.map((link, i) => (
                          <motion.a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 md:gap-3 p-3 md:p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                            whileHover={{ x: 3 }}
                          >
                            <link.icon className={`w-5 h-5 md:w-5 md:h-5 ${link.color} shrink-0`} />
                            <div className="min-w-0 flex-1">
                              <span className={`text-base md:text-sm ${link.color} block truncate`}>{link.label}</span>
                              <p className="text-xs md:text-xs text-muted-foreground">{link.description}</p>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>

                    {/* Badge de confiance */}
                    <div className="text-center p-3 md:p-3 bg-secondary/20 rounded-lg border border-border/50">
                      <p className="text-xs md:text-xs font-mono text-muted-foreground flex items-center justify-center gap-2 md:gap-2">
                        <span className="syntax-string">✓</span>
                        <span>Formulaire sécurisé</span>
                        <span className="syntax-comment text-[10px] md:text-[8px]">// protégé</span>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Editor footer */}
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-4 px-4 py-3 md:px-4 md:py-2 bg-secondary/30 border-t border-border text-xs md:text-[10px] font-mono">
                <div className="flex items-center gap-2 md:gap-4 w-full xs:w-auto">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 rounded-full bg-green-500" />
                    <span className="text-muted-foreground">Prêt</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-2 text-muted-foreground w-full xs:w-auto justify-between xs:justify-start">
                  <span>Besoin d'aide ?</span>
                  <span className="syntax-keyword text-xs md:text-[10px] truncate max-w-[150px] xs:max-w-none">dameseck207@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom indicator */}
          <motion.div 
            className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 rounded-full bg-primary/30"
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