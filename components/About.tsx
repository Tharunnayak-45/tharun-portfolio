
"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      {/* Heading */}

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
          duration: 0.6,
        }}
        viewport={{
          once: true,
        }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          About{" "}
          <span className="gradient-text">
            Me
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A passionate Computer Science Engineering student focused on
          software development, problem solving, and building impactful
          technology solutions.
        </p>
      </motion.div>

      {/* Main Content */}

      <div
        className="
          mt-12
          max-w-6xl
          mx-auto
          flex
          justify-center
        "
      >
        {/* ABOUT TEXT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            glass
            rounded-2xl
            p-8
            md:p-10
            w-full
            max-w-4xl
          "
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-5">
            Who I Am
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Hello! I am Mudavath Tharun, a final-year Computer Science
            and Engineering student at Vidya Jyothi Institute of
            Technology (VJIT), Hyderabad.

            <br />
            <br />

            I am a passionate developer who enjoys solving programming
            problems and building practical, user-focused technology
            solutions. I am particularly interested in Full Stack
            Development, Java, Python, Data Structures, and Artificial
            Intelligence.

            <br />
            <br />

            My technical foundation includes Java, Python, JavaScript,
            HTML, CSS, SQL, Git, GitHub, and Salesforce. I focus on
            writing clean and maintainable code while continuously
            improving my problem-solving and software development skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
