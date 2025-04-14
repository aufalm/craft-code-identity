
import React from 'react';
import { useInView } from '@/hooks/useInView';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'zoom-in';
  delay?: number;
}

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0
}: AnimatedSectionProps) => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    once: true
  });

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? `animate-${animation}` : 'opacity-0'}`}
      style={{ 
        animationDelay: delay ? `${delay}ms` : undefined,
        animationFillMode: 'forwards' 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
