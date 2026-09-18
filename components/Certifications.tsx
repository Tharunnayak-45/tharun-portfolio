
"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Calendar,
} from "lucide-react";

const certifications = [
  {
    title: "PCAP – Python Programming Certification",
    issuer: "Python Institute",
    year: "2024",
    pdf: "/Files/pcap.pdf",
    type: "Programming",
    description:
      "Certification covering Python programming fundamentals, including data types, control flow, functions, and object-oriented programming.",
    skills: ["Python", "Programming Fundamentals", "OOP"],
  },

  {
    title: "Infosys Springboard Certification",
    issuer: "Infosys",
    year: "2024",
    pdf: "/Files/infosys.pdf",
    type: "Professional Learning",
    description:
      "Completed an industry-oriented learning program focused on technology skills, practical learning, and professional development.",
    skills: ["Technology Skills", "Professional Development"],
  },

  {
    title: "Java Basic Certification",
    issuer: "HackerRank",
    year: "2026",
    pdf: "/Files/hackerrank-java.pdf",
    type: "Programming",
    description:
      "Validated foundational Java programming knowledge through practical coding assessment covering core programming concepts and problem solving.",
    skills: ["Java", "Problem Solving", "Programming"],
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* =========================================
          Background Glow
      ========================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />

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
            <Award size={16} />

            Certifications & Learning
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
            My{" "}
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
              Certifications
            </span>
          </h2>


          {/* Description */}

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
            Credentials and learning achievements that reflect my
            continuous effort to strengthen my technical and
            professional skills.
          </p>

        </motion.div>


        {/* =========================================
            Certification Grid
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {certifications.map((certificate, index) => (

            <motion.div
              key={certificate.title}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.55,
                delay: index * 0.1,
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
                p-6
                shadow-2xl
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-indigo-400/30
                hover:bg-white/[0.055]
              "
            >

              {/* Card Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-indigo-500/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-indigo-500/20
                "
              />


              <div className="relative">

                {/* =================================
                    Top Row
                ================================= */}

                <div className="flex items-start justify-between gap-4">

                  {/* Certificate Icon */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-indigo-400/20
                      bg-gradient-to-br
                      from-indigo-500/15
                      to-purple-500/10
                      shadow-[0_0_25px_rgba(99,102,241,0.10)]
                      transition-all
                      duration-500
                      group-hover:border-indigo-400/40
                      group-hover:shadow-[0_0_30px_rgba(99,102,241,0.20)]
                    "
                  >
                    <Award
                      size={27}
                      className="
                        text-indigo-400
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />
                  </div>


                  {/* Year */}

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.035]
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-gray-400
                    "
                  >
                    <Calendar
                      size={13}
                      className="text-indigo-400"
                    />

                    {certificate.year}
                  </div>

                </div>


                {/* =================================
                    Certificate Information
                ================================= */}

                <div className="mt-6">

                  {/* Type */}

                  <span
                    className="
                      inline-flex
                      rounded-full
                      border
                      border-purple-400/20
                      bg-purple-500/10
                      px-3
                      py-1.5
                      text-[11px]
                      font-semibold
                      text-purple-300
                    "
                  >
                    {certificate.type}
                  </span>


                  {/* Title */}

                  <h3
                    className="
                      mt-4
                      text-xl
                      font-bold
                      leading-snug
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-indigo-300
                    "
                  >
                    {certificate.title}
                  </h3>


                  {/* Issuer */}

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      text-indigo-400
                    "
                  >
                    {certificate.issuer}
                  </p>


                  {/* Description */}

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-7
                      text-gray-400
                    "
                  >
                    {certificate.description}
                  </p>

                </div>


                {/* =================================
                    Skills
                ================================= */}

                <div className="mt-6">

                  <div className="mb-3 flex items-center gap-2">

                    <CheckCircle2
                      size={15}
                      className="text-indigo-400"
                    />

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-gray-500
                      "
                    >
                      Skills Covered
                    </span>

                  </div>


                  <div className="flex flex-wrap gap-2">

                    {certificate.skills.map((skill) => (

                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.035]
                          px-3
                          py-1.5
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
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>


                {/* =================================
                    View Certificate
                ================================= */}

                <div
                  className="
                    mt-7
                    border-t
                    border-white/10
                    pt-5
                  "
                >

                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/cert
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-indigo-400/20
                      bg-indigo-500/10
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-indigo-300
                      transition-all
                      duration-300
                      hover:border-indigo-400/40
                      hover:bg-indigo-500/20
                      hover:text-white
                    "
                  >

                    View Certificate

                    <ExternalLink
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover/cert:-translate-y-0.5
                        group-hover/cert:translate-x-0.5
                      "
                    />

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>


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
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mt-14 flex justify-center"
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
                bg-emerald-400
              "
            />

            Continuously learning and expanding my skill set

          </div>

        </motion.div>

      </div>
    </section>
  );
}
