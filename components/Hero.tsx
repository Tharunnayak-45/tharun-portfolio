
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Github,
  Linkedin,
  Code2,
  Download,
  Mail,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Computer Science Student",
  "Java Developer",
  "Salesforce Trailhead Learner",
  "B.Tech CSE Student",
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
        min-h-screen
        flex
        items-center
        pt-24
        px-6
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          grid
          md:grid-cols-2
          gap-12
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
          {/* HELLO */}

          <p
            className="
              text-indigo-400
              text-lg
              font-semibold
            "
          >
            Hello, I'm
          </p>

          {/* NAME */}

          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              mt-3
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
              mt-4
              h-12
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
                  clipPath: "inset(0 100% 0 0)",
                }}
                animate={{
                  opacity: 1,
                  clipPath: "inset(0 0% 0 0)",
                }}
                exit={{
                  opacity: 0,
                  clipPath: "inset(0 100% 0 0)",
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="
                  text-2xl
                  md:text-3xl
                  font-semibold
                  whitespace-nowrap
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

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              text-gray-400
              leading-relaxed
              max-w-xl
            "
          >
            Final-year B.Tech CSE student passionate about
            Software Development, Full Stack Web Development,
            Java, Python, Data Structures, and Artificial
            Intelligence. Building scalable projects and
            preparing for top IT company placements.
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
            {/* DOWNLOAD RESUME */}

            <a
              href="/Tharun_Resume_545.pdf"
              download
              className="
                primary-btn
                flex
                items-center
                gap-2
              "
            >
              <Download size={20} />

              Download Resume
            </a>

            {/* CONTACT */}

            <Link
              href="#contact"
              className="
                px-7
                py-3
                rounded-full
                border
                border-indigo-500
                hover:bg-indigo-500
                hover:text-white
                transition-all
                duration-300
              "
            >
              Contact Me
            </Link>
          </div>

          {/* =================================================
              SOCIAL LINKS
          ================================================== */}

          <div
            className="
              flex
              gap-5
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
                hover:text-indigo-400
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Github size={25} />
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
                hover:text-indigo-400
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Linkedin size={25} />
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
                hover:text-indigo-400
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Code2 size={25} />
            </Link>

            {/* EMAIL */}

            <Link
              href="mailto:mtharun616@gmail.com"
              aria-label="Email"
              className="
                p-3
                rounded-full
                glass
                hover:text-indigo-400
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Mail size={25} />
            </Link>
          </div>

          {/* =================================================
              STATS
          ================================================== */}

          <div
            className="
              flex
              flex-wrap
              gap-10
              mt-10
            "
          >
            {/* CGPA */}

            <div>
              <h3
                className="
                  text-3xl
                  font-bold
                  gradient-text
                "
              >
                8.5
              </h3>

              <p className="text-gray-400">
                CGPA
              </p>
            </div>

            {/* PROJECTS */}

            <div>
              <h3
                className="
                  text-3xl
                  font-bold
                  gradient-text
                "
              >
                4+
              </h3>

              <p className="text-gray-400">
                Projects
              </p>
            </div>

            {/* CERTIFICATIONS */}

            <div>
              <h3
                className="
                  text-3xl
                  font-bold
                  gradient-text
                "
              >
                5+
              </h3>

              <p className="text-gray-400">
                Certifications
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT SIDE - PROFILE IMAGE
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
          "
        >
          <div
            className="
              relative
              w-72
              h-72
              md:w-96
              md:h-96
              float-animation
              group
            "
          >
            {/* GLOW */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-r
                from-indigo-500
                via-purple-500
                to-pink-500
                blur-2xl
                opacity-40
                group-hover:opacity-70
                transition-all
                duration-500
              "
            />

            {/* PROFILE IMAGE */}

            <Image
              src="/profiles.png"
              alt="Mudavath Tharun"
              fill
              priority
              sizes="
                (max-width: 768px) 288px,
                384px
              "
              className="
                rounded-full
                object-cover
                object-center
                border-4
                border-indigo-500
                group-hover:border-purple-400
                group-hover:scale-105
                transition-all
                duration-500
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
