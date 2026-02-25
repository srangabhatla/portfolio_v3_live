import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronRight, 
  ArrowUpRight, 
  Target, 
  BarChart3, 
  Zap, 
  X,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  BrainCircuit,
  ArrowUp
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { caseStudies, type CaseStudy } from './caseStudies';
import FrameworkVisualizer from './FrameworkVisualizer';
import profileImage1 from './ddb2269e-f6c0-481e-af63-1a13e3204958.jpg';
import profileImage2 from './1624bbcd-2bdb-42b1-a6dc-a257a2a7ce0e.jpg';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom hook for debouncing
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

const CATEGORIES = ['All', 'Critique', 'Framework', 'RCA', 'UX', 'AI'] as const;

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number]>('All');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [fullStoryCase, setFullStoryCase] = useState<CaseStudy | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredCases = useMemo(() => {
    return caseStudies.filter(cs => {
      const matchesCategory = selectedCategory === 'All' || cs.category === selectedCategory;
      const matchesSearch = cs.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) || 
                           cs.skills.some(s => s.toLowerCase().includes(debouncedSearchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, debouncedSearchQuery]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (fullStoryCase) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-500/30">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto px-6 py-20 md:py-32"
        >
          <button 
            onClick={() => setFullStoryCase(null)}
            className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors mb-16 font-bold uppercase tracking-widest text-xs"
          >
            <ArrowUp className="-rotate-90 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </button>

          <header className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                {fullStoryCase.category}
              </span>
              <span className="text-zinc-700">•</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{fullStoryCase.company}</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12">
              {fullStoryCase.fullStory.title}
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-400 font-light leading-relaxed italic border-l-4 border-zinc-800 pl-8">
              "{fullStoryCase.angle}"
            </p>
          </header>

          <div className="space-y-32">
            {fullStoryCase.fullStory.sections.map((section, idx) => (
              <section key={idx} className="space-y-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white flex items-center gap-6">
                  <span className="text-zinc-800 text-sm font-mono">{String(idx + 1).padStart(2, '0')}</span>
                  {section.title}
                </h2>
                <div className="space-y-8">
                  <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light">
                    {section.content}
                  </p>
                  {section.subPoints && (
                    <ul className="space-y-6 pl-10 border-l border-zinc-900">
                      {section.subPoints.map((point, pIdx) => (
                        <li key={pIdx} className="text-lg text-zinc-500 flex items-start gap-4">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-2.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            <div className="pt-20 border-t border-white/5">
              <div className="p-12 md:p-20 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Zap className="w-64 h-64 text-white" />
                </div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white flex items-center gap-3 mb-8">
                  <Zap className="w-4 h-4" />
                  The Strategic Learning
                </h4>
                <p className="text-4xl md:text-5xl font-display italic text-white leading-tight relative z-10">
                  {fullStoryCase.learning}
                </p>
              </div>
            </div>

            {/* Related Skills in Full Story */}
            <div className="space-y-10 pt-20 border-t border-white/5">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-600">Related Skills</h4>
              <div className="flex flex-wrap gap-4">
                {fullStoryCase.skills.map(skill => (
                  <div key={skill} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold uppercase tracking-widest text-zinc-400">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <footer className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
            <button 
              onClick={() => setFullStoryCase(null)}
              className="px-10 py-5 bg-white text-zinc-950 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all"
            >
              Finish Reading
            </button>
            <div className="flex gap-8">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
          </footer>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-zinc-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-zinc-950 font-bold text-lg">S</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Sriharsha.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a 
              href="mailto:sriharsha.rangabhatla@gmail.com"
              className="px-5 py-2 bg-white text-zinc-950 rounded-full hover:bg-zinc-200 transition-all font-semibold text-xs uppercase tracking-widest"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-zinc-500/10 blur-[100px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Floating Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 w-64 h-80 md:w-80 md:h-[450px] rounded-[3rem] overflow-hidden glass hidden lg:block z-10 shadow-2xl shadow-black/50 border border-white/10"
          >
            <img 
              src={profileImage1} 
              alt="Sriharsha Rangabhatla" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 italic text-xl md:text-2xl font-light mb-12 max-w-3xl leading-relaxed border-l border-zinc-800 pl-8"
            >
              "Progress is rarely achieved by turning up the volume. True impact requires isolating the signal from the noise."
            </motion.p>

            <div className="flex items-center gap-6 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                <ShieldCheck className="w-3 h-3" /> Product Enthusiast
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Always Learning</span>
              </div>
            </div>
            
            <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tighter mb-10 leading-[0.85]">
              Seeking the truth <br />
              in what we <span className="text-gradient">build.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <p className="text-xl text-zinc-400 leading-relaxed font-light">
                A student of the craft, exploring the structural clarity and intentionality behind successful products. I apply systematic strategy and metrics rigor to understand what truly moves the needle.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5 text-zinc-500" /> Strategy
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider">
                  <BarChart3 className="w-3.5 h-3.5 text-zinc-500" /> Metrics
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-zinc-500" /> AI/ML
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section id="portfolio" className="sticky top-16 z-40 bg-zinc-950/80 backdrop-blur-md border-y border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={selectedCategory === cat ? { 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                } : { 
                  scale: 1,
                  boxShadow: "none"
                }}
                className={cn(
                  "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap border",
                  selectedCategory === cat 
                    ? "bg-white text-zinc-950 border-white" 
                    : "text-zinc-500 border-white/5 hover:text-white hover:bg-white/5"
                )}
              >
                {cat}
              </motion.button>
            ))}
          </div>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
            <input 
              type="text" 
              placeholder="Search skills or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-2.5 text-sm focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all w-full md:w-80 font-medium"
            />
          </div>
        </div>
      </section>

      {/* Case Study Carousel */}
      <section className="py-20 overflow-hidden">
        <div className="px-6 mb-12 max-w-7xl mx-auto flex items-center justify-between">
          <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-600">The Magazine Rack</h3>
          <div className="flex gap-4">
            <div className="w-12 h-px bg-zinc-900" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-800">Scroll to browse</span>
          </div>
        </div>
        
        <div className="flex overflow-x-auto gap-8 px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] pb-20 no-scrollbar snap-x snap-mandatory">
          <AnimatePresence mode='popLayout'>
            {filteredCases.map((cs, idx) => (
              <motion.div
                layout
                key={cs.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5)"
                }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setSelectedCase(cs)}
                className="group relative glass rounded-[2.5rem] p-10 cursor-pointer hover:bg-white/10 transition-all duration-700 flex flex-col h-[500px] min-w-[350px] md:min-w-[450px] overflow-hidden snap-center"
              >
                <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-10">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    {cs.category}
                  </span>
                </div>
                
                <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-[1] group-hover:text-white transition-all tracking-tighter">
                  {cs.title}
                </h3>
                
                <p className="text-zinc-500 text-lg font-light leading-relaxed mb-12 flex-grow group-hover:text-zinc-300 transition-colors">
                  {cs.angle}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cs.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="text-[9px] uppercase tracking-wider font-bold px-4 py-2 rounded-full bg-white/5 border border-white/5 text-zinc-500 group-hover:border-white/10 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700 group-hover:text-zinc-500 transition-colors">
                    {cs.company}
                  </span>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    Snapshot <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Case Study Modal (Snapshot) */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl h-full glass rounded-[3rem] overflow-hidden flex flex-col shadow-2xl shadow-black"
            >
              <div className="p-8 border-b border-white/5 flex items-center justify-between bg-zinc-900/40">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <BrainCircuit className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white">{selectedCase.company}</h4>
                    <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">{selectedCase.category}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all group"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                </button>
              </div>
              
              <div className="flex-grow overflow-y-auto p-8 md:p-20 custom-scrollbar">
                <div className="max-w-3xl mx-auto">
                  <h2 className="font-display text-5xl md:text-7xl font-bold mb-12 leading-[0.95] tracking-tighter">
                    {selectedCase.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-3 mb-16">
                    {selectedCase.skills.map(skill => (
                      <span key={skill} className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl text-zinc-300 mb-20 font-light leading-relaxed italic border-l-4 border-zinc-800 pl-8">
                    "{selectedCase.angle}"
                  </p>

                  <div className="space-y-24">
                    <div className="space-y-10">
                      <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-600">Research Methodology</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedCase.research.map((item, idx) => (
                          <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-start gap-5">
                            <span className="text-[10px] font-bold text-zinc-600 mt-1">{String(idx + 1).padStart(2, '0')}</span>
                            <p className="text-base text-zinc-400 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedCase.structure.map((section, idx) => (
                      <div key={idx} className="space-y-8">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-600 flex items-center gap-4">
                          <span className="w-12 h-px bg-zinc-800" />
                          {section.section}
                        </h4>
                        <p className="text-2xl leading-relaxed text-zinc-300 font-light">
                          {section.content}
                        </p>
                      </div>
                    ))}

                    <FrameworkVisualizer type={selectedCase.id} />

                    <div className="p-12 md:p-20 rounded-[3rem] bg-white/5 border border-white/10 space-y-8 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Zap className="w-48 h-48 text-white" />
                      </div>
                      <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white flex items-center gap-3">
                        <Zap className="w-4 h-4" />
                        The Strategic Learning
                      </h4>
                      <p className="text-4xl font-display italic text-white leading-tight relative z-10">
                        {selectedCase.learning}
                      </p>
                    </div>

                    {/* Related Skills Section */}
                    <div className="space-y-10 pt-20 border-t border-white/5">
                      <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-600">Related Skills</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedCase.skills.map(skill => (
                          <div key={skill} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-400">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Further Reading Section */}
                    <div className="space-y-10 pt-20 border-t border-white/5">
                      <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-600">Further Reading</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {caseStudies
                          .filter(cs => cs.id !== selectedCase.id)
                          .sort((a, b) => {
                            if (a.category === selectedCase.category && b.category !== selectedCase.category) return -1;
                            if (a.category !== selectedCase.category && b.category === selectedCase.category) return 1;
                            const aSharedSkills = a.skills.filter(s => selectedCase.skills.includes(s)).length;
                            const bSharedSkills = b.skills.filter(s => selectedCase.skills.includes(s)).length;
                            return bSharedSkills - aSharedSkills;
                          })
                          .slice(0, 2)
                          .map(cs => (
                            <button
                              key={cs.id}
                              onClick={() => {
                                setSelectedCase(cs);
                                const modalContent = document.querySelector('.custom-scrollbar');
                                if (modalContent) modalContent.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-all group"
                            >
                              <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 mb-6 block">{cs.category}</span>
                              <h5 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-zinc-300 transition-colors">{cs.title}</h5>
                              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                View Case <ArrowUpRight className="w-3 h-3" />
                              </div>
                            </button>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 border-t border-white/5 bg-zinc-900/40 flex items-center justify-center">
                <button 
                  onClick={() => {
                    setFullStoryCase(selectedCase);
                    setSelectedCase(null);
                    window.scrollTo({ top: 0 });
                  }}
                  className="group flex items-center gap-4 px-12 py-6 bg-white text-zinc-950 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-zinc-200 transition-all shadow-xl shadow-black/20"
                >
                  Read the Full Story <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* About Section - A Student of the Craft */}
      <section id="about" className="py-32 px-6 bg-zinc-900/20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-10 tracking-tight">
              A Student <br />
              <span className="italic font-normal text-zinc-600">of the Craft.</span>
            </h2>
            <div className="space-y-6 text-xl text-zinc-400 font-light leading-relaxed">
              <p>
                Product management is a journey of continuous learning. I am a product enthusiast anchored in the pursuit of structural truth and intentionality.
              </p>
              <p>
                I believe that great products aren't just built; they are discovered through rigorous analysis, deep curiosity, and an obsession with the "why" behind every user interaction.
              </p>
            </div>
            <div className="mt-12 flex gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-display font-bold text-white">10</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-600">Explorations</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-display font-bold text-white">4+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-600">Years Learning</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-display font-bold text-white">AI</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-600">Certified</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden glass relative z-10">
              <img 
                src={profileImage2}
                alt="Sriharsha Rangabhatla" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-zinc-500/10 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-zinc-950 font-bold text-xl">S</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">Sriharsha.</span>
            </div>
            <p className="text-zinc-500 text-lg leading-relaxed mb-10 font-light">
              Crafting product strategies that win markets. Let's discuss your next big challenge.
            </p>
            <div className="flex items-center gap-8">
              <a href="https://www.linkedin.com/in/sriharsha-rangabhatla/" target="_blank" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110"><Github className="w-6 h-6" /></a>
              <a href="mailto:sriharsha.rangabhatla@gmail.com" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-zinc-300">Portfolio</h5>
              <ul className="space-y-6 text-sm font-medium text-zinc-500">
                <li><a href="#portfolio" className="hover:text-white transition-colors">All Case Studies</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Product Critiques</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Frameworks</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-zinc-300">Connect</h5>
              <ul className="space-y-6 text-sm font-medium text-zinc-500">
                <li><a href="https://www.linkedin.com/in/sriharsha-rangabhatla/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
                <li><a href="mailto:sriharsha.rangabhatla@gmail.com" className="hover:text-white transition-colors">Email Me</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-700">
          <p>© 2024 Sriharsha Rangabhatla. Built with Intention.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[60] w-12 h-12 bg-white text-zinc-950 rounded-full flex items-center justify-center shadow-2xl hover:bg-zinc-200 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
