import { useEffect, useRef, useState } from 'react';

const animations = {
  fadeUp: {
    hidden: 'opacity-0 translate-y-10',
    visible: 'opacity-100 translate-y-0'
  },
  fadeDown: {
    hidden: 'opacity-0 -translate-y-10',
    visible: 'opacity-100 translate-y-0'
  },
  fadeLeft: {
    hidden: 'opacity-0 -translate-x-10',
    visible: 'opacity-100 translate-x-0'
  },
  fadeRight: {
    hidden: 'opacity-0 translate-x-10',
    visible: 'opacity-100 translate-x-0'
  },
  scale: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100'
  },
  scaleRotate: {
    hidden: 'opacity-0 scale-90 rotate-3',
    visible: 'opacity-100 scale-100 rotate-0'
  }
};

export default function ScrollReveal({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0,
  duration = 600 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(media.matches);

    updatePreference();
    if (media.addEventListener) {
      media.addEventListener('change', updatePreference);
      return () => media.removeEventListener('change', updatePreference);
    }

    media.addListener(updatePreference);
    return () => media.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on whether element is in viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [prefersReducedMotion]);

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: prefersReducedMotion ? '0ms' : isVisible ? `${delay}ms` : '0ms',
        transitionDuration: prefersReducedMotion ? '0ms' : `${duration}ms`
      }}
      className={`transition-all ${
        isVisible
          ? selectedAnimation.visible
          : selectedAnimation.hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}
