import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, ExternalLink, ShieldCheck, Mail, ArrowRight, Code2, Cpu, Globe, Database, PenTool, Layout, Menu, X, Copy, Check } from 'lucide-react';

const translations = {
  es: {
    nav: { home: "Inicio", projects: "Proyectos", skills: "Stack", contact: "Contacto" },
    hero: {
      tag: "@educonstancio",
      title1: "DESARROLLADOR WEB",
      title2: "FULL STACK",
      desc: "Ubicado en Atacama, Chile. 🇨🇱 \nApasionado por el desarrollo de soluciones digitales modernas y elegantes, rápidas y totalmente personalizadas.",
      btn: "Ver Proyectos",
      verified: "Ingeniero en Informática - Titulado"
    },
    projects: {
      title: "Soluciones Recientes",
      view: "Ver Proyecto",
      items: [
        { title: "Proyecto Bienes Raíces", desc: "Plataforma inmobiliaria completa con React y Laravel." },
        { title: "Web FrontEnd Store", desc: "E-commerce minimalista con diseño responsivo." },
        { title: "Web Festival Música", desc: "Landing page dinámica para eventos musicales." },
        { title: "Proyecto Barber App", desc: "Sistema de gestión de turnos y servicios." }
      ]
    },
    skills: {
      title: "Dominio Técnico",
      subtitle: "Herramientas y tecnologías que domino para dar vida a tus ideas",
      items: [
        { name: "Frontend", tools: ["React", "JavaScript", "TailwindCSS", "SCSS"], icon: <Layout className="w-5 h-5 text-blue-400" /> },
        { name: "Backend", tools: ["NodeJS", "PHP", "Laravel"], icon: <Cpu className="w-5 h-5 text-purple-400" /> },
        { name: "Base de Datos", tools: ["MySQL", "SQL Server"], icon: <Database className="w-5 h-5 text-cyan-400" /> },
        { name: "Sistemas", tools: ["Git", "Docker", "Vite", "Netlify"], icon: <PenTool className="w-5 h-5 text-emerald-400" /> }
      ]
    },
    contact: {
      title: "Hablemos de tu Proyecto",
      subtitle: "Estoy disponible para consultoría e integrarme a equipos de alto rendimiento, multidisciplinarios.",
      email: "Enviar Email",
      copy: "Copiar Email",
      copied: "¡Copiado!",
      desc: "Si buscas a alguien comprometido con la calidad y apasionado por los desafíos técnicos, hablemos.",
    },
    swal: {
      title: "¡Hola! 👋",
      text: "Soy Eduardo, un desarrollador apasionado por crear experiencias digitales increíbles.",
      btn: "¡Genial!"
    },
    footer: {
      copy: "Diseñado por: Eduardo Andrés Constancio Vergara"
    },
    labs: {
      title: "Laboratorio Interactivo",
      subtitle: "Prueba lógica de negocio en tiempo real",
      demoTitle: "Mini-POS Sistema",
      demoDesc: "Simulación de punto de venta con reactividad total.",
      products: "Productos Disponibles",
      cart: "Carrito de Compras",
      total: "Total a Pagar",
      tax: "Impuesto (19% IVA)",
      print: "Simular Boleta",
      empty: "El carrito está vacío",
      viewCode: "Ver Código React",
      viewDemo: "Ver Demo Interactiva",
      add: "Agregar",
      premiumLaptop: "Portátil Premium",
      mecanicalKeyboard: "Teclado Mecánico",
      wirelessMouse: "Mouse Inalámbrico",
      triageTitle: "Simulador de Triage",
      integraTitle: "Hub de Integraciones",
      triageLabel: "Reporte de Bug",
      status: "Estado",
      accept: "Aceptar",
      duplicate: "Marcar Duplicado",
      decline: "Declinar",
      bugReport: "Usuarios no pueden iniciar sesión por un límite de intentos inesperado.",
      bugReportInfo: "#342 abierto hace 2h por",
    }
  },
  en: {
    nav: { home: "Home", projects: "Projects", skills: "Stack", contact: "Contact" },
    hero: {
      tag: "@educonstancio",
      title1: "FULL STACK",
      title2: "WEB DEVELOPER",
      desc: "Based in Atacama, Chile. 🇨🇱 \nDedicated to software engineering and the development of robust digital solutions that prioritize clarity, performance, and user-centric design.",
      btn: "Explore Projects",
      verified: "Computer Science Engineer - Graduated"
    },
    projects: {
      title: "Recent Works",
      view: "Open Case",
      items: [
        { title: "Real Estate Project", desc: "Complete real estate platform with React and Laravel." },
        { title: "FrontEnd Store Web", desc: "Minimalist e-commerce with responsive design." },
        { title: "Music Festival Web", desc: "Landing page for musical events." },
        { title: "Barber App Project", desc: "Management system for appointments and services." }
      ]
    },
    skills: {
      title: "Technical Stack",
      subtitle: "Modern tools and technologies I use to bring ideas to life",
      items: [
        { name: "Frontend", tools: ["React", "JavaScript", "TailwindCSS", "SCSS"], icon: <Layout className="w-5 h-5 text-blue-400" /> },
        { name: "Backend", tools: ["NodeJS", "PHP", "Laravel"], icon: <Cpu className="w-5 h-5 text-purple-400" /> },
        { name: "Database", tools: ["MySQL", "SQL Server"], icon: <Database className="w-5 h-5 text-cyan-400" /> },
        { name: "Architecture", tools: ["Git", "Docker", "Vite", "Netlify"], icon: <PenTool className="w-5 h-5 text-emerald-400" /> }
      ]
    },
    contact: {
      title: "Discuss a Project",
      subtitle: "Open for professional consultation and high-performance team collaboration, multidisciplinary.",
      email: "Send Email",
      copy: "Copy Email",
      copied: "Copied!",
      desc: "If you're seeking someone committed to quality and passionate about technical challenges, let's talk.",
    },
    swal: {
      title: "Hi there! 👋",
      text: "I'm Eduardo, a developer passionate about creating amazing digital experiences.",
      btn: "Awesome!"
    },
    footer: {
      copy: "Designed by: Eduardo Andrés Constancio Vergara"
    },
    labs: {
      title: "Interactive Labs",
      subtitle: "Test real-time business logic",
      demoTitle: "Mini-POS System",
      demoDesc: "Point of Sale simulation with full reactivity.",
      products: "Available Products",
      cart: "Shopping Cart",
      total: "Total to Pay",
      tax: "Tax (VAT)",
      print: "Simulate Receipt",
      empty: "Cart is empty",
      viewCode: "View React Code",
      viewDemo: "View Interactive Demo",
      add: "Add",
      premiumLaptop: "Premium Laptop",
      mecanicalKeyboard: "Mechanical Keyboard",
      wirelessMouse: "Wireless Mouse",
      triageTitle: "Triage Simulator",
      integraTitle: "Integration Hub",
      triageLabel: "Bug Report",
      status: "Status",
      accept: "Accept",
      duplicate: "Mark Duplicate",
      decline: "Decline",
      bugReport: "Users report unexpected rate limiting on login",
      bugReportInfo: "#342 opened 2h ago by",
    }
  }
};

