import { motion } from "framer-motion";
import { Code2, User, Layers, FolderGit2, Mail } from "lucide-react";

const navItems = [
  { icon: Code2, label: 'Accueil', href: '#top', color: 'syntax-function' },     // text-blue-400
  { icon: User, label: 'À propos', href: '#about', color: 'syntax-variable' },    // text-purple-400
  { icon: Layers, label: 'Compétences', href: '#skills', color: 'syntax-string' }, // text-green-400
  { icon: FolderGit2, label: 'Projets', href: '#projects', color: 'syntax-keyword' }, // text-orange-400
  { icon: Mail, label: 'Contact', href: '#contact', color: 'syntax-type' },       // text-yellow-400
];

export function ActivityBar() {
  return (
    <motion.aside
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-0 top-0 bottom-0 w-12 bg-activity-bar border-r border-border z-50 hidden md:flex flex-col items-center py-4 gap-1"
    >
      <div className="mb-4">
        <div className="w-7 h-7 rounded bg-primary/20 flex items-center justify-center">
          <Code2 className="w-4 h-4 text-primary" />
        </div>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        {navItems.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            className="activity-bar-icon"
            whileHover={{ scale: 1.1 }}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </motion.aside>
  );
}

export function StatusBar() {
  return (
    <motion.footer
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="status-bar fixed bottom-0 left-0 right-0 z-50"
    >
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full" style={{ background: 'hsl(var(--syntax-number))' }} />
          main
        </span>
        <span>UTF-8</span>
        <span>TypeScript React</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Ln 42, Col 18</span>
        <span>Spaces: 2</span>
        <span>© 2026 Dev FullStack. Fait par Dame SECK</span>
      </div>
    </motion.footer>
  );
}