'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import MagneticButton from '@/components/animations/MagneticButton';

const projects = [
  {
    id: 1,
    title: '로또 연구소',
    category: 'Mobile App',
    description: '로또 번호 분석 및 통계를 제공하는 스마트한 모바일 앱',
    color: 'from-yellow-500 to-orange-500',
    status: '출시 전',
  },
  {
    id: 2,
    title: 'Currency Now',
    category: 'Mobile App',
    description: '실시간 환율 정보를 한눈에 확인하는 금융 앱',
    color: 'from-green-500 to-teal-500',
    status: '개발 중',
  },
  {
    id: 3,
    title: '2026 메모 캘린더',
    category: 'Mobile App',
    description: '50개국 지원, 세상에서 제일 간단한 메모 캘린더 앱',
    color: 'from-blue-500 to-purple-500',
    status: '출시 전',
  },
  {
    id: 4,
    title: 'JLPT 필수 단어장',
    category: 'Mobile App',
    description: '퀴즈로 외우고, 반복으로 뇌에 새기는 일본어 단어 암기 앱',
    color: 'from-red-500 to-pink-500',
    status: '개발 중',
  },
  {
    id: 5,
    title: '마지막 금연',
    category: 'Mobile App',
    description: '이번엔 진짜 끊는다. 당신의 마지막 금연 동반자',
    color: 'from-emerald-500 to-cyan-500',
    status: '개발 중',
  },
  {
    id: 6,
    title: '마지막 금주',
    category: 'Mobile App',
    description: '오늘부터 술 끊는다. 건강한 내일을 위한 금주 도전',
    color: 'from-violet-500 to-fuchsia-500',
    status: '개발 중',
  },
  {
    id: 7,
    title: 'Depick',
    category: 'Mobile App',
    description: '정밀한 매칭으로 만남 성공률 UP. 새로운 인연을 만드는 친구 네트워킹 앱',
    color: 'from-rose-500 to-orange-400',
    status: '개발 중',
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section style={{ paddingTop: '200px', paddingBottom: '200px' }} className="bg-background">
      <div className="w-full max-w-350 mx-auto px-6 md:px-12">
        <FadeIn className="mb-24 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-8 tracking-tight">프로젝트</h2>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto leading-loose">
            우리가 재밌게 만들고 있는 것들입니다.
          </p>
        </FadeIn>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
          style={{ paddingRight: '10px', paddingLeft: '10px' }}>
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
              style={{ padding: '8px' }}>
              <Link href="/works">
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden border border-white/10 bg-white/2 transition-all duration-500 hover:border-white/20">
                  {/* Background Gradient */}
                  <motion.div
                    animate={{ opacity: hoveredId === project.id ? 0.3 : 0.15 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-linear-to-br ${project.color}`}
                  />

                  <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: '24px' }}>
                    {/* Top Row */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <span
                        className=" bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium"
                        style={{
                          paddingRight: '12px',
                          paddingTop: '8px',
                          paddingBottom: '8px',
                          paddingLeft: '12px',
                        }}>
                        {project.category}
                      </span>
                      <span
                        className="px-3 py-1.5 bg-primary/20 text-primary rounded-full text-xs font-medium whitespace-nowrap"
                        style={{
                          paddingRight: '12px',
                          paddingTop: '8px',
                          paddingBottom: '8px',
                          paddingLeft: '12px',
                        }}>
                        {project.status}
                      </span>
                    </div>

                    {/* Bottom Content */}
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-colors"
                        style={{ marginBottom: '6px' }}>
                        {project.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    animate={{
                      x: hoveredId === project.id ? 0 : -10,
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                    className="absolute top-8 right-8 p-2 bg-white/10 backdrop-blur-sm rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <FadeIn className="text-center">
          <MagneticButton>
            <Link
              style={{
                marginTop: '14px',
              }}
              href="/works"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
              모든 프로젝트 보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}
