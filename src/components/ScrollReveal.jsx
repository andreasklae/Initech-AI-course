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
  const ref = useRef(null);

  useEffect(() => {
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}ms`
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

