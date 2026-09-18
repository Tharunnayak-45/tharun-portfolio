
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Vidya Jyothi Institute of Technology (VJIT), Hyderabad",
    duration: "2023 – 2027",
    score: "CGPA: 8.50 / 10.0",
    description:
      "Currently pursuing B.Tech in Computer Science and Engineering with a focus on software development, data structures, artificial intelligence, database management systems, and web technologies.",
  },
  {
    degree: "Intermediate – MPC",
    field: "Mathematics, Physics & Chemistry",
    institution: "Jaagruthi Junior College, Hyderabad",
    duration: "2021 – 2023",
    score: "CGPA: 9.61 / 10.0",
    description:
      "Completed intermediate education with Mathematics, Physics, and Chemistry as major subjects.",
  },
  {
    degree: "Secondary School Certificate",
    field: "SSC",
    institution: "TTWREIS School",
    duration: "2021",
    score: "GPA: 10.0 / 10.0",
    description:
      "Completed secondary school education with strong academic performance.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute right-[-150px] bottom-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 backdrop-blur-xl">
            <GraduationCap size={16} />
            Academic Background
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
            My academic journey, qualifications, and continuous learning
            foundation.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-7 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-transparent md:block" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={`${item.degree}-${item.duration}`}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="relative md:pl-20"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-7 z-10 hidden h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-[#09090f] shadow-[0_0_30px_rgba(99,102,241,0.15)] md:flex">
                  <GraduationCap
                    size={25}
                    className="text-indigo-400"
                  />
                </div>

                {/* Education Card */}
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.055] sm:p-8">
                  {/* Card Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/20" />

                  <div className="relative">
                    {/* Top Row */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-300">
                          <Award size={13} />
                          {index === 0
                            ? "Currently Pursuing"
                            : "Completed"}
                        </div>

                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                          {item.degree}
                        </h3>

                        <p className="mt-1 text-base font-medium text-indigo-300">
                          {item.field}
                        </p>
                      </div>

                      {/* Duration */}
                      <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-gray-300">
                        <Calendar
                          size={15}
                          className="text-indigo-400"
                        />
                        {item.duration}
                      </div>
                    </div>

                    {/* Institution */}
                    <p className="mt-5 text-base font-semibold text-gray-200">
                      {item.institution}
                    </p>

                    {/* Score */}
                    <div className="mt-4 inline-flex rounded-xl border border-indigo-400/20 bg-indigo-500/10 px-4 py-2">
                      <span className="text-sm font-bold text-indigo-300">
                        {item.score}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2.5 text-sm text-gray-400 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Learning today, building for tomorrow
          </div>
        </motion.div>
      </div>
    </section>
  );
}

