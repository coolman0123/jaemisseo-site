"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import MagneticButton from "@/components/animations/MagneticButton";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ paddingTop: '200px', paddingBottom: '200px' }} className="relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2
          ref={textRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-relaxed tracking-tight"
        >
          <span className="text-foreground">새로운 프로젝트를</span>
          <br />
          <span className="text-gradient">함께 시작할까요?</span>
        </h2>

        <motion.p
          style={{ marginBottom: '80px' }}
          className="text-base md:text-lg text-muted max-w-xl mx-auto leading-loose"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          아이디어가 있으신가요? 저희와 함께 만들어봐요.
          <br />
          작은 질문부터 큰 프로젝트까지, 언제든 환영합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton>
            <Link
              href="/contact"
              style={{ paddingLeft: '56px', paddingRight: '56px' }}
              className="group inline-flex items-center gap-2 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 whitespace-nowrap"
            >
              <span>프로젝트 문의하기</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a
              href="mailto:funpeople.hq@gmail.com"
              style={{ paddingLeft: '56px', paddingRight: '56px' }}
              className="inline-flex items-center gap-2 py-4 border border-white/15 text-foreground font-semibold rounded-full hover:border-white/30 hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
            >
              <span>이메일 보내기</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Contact info */}
        <motion.div
          style={{ marginTop: '80px', paddingTop: '48px' }}
          className="border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm text-muted mb-2">Direct Contact</p>
          <a
            href="mailto:funpeople.hq@gmail.com"
            className="text-lg text-foreground hover:text-primary transition-colors"
          >
            funpeople.hq@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