const projectMetadata = [
  { url: "https://azhem-bienesraices.netlify.app/", color: "from-cyan-900 via-cyan-700 to-cyan-500", border: "border-cyan-900", icon: "house", span: "sm:col-span-2" },
  { url: "https://azhem.netlify.app/sitio%20web%20frontend%20store/", color: "from-yellow-900 via-yellow-700 to-yellow-500", border: "border-yellow-900", icon: "html", span: "sm:col-span-1" },
  { url: "https://azhem.netlify.app/festivalmusica/", color: "from-stone-900 via-stone-700 to-stone-500", border: "border-stone-900", icon: "html", span: "sm:col-span-1" },
  { url: "https://barberapp.up.railway.app/", color: "from-violet-900 via-violet-700 to-violet-500", border: "border-violet-900", icon: "barber", span: "sm:col-span-2" }
];

const DigitalLogo = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M25 20H75V35H45V45H70V58H45V68H75V83H25V20Z" fill="currentColor" />
    <rect x="15" y="15" width="4" height="73" fill="url(#grad-logo)" fillOpacity="0.8" />
    <circle cx="27" cy="20" r="3" fill="url(#grad-logo)" />
    <circle cx="75" cy="20" r="3" fill="url(#grad-logo)" />
    <circle cx="75" cy="83" r="3" fill="url(#grad-logo)" />
    <defs>
      <linearGradient id="grad-logo" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

