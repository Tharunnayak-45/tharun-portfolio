"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Sparkles } from "lucide-react";

export default function Achievements() {
    const achievements = [
        {
            icon: Medal,
            title: "2nd Place – Cultural Dance Performance",
            subtitle: "UDBHAV Fest 2025 • VJIT",
            description:
                "Secured 2nd place in the cultural dance performance at UDBHAV Fest 2025 organized by Vidya Jyothi Institute of Technology.",
        },
        {
            icon: Trophy,
            title: "3rd Rank – JEE Topper",
            subtitle: "College-Level Competitive Examination",
            description:
                "Secured 3rd rank in a college-level competitive examination as part of JEE preparation.",
        },
    ];

    return (
        <section
            id="achievements"
            className="section-container scroll-mt-20"
        >
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
            >
                {/* Small Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-indigo-500/10
                        border
                        border-indigo-500/20
                        text-indigo-400
                        text-sm
                        font-medium
                        mb-5
                    "
                >
                    <Sparkles size={16} />
                    Milestones & Recognition
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold">
                    My{" "}
                    <span className="gradient-text">
                        Achievements
                    </span>
                </h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
                {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;

                    return (
                        <motion.div
                            key={achievement.title}
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
                                delay: index * 0.15,
                            }}
                            viewport={{
                                once: true,
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="
                                glass
                                rounded-2xl
                                p-8
                                group
                                relative
                                overflow-hidden
                                border
                                border-white/10
                                hover:border-indigo-500/40
                                transition-all
                                duration-300
                            "
                        >
                            {/* Background Glow */}
                            <div
                                className="
                                    absolute
                                    -top-20
                                    -right-20
                                    w-40
                                    h-40
                                    rounded-full
                                    bg-indigo-500/10
                                    blur-3xl
                                    opacity-0
                                    group-hover:opacity-100
                                    transition-opacity
                                    duration-500
                                "
                            />

                            {/* Icon */}
                            <div
                                className="
                                    relative
                                    w-14
                                    h-14
                                    rounded-xl
                                    flex
                                    items-center
                                    justify-center
                                    bg-indigo-500/10
                                    text-indigo-400
                                    border
                                    border-indigo-500/20
                                    group-hover:bg-indigo-500
                                    group-hover:text-white
                                    group-hover:scale-110
                                    transition-all
                                    duration-300
                                "
                            >
                                <Icon size={28} />
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <h3
                                    className="
                                        text-xl
                                        md:text-2xl
                                        font-semibold
                                        mt-6
                                        text-white
                                        group-hover:text-indigo-400
                                        transition-colors
                                        duration-300
                                    "
                                >
                                    {achievement.title}
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-indigo-400
                                        font-medium
                                        text-sm
                                        md:text-base
                                    "
                                >
                                    {achievement.subtitle}
                                </p>

                                <p
                                    className="
                                        mt-4
                                        text-gray-400
                                        leading-relaxed
                                    "
                                >
                                    {achievement.description}
                                </p>
                            </div>

                            {/* Bottom Accent */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    w-0
                                    h-0.5
                                    bg-gradient-to-r
                                    from-indigo-500
                                    via-purple-500
                                    to-pink-500
                                    group-hover:w-full
                                    transition-all
                                    duration-500
                                "
                            />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}