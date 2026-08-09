"use client";

import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";

export default function Achievements() {
    return (
        <section
            id="achievements"
            className="py-20 px-6"
        >
            {/* Heading */}

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold">
                    My{" "}
                    <span className="gradient-text">
                        Achievements
                    </span>
                </h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Highlights of my achievements, participation,
                    and competitive accomplishments.
                </p>
            </motion.div>

            {/* Achievement Cards */}

            <div
                className="
          max-w-5xl
          mx-auto
          mt-12
          grid
          md:grid-cols-2
          gap-8
        "
            >
                {/* Achievement 1 */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="
            glass
            rounded-2xl
            p-8
            group
            hover:-translate-y-2
            transition-all
            duration-300
          "
                >
                    <div
                        className="
              w-14
              h-14
              rounded-xl
              flex
              items-center
              justify-center
              bg-indigo-500/10
              text-indigo-400
              group-hover:bg-indigo-500
              group-hover:text-white
              transition-all
              duration-300
            "
                    >
                        <Medal size={28} />
                    </div>

                    <h3
                        className="
              text-xl
              md:text-2xl
              font-semibold
              mt-6
              group-hover:text-indigo-400
              transition
            "
                    >
                        2nd Place – Cultural Dance Performance
                    </h3>

                    <p className="mt-2 text-indigo-400 font-medium">
                        UDBHAV Fest 2025 • VJIT
                    </p>

                    <p className="mt-4 text-gray-400 leading-relaxed">
                        Secured 2nd place in the cultural dance
                        performance at UDBHAV Fest 2025 organized by
                        Vidya Jyothi Institute of Technology.
                    </p>
                </motion.div>

                {/* Achievement 2 */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="
            glass
            rounded-2xl
            p-8
            group
            hover:-translate-y-2
            transition-all
            duration-300
          "
                >
                    <div
                        className="
              w-14
              h-14
              rounded-xl
              flex
              items-center
              justify-center
              bg-indigo-500/10
              text-indigo-400
              group-hover:bg-indigo-500
              group-hover:text-white
              transition-all
              duration-300
            "
                    >
                        <Trophy size={28} />
                    </div>

                    <h3
                        className="
              text-xl
              md:text-2xl
              font-semibold
              mt-6
              group-hover:text-indigo-400
              transition
            "
                    >
                        3rd Rank – JEE Topper
                    </h3>

                    <p className="mt-2 text-indigo-400 font-medium">
                        College-Level Competitive Examination
                    </p>

                    <p className="mt-4 text-gray-400 leading-relaxed">
                        Secured 3rd rank in a college-level competitive
                        examination as part of JEE preparation.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}