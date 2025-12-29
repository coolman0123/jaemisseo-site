"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gsap } from "@/lib/gsap";
import MagneticButton from "@/components/animations/MagneticButton";
import Link from "next/link";

const rollingWords = ["앱", "웹", "게임", "서비스", "무엇이든"];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!heroRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated Background Blob - 하나로 단순화 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[180px]"
        />
      </div>

      {/* Grid Pattern - 더 은은하게 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_50%_40%_at_50%_50%,black_20%,transparent_100%)] opacity-50" />

      <div ref={textRef} className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-muted tracking-widest uppercase">
            Software Company
          </span>
        </motion.div>

        {/* Main Title with 3D effect */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="transform-gpu"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.15] tracking-tight"
          >
            <span className="block text-foreground">우리는</span>
            <span className="block mt-2">
              <span className="text-gradient">재밌게</span>
            </span>
            <span className="block mt-2">
              <span className="inline-flex items-baseline">
                <span className="h-[1.15em] overflow-hidden inline-block align-bottom">
                  <span className="flex flex-col animate-roll">
                    {[...rollingWords, rollingWords[0]].map((word, index) => (
                      <span key={index} className="text-primary h-[1.15em] flex items-center justify-center">
                        {word}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="text-foreground ml-2">만들어요</span>
              </span>
            </span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 md:mt-16 text-base md:text-lg text-muted max-w-md mx-auto leading-relaxed"
        >
          아이디어를 현실로 만드는 소프트웨어 회사
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <Link
              href="/works"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <span>프로젝트 보기</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-foreground text-sm font-medium rounded-full hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              <span>문의하기</span>
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-1.5 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
