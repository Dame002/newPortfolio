import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react";
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
    
    // Préparation des données pour Netlify
    const params = new URLSearchParams({
      'form-name': 'contact',
      'name': formState.name,
      'email': formState.email,
      'message': formState.message,
      '_replyto': formState.email, // Pour répondre directement
      '_subject': `📬 Portfolio - Message de ${formState.name || 'visiteur'}`, // Sujet personnalisé
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
      color: 'text-purple-400',
      description: 'Voir mes projets',
    },
    {
      icon: Linkedin,
      label: 'linkedin.com/in/dame-seck',
      href: 'https://www.linkedin.com/in/dame-seck-9ba393293/',
      color: 'text-cyan-400',
      description: 'Mon réseau pro',
    },
  ];

  const availabilityInfo = [
    { icon: MapPin, text: 'Basé à Casablanca', color: 'text-green-400' },
    { icon: Calendar, text: 'Disponible immédiatement', color: 'text-yellow-400' },
    { icon: Clock, text: 'Réponse sous 24h', color: 'text-orange-400' },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/20" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-gray-400">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-purple-400">contactForm</span>{" "}
                <span className="text-gray-400">=</span>{" "}
                <span className="text-green-400">()</span>{" "}
                <span className="text-gray-400">=</span>{" "}
                <span className="text-yellow-400">{"{}"}</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Discutons de votre projet
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Une idée ? Un projet ? Remplissez le formulaire et je vous réponds dans la journée !
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Colonne gauche - Formulaire */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {/* Carte formulaire style VS Code */}
              <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
                {/* Barre de titre VS Code */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs font-mono text-gray-400 ml-2">
                    <span className="text-blue-400">contact</span>
                    <span className="text-gray-400">.</span>
                    <span className="text-purple-400">form</span>
                    <span className="text-gray-400">.tsx</span>
                  </span>
                </div>

                {/* Formulaire */}
                <form 
                  onSubmit={handleSubmit}
                  className="p-6 space-y-6"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  {/* Champ caché pour Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />

                  {/* Nom */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-blue-400 flex items-center gap-2">
                      <span className="text-purple-400">const</span>
                      <span>userName</span>
                      <span className="text-gray-400">:</span>
                      <span className="text-green-400">string</span>
                      <span className="text-gray-400">=</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg focus:border-blue-500 outline-none transition-colors font-mono text-sm text-white"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-blue-400 flex items-center gap-2">
                      <span className="text-purple-400">const</span>
                      <span>userEmail</span>
                      <span className="text-gray-400">:</span>
                      <span className="text-green-400">string</span>
                      <span className="text-gray-400">=</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="nom@example.com"
                      className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg focus:border-blue-500 outline-none transition-colors font-mono text-sm text-white"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-blue-400 flex items-center gap-2">
                      <span className="text-purple-400">const</span>
                      <span>userMessage</span>
                      <span className="text-gray-400">:</span>
                      <span className="text-green-400">string</span>
                      <span className="text-gray-400">=</span>
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Parlons de votre projet..."
                      className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded-lg focus:border-blue-500 outline-none transition-colors font-mono text-sm text-white resize-none"
                    />
                  </div>

                  {/* Bouton submit */}
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full relative group overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="relative px-6 py-3 flex items-center justify-center gap-2 text-white font-medium">
                      {submitStatus === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Message envoyé !</span>
                        </>
                      ) : submitStatus === 'error' ? (
                        <>
                          <AlertCircle className="w-4 h-4" />
                          <span>Erreur - Réessayer</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Envoyer le message</span>
                          <span className="text-xs opacity-60 ml-2">// submit()</span>
                        </>
                      )}
                    </div>
                  </button>

                  {/* Indication de sécurité */}
                  <p className="text-[10px] text-center text-gray-400">
                    🔒 Formulaire sécurisé - Vos données ne seront jamais partagées
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Colonne droite - Infos et réseaux */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Carte disponibilité */}
              <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                <h3 className="text-sm font-mono text-gray-400 mb-4">
                  <span className="text-blue-400">//</span> Disponibilité
                </h3>
                <div className="space-y-4">
                  {availabilityInfo.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center gap-3"
                    >
                      <div className={`p-2 rounded-lg bg-gray-800/50 ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-gray-400">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contacts directs */}
              <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                <h3 className="text-sm font-mono text-gray-400 mb-4">
                  <span className="text-purple-400">//</span> Contact direct
                </h3>
                
                {/* Email direct */}
                <motion.a
                  href="mailto:dameseck207@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors mb-3 group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    dameseck207@gmail.com
                  </span>
                  <Send className="w-3.5 h-3.5 ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                {/* Réseaux sociaux */}
                <div className="space-y-2">
                  {contactLinks.map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <link.icon className={`w-5 h-5 ${link.color}`} />
                      <div>
                        <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                          {link.label}
                        </span>
                        <p className="text-xs text-gray-500">{link.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Badge de confiance */}
              <div className="text-center p-4">
                <p className="text-xs font-mono text-gray-400">
                  <span className="text-green-400">✓</span> Formulaire protégé par Netlify Forms
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}