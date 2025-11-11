import { useState, useRef, useEffect } from 'react';
import { 
  Brain, 
  MessageSquare, 
  FileText, 
  BarChart3, 
  Zap, 
  Shield,
  CheckCircle2,
  XCircle,
  Calendar,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Laptop,
  Sparkles,
  Target,
  BookOpen,
  ChevronDown,
  Mail,
  Phone,
  Award,
  LogOut
} from 'lucide-react';
import mainLogo from '../assets/main_logo.png';
import ScrollReveal from './ScrollReveal';
import ScrollProgress from './ScrollProgress';
import Parallax from './Parallax';

// Placeholder component - makes it obvious what needs to be replaced
const Placeholder = ({ children }) => (
  <span className="placeholder-highlight">{children}</span>
);

// Reusable CTA Button with Mouse-Tracking Glow
const CTAButton = ({ onClick, size = 'large' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative overflow-hidden bg-black/50 backdrop-blur-sm text-white font-semibold rounded-3xl transition-all duration-300 transform hover:scale-105 hover:bg-black/70 hover:shadow-2xl hover:shadow-[#7B61FF]/20 ${
        size === 'large' ? 'py-5 px-10 text-xl' : 'py-4 px-8 text-lg'
      }`}
      style={{
        border: '2px solid transparent',
        backgroundImage: 'linear-gradient(black, black), linear-gradient(135deg, #00D4FF 0%, #7B61FF 50%, #E961FF 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {/* Subtle mouse-tracking glow */}
      <div 
        className="absolute w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, rgba(123, 97, 255, 0.3) 50%, rgba(233, 97, 255, 0.2) 70%, transparent 90%)',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <span className="relative z-10">Meld deg på kurset</span>
    </button>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={!isLast ? "border-b border-white/10" : ""}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-6 text-left flex justify-between items-center hover:text-[#7B61FF] transition-colors group"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300 group-hover:text-[#E961FF] ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-400 leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

// Module Card Component - Minimal with subtle glow
const ModuleCard = ({ icon: Icon, number, title, description }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative h-full flex flex-col bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-[#7B61FF]/40 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl overflow-hidden"
    >
      {/* Subtle mouse-tracking glow effect */}
      <div 
        className="absolute w-64 h-64 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.5) 0%, rgba(123, 97, 255, 0.4) 40%, rgba(233, 97, 255, 0.3) 70%, transparent 90%)',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#00D4FF]/10 to-[#7B61FF]/10 rounded-2xl group-hover:scale-110 group-hover:from-[#00D4FF]/20 group-hover:to-[#7B61FF]/20 transition-all">
            <Icon className="w-6 h-6 text-[#00D4FF]" />
          </div>
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] bg-clip-text text-transparent font-bold text-lg">Modul {number}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Feature Card for Section 4
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="text-center group">
    <div className="inline-flex p-4 bg-gradient-to-br from-[#00D4FF]/10 to-[#7B61FF]/10 rounded-3xl mb-6 group-hover:scale-110 group-hover:from-[#00D4FF]/20 group-hover:to-[#E961FF]/20 transition-all duration-300">
      <Icon className="w-10 h-10 text-[#00D4FF] group-hover:text-[#7B61FF] transition-colors" />
    </div>
    <h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-[#00D4FF] group-hover:to-[#E961FF] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default function LandingPage({ onLogout }) {
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const [signupType, setSignupType] = useState('individual'); // 'individual' or 'business'

  const handleCTAClick = () => {
    // Scroll to signup form heading with offset so it's visible at top
    const formSection = document.getElementById('signup-form');
    if (formSection) {
      const elementPosition = formSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 80; // 80px offset from top
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogout = () => {
    if (window.confirm('Er du sikker på at du vil logge ut?')) {
      onLogout();
    }
  };

  const modules = [
    {
      icon: Brain,
      number: 1,
      title: 'Grunnleggende forståelse',
      description: 'Hva AI faktisk er, hva det kan og ikke kan. Du vil oppdage AI sine begrensninger selv - ved å gi den oppgaver den svarer feil på.'
    },
    {
      icon: MessageSquare,
      number: 2,
      title: 'Prompt engineering',
      description: 'Samme AI, 10x bedre svar. Du lærer en enkel modell (RCFK) for hvordan du skal "snakke" med AI.'
    },
    {
      icon: FileText,
      number: 3,
      title: 'AI som skriveassistent',
      description: 'Skriv e-poster, rapporter og dokumenter raskere – men også mer menneskelig.'
    },
    {
      icon: BarChart3,
      number: 4,
      title: 'AI for dataanalyse',
      description: 'Analyser data uten avanserte Excel-formler, og lær å oppdage feil i AI-analyser.'
    },
    {
      icon: Zap,
      number: 5,
      title: 'AI-verktøy i praksis',
      description: 'Oppdag AI som kan analysere bilder, skrive kode, automatisere oppgaver.'
    },
    {
      icon: Shield,
      number: 6,
      title: 'Datasikkerhet og etikk',
      description: 'Hva du aldri skal dele, hvordan anonymisere data riktig, og etiske grenser.'
    }
  ];

  return (
    <div className="min-h-screen text-gray-100">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Logout Button - Fixed Position */}
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-red-500/30 text-gray-400 hover:text-red-400 px-4 py-2 rounded-3xl transition-all duration-300 shadow-lg"
        title="Logg ut"
      >
        <LogOut className="w-4 h-4" />
        <span className="hidden sm:inline">Logg ut</span>
      </button>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-black"></div>
        <Parallax speed={0.3} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00D4FF]/10 via-[#7B61FF]/5 to-transparent"></div>
        </Parallax>
        
        <div className="relative z-10 max-w-5xl text-center">
          <ScrollReveal animation="scale" duration={500}>
            <div className="mb-12 inline-block">
              <img src={mainLogo} alt="Logo" className="w-40 h-40 md:w-48 md:h-48 object-contain" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeDown" delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Bruker du AI? Eller bare tror du gjør det?
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={200}>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              Et 6-timers grunnkurs i AI for folk som vil lære å bruke det riktig - ikke bare åpne ChatGPT og håpe på det beste.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="scale" delay={300}>
            <CTAButton onClick={handleCTAClick} />
            
            <p className="mt-8 text-gray-500 text-lg">
              <Placeholder>[X]</Placeholder> plasser igjen · Neste kurs: <Placeholder>[Dato]</Placeholder>
            </p>
          </ScrollReveal>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 through-[#7B61FF]/40 to-transparent"></div>
      </section>

      {/* SECTION 2: PROBLEMET */}
      <section className="py-16 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Her er sannheten
            </h2>
          </ScrollReveal>
          
          <div className="text-lg text-gray-400 space-y-8 leading-relaxed">
            <ScrollReveal animation="fadeUp" delay={50}>
              <p className="text-xl text-center max-w-3xl mx-auto">
                De fleste bedrifter "bruker AI" allerede. Noen ansatte har ChatGPT åpent i en fane.
                Ledelsen snakker om AI-strategi. Men få bruker det egentlig riktig.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeUp" delay={100}>
              <p className="font-semibold text-white text-center text-xl mt-12 mb-8">
                Det koster deg på tre måter:
              </p>
            </ScrollReveal>
            
            <div className="space-y-6 mt-12">
              <ScrollReveal animation="fadeLeft" delay={50}>
                <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-[#00D4FF]/40 transition-all duration-300 shadow-2xl">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00D4FF] via-[#7B61FF] to-[#E961FF]"></div>
                  <div className="pl-4">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <span className="text-[#00D4FF]">1.</span>
                      Du får middelmådige resultater
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Folk vet ikke hvordan de skal "snakke" med AI. De får generiske, robotaktige svar som må omskrives helt. 
                      De gir opp og tror "AI funker ikke for meg."
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fadeLeft" delay={100}>
                <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-[#7B61FF]/40 transition-all duration-300 shadow-2xl">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00D4FF] via-[#7B61FF] to-[#E961FF]"></div>
                  <div className="pl-4">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <span className="text-[#7B61FF]">2.</span>
                      Du stoler på feil informasjon
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      AI kan analysere data og gi deg konklusjoner på sekunder. Men hva hvis konklusjonen er feil? 
                      Hvis du ikke vet hvordan du skal sjekke AI sitt arbeid, tar du beslutninger på feil grunnlag.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fadeLeft" delay={150}>
                <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-[#E961FF]/40 transition-all duration-300 shadow-2xl">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00D4FF] via-[#7B61FF] to-[#E961FF]"></div>
                  <div className="pl-4">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <span className="text-[#E961FF]">3.</span>
                      Du tar unødvendig risiko
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Mange deler kundedata, forretningshemmeligheter, eller ansattinformasjon med AI uten å tenke over konsekvensene. 
                      GDPR-brudd er et tastetrykk unna.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <p className="text-2xl font-bold bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E961FF] bg-clip-text text-transparent text-center mt-16">
              Dette kurset fikser alle tre.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: LØSNINGEN */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Hva du lærer på 6 timer
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={50}>
            <p className="text-xl text-gray-400 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
              Dette er ikke en forelesning. 60% av kurset er hands-on oppgaver hvor du faktisk bruker AI på reelle problemer. 
              Du kommer til å teste, feile (med vilje), og oppdage ting selv - ikke bare høre om dem.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 50} className="h-full">
                <ModuleCard {...module} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HVORDAN KURSET FUNGERER */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Et kurs, ikke en forelesning
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal animation="fadeUp" delay={50}>
              <FeatureCard
                icon={Target}
                title="Du lærer ved å gjøre"
                description="60% av tiden bruker du på oppgaver. Teori er viktig, men praksis er viktigere."
              />
            </ScrollReveal>
            
            <ScrollReveal animation="fadeUp" delay={100}>
              <FeatureCard
                icon={Sparkles}
                title="Ingen forkunnskaper nødvendig"
                description="Null programmering. Null teknisk bakgrunn."
              />
            </ScrollReveal>
            
            <ScrollReveal animation="fadeUp" delay={150}>
              <FeatureCard
                icon={Award}
                title="Du får verktøy du bruker i morgen"
                description="Slides, prompt-maler, sjekklister og ressurser – klart til bruk umiddelbart."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRAKTISKE DETALJER */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Praktisk informasjon
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <ScrollReveal animation="fadeRight" delay={50}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl h-full">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#00D4FF]" />
                <span>Kursdetaljer</span>
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-gray-300">
                  <Clock className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-1" />
                  <span>Varighet: 6 timer (inkl. pauser og lunsj)</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Users className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-1" />
                  <span>Format: Fysisk</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-1" />
                  <span>Sted: <Placeholder>[TBD]</Placeholder></span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Calendar className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-1" />
                  <span>Neste kurs: <Placeholder>[Dato og tid]</Placeholder></span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <DollarSign className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-1" />
                  <span>Pris: <Placeholder>[Fyll inn]</Placeholder> kr eks. mva</span>
                </li>
              </ul>
            </div>
            </ScrollReveal>
            
            {/* Right Column */}
            <ScrollReveal animation="fadeLeft" delay={100}>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <Laptop className="w-6 h-6 text-[#00D4FF]" />
                  <span>Hva du må ta med</span>
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span>Laptop (Mac eller PC)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span>Tilgang til ChatGPT eller Claude (gratis versjoner fungerer fint)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span>Nysgjerrighet</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-[#00D4FF]" />
                  <span>Hva du får</span>
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span>6 timer undervisning</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span>Alle slides og materialer</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span>Prompt-bibliotek med ferdige maler</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span>Sjekklister for datasikkerhet</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span>Ressursliste for videre læring</span>
                  </li>
                </ul>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 6: FOR HVEM? */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Er dette kurset for deg?
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Yes */}
            <ScrollReveal animation="fadeUp" delay={50} className="h-full">
            <div className="relative overflow-hidden h-full bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-green-500/30 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-8 text-green-400 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7" />
                Dette kurset passer for deg hvis
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Du har hørt mye om AI men ikke skjønt hvordan bruke det i praksis</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Du har prøvd ChatGPT noen ganger og fått "ok" resultater</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Du er usikker på hva du kan og ikke kan dele med AI</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Du vil spare tid på repetitive oppgaver</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Du jobber med tekst, data, eller administrative oppgaver</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Du vil være trygg på at du bruker AI ansvarlig</span>
                </li>
              </ul>
            </div>
            </ScrollReveal>
            
            {/* Right Column - No */}
            <ScrollReveal animation="fadeUp" delay={100} className="h-full">
            <div className="relative overflow-hidden h-full bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-red-500/30 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-8 text-red-400 flex items-center gap-3">
                <XCircle className="w-7 h-7" />
                Dette kurset er IKKE for deg hvis
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-gray-300">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Du vil lære å programmere AI-modeller fra bunnen av</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Du søker et teknisk deep-dive i maskinlæring</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Du allerede bruker AI daglig og behersker avanserte teknikker</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Du forventer at AI skal løse alt for deg uten at du tenker kritisk</span>
                </li>
              </ul>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-16 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Ofte stilte spørsmål
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="scale" delay={50}>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <FAQItem
              question="Trenger jeg å kunne programmering?"
              answer="Nei, absolutt ikke! Dette kurset krever ingen tekniske forkunnskaper. Vi fokuserer på hvordan du bruker AI-verktøy som allerede eksisterer, ikke hvordan du bygger dem."
            />
            <FAQItem
              question="Må jeg ha ChatGPT Plus?"
              answer="Nei, gratisversjonen av ChatGPT eller Claude fungerer helt fint for kurset. Vi kommer til å jobbe med verktøy som er tilgjengelige for alle."
            />
            <FAQItem
              question="Hva om jeg allerede har brukt AI litt?"
              answer="Perfekt! Du har sannsynligvis oppdaget noen utfordringer og frustrasjoner. Dette kurset vil hjelpe deg å forstå hvorfor du får de resultatene du får, og hvordan du kan forbedre dem dramatisk."
            />
            <FAQItem
              question="Er kurset på norsk?"
              answer="Ja, hele kurset holdes på norsk. Materialer og eksempler er også på norsk, men noen tekniske begreper kan være på engelsk der det er naturlig."
            />
            <FAQItem
              question="Kan bedriften min bestille kurset internt?"
              answer={
                <span>
                  Ja, absolutt! Vi tilbyr interne kurs for bedrifter. Ta kontakt med{' '}
                  <Placeholder>[navn]</Placeholder> på{' '}
                  <Placeholder>[epost]</Placeholder> eller{' '}
                  <Placeholder>[telefon]</Placeholder> for å diskutere muligheter.
                </span>
              }
              isLast={true}
            />
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 8: SIGNUP FORM */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black"></div>
        <Parallax speed={0.2} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7B61FF]/10 via-[#E961FF]/5 to-transparent"></div>
        </Parallax>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <h2 id="signup-form" className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meld deg på kurset
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={50}>
            <p className="text-lg text-gray-400 mb-8 text-center">
              Neste kurs: <Placeholder>[Dato]</Placeholder>. <Placeholder>[X]</Placeholder> plasser igjen.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="scale" delay={100}>
            {/* Toggle between individual and business */}
            <div className="flex gap-4 mb-8">
              <button
                type="button"
                onClick={() => setSignupType('individual')}
                className={`flex-1 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                  signupType === 'individual'
                    ? 'bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/20'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                Enkeltperson
              </button>
              <button
                type="button"
                onClick={() => setSignupType('business')}
                className={`flex-1 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                  signupType === 'business'
                    ? 'bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/20'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                Bedrift
              </button>
            </div>

            <form className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                {signupType === 'individual' ? (
                  <>
                    {/* Individual Form */}
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Fullt navn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all"
                        placeholder="Ola Nordmann"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        E-post *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all"
                        placeholder="ola@example.com"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all"
                        placeholder="+47 123 45 678"
                      />
                    </div>

                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Bedrift (valgfritt)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all"
                        placeholder="Bedriftsnavn AS"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Melding (valgfritt)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all resize-none"
                        placeholder="Er det noe spesielt du vil lære? Har du spørsmål?"
                      ></textarea>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Business Form */}
                    {/* Company Name Field */}
                    <div>
                      <label htmlFor="business-company" className="block text-sm font-medium text-gray-300 mb-2">
                        Bedriftsnavn *
                      </label>
                      <input
                        type="text"
                        id="business-company"
                        name="business-company"
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all"
                        placeholder="Bedriftsnavn AS"
                      />
                    </div>

                    {/* Contact Person Field */}
                    <div>
                      <label htmlFor="business-contact" className="block text-sm font-medium text-gray-300 mb-2">
                        Kontaktperson *
                      </label>
                      <input
                        type="text"
                        id="business-contact"
                        name="business-contact"
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all"
                        placeholder="Ola Nordmann"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="business-email" className="block text-sm font-medium text-gray-300 mb-2">
                        E-post *
                      </label>
                      <input
                        type="email"
                        id="business-email"
                        name="business-email"
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all"
                        placeholder="ola@bedrift.no"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="business-phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="business-phone"
                        name="business-phone"
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all"
                        placeholder="+47 123 45 678"
                      />
                    </div>

                    {/* Number of Participants Field */}
                    <div>
                      <label htmlFor="participants" className="block text-sm font-medium text-gray-300 mb-2">
                        Antall deltakere *
                      </label>
                      <input
                        type="number"
                        id="participants"
                        name="participants"
                        min="1"
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all"
                        placeholder="5"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="business-message" className="block text-sm font-medium text-gray-300 mb-2">
                        Melding (valgfritt)
                      </label>
                      <textarea
                        id="business-message"
                        name="business-message"
                        rows="4"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all resize-none"
                        placeholder="Spesielle ønsker eller spørsmål til kurset?"
                      ></textarea>
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full relative overflow-hidden bg-black/50 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:bg-black/70 hover:shadow-2xl hover:shadow-[#7B61FF]/20 border-2 border-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(black, black), linear-gradient(135deg, #00D4FF 0%, #7B61FF 35%, #E961FF 65%, #FF6B9D 100%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  <span className="relative z-10">Send påmelding</span>
                </button>
              </div>
            </form>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={150}>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-500 mb-4">Har du spørsmål?</p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
                <a href="#" className="flex items-center gap-2 hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#7B61FF] hover:bg-clip-text hover:text-transparent transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  <Placeholder>[epost]</Placeholder>
                </a>
                <span className="text-gray-700">•</span>
                <a href="#" className="flex items-center gap-2 hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#7B61FF] hover:bg-clip-text hover:text-transparent transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <Placeholder>[telefon]</Placeholder>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-8 px-4 text-center border-t border-white/5">
        <p className="text-gray-500 text-sm mb-2">
          &copy; 2025 Andreas Klæboe. Alle rettigheter reservert.
        </p>
        <p className="text-gray-400 text-sm">
          Designet og utviklet av{' '}
          <a 
            href="https://andreasklaeboe.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#00D4FF] to-[#E961FF] bg-clip-text text-transparent hover:from-[#7B61FF] hover:to-[#FF6B9D] font-semibold underline decoration-[#00D4FF]/50 hover:decoration-[#E961FF] underline-offset-4 transition-all duration-300"
          >
            Andreas Klæboe
          </a>
        </p>
      </footer>
    </div>
  );
}
