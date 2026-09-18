
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Code2,
  Database,
  BrainCircuit,
  Globe,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Resume Screening System",
      category: "AI / Machine Learning",
      featured: true,

      description:
        "An AI-powered recruitment web application that analyzes resumes, extracts relevant information, matches candidates with suitable job opportunities, and provides intelligent job recommendations using Natural Language Processing and machine learning techniques.",

      image: "/projects/Ai.jpg",

      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
        "Flask",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],

      highlights: [
        {
          icon: BrainCircuit,
          text: "NLP Resume Analysis",
        },
        {
          icon: Database,
          text: "MySQL Database",
        },
        {
          icon: Code2,
          text: "Flask Backend",
        },
      ],

      github:
        "https://github.com/Tharunnayak-45/AI-Resume-Screening",

      demo:
        "https://ai-resume12.vercel.app/",
    },

    {
      title: "Courier Tracking System",
      category: "Java Full Stack",
      featured: false,

      description:
        "A web-based courier management system designed to simplify shipment booking, courier tracking, delivery management, and customer information management through a structured role-based application.",

      image: "/projects/Courier-Tracking-System.jpg",

      technologies: [
        "Java",
        "JSP",
        "Servlets",
        "JDBC",
        "MySQL",
        "Apache Tomcat",
      ],

      highlights: [
        {
          icon: Code2,
          text: "MVC Architecture",
        },
        {
          icon: Database,
          text: "CRUD Operations",
        },
        {
          icon: Globe,
          text: "Role-Based Access",
        },
      ],

      github:
        "https://github.com/Tharunnayak-45/Courier-Tracking-System-App",

      demo:
        "https://github.com/user-attachments/assets/9db8a6f4-582b-41e7-ab63-4cb5861fa05b",
    },

    {
      title: "BeatVerse Music App",
      category: "Frontend Development",
      featured: false,

      description:
        "A responsive music streaming web application featuring an interactive interface, music browsing, playback controls, favorites, playlist management, and smooth user interactions.",

      image: "/projects/Beatverse.jpg",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],

      highlights: [
        {
          icon: Globe,
          text: "Responsive UI",
        },
        {
          icon: Code2,
          text: "JavaScript Logic",
        },
        {
          icon: Sparkles,
          text: "Interactive Player",
        },
      ],

      github:
        "https://github.com/Tharunnayak-45/CodeAlpha_BeatVerse-Player",

      demo:
        "https://beatverse-player.vercel.app/",
    },

    {
      title: "NeuroTac AI",
      category: "AI Web Game",
      featured: false,

      description:
        "An interactive Tic Tac Toe game featuring smart gameplay logic, multiple difficulty levels, score tracking, and a responsive interface designed for an engaging browser gaming experience.",

      image: "/projects/Tic-Tac-Toe.jpg",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "AI Logic",
      ],

      highlights: [
        {
          icon: BrainCircuit,
          text: "Smart AI Logic",
        },
        {
          icon: Globe,
          text: "Responsive UI",
        },
        {
          icon: Sparkles,
          text: "Multiple Levels",
        },
      ],

      github:
        "https://github.com/Tharunnayak-45/NeuroTac-AI",

      demo:
        "https://neurotac.vercel.app/",
    },
  ];

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="section-container relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-20 right-0 w-[300px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
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
        className="relative z-10 text-center"
      >
        <div
          className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          mb-5
          rounded-full
          border
          border-indigo-500/20
          bg-indigo-500/10
          text-indigo-300
          text-sm
          "
        >
          <Sparkles size={16} />
          What I Have Built
        </div>

        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
          "
        >
          Featured{" "}
          <span className="gradient-text">
            Projects
          </span>
        </h2>

        <p
          className="
          text-gray-400
          mt-4
          max-w-2xl
          mx-auto
          leading-relaxed
          "
        >
          A selection of projects where I applied programming,
          web development, databases, and AI technologies to
          build practical applications.
        </p>
      </motion.div>

      {/* Featured Project */}

      {featuredProject && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          }}
          className="
          relative
          z-10
          mt-14
          group
          "
        >
          <div
            className="
            absolute
            -inset-[1px]
            rounded-3xl
            bg-gradient-to-r
            from-indigo-500/30
            via-purple-500/20
            to-indigo-500/30
            opacity-70
            group-hover:opacity-100
            blur-sm
            transition
            duration-500
            "
          />

          <div
            className="
            relative
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            bg-[#0b0b14]/90
            backdrop-blur-xl
            "
          >
            <div
              className="
              grid
              lg:grid-cols-2
              "
            >
              {/* Image */}

              <div
                className="
                relative
                min-h-[300px]
                lg:min-h-[500px]
                overflow-hidden
                "
              >
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  "
                />

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                  "
                />

                {/* Featured Badge */}

                <div
                  className="
                  absolute
                  top-6
                  left-6
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-indigo-600/90
                  backdrop-blur-md
                  text-white
                  text-sm
                  font-medium
                  "
                >
                  <Sparkles size={15} />
                  Featured Project
                </div>

                {/* Project Number */}

                <div
                  className="
                  absolute
                  bottom-6
                  left-6
                  text-6xl
                  font-black
                  text-white/10
                  "
                >
                  01
                </div>
              </div>

              {/* Content */}

              <div
                className="
                p-7
                md:p-10
                lg:p-12
                flex
                flex-col
                justify-center
                "
              >
                <span
                  className="
                  text-sm
                  text-indigo-400
                  font-medium
                  tracking-wide
                  uppercase
                  "
                >
                  {featuredProject.category}
                </span>

                <h3
                  className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  mt-3
                  "
                >
                  {featuredProject.title}
                </h3>

                <p
                  className="
                  text-gray-400
                  mt-5
                  leading-relaxed
                  "
                >
                  {featuredProject.description}
                </p>

                {/* Highlights */}

                <div
                  className="
                  grid
                  sm:grid-cols-3
                  gap-3
                  mt-7
                  "
                >
                  {featuredProject.highlights.map(
                    (highlight) => {
                      const Icon = highlight.icon;

                      return (
                        <div
                          key={highlight.text}
                          className="
                          flex
                          flex-col
                          gap-2
                          p-3
                          rounded-xl
                          bg-white/[0.03]
                          border
                          border-white/10
                          "
                        >
                          <Icon
                            size={19}
                            className="text-indigo-400"
                          />

                          <span className="text-xs text-gray-400">
                            {highlight.text}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>

                {/* Technologies */}

                <div
                  className="
                  flex
                  flex-wrap
                  gap-2
                  mt-7
                  "
                >
                  {featuredProject.technologies.map(
                    (tech) => (
                      <span
                        key={tech}
                        className="
                        px-3
                        py-1.5
                        rounded-lg
                        text-xs
                        text-gray-300
                        bg-indigo-500/10
                        border
                        border-indigo-500/20
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* Buttons */}

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-8
                  "
                >
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    bg-indigo-600
                    hover:bg-indigo-500
                    text-white
                    transition-all
                    duration-300
                    "
                  >
                    <Github size={18} />
                    View Source
                  </a>

                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-white/10
                    hover:border-indigo-500/50
                    hover:bg-indigo-500/10
                    text-gray-200
                    transition-all
                    duration-300
                    "
                  >
                    Live Demo
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Other Projects */}

      <div
        className="
        relative
        z-10
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        mt-8
        "
      >
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="
            group
            relative
            rounded-2xl
            overflow-hidden
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            hover:border-indigo-500/40
            hover:-translate-y-2
            transition-all
            duration-500
            "
          >
            {/* Image */}

            <div
              className="
              relative
              h-52
              overflow-hidden
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent
                "
              />

              {/* Number */}

              <span
                className="
                absolute
                top-4
                left-4
                text-sm
                font-semibold
                text-white/60
                "
              >
                {String(index + 2).padStart(2, "0")}
              </span>

              {/* Category */}

              <span
                className="
                absolute
                top-4
                right-4
                px-3
                py-1
                rounded-full
                bg-black/40
                backdrop-blur-md
                border
                border-white/10
                text-xs
                text-gray-200
                "
              >
                {project.category}
              </span>
            </div>

            {/* Content */}

            <div className="p-6">
              <h3
                className="
                text-xl
                font-bold
                group-hover:text-indigo-300
                transition
                "
              >
                {project.title}
              </h3>

              <p
                className="
                text-sm
                text-gray-400
                mt-3
                leading-relaxed
                line-clamp-3
                "
              >
                {project.description}
              </p>

              {/* Highlights */}

              <div
                className="
                flex
                flex-wrap
                gap-2
                mt-5
                "
              >
                {project.highlights.map(
                  (highlight) => {
                    const Icon = highlight.icon;

                    return (
                      <span
                        key={highlight.text}
                        className="
                        inline-flex
                        items-center
                        gap-1.5
                        px-2.5
                        py-1.5
                        rounded-lg
                        bg-white/[0.04]
                        border
                        border-white/10
                        text-[11px]
                        text-gray-400
                        "
                      >
                        <Icon
                          size={13}
                          className="text-indigo-400"
                        />

                        {highlight.text}
                      </span>
                    );
                  }
                )}
              </div>

              {/* Technologies */}

              <div
                className="
                flex
                flex-wrap
                gap-2
                mt-5
                "
              >
                {project.technologies
                  .slice(0, 5)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-2.5
                      py-1
                      rounded-md
                      text-[11px]
                      bg-indigo-500/10
                      text-indigo-300
                      border
                      border-indigo-500/10
                      "
                    >
                      {tech}
                    </span>
                  ))}
              </div>

              {/* Buttons */}

              <div
                className="
                flex
                items-center
                gap-3
                mt-6
                pt-5
                border-t
                border-white/10
                "
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-300
                  hover:text-white
                  transition
                  "
                >
                  <Github size={17} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-indigo-400
                  hover:text-indigo-300
                  transition
                  "
                >
                  Demo
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Statement */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
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
        text-center
        mt-12
        "
      >
        <div
          className="
          inline-flex
          items-center
          gap-2
          px-5
          py-3
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          text-sm
          text-gray-400
          "
        >
          <Code2
            size={17}
            className="text-indigo-400"
          />

          Building, learning, and improving with every project.
        </div>
      </motion.div>
    </section>
  );
}

