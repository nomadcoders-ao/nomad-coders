'use client'
import { useEffect, useRef } from 'react';

const ContadorAuto: React.FC<{ target: number }> = ({ target }) => {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    const increment = target / 100;

    const updateCounter = () => {
      if (!counter) return;
      const currentCount = +counter.innerText;
      if (currentCount < target) {
        counter.innerText = `${Math.ceil(currentCount + increment)}`;
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = `${target}`;
      }
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(counter);
        }
      });
    });

    observer.observe(counter);

    return () => {
      if (counter) observer.unobserve(counter);
    };
  }, [target]);

  return <span ref={counterRef} >0</span>;
};

export default ContadorAuto ;
