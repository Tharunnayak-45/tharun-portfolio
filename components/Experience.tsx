
"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface ExperienceType {
  role: string;
  company: string;
  duration: string;
  location: string;
  certificate: string;
  description: string;
  skills: string[];
  highlights: string[];
  initials: string;
}

const experiences: ExperienceType[] = [
  {
    role: "Frontend Development Intern",
    company: "CodeAlpha",
    duration: "July 1 – July 30, 2026",
    location: "Remote",
    certificate: "/Certificates/codealpha-internship.pdf",
    initials: "CA",
    description:
      "Worked as a Frontend Development Intern, building responsive web applications using HTML, CSS, and JavaScript. Focused on creating interactive interfaces, handling user inputs, and testing and debugging application functionality.",
    highlights: [
      "Developed responsive web applications using HTML, CSS, and JavaScript",
      "Built Image Gallery and Calculator applications",
      "Implemented JavaScript-based interactions and DOM manipulation",
      "Tested and debugged UI, functionality, and input-handling issues",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "DOM Manipulation",
      "Git",
      "GitHub",
    ],
  },
  {
    role: "Virtual Intern",
    company: "ServiceNow",
    duration: "2025",
    location: "Virtual Internship",
    certificate: "/Certificates/servicenow-virtual-internship.pdf",
    initials: "SN",
    description:
      "Completed a virtual internship focused on ServiceNow platform fundamentals, workflow automation, IT Service Management, cloud concepts, and application development fundamentals.",
    highlights: [
      "Explored ServiceNow platform fundamentals",
      "Learned workflow automation concepts",
      "Studied IT Service Management practices",
      "Gained exposure to application development concepts",
    ],
    skills: [
      "ServiceNow",
      "Cloud Computing",
      "Workflow Automation",
      "ITSM",
      "Application Development",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute right-[-100px] bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 backdrop-blur-xl">
            <Briefcase size={16} />
            Professional Experience
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
            Practical experience gained through internships, hands-on
            development, and exposure to real-world software technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/30 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-14">
            {experiences.map((experience, index) => {
              const isLatest = index === 0;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={experience.company}
                  initial={{
                    opacity: 0,
                    y: 40,
                    x: isLeft ? -20 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-14"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-8 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-indigo-400/30 bg-[#09090f] shadow-[0_0_30px_rgba(99,102,241,0.25)] md:flex md:left-1/2 md:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 shadow-[0_0_15px_rgba(129,140,248,0.8)]" />
                  </div>

                  {/* Card */}
                  <div
                    className={`${
                      isLeft
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-2"
                    }`}
                  >
                    <div
                      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/30 hover:bg-white/[0.055] sm:p-8 ${
                        isLatest
                          ? "shadow-[0_0_50px_rgba(99,102,241,0.10)]"
                          : ""
                      }`}
                    >
                      {/* Card Glow */}
                      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/20" />

                      {/* Latest Badge */}
                      {isLatest && (
                        <div
                          className={`absolute top-5 ${
                            isLeft ? "right-5" : "right-5"
                          } inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300`}
                        >
                          <Sparkles size={13} />
                          Latest Experience
                        </div>
                      )}

                      {/* Company Branding */}
                      <div
                        className={`mb-7 flex items-start gap-4 ${
                          isLeft ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/15 to-purple-500/10 text-lg font-bold text-indigo-300 shadow-[0_0_25px_rgba(99,102,241,0.12)]">
                          {experience.initials}
                        </div>

                        <div
                          className={`min-w-0 ${
                            isLeft ? "md:text-right" : ""
                          }`}
                        >
                          <p className="text-sm font-medium text-indigo-300">
                            {experience.company}
                          </p>

                          <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                            {experience.role}
                          </h3>
                        </div>
                      </div>

                      {/* Meta */}
                      <div
                        className={`mb-6 flex flex-wrap gap-3 text-sm text-gray-400 ${
                          isLeft
                            ? "md:justify-end"
                            : "justify-start"
                        }`}
                      >
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                          <Calendar size={14} className="text-indigo-400" />
                          {experience.duration}
                        </span>

                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                          <MapPin size={14} className="text-purple-400" />
                          {experience.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-sm leading-7 text-gray-400 sm:text-base ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        {experience.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-7">
                        <div
                          className={`mb-4 flex items-center gap-2 ${
                            isLeft
                              ? "md:justify-end"
                              : "justify-start"
                          }`}
                        >
                          <span className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                            Key Highlights
                          </span>
                        </div>

                        <div className="space-y-3">
                          {experience.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className={`flex items-start gap-3 text-sm leading-6 text-gray-400 ${
                                isLeft
                                  ? "md:flex-row-reverse md:text-right"
                                  : ""
                              }`}
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-1 shrink-0 text-indigo-400"
                              />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mt-7 border-t border-white/10 pt-6">
                        <p
                          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 ${
                            isLeft ? "md:text-right" : ""
                          }`}
                        >
                          Technologies
                        </p>

                        <div
                          className={`flex flex-wrap gap-2 ${
                            isLeft
                              ? "md:justify-end"
                              : "justify-start"
                          }`}
                        >
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-indigo-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Certificate */}
                      <div
                        className={`mt-7 flex ${
                          isLeft
                            ? "md:justify-end"
                            : "justify-start"
                        }`}
                      >
                        <a
                          href={experience.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/cert inline-flex items-center gap-2 rounded-xl border border-indigo-400/20 bg-indigo-500/10 px-4 py-2.5 text-sm font-semibold text-indigo-300 transition-all duration-300 hover:border-indigo-400/40 hover:bg-indigo-500/20 hover:text-white"
                        >
                          View Certificate
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover/cert:-translate-y-0.5 group-hover/cert:translate-x-0.5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2.5 text-sm text-gray-400 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Continuously learning and building
          </div>
        </motion.div>
      </div>
    </section>
  );
}

