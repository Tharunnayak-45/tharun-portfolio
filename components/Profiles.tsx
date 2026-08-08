"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import {
    SiLeetcode,
    SiGeeksforgeeks,
    SiHackerrank,
} from "react-icons/si";

export default function Profiles() {
    const profiles = [
        {
            name: "LeetCode",
            username: "Tharunnayak_45",
            link: "https://leetcode.com/u/Tharunnayak_45/",
            icon: SiLeetcode,
        },
        {
            name: "HackerRank",
            username: "Tharun",
            link: "https://www.hackerrank.com/profile/MudavathTharun45/",
            icon: SiHackerrank,
        },
        {
            name: "GeeksforGeeks",
            username: "Tharun",
            link: "https://www.geeksforgeeks.org/profile/tharunnayak",
            icon: SiGeeksforgeeks,
        },
    ];

    return (
        <section id="profiles" className="section-container">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold">
                    Coding <span className="gradient-text">Profiles</span>
                </h2>

                <p className="mt-4 text-gray-400">
                    My professional and competitive programming profiles.
                </p>
            </motion.div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                {profiles.map((profile, index) => {
                    const Icon = profile.icon;

                    return (
                        <motion.div
                            key={profile.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-8 card-hover"
                        >
                            <div className="flex items-center gap-5">
                                <Icon className="text-4xl text-indigo-400" />

                                <div>
                                    <h3 className="text-xl font-bold">
                                        {profile.name}
                                    </h3>

                                    <p className="text-gray-400">
                                        {profile.username}
                                    </p>
                                </div>
                            </div>

                            <a
                                href={profile.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 text-indigo-400 hover:text-indigo-300 transition"
                            >
                                Visit Profile
                                <ExternalLink size={16} />
                            </a>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}