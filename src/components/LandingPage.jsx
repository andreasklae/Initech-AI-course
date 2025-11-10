import { useState } from 'react';
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
  Award
} from 'lucide-react';
import mainLogo from '../assets/main_logo.png';
import ScrollReveal from './ScrollReveal';

// Placeholder component - makes it obvious what needs to be replaced
const Placeholder = ({ children }) => (
  <span className="placeholder-highlight">{children}</span>
);

// Reusable CTA Button
const CTAButton = ({ onClick, size = 'large' }) => (
  <button
    onClick={onClick}
    className={`group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 ${
      size === 'large' ? 'py-5 px-10 text-xl' : 'py-4 px-8 text-lg'
    }`}
  >
    <span className="relative z-10">Meld deg på kurset</span>
    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>
);

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-2 text-left flex justify-between items-center hover:text-orange-400 transition-colors group"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300 group-hover:text-orange-400 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-2 pb-6 text-gray-400 leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

// Module Card Component - Modern design with glassmorphism
const ModuleCard = ({ icon: Icon, number, title, description }) => (
  <div className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-orange-500/0 group-hover:from-blue-500/10 group-hover:to-orange-500/10 rounded-2xl transition-all duration-500"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors">
          <Icon className="w-6 h-6 text-orange-500" />
        </div>
        <span className="text-orange-500 font-bold text-lg">Modul {number}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Feature Card for Section 4
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="text-center group">
    <div className="inline-flex p-4 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl mb-6 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-300">
      <Icon className="w-10 h-10 text-orange-500" />
    </div>
    <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default function LandingPage() {
  const handleCTAClick = () => {
    // Placeholder for form/registration logic
    alert('Påmeldingsfunksjonalitet kommer her!');
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
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-5xl text-center">
          <div className="mb-12 inline-block">
            <img src={mainLogo} alt="Logo" className="w-40 h-40 md:w-48 md:h-48 object-contain" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Bruker du AI? Eller bare tror du gjør det?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            Et 6-timers grunnkurs i AI for folk som vil lære å bruke det riktig - ikke bare åpne ChatGPT og håpe på det beste.
          </p>
          
          <CTAButton onClick={handleCTAClick} />
          
          <p className="mt-8 text-gray-500 text-lg">
            <Placeholder>[X]</Placeholder> plasser igjen · Neste kurs: <Placeholder>[Dato]</Placeholder>
          </p>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </section>

      {/* SECTION 2: PROBLEMET */}
      <section className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Her er sannheten
          </h2>
          
          <div className="text-lg text-gray-400 space-y-8 leading-relaxed">
            <p className="text-xl text-center max-w-3xl mx-auto">
              De fleste bedrifter "bruker AI" allerede. Noen ansatte har ChatGPT åpent i en fane.
              Ledelsen snakker om AI-strategi. Men få bruker det egentlig riktig.
            </p>
            
            <p className="font-semibold text-white text-center text-xl mt-12 mb-8">
              Det koster deg på tre måter:
            </p>
            
            <div className="space-y-6 mt-12">
              <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-orange-500"></div>
                <div className="pl-4">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-orange-500">1.</span>
                    Du får middelmådige resultater
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Folk vet ikke hvordan de skal "snakke" med AI. De får generiske, robotaktige svar som må omskrives helt. 
                    De gir opp og tror "AI funker ikke for meg."
                  </p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-orange-500"></div>
                <div className="pl-4">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-orange-500">2.</span>
                    Du stoler på feil informasjon
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    AI kan analysere data og gi deg konklusjoner på sekunder. Men hva hvis konklusjonen er feil? 
                    Hvis du ikke vet hvordan du skal sjekke AI sitt arbeid, tar du beslutninger på feil grunnlag.
                  </p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-orange-500"></div>
                <div className="pl-4">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-orange-500">3.</span>
                    Du tar unødvendig risiko
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Mange deler kundedata, forretningshemmeligheter, eller ansattinformasjon med AI uten å tenke over konsekvensene. 
                    GDPR-brudd er et tastetrykk unna.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-2xl font-bold text-orange-500 text-center mt-16">
              Dette kurset fikser alle tre.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: LØSNINGEN */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Hva du lærer på 6 timer
          </h2>
          
          <p className="text-xl text-gray-400 mb-20 text-center max-w-4xl mx-auto leading-relaxed">
            Dette er ikke en forelesning. 60% av kurset er hands-on oppgaver hvor du faktisk bruker AI på reelle problemer. 
            Du kommer til å teste, feile (med vilje), og oppdage ting selv - ikke bare høre om dem.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <ScrollReveal key={index}>
                <ModuleCard {...module} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HVORDAN KURSET FUNGERER */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Et kurs, ikke en forelesning
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={Target}
              title="Du lærer ved å gjøre"
              description="60% av tiden bruker du på oppgaver. Teori er viktig, men praksis er viktigere."
            />
            
            <FeatureCard
              icon={Sparkles}
              title="Ingen forkunnskaper nødvendig"
              description="Null programmering. Null teknisk bakgrunn."
            />
            
            <FeatureCard
              icon={Award}
              title="Du får verktøy du bruker i morgen"
              description="Slides, prompt-maler, sjekklister og ressurser – klart til bruk umiddelbart."
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: PRAKTISKE DETALJER */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Praktisk informasjon
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-orange-400 flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Kursdetaljer
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-gray-300">
                  <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Varighet: 6 timer (inkl. pauser og lunsj)</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Users className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Format: Fysisk</span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Sted: <Placeholder>[TBD]</Placeholder></span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Neste kurs: <Placeholder>[Dato og tid]</Placeholder></span>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <DollarSign className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Pris: <Placeholder>[Fyll inn]</Placeholder> kr eks. mva</span>
                </li>
              </ul>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center gap-3">
                  <Laptop className="w-6 h-6" />
                  Hva du må ta med
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Laptop (Mac eller PC)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Tilgang til ChatGPT eller Claude (gratis versjoner fungerer fint)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Nysgjerrighet</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center gap-3">
                  <BookOpen className="w-6 h-6" />
                  Hva du får
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>6 timer undervisning</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Alle slides og materialer</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Prompt-bibliotek med ferdige maler</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Sjekklister for datasikkerhet</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Ressursliste for videre læring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FOR HVEM? */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Er dette kurset for deg?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Yes */}
            <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-green-500/30 shadow-2xl">
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
            
            {/* Right Column - No */}
            <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-red-500/30 shadow-2xl">
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
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Ofte stilte spørsmål
          </h2>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
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
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Klar til å lære AI på riktig måte?
          </h2>
          
          <p className="text-2xl text-gray-400 mb-12">
            Neste kurs: <Placeholder>[Dato]</Placeholder>. <Placeholder>[X]</Placeholder> plasser igjen.
          </p>
          
          <CTAButton onClick={handleCTAClick} />
          
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500 mb-4">Har du spørsmål?</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
              <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <Mail className="w-5 h-5" />
                <Placeholder>[epost]</Placeholder>
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                <Phone className="w-5 h-5" />
                <Placeholder>[telefon]</Placeholder>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-8 px-4 text-center text-gray-600 border-t border-white/5">
        <p>
          &copy; 2024{' '}
          <a 
            href="https://andreasklaeboe.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 transition-colors"
          >
            Andreas Klæboe
          </a>
          . Alle rettigheter reservert.
        </p>
      </footer>
    </div>
  );
}
