import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E961FF] transition-all duration-150 ease-out shadow-lg shadow-[#7B61FF]/50"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