export default function App() {
  const [lang, setLang] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = translations[lang];
  const email = "e.constanciovergara@gmail.com";

  const handleMeClick = async () => {
    const { default: Swal } = await import('sweetalert2');
    Swal.fire({
      title: t.swal.title,
      text: t.swal.text,
      icon: "info",
      confirmButtonText: t.swal.btn,
      background: '#0f172a',
      color: '#fff',
      customClass: {
        popup: 'rounded-3xl border border-white/10 glass-card'
      }
    });
  };

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: t.labs.premiumLaptop, price: 1200, icon: <Layout className="w-4 h-4" /> },
    { id: 2, name: t.labs.mecanicalKeyboard, price: 150, icon: <Cpu className="w-4 h-4" /> },
    { id: 3, name: t.labs.wirelessMouse, price: 80, icon: <Globe className="w-4 h-4" /> }
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.19;
  const total = subtotal + tax;

  const [showCode, setShowCode] = useState(false);
  const [activeLab, setActiveLab] = useState('pos'); // 'pos', 'triage', 'integrations'
  
  const [triageStatus, setTriageStatus] = useState('pending');
  const [isTriageMenuOpen, setIsTriageMenuOpen] = useState(false);

  const copyEmail = async () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    const { default: Swal } = await import('sweetalert2');
    Swal.fire({
      title: t.contact.copied,
      icon: "success",
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      background: '#0f172a',
      color: '#fff',
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 bg-[#020617]">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer shrink-0" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform text-white p-2">
              <DigitalLogo className="w-full h-full text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Eduardo</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#home">{t.nav.home}</NavLink>
            <NavLink href="#projects">{t.nav.projects}</NavLink>
            <NavLink href="#skills">{t.nav.skills}</NavLink>
            <NavLink href="#contact">{t.nav.contact}</NavLink>
            
            <motion.button
              onClick={toggleLang}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex items-center justify-center p-2 rounded-xl glass-card hover:border-blue-500/50 transition-colors cursor-pointer"
              aria-label={lang === 'es' ? 'Cambiar idioma a Inglés' : 'Change language to Spanish'}
            >
              <span className="text-2xl leading-none" aria-hidden="true">
                {lang === 'es' ? '🇨🇱' : '🇺🇸'}
              </span>
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <motion.button
              onClick={toggleLang}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center p-2 rounded-xl glass-card transition-colors cursor-pointer"
            >
              <span className="text-xl leading-none">
                {lang === 'es' ? '🇨🇱' : '🇺🇸'}
              </span>
            </motion.button>
            <button 
              className="p-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? (lang === 'es' ? 'Cerrar menú' : 'Close menu') : (lang === 'es' ? 'Abrir menú' : 'Open menu')}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-nav border-t border-white/5 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</NavLink>
                <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</NavLink>
                <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>{t.nav.skills}</NavLink>
                <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 lg:pt-40 pb-20 px-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="shrink-0 relative group cursor-pointer"
            onClick={handleMeClick}
          >
            <div className="absolute -inset-6 bg-linear-to-r from-blue-600 to-purple-700 rounded-5xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse" />
            <div className="relative glass-card p-4 rounded-4xl animate-float">
              <picture>
                <source srcSet="/assets/Yo-2026.avif" type="image/avif" />
                <img 
                  src="/assets/Yo-2026.webp" 
                  alt="Eduardo Constancio - Full Stack Developer"
                  className="w-[280px] h-[350px] lg:w-[300px] lg:h-[380px] object-cover rounded-3xl"
                  loading="eager"
                  width="300"
                  height="380"
                />
              </picture>
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-2xl flex items-center gap-2 border border-blue-500/30">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold whitespace-nowrap">{t.hero.verified}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="text-blue-400 font-mono font-medium mb-4 block">{t.hero.tag}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] lg:leading-[0.9] mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`${lang === 'es' ? "text-blue-500 font-black" : "text-gradient font-black"} text-3xl sm:text-4xl lg:text-5xl`}>
                    <TypewriterText text={t.hero.title1} key={t.hero.title1} />
                  </span><br />
                  <span className={lang === 'es' ? "text-gradient font-black" : "text-blue-500 font-black"}>
                    <TypewriterText text={t.hero.title2} key={t.hero.title2} />
                  </span>
                </motion.div>
              </AnimatePresence>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed text-balance whitespace-pre-line min-h-[4em]">
              <TypewriterText text={t.hero.desc} key={t.hero.desc} speed={15} />
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-900/20 transition-colors cursor-pointer"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.btn} <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <div className="flex items-center gap-3">
                <SocialIcon href="https://github.com/EduCVergara" icon={<Github />} label="GitHub" />
                <SocialIcon href="https://www.linkedin.com/in/educonstancio/" icon={<Linkedin />} label="LinkedIn" />
                <SocialIcon href="https://www.instagram.com/anzhem" icon={<Instagram />} label="Instagram" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Lab Section */}
      <section id="lab" className="py-20 px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-6"
        >
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <TypewriterText text={t.labs.title} key={`${lang}-labs-title`} />
            </h2>
            <p className="text-slate-400 mt-2">
              <TypewriterText text={t.labs.subtitle} key={`${lang}-labs-sub`} speed={20} />
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            {[
              { id: 'pos', label: 'POS', icon: <Database className="w-4 h-4" /> },
              { id: 'triage', label: 'Triage', icon: <Check className="w-4 h-4" /> },
              { id: 'integrations', label: 'Hub', icon: <Globe className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveLab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeLab === tab.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'glass-card text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
            <div className="w-px h-6 bg-slate-800 mx-2 hidden sm:block" />
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCode(!showCode)}
              className="px-5 py-2 glass-card rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={showCode ? 'code' : 'demo'}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4 text-blue-400" />
                  {showCode ? t.labs.viewDemo : t.labs.viewCode}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {showCode ? (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass-card p-2 rounded-3xl border-white/5 overflow-hidden"
              >
                <div className="bg-slate-950 p-6 rounded-2xl font-mono text-sm overflow-x-auto text-blue-300">
                  <pre>
                    <code>{activeLab === 'pos' ? `// React Logic/Logica en React (Simplified/Simplificada)
const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart([...cart, { ...product, cartId: Date.now() }]);
};

const subtotal = cart.reduce((acc, item) => 
  acc + item.price, 0
);
const tax = subtotal * 0.19;
const total = subtotal + tax;

// Render logic/Logica de renderizado
<button onClick={() => addToCart(product)}>
  {t.labs.add}
</button>` : activeLab === 'triage' ? `// Framer Motion Menu (Linear Style)
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
    >
      {options.map(opt => <Option key={opt} />)}
    </motion.div>
  )}
</AnimatePresence>` : `// Clerk Style Spotlight Hover
const [mPos, setMPos] = useState({ x: 0, y: 0 });

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  setMPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
};

<div onMouseMove={handleMouseMove}>
  <div style={{ background: \`radial-gradient(...) at \${mPos.x}px \${mPos.y}px\` }} />
</div>`}</code>
                  </pre>
                </div>
              </motion.div>
            ) : activeLab === 'pos' ? (
              <motion.div
                key="pos-demo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Product Selection */}
                <div className="glass-card p-8 rounded-3xl border-white/5">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-400" /> {t.labs.products}
                  </h3>
                  <div className="space-y-4">
                    {products.map(p => (
                      <div key={p.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                            {p.icon}
                          </div>
                          <div>
                            <p className="font-bold text-slate-200">{p.name}</p>
                            <p className="text-sm text-slate-400">${p.price}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => addToCart(p)}
                          className="px-4 py-2 bg-blue-600 rounded-xl text-xs font-bold hover:bg-blue-500 transition-colors cursor-pointer"
                        >
                          {t.labs.add}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shopping Cart / Receipt */}
                <div className="glass-card p-8 rounded-3xl border-blue-500/20 bg-blue-500/5 flex flex-col">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Layout className="w-5 h-5 text-purple-400" /> {t.labs.cart}
                  </h3>
                  
                  <div className="flex-1 overflow-y-auto max-h-[250px] space-y-3 mb-6 pr-2">
                    {cart.length === 0 ? (
                      <p className="text-slate-500 text-center py-10 italic">{t.labs.empty}</p>
                    ) : (
                      cart.map(item => (
                        <motion.div 
                          layout
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          key={item.cartId} 
                          className="flex items-center justify-between p-3 bg-black/20 rounded-xl border border-white/5"
                        >
                          <span className="text-sm font-medium">{item.name}</span>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-mono text-blue-400">${item.price}</span>
                            <button onClick={() => removeFromCart(item.cartId)} className="text-red-400 hover:text-red-300 transition-colors cursor-pointer">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </div>

                  <div className="border-t border-white/10 pt-6 space-y-2">
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>{t.labs.tax}</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-white/5">
                      <span>Total</span>
                      <span className="text-blue-400">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button 
                    disabled={cart.length === 0}
                    className="mt-6 w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl font-bold hover:shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    onClick={() => {
                      import('sweetalert2').then(m => {
                        m.default.fire({
                          title: lang === 'es' ? '¡Venta Realizada!' : 'Sale Completed!',
                          text: lang === 'es' ? `Total cobrado: $${total.toFixed(2)}` : `Total charged: $${total.toFixed(2)}`,
                          icon: 'success',
                          background: '#0f172a',
                          color: '#fff',
                        });
                        setCart([]);
                      });
                    }}
                  >
                    {t.labs.print}
                  </button>
                </div>
              </motion.div>
            ) : activeLab === 'triage' ? (
              <motion.div
                key="triage-demo"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-card p-12 rounded-3xl border-white/5 min-h-[400px] flex items-center justify-center relative"
              >
                <div className="w-full max-w-sm">
                  <p className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-widest">{t.labs.triageLabel}</p>
                  <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-visible">
                    <h4 className="font-bold text-lg mb-1 leading-tight text-white/90">{t.labs.bugReport}</h4>
                    <p className="text-sm text-slate-400 mb-6">{t.labs.bugReportInfo} <span className="text-blue-400"><a href="https://www.linkedin.com/in/educonstancio" target="_blank" rel="noopener noreferrer">@educonstancio</a></span></p>
                    
                    <div className="relative">
                      <button 
                        onClick={() => setIsTriageMenuOpen(!isTriageMenuOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
                        aria-label={lang === 'es' ? 'Cambiar estado de triage' : 'Change triage status'}
                        aria-expanded={isTriageMenuOpen}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${triageStatus === 'pending' ? 'bg-yellow-500' : triageStatus === 'accepted' ? 'bg-green-500' : 'bg-red-500'} shadow-[0_0_8px_rgba(234,179,8,0.5)]`} />
                          <span className="text-sm font-medium capitalize">{triageStatus}</span>
                        </div>
                        <Menu className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                      </button>

                      <AnimatePresence>
                        {isTriageMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute z-20 left-0 right-0 top-full mt-2 bg-[#161b22] border border-white/10 rounded-xl shadow-2xl p-1 overflow-hidden"
                          >
                            {[
                              { id: 'accepted', label: t.labs.accept, icon: <Check className="w-4 h-4" />, color: 'hover:bg-green-500/10 hover:text-green-400' },
                              { id: 'duplicate', label: t.labs.duplicate, icon: <Copy className="w-4 h-4" />, color: 'hover:bg-blue-500/10 hover:text-blue-400' },
                              { id: 'declined', label: t.labs.decline, icon: <X className="w-4 h-4" />, color: 'hover:bg-red-500/10 hover:text-red-400' }
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                onClick={() => {
                                  setTriageStatus(opt.id);
                                  setIsTriageMenuOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 transition-colors cursor-pointer ${opt.color}`}
                              >
                                {opt.icon} {opt.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="integrations-demo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-card p-8 rounded-3xl border-white/5 min-h-[400px] flex flex-col items-center justify-center"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                }}
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(37, 99, 235, 0.08), transparent 40%)'
                }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-2xl">
                  {[
                    { name: 'React', icon: <Code2 className="w-8 h-8" />, url: "https://react.dev", color: "rgba(97, 218, 251, 0.4)", text: "text-[#61DAFB]" },
                    { name: 'Node.js', icon: <Cpu className="w-8 h-8" />, url: "https://nodejs.org", color: "rgba(51, 153, 51, 0.4)", text: "text-[#339933]" },
                    { name: 'PostgreSQL', icon: <Database className="w-8 h-8" />, url: "https://www.postgresql.org", color: "rgba(51, 103, 145, 0.4)", text: "text-[#336791]" },
                    { name: 'Netlify', icon: <Globe className="w-8 h-8" />, url: "https://www.netlify.com", color: "rgba(0, 199, 183, 0.4)", text: "text-[#00C7B7]" },
                    { name: 'Framer', icon: <Layout className="w-8 h-8" />, url: "https://www.framer.com/motion/", color: "rgba(0, 85, 255, 0.4)", text: "text-[#0055FF]" },
                    { name: 'GitHub', icon: <Github className="w-8 h-8" />, url: "https://github.com", color: "rgba(110, 84, 148, 0.4)", text: "text-[#6e5494]" }
                  ].map((tech, i) => (
                    <motion.a
                      key={tech.name}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        borderColor: tech.color,
                        boxShadow: `0 20px 40px -15px ${tech.color}`
                      }}
                      className="aspect-square glass-card rounded-2xl flex flex-col items-center justify-center gap-3 border-white/5 transition-all group overflow-hidden relative cursor-pointer"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }} />
                      <div className={`text-slate-500 group-hover:${tech.text} transition-colors relative z-10`}>
                        {tech.icon}
                      </div>
                      <span className="text-xs font-bold text-slate-500 group-hover:text-slate-200 transition-colors uppercase tracking-widest relative z-10">
                        {tech.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <TypewriterText text={t.projects.title} key={`${lang}-projects-title`} />
          </h2>
          <div className="h-px bg-slate-800 flex-1 md:mx-8 mt-4 md:mt-0 w-full hidden sm:block" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {projectMetadata.map((p, i) => (
            <ProjectCard 
              key={i} 
              project={{...p, ...t.projects.items[i]}} 
              index={i} 
              viewText={t.projects.view}
              lang={lang}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16"
        >
          <div className="flex flex-col mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <TypewriterText text={t.skills.title} key={`${lang}-skills-title`} />
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-2">
              <TypewriterText text={t.skills.subtitle} key={`${lang}-skills-subtitle`} speed={20} />
            </p>
          </div>
          <div className="h-px bg-slate-800 flex-1 md:ml-12 w-full hidden md:block" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.items.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:border-blue-500/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                {skill.icon}
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.tools.map((tool, j) => (
                  <li key={j} className="flex items-center gap-2 text-slate-400 font-medium group-hover:text-slate-200 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 max-w-6xl mx-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between mb-16 gap-12"
        >
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
              <TypewriterText text={t.contact.title} key={`${lang}-contact-title`} />
            </h2>
            <p className="text-xl text-slate-400 max-w-md leading-relaxed mb-10">
              <TypewriterText text={t.contact.subtitle} key={`${lang}-contact-sub`} />
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${email}`}
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-4xl font-bold flex items-center gap-3 shadow-2xl shadow-blue-500/20"
              >
                <Mail className="w-6 h-6" /> {t.contact.email}
              </motion.a>
              
              <div className="flex items-center gap-4">
                <SocialIcon href="https://github.com/EduCVergara" icon={<Github />} label="GitHub" />
                <SocialIcon href="https://www.linkedin.com/in/educonstancio/" icon={<Linkedin />} label="LinkedIn" />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-4xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card p-10 rounded-4xl border border-white/5 flex flex-col gap-6">
                 <div className="flex flex-col gap-2">
                    <span className="text-blue-400 font-mono text-sm uppercase tracking-widest">{lang === 'es' ? 'Email de Contacto' : 'Contact Email'}</span>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 group/item">
                       <span className="text-lg font-medium text-slate-200 truncate pr-4">{email}</span>
                       <button 
                        onClick={copyEmail}
                        className="p-3 rounded-xl bg-white/10 hover:bg-blue-500 text-white transition-all cursor-pointer flex-shrink-0"
                        title={t.contact.copy}
                       >
                         {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                       </button>
                    </div>
                 </div>
                 <p className="text-slate-400 leading-relaxed text-balance">
                    <TypewriterText text={t.contact.desc} key={`${lang}-contact-desc`} speed={10} />
                 </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-slate-900 bg-[#01040f]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="font-bold text-xl mb-2 block font-mono">Eduardo Constancio</span>
            <p className="text-slate-500">© {new Date().getFullYear()} {t.footer.copy}</p>
          </div>
          
          <div className="flex gap-6">
            <SocialFooterIcon href="https://github.com/EduCVergara" icon={<Github className="w-5 h-5"/>} label="GitHub" />
            <SocialFooterIcon href="https://www.linkedin.com/in/educonstancio/" icon={<Linkedin className="w-5 h-5"/>} label="LinkedIn" />
            <SocialFooterIcon href="https://www.instagram.com/anzhem" icon={<Instagram className="w-5 h-5"/>} label="Instagram" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function TypewriterText({ text, speed = 20 }) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let currentText = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        currentText += text[i];
        setDisplayText(currentText);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayText}</span>;
}

function ProjectCard({ project, index, viewText, lang }) {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      href={project.url}
      target="_blank"
      className={`relative rounded-3xl overflow-hidden bg-linear-to-br ${project.color} border ${project.border} p-6 h-full min-h-[200px] group flex flex-col justify-between ${project.span} hover:contrast-125 transition-all duration-300 shadow-2xl cursor-pointer`}
    >
      <div className="z-10">
        <span className="inline-block text-xs border border-white/30 rounded-full px-3 py-1 bg-black/10 backdrop-blur-sm text-white/90">
          <TypewriterText text={viewText} key={`${lang}-view`} />
        </span>
      </div>

      <div className="z-10">
        <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight drop-shadow-md">
           <TypewriterText text={project.title} key={`${lang}-p-title-${index}`} />
        </h3>
        <p className="text-white/70 text-sm mt-2 font-medium max-w-[90%]">
          <TypewriterText text={project.desc} key={`${lang}-p-desc-${index}`} speed={10} />
        </p>
      </div>

      <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125 transform rotate-6">
        <svg className="w-40 h-40 fill-white" viewBox="0 0 24 24">
            <use xlinkHref={`/assets/sprite.svg#${project.icon}`} />
        </svg>
      </div>

      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </motion.a>
  );
}

function NavLink({ href, children, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="text-slate-400 hover:text-white font-semibold transition-colors relative group py-2 text-lg md:text-base cursor-pointer"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left hidden md:block" />
    </a>
  );
}

function SocialIcon({ href, icon, label }) {
  return (
    <motion.a 
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 lg:w-12 lg:h-12 glass-card rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all cursor-pointer"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}

function SocialFooterIcon({ href, icon, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 glass-card rounded-lg text-slate-400 hover:text-white hover:border-blue-500/30 transition-all cursor-pointer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
