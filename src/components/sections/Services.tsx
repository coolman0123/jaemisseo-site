'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/gsap';
import FadeIn from '@/components/animations/FadeIn';

const services = [
  {
    number: '01',
    title: 'Mobile App',
    description:
      'iOS와 Android를 위한 네이티브 및 크로스 플랫폼 앱 개발. React Native, Flutter 등 최신 기술로 구현합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Web Development',
    description:
      '모던 기술 스택으로 만드는 빠르고 아름다운 웹사이트. Next.js, React로 최적의 사용자 경험을 제공합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'SaaS Product',
    description: '비즈니스를 혁신하는 클라우드 기반 소프트웨어 서비스. 확장 가능하고 안정적인 시스템을 구축합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description:
      '사용자 중심의 직관적이고 아름다운 인터페이스 설계. 데이터 기반의 UX 리서치로 최적의 경험을 설계합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.service-card');

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ paddingTop: '200px', paddingBottom: '200px' }}
      className="bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="w-full max-w-350 mx-auto px-6 md:px-12 relative z-10">
        <FadeIn className=" text-center">
          <div style={{ marginBottom: '14px' }}>
            <span
              className="text-primary text-sm font-semibold uppercase tracking-widest"
              style={{ marginBottom: '6px' }}>
              What We Do
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-8 tracking-tight"
              style={{ marginBottom: '6px' }}>
              우리가 하는 일
            </h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-loose">
              복잡한 기술을 유용한 제품으로 바꿉니다.
              <br />
              아이디어부터 출시까지, 함께 만들어갑니다.
            </p>
          </div>
        </FadeIn>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}>
          {services.map((service) => (
            <motion.div
              key={service.number}
              className="service-card group relative"
              whileHover={{ y: -5 }}
              style={{ padding: '8px' }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <div
                style={{
                  padding: '20px',
                }}
                className="relative  bg-white/2 border border-white/10 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:bg-white/4
                
              ">
                {/* Number background */}
                <span className="absolute top-8 right-8 text-6xl lg:text-7xl font-black text-white/3 group-hover:text-primary/10 transition-colors duration-500 select-none">
                  {service.number}
                </span>

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    style={{ marginBottom: '6px' }}>
                    {service.icon}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground" style={{ marginBottom: '6px' }}>
                    {service.title}
                  </h3>

                  <p className="text-muted leading-relaxed text-sm lg:text-base">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
