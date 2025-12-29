"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import FadeIn from "@/components/animations/FadeIn";
import PageTransition from "@/components/animations/PageTransition";
import Marquee from "@/components/animations/Marquee";

const values = [
  {
    title: "재미있게",
    description: "일을 재미있게 해야 좋은 결과가 나온다고 믿습니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "진지하게",
    description: "재미있지만 결과물에 대해서는 진지하게 임합니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "함께",
    description: "고객과 함께, 팀과 함께 최고의 결과를 만듭니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "끊임없이",
    description: "기술과 트렌드를 계속 학습하고 발전합니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallaxRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".parallax-text", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, parallaxRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 bg-background flex items-center">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-8 leading-tight">
              <span className="text-foreground">재밌게 만드는</span>
              <br />
              <span className="text-gradient">소프트웨어 회사</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed">
              Jaemisseo(재밌어)는 &ldquo;재밌다&rdquo;는 우리말에서 따온 이름입니다.
              우리는 개발이 재밌고, 만드는 것이 재밌고, 문제를 해결하는 것이 재밌습니다.
              <br /><br />
              그 재미를 고객과 함께 나누고 싶습니다.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-8 border-y border-white/10 overflow-hidden">
        <Marquee speed="slow">
          {["FUN", "CREATIVE", "INNOVATIVE", "PASSIONATE", "DEDICATED"].map((word) => (
            <span key={word} className="text-6xl md:text-8xl font-bold mx-8 text-foreground/10">
              {word}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Values Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16 text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              우리의 가치
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group p-8 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section ref={parallaxRef} style={{ paddingTop: '200px', paddingBottom: '120px' }} className="relative px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        {/* Parallax Background Text */}
        <div className="parallax-text absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[20vw] font-bold text-white/[0.02] whitespace-nowrap">
            JAEMISSEO
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="text-6xl md:text-8xl font-bold text-gradient">
                Jaemisseo
              </span>
            </motion.div>
            <p className="mt-8 text-xl md:text-2xl text-muted leading-relaxed">
              재밌게 이것저것 만드는 회사
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ paddingTop: '160px', paddingBottom: '160px' }} className="px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              <span className="text-foreground">우리는</span>{" "}
              <span className="text-gradient">이렇게</span>{" "}
              <span className="text-foreground">일해요</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }} className="text-lg md:text-xl text-muted leading-relaxed">
              <p style={{ lineHeight: '2' }}>
                작은 아이디어도 소중하게 다룹니다.
                <br />
                때로는 그 작은 아이디어가 큰 변화를 만들기도 하니까요.
              </p>
              <p style={{ lineHeight: '2' }}>
                완벽을 추구하되, 완벽에 집착하지 않습니다.
                <br />
                빠르게 만들고, 빠르게 배우고, 빠르게 개선합니다.
              </p>
              <p style={{ lineHeight: '2' }}>
                기술은 수단일 뿐입니다.
                <br />
                진짜 목표는 사람들의 삶을 조금 더 편하고 재밌게 만드는 것입니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
