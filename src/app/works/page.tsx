"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import PageTransition from "@/components/animations/PageTransition";

const categories = ["All", "Mobile App", "Web"];

const projects = [
  {
    id: 1,
    title: "로또 연구소",
    category: "Mobile App",
    description: "로또 번호 분석 및 통계를 제공하는 스마트한 모바일 앱. 당첨 확률을 높이는 데이터 기반 인사이트를 제공합니다.",
    tags: ["React Native", "TypeScript", "Analytics"],
    color: "from-yellow-500 to-orange-500",
    status: "출시 전",
  },
  {
    id: 2,
    title: "Currency Now",
    category: "Mobile App",
    description: "실시간 환율 정보를 한눈에. 글로벌 통화 변환 및 환율 알림 기능을 제공하는 필수 금융 앱입니다.",
    tags: ["React Native", "TypeScript", "Finance API"],
    color: "from-green-500 to-teal-500",
    status: "개발 중",
  },
  {
    id: 3,
    title: "2026 메모 캘린더",
    category: "Mobile App",
    description: "50개국 지원, 세상에서 제일 간단한 메모 캘린더 앱입니다.",
    tags: ["React Native", "TypeScript", "Calendar"],
    color: "from-blue-500 to-purple-500",
    status: "출시 전",
  },
  {
    id: 4,
    title: "JLPT 필수 단어장",
    category: "Mobile App",
    description: "일본어 능력시험 정복의 지름길. 퀴즈로 외우고, 반복으로 뇌에 새기는 단어 암기 앱입니다.",
    tags: ["React Native", "TypeScript", "Education"],
    color: "from-red-500 to-pink-500",
    status: "개발 중",
  },
  {
    id: 5,
    title: "마지막 금연",
    category: "Mobile App",
    description: "이번엔 진짜 끊는다. 당신의 마지막 금연을 응원하는 동반자 앱입니다.",
    tags: ["React Native", "TypeScript", "Health"],
    color: "from-emerald-500 to-cyan-500",
    status: "개발 중",
  },
  {
    id: 6,
    title: "마지막 금주",
    category: "Mobile App",
    description: "오늘부터 술 끊는다. 건강한 내일을 위한 마지막 금주 도전 앱입니다.",
    tags: ["React Native", "TypeScript", "Health"],
    color: "from-violet-500 to-fuchsia-500",
    status: "개발 중",
  },
];

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <PageTransition>
      <section style={{ paddingTop: '160px' }} className="min-h-screen pb-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Our Works
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              프로젝트
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              우리가 재밌게 만들고 있는 프로젝트들입니다.
              <br />
              현재 열심히 개발 중이며, 곧 만나볼 수 있습니다.
            </p>
          </FadeIn>

          {/* Category Filter */}
          <FadeIn delay={0.2} className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-white/5 text-muted hover:bg-white/10 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between" style={{ padding: '24px' }}>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium whitespace-nowrap">
                          {project.status}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-gradient transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/5 rounded-full text-xs text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Animated Border on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredId === project.id ? 1 : 0,
                      }}
                      className="absolute inset-0 rounded-2xl border-2 border-primary/50 pointer-events-none"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted text-lg">해당 카테고리의 프로젝트가 없습니다.</p>
            </motion.div>
          )}

          {/* Coming Soon Notice */}
          <FadeIn delay={0.4} className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.02] border border-white/10 rounded-full">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-primary rounded-full"
              />
              <span className="text-sm text-muted">더 많은 프로젝트가 곧 공개됩니다</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
