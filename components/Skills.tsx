
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  GitBranch,
  Terminal,
  Layers3,
} from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      description: "Languages I use for application development and problem solving.",
      icon: Code2,
      skills: [
        { name: "Java", icon: "☕", featured: true },
        { name: "Python", icon: "🐍", featured: true },
        { name: "JavaScript", icon: "JS", featured: true },
        { name: "SQL", icon: "SQL", featured: false },
      ],
    },

    {
      title: "Frontend Development",
      description: "Technologies I use to build responsive and interactive interfaces.",
      icon: Globe,
      skills: [
        { name: "HTML5", icon: "HTML", featured: true },
        { name: "CSS3", icon: "CSS", featured: true },
        { name: "JavaScript", icon: "JS", featured: true },
        { name: "Next.js", icon: "N", featured: true },
        { name: "Tailwind CSS", icon: "TW", featured: false },
        { name: "Responsive Design", icon: "UI", featured: false },
      ],
    },

    {
      title: "Backend & Web",
      description: "Backend technologies used to build server-side applications.",
      icon: Server,
      skills: [
        { name: "Flask", icon: "FL", featured: true },
        { name: "JSP", icon: "JSP", featured: true },
        { name: "Servlets", icon: "SV", featured: true },
        { name: "JDBC", icon: "DB", featured: true },
        { name: "Apache Tomcat", icon: "TC", featured: false },
      ],
    },

    {
      title: "Databases",
      description: "Database technologies used for storing and managing application data.",
      icon: Database,
      skills: [
        { name: "MySQL", icon: "SQL", featured: true },
        { name: "RDBMS", icon: "DB", featured: true },
        { name: "SQL Queries", icon: "Q", featured: false },
        { name: "CRUD Operations", icon: "CRUD", featured: false },
        { name: "Data Validation", icon: "✓", featured: false },
      ],
    },

    {
      title: "AI & Machine Learning",
      description: "Technologies used in my AI-powered projects and experiments.",
      icon: BrainCircuit,
      skills: [
        { name: "Machine Learning", icon: "ML", featured: true },
        { name: "NLP", icon: "NLP", featured: true },
        { name: "Resume Screening", icon: "AI", featured: true },
        { name: "Job Recommendation", icon: "JR", featured: false },
        { name: "AI Logic", icon: "AI", featured: false },
      ],
    },

    {
      title: "Tools & Platforms",
      description: "Development tools and platforms I use throughout the development workflow.",
      icon: Wrench,
      skills: [
        { name: "Git", icon: "GIT", featured: true },
        { name: "GitHub", icon: "GH", featured: true },
        { name: "VS Code", icon: "VS", featured: true },
        { name: "Vercel", icon: "▲", featured: true },
        { name: "Apache Tomcat", icon: "TC", featured: false },
      ],
    },
  ];

  const coreStack = [
    "Java",
    "Python",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Flask",
    "JSP",
    "Servlets",
    "MySQL",
    "JDBC",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="skills"
      className="section-container relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-sm"
        >
          <Layers3 size={16} />
          My Technology Stack
        </div>

        <h2 className="text-4xl md:text-5xl font-bold">
          Technical{" "}
          <span className="gradient-text">
            Skills
          </span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          A collection of technologies, frameworks, databases, and
          development tools I use to build web applications and
          software projects.
        </p>
      </motion.div>

      {/* Core Stack */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          relative
          z-10
          mt-10
          p-6
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3 mb-5">
          <Terminal
            size={21}
            className="text-indigo-400"
          />

          <h3 className="text-lg font-semibold">
            Core Stack
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {coreStack.map((skill) => (
            <span
              key={skill}
              className="
                px-4
                py-2
                rounded-xl
                text-sm
                text-gray-200
                bg-indigo-500/10
                border
                border-indigo-500/20
                hover:border-indigo-400/50
                hover:bg-indigo-500/20
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Skill Categories */}

      <div
        className="
          relative
          z-10
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          mt-8
        "
      >
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              className="
                group
                relative
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6
                overflow-hidden
                hover:border-indigo-500/40
                hover:bg-white/[0.05]
                transition-all
                duration-500
              "
            >
              {/* Hover Glow */}

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-40
                  h-40
                  bg-indigo-500/10
                  blur-3xl
                  rounded-full
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              {/* Category Header */}

              <div className="relative flex items-start gap-4 mb-6">
                <div
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-indigo-500/10
                    border
                    border-indigo-500/20
                    group-hover:bg-indigo-500/20
                    transition
                  "
                >
                  <Icon
                    size={24}
                    className="text-indigo-400"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skills */}

              <div className="relative space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3
                      rounded-xl
                      bg-black/20
                      border
                      border-white/5
                      hover:border-indigo-500/30
                      hover:bg-indigo-500/[0.06]
                      transition-all
                      duration-300
                    "
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="
                          w-9
                          h-9
                          flex
                          items-center
                          justify-center
                          rounded-lg
                          bg-white/5
                          border
                          border-white/10
                          text-xs
                          font-semibold
                          text-indigo-300
                        "
                      >
                        {skill.icon}
                      </span>

                      <span className="text-sm text-gray-200">
                        {skill.name}
                      </span>
                    </div>

                    {skill.featured && (
                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-wider
                          text-indigo-400
                          px-2
                          py-1
                          rounded-full
                          bg-indigo-500/10
                        "
                      >
                        Core
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Development Workflow */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          z-10
          mt-10
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-6
        "
      >
        <div className="flex items-center gap-3 mb-6">
          <GitBranch
            size={21}
            className="text-indigo-400"
          />

          <h3 className="text-lg font-semibold">
            Development Workflow
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          {[
            "Plan",
            "Develop",
            "Database",
            "Test",
            "Debug",
            "Git",
            "GitHub",
            "Deploy",
          ].map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-3"
            >
              <span
                className="
                  px-4
                  py-2
                  rounded-xl
                  bg-indigo-500/10
                  border
                  border-indigo-500/20
                  text-gray-200
                "
              >
                {step}
              </span>

              {index !== 7 && (
                <span className="text-gray-600">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

