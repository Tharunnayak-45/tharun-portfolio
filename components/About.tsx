
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Database,
  Cloud,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const focusAreas = [
  {
    title: "Software Development",
    description:
      "Building practical applications with clean, structured, and maintainable code.",
    icon: Code2,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Exploring machine learning and NLP to create intelligent technology solutions.",
    icon: BrainCircuit,
  },
  {
    title: "Databases",
    description:
      "Working with SQL and MySQL for data storage, queries, CRUD operations, and validation.",
    icon: Database,
  },
  {
    title: "Cloud & Platforms",
    description:
      "Learning modern cloud platforms and enterprise technologies including Salesforce.",
    icon: Cloud,
  },
];

const technologies = [
  "Java",
  "Python",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SQL",
  "MySQL",
  "Flask",
  "JSP",
  "Servlets",
  "Git",
  "GitHub",
  "Salesforce",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]" />
        <div className="absolute right-[-150px] bottom-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        {/* =========================================
            Section Heading
        ========================================= */}

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
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Small Label */}

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-indigo-400/20
              bg-indigo-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-indigo-300
              backdrop-blur-xl
            "
          >
            <Sparkles size={16} />
            Get to know me
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            About{" "}
            <span
              className="
                bg-gradient-to-r
                from-indigo-400
                via-purple-400
                to-pink-400
                bg-clip-text
                text-transparent
              "
            >
              Me
            </span>
          </h2>

          {/* Subtitle */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-gray-400
              sm:text-lg
            "
          >
            A Computer Science Engineering student passionate about
            software development, problem solving, and building
            practical technology solutions.
          </p>
        </motion.div>


        {/* =========================================
            Main About Card
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.035]
            p-7
            shadow-2xl
            backdrop-blur-2xl
            sm:p-10
          "
        >

          {/* Card Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-72
              w-72
              rounded-full
              bg-indigo-500/10
              blur-[100px]
              transition-all
              duration-700
              group-hover:bg-indigo-500/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-32
              h-72
              w-72
              rounded-full
              bg-purple-500/10
              blur-[100px]
            "
          />


          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">

            {/* =====================================
                About Text
            ===================================== */}

            <div>

              <div className="mb-6 flex items-center gap-4">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-indigo-400/20
                    bg-indigo-500/10
                    shadow-[0_0_25px_rgba(99,102,241,0.12)]
                  "
                >
                  <GraduationCap
                    size={27}
                    className="text-indigo-400"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-indigo-300">
                    Computer Science Engineering
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    Who I Am
                  </h3>
                </div>

              </div>


              {/* Introduction */}

              <div className="space-y-5 text-sm leading-7 text-gray-400 sm:text-base">

                <p>
                  Hello! I&apos;m{" "}
                  <span className="font-semibold text-white">
                    Mudavath Tharun
                  </span>
                  , currently pursuing a B.Tech in Computer Science
                  and Engineering at{" "}
                  <span className="font-medium text-indigo-300">
                    Vidya Jyothi Institute of Technology (VJIT),
                    Hyderabad
                  </span>
                  .
                </p>

                <p>
                  I enjoy solving programming problems and building
                  practical, user-focused applications. My interests
                  include{" "}
                  <span className="text-gray-200">
                    Full Stack Development, Java, Python, Data
                    Structures, Artificial Intelligence, and Web
                    Technologies
                  </span>
                  .
                </p>

                <p>
                  I have hands-on experience building projects using
                  technologies such as Java, Python, JavaScript,
                  Flask, JSP, Servlets, MySQL, and modern frontend
                  technologies. I also continuously practice problem
                  solving and explore new technologies to strengthen
                  my development skills.
                </p>

                <p>
                  My approach is simple:{" "}
                  <span className="font-semibold text-indigo-300">
                    learn, build, test, improve, and keep growing.
                  </span>
                </p>

              </div>


              {/* Status */}

              <div className="mt-8">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-emerald-400/20
                    bg-emerald-500/10
                    px-4
                    py-3
                  "
                >

                  <span
                    className="
                      h-2.5
                      w-2.5
                      animate-pulse
                      rounded-full
                      bg-emerald-400
                    "
                  />

                  <div>
                    <p className="text-xs text-gray-500">
                      Current Status
                    </p>

                    <p className="text-sm font-semibold text-emerald-300">
                      B.Tech CSE • 2023 – 2027
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* =====================================
                Profile Highlights
            ===================================== */}

            <div>

              <p
                className="
                  mb-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-gray-500
                "
              >
                What I Focus On
              </p>


              <div className="space-y-4">

                {focusAreas.map((area, index) => {

                  const Icon = area.icon;

                  return (
                    <motion.div
                      key={area.title}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="
                        group/item
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.025]
                        p-4
                        transition-all
                        duration-300
                        hover:border-indigo-400/20
                        hover:bg-indigo-500/[0.05]
                      "
                    >

                      <div className="flex gap-4">

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-indigo-400/20
                            bg-indigo-500/10
                          "
                        >
                          <Icon
                            size={19}
                            className="
                              text-indigo-400
                              transition-transform
                              duration-300
                              group-hover/item:scale-110
                            "
                          />
                        </div>

                        <div>

                          <h4 className="text-sm font-semibold text-white">
                            {area.title}
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            {area.description}
                          </p>

                        </div>

                      </div>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </div>
        </motion.div>


        {/* =========================================
            Technologies
        ========================================= */}

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
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-8
            rounded-3xl
            border
            border-white/10
            bg-white/[0.025]
            p-6
            backdrop-blur-xl
            sm:p-8
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-gray-500
                "
              >
                Core Technologies
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                Technologies I Work With
              </h3>

            </div>


            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Explore my</span>

              <a
                href="#skills"
                className="
                  inline-flex
                  items-center
                  gap-1
                  font-semibold
                  text-indigo-400
                  transition-colors
                  hover:text-indigo-300
                "
              >
                Skills
                <ArrowRight size={15} />
              </a>
            </div>

          </div>


          {/* Technology Pills */}

          <div className="mt-6 flex flex-wrap gap-2.5">

            {technologies.map((technology) => (

              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-3.5
                  py-2
                  text-xs
                  font-medium
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-indigo-400/30
                  hover:bg-indigo-500/10
                  hover:text-indigo-300
                "
              >
                {technology}
              </span>

            ))}

          </div>

        </motion.div>


        {/* =========================================
            Bottom Statement
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="mt-12 flex justify-center"
        >

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.035]
              px-5
              py-2.5
              text-sm
              text-gray-400
              backdrop-blur-xl
            "
          >

            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-indigo-400
              "
            />

            Learning continuously • Building consistently

          </div>

        </motion.div>

      </div>
    </section>
  );
}

