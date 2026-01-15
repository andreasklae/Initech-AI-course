import { useId, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Brain, 
  MessageSquare, 
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
  Lightbulb,
  Wrench,
  ThumbsUp
} from 'lucide-react';
import mainLogo from '../assets/main_logo.png';
import ScrollReveal from './ScrollReveal';
import ScrollProgress from './ScrollProgress';
import Parallax from './Parallax';

// Placeholder component - makes it obvious what needs to be replaced
const Placeholder = ({ children }) => (
  <span className="placeholder-highlight">{children}</span>
);

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

// Reusable CTA Button with Mouse-Tracking Glow
const CTAButton = ({ onClick, size = 'large' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative overflow-hidden bg-black/50 backdrop-blur-sm text-white font-semibold rounded-3xl transition-all duration-300 transform hover:scale-105 hover:bg-black/70 hover:shadow-2xl hover:shadow-[#7B61FF]/20 ${focusRing} ${
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
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div className={!isLast ? "border-b border-white/10" : ""}>
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full py-6 px-6 text-left flex justify-between items-center hover:text-[#7B61FF] transition-colors group ${focusRing}`}
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <ChevronDown 
          aria-hidden="true"
          className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300 group-hover:text-[#E961FF] ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className={`px-6 pb-6 text-gray-400 leading-relaxed ${isOpen ? 'animate-fadeIn' : ''}`}
      >
        {answer}
      </div>
    </div>
  );
};

// Module Card Component - Minimal with subtle glow
const ModuleCard = ({ icon: Icon, title, description }) => {
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
          <h3 className="text-xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] bg-clip-text text-transparent">{title}</h3>
        </div>
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

export default function LandingPage() {
  const [signupType, setSignupType] = useState('individual'); // 'individual' or 'business'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleCTAClick = () => {
    // Scroll to signup form heading with offset so it's visible at top
    const formSection = document.getElementById('signup-form');
    if (formSection) {
      const elementPosition = formSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 80; // 80px offset from top
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const notificationTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFICATION;
    const confirmationTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRMATION;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !notificationTemplateId || !confirmationTemplateId || !publicKey) {
      console.error('EmailJS env vars are missing. Check .env configuration.');
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const getValue = (key) => {
      const value = formData.get(key);
      return typeof value === 'string' ? value.trim() : '';
    };

    const isBusiness = signupType === 'business';
    const name = getValue('name');
    const email = getValue('email');
    const phone = getValue('phone');
    const company = getValue('company');
    const message = getValue('message');

    const businessCompany = getValue('business-company');
    const businessContact = getValue('business-contact');
    const businessEmail = getValue('business-email');
    const businessPhone = getValue('business-phone');
    const participants = getValue('participants');
    const businessMessage = getValue('business-message');

    const contactName = isBusiness ? businessContact : name;
    const contactEmail = isBusiness ? businessEmail : email;
    const companyName = isBusiness ? businessCompany : company;

    const payload = {
      signup_type: signupType,
      submitted_at: new Date().toISOString(),
      contact_name: contactName,
      contact_email: contactEmail,
      company_name: companyName,
      participants,
      name,
      email,
      phone,
      company,
      message,
      business_company: businessCompany,
      business_contact: businessContact,
      business_email: businessEmail,
      business_phone: businessPhone,
      business_message: businessMessage,
      'business-company': businessCompany,
      'business-contact': businessContact,
      'business-email': businessEmail,
      'business-phone': businessPhone,
      'business-message': businessMessage
    };

    try {
      await emailjs.send(serviceId, notificationTemplateId, payload, publicKey);
      await emailjs.send(
        serviceId,
        confirmationTemplateId,
        {
          ...payload,
          to_email: contactEmail,
          to_name: contactName
        },
        publicKey
      );

      form.reset();
      setSubmitStatus('success');
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const modules = [
    {
      icon: Lightbulb,
      title: 'Fra 0 til 100',
      description: 'Få en krystallklar, lettfattelig forståelse av AI/LLM (som ChatGPT/Gemini), uten unødvendig sjargong. Du lærer hva AI er, og hvordan det virker.'
    },
    {
      icon: MessageSquare,
      title: 'Mestre de enkleste teknikkene',
      description: 'Vi gir deg de grunnleggende teknikkene innen såkalt Prompt Engineering slik at du kan bruke AI som en effektiv assistent og får de resultatene du ønsker – med en gang!'
    },
    {
      icon: Shield,
      title: 'Lær å bruke AI trygt',
      description: 'På kun 4 timer får du de essensielle etiske retningslinjene og sikkerhetsprinsippene du bør kjenne til, for å unngå fallgruver og bruke AI ansvarlig.'
    },
    {
      icon: Wrench,
      title: 'Praktisk verktøykasse',
      description: 'Få en innføring i bruken av enkle, men kraftige verktøy, for å utvide dine ferdigheter fra ren tekst til enkel dataanalyse og gode presentasjoner.'
    },
    {
      icon: Target,
      title: 'Innsikt fra interne data',
      description: 'Lær hvordan din bedrift kan bruke AI til å analysere interne forretningsdata, avdekke mønstre i drift og salg, og omsette innsikt til bedre beslutninger.'
    },
    {
      icon: ThumbsUp,
      title: 'Få selvtilliten du trenger',
      description: 'Etter 4 timer vil du ha det praktiske grunnlaget som gjør deg trygg på å delta i AI-samtaler og bruke teknologien i din arbeidshverdag.'
    }
  ];

  return (
    <div className="min-h-screen text-gray-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:ring-2 focus:ring-[#00D4FF]/70 focus:ring-offset-2 focus:ring-offset-black"
      >
        Hopp til innhold
      </a>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      <main id="main-content">
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
                <img src={mainLogo} alt="Initech AI kurs logo" className="w-40 h-40 md:w-48 md:h-48 object-contain" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeDown" delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Initech AI kurs
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeUp" delay={200}>
              <p className="text-xl md:text-2xl text-gray-400 mb-4 leading-relaxed max-w-3xl mx-auto">
                Hører du at det prates om AI overalt, men har ikke helt kommet i gang selv ennå?
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeUp" delay={300}>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
                I løpet av vårt 4 timer lange introduksjonskurs kan vi gi deg det praktiske utgangspunktet du trenger videre!
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="scale" delay={400}>
              <CTAButton onClick={handleCTAClick} />
            </ScrollReveal>
          </div>

          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 through-[#7B61FF]/40 to-transparent"></div>
        </section>

        {/* SECTION 2: AI KOMMER OVERALT */}
        <section className="py-16 px-4 relative">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                AI kommer i alle deler av samfunnet
              </h2>
            </ScrollReveal>
            
              <ScrollReveal animation="fadeUp" delay={50}>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
                Du kommer til å møte AI overalt i årene som kommer, på jobb og privat. Alle bør ha en grunnkompetanse innen AI slik at man bruker verktøy riktig og effektivt og unngår å gjøre dyre feil.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 3: LØSNINGEN */}
        <section className="py-16 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Hva du lærer på 4 timer
              </h2>
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

        {/* SECTION 4: SIGNUP FORM */}
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
            
            <ScrollReveal animation="scale" delay={100}>
              {submitStatus ? (
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl text-center space-y-6">
                  <p className="text-xl md:text-2xl font-semibold">
                    {submitStatus === 'success'
                      ? 'Takk for påmeldingen! Vi tar kontakt snart.'
                      : 'Noe gikk galt ved innsending. Vennligst prøv igjen.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus(null)}
                    className={`w-full relative overflow-hidden bg-black/50 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:bg-black/70 hover:shadow-2xl hover:shadow-[#7B61FF]/20 border-2 border-transparent ${focusRing}`}
                    style={{
                      backgroundImage: 'linear-gradient(black, black), linear-gradient(135deg, #00D4FF 0%, #7B61FF 35%, #E961FF 65%, #FF6B9D 100%)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                    }}
                  >
                    <span className="relative z-10">Send inn en ny påmelding</span>
                  </button>
                </div>
              ) : (
                <>
                  {/* Toggle between individual and business */}
                  <div className="flex gap-4 mb-8">
                    <button
                      type="button"
                      aria-pressed={signupType === 'individual'}
                      aria-controls="signup-form-panel"
                      onClick={() => setSignupType('individual')}
                      className={`flex-1 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${focusRing} ${
                        signupType === 'individual'
                          ? 'bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/20'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      Enkeltperson
                    </button>
                    <button
                      type="button"
                      aria-pressed={signupType === 'business'}
                      aria-controls="signup-form-panel"
                      onClick={() => setSignupType('business')}
                      className={`flex-1 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${focusRing} ${
                        signupType === 'business'
                          ? 'bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/20'
                          : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      Bedrift
                    </button>
                  </div>

                  <form
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
                    onSubmit={handleSubmit}
                  >
                    <div className="space-y-6" id="signup-form-panel">
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
                          autoComplete="name"
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
                          autoComplete="email"
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
                          autoComplete="tel"
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
                          autoComplete="organization"
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
                          autoComplete="off"
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
                          autoComplete="organization"
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
                          autoComplete="name"
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
                          autoComplete="email"
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
                          autoComplete="tel"
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
                          autoComplete="off"
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
                          autoComplete="off"
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7B61FF] focus:ring-2 focus:ring-[#7B61FF]/20 transition-all resize-none"
                          placeholder="Spesielle ønsker eller spørsmål til kurset?"
                        ></textarea>
                      </div>
                    </>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className={`w-full relative overflow-hidden bg-black/50 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:bg-black/70 hover:shadow-2xl hover:shadow-[#7B61FF]/20 border-2 border-transparent ${focusRing}`}
                    style={{
                      backgroundImage: 'linear-gradient(black, black), linear-gradient(135deg, #00D4FF 0%, #7B61FF 35%, #E961FF 65%, #FF6B9D 100%)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                    }}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sender...' : 'Send påmelding'}
                    </span>
                  </button>
                </div>
                  </form>
                </>
              )}
            </ScrollReveal>
            
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-8 px-4 text-center border-t border-white/5">
        <p className="text-gray-500 text-sm mb-2">
          &copy; 2026 Andreas Klæboe. Alle rettigheter reservert.
        </p>
        <p className="text-gray-400 text-sm">
          Designet og utviklet av{' '}
          <a 
            href="https://andreasklaeboe.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`bg-gradient-to-r from-[#00D4FF] to-[#E961FF] bg-clip-text text-transparent hover:from-[#7B61FF] hover:to-[#FF6B9D] font-semibold underline decoration-[#00D4FF]/50 hover:decoration-[#E961FF] underline-offset-4 transition-all duration-300 ${focusRing}`}
          >
            Andreas Klæboe
          </a>
        </p>
      </footer>
    </div>
  );
}
