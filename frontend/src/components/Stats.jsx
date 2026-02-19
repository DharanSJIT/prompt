import React, { useEffect, useState, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'Events Organized', value: 150, suffix: '+' },
    { label: 'Active Members', value: 500, suffix: '+' },
    { label: 'Awards Won', value: 25, suffix: '' },
    { label: 'Years of Excellence', value: 12, suffix: '+' },
  ];

  return (
    <section ref={ref} className="py-20 bg-ieee-blue text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl md:text-6xl font-heading font-extrabold mb-2 tracking-tight">
                    {isVisible ? (
                        <Counter end={stat.value} duration={2000} />
                    ) : '0'}
                    <span className="text-3xl ml-1 text-blue-200">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base font-medium text-blue-100 uppercase tracking-widest opacity-90">
                    {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);
            
            setCount(Math.floor(ease * end));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}</span>;
}

export default Stats;
