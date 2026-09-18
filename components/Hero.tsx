
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Github,
  Linkedin,
  Code2,
  Download,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Java Developer",
  "AI & ML Enthusiast",
  "Frontend Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  /*
   * Change role every 3 seconds
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        pt-28
        pb-16
        px-6
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            top-20
            left-10
            w-72
            h-72
            bg-indigo-600/10
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-10
            right-10
            w-80
            h-80
            bg-purple-600/10
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            top-1/2
            left-1/2
            w-96
            h-96
            bg-pink-600/5
            rounded-full
            blur-3xl
            -translate-x-1/2
            -translate-y-1/2
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          grid
          lg:grid-cols-[1.1fr_0.9fr]
          gap-16
          items-center
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* AVAILABLE BADGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              glass
              border
              border-indigo-500/20
              text-sm
              text-gray-300
              mb-6
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  animate-ping
                  absolute
                  inline-flex
                  h-full
                  w-full
                  rounded-full
                  bg-green-400
                  opacity-75
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  rounded-full
                  h-2.5
                  w-2.5
                  bg-green-400
                "
              />
            </span>

            Open to Opportunities
          </motion.div>

          {/* HELLO */}

          <p
            className="
              text-indigo-400
              text-lg
              font-semibold
              tracking-wide
            "
          >
            Hello, I'm
          </p>

          {/* NAME */}

          <h1
            className="
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-bold
              tracking-tight
              mt-2
              leading-tight
            "
          >
            Mudavath{" "}
            <span className="gradient-text">
              Tharun
            </span>
          </h1>

          {/* =================================================
              ANIMATED ROLE
          ================================================== */}

          <div
            className="
              mt-5
              min-h-[48px]
              flex
              items-center
              overflow-hidden
            "
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="
                  text-2xl
                  md:text-3xl
                  font-semibold
                  bg-gradient-to-r
                  from-indigo-400
                  via-purple-400
                  to-pink-400
                  bg-clip-text
                  text-transparent
                "
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-6
              text-gray-400
              text-base
              md:text-lg
              leading-relaxed
              max-w-2xl
            "
          >
            Final-year B.Tech Computer Science and Engineering
            student focused on building practical software
            solutions using Java, Python, web technologies,
            databases, and AI. I enjoy turning ideas into
            responsive applications and intelligent systems.
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-8
            "
          >
            {/* VIEW PROJECTS */}

            <Link
              href="#projects"
              className="
                primary-btn
                flex
                items-center
                gap-2
                group
              "
            >
              View My Projects

              <ArrowRight
                size={19}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </Link>

            {/* DOWNLOAD RESUME */}

            <a
              href="/Tharunnayak.pdf"
              download
              className="
                px-7
                py-3
                rounded-full
                border
                border-indigo-500/60
                hover:bg-indigo-500
                hover:text-white
                transition-all
                duration-300
                flex
                items-center
                gap-2
              "
            >
              <Download size={19} />

              Resume
            </a>
          </div>

          {/* =================================================
              SOCIAL LINKS
          ================================================== */}

          <div
            className="
              flex
              items-center
              gap-4
              mt-8
            "
          >
            {/* GITHUB */}

            <Link
              href="https://github.com/Tharunnayak-45"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                p-3
                rounded-full
                glass
                border
                border-white/10
                hover:text-indigo-400
                hover:border-indigo-500/40
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Github size={23} />
            </Link>

            {/* LINKEDIN */}

            <Link
              href="https://www.linkedin.com/in/mudavaththarun45"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                p-3
                rounded-full
                glass
                border
                border-white/10
                hover:text-indigo-400
                hover:border-indigo-500/40
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Linkedin size={23} />
            </Link>

            {/* LEETCODE */}

            <Link
              href="https://leetcode.com/u/Tharunnayak_45/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="
                p-3
                rounded-full
                glass
                border
                border-white/10
                hover:text-indigo-400
                hover:border-indigo-500/40
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Code2 size={23} />
            </Link>

            {/* EMAIL */}

            <Link
              href="mailto:mtharun616@gmail.com"
              aria-label="Email"
              className="
                p-3
                rounded-full
                glass
                border
                border-white/10
                hover:text-indigo-400
                hover:border-indigo-500/40
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Mail size={23} />
            </Link>
          </div>

          {/* =================================================
              PROJECT MESSAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            className="
              mt-8
              flex
              items-center
              gap-3
              text-sm
              text-gray-400
            "
          >
            <Sparkles
              size={17}
              className="text-indigo-400"
            />

            <span>
              Turning ideas into practical software solutions
            </span>
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT SIDE - PROFILE PHOTO
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            flex
            justify-center
            lg:justify-end
          "
        >
          <div className="relative">

            {/* =================================================
                MAIN GLOW
            ================================================== */}

            <div
              className="
                absolute
                -inset-10
                rounded-full
                bg-gradient-to-r
                from-indigo-500/30
                via-purple-500/30
                to-pink-500/30
                blur-3xl
              "
            />

            {/* =================================================
                PROFILE CONTAINER
            ================================================== */}

            <div
              className="
                relative
                w-64
                h-64
                sm:w-72
                sm:h-72
                md:w-80
                md:h-80
                lg:w-[370px]
                lg:h-[370px]
                float-animation
                group
              "
            >

              {/* GRADIENT OUTER RING */}

              <div
                className="
                  absolute
                  -inset-2
                  rounded-full
                  bg-gradient-to-r
                  from-indigo-500
                  via-purple-500
                  to-pink-500
                  opacity-80
                  blur-sm
                "
              />

              {/* DARK INNER RING */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gray-950
                  border-4
                  border-gray-900
                  z-10
                "
              />

              {/* PROFILE IMAGE */}

              <Image
                src="/profiles.png"
                alt="Mudavath Tharun"
                fill
                priority
                sizes="
                  (max-width: 640px) 256px,
                  (max-width: 768px) 288px,
                  (max-width: 1024px) 320px,
                  370px
                "
                className="
                  rounded-full
                  object-cover
                  object-center
                  z-20
                  border-4
                  border-indigo-500/70
                  group-hover:border-purple-400
                  group-hover:scale-[1.03]
                  transition-all
                  duration-500
                "
              />

              {/* =================================================
                  CLEAN TOP BADGE
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                }}
                className="
                  absolute
                  -top-4
                  right-2
                  sm:right-0
                  z-30
                  glass
                  border
                  border-white/10
                  rounded-2xl
                  px-4
                  py-3
                  shadow-xl
                "
              >
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={17}
                    className="text-purple-400"
                  />

                  <span className="text-sm font-medium">
                    Developer
                  </span>
                </div>
              </motion.div>

              {/* =================================================
                  CLEAN BOTTOM BADGE
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.1,
                  duration: 0.5,
                }}
                className="
                  absolute
                  -bottom-5
                  left-2
                  sm:left-0
                  z-30
                  glass
                  border
                  border-white/10
                  rounded-2xl
                  px-4
                  py-3
                  shadow-xl
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-9
                      h-9
                      rounded-xl
                      bg-indigo-500/20
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Code2
                      size={19}
                      className="text-indigo-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      4+
                    </p>

                    <p className="text-xs text-gray-400">
                      Projects
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          flex-col
          items-center
          gap-2
          text-gray-500
          text-xs
        "
      >
        <span>Scroll to explore</span>

        <div
          className="
            w-5
            h-8
            rounded-full
            border
            border-gray-600
            flex
            justify-center
            pt-1
          "
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              w-1
              h-1
              rounded-full
              bg-gray-400
            "
          />
        </div>
      </motion.div>
    </section>
  );
}

