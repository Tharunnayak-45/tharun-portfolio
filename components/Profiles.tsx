
"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Code2 } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faGithub,
    faLinkedin,
    faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

import {
    SiLeetcode,
    SiGeeksforgeeks,
} from "react-icons/si";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { IconType } from "react-icons";


// ------------------------------------
// Profile Types
// ------------------------------------

type FontAwesomeProfile = {
    name: string;
    username: string;
    link: string;
    type: "fa";
    icon: IconDefinition;
    category: string;
};

type ReactIconProfile = {
    name: string;
    username: string;
    link: string;
    type: "react";
    icon: IconType;
    category: string;
};

type TextProfile = {
    name: string;
    username: string;
    link: string;
    type: "text";
    iconText: string;
    category: string;
};

type Profile =
    | FontAwesomeProfile
    | ReactIconProfile
    | TextProfile;


// ------------------------------------
// Profiles
// ------------------------------------

const profiles: Profile[] = [
    {
        name: "GitHub",
        username: "Tharunnayak-45",
        link: "https://github.com/Tharunnayak-45",
        icon: faGithub,
        type: "fa",
        category: "Development",
    },

    {
        name: "LinkedIn",
        username: "Mudavath Tharun",
        link: "https://www.linkedin.com/in/mudavaththarun45",
        icon: faLinkedin,
        type: "fa",
        category: "Professional",
    },

    {
        name: "LeetCode",
        username: "Tharunnayak_45",
        link: "https://leetcode.com/u/Tharunnayak_45/",
        icon: SiLeetcode,
        type: "react",
        category: "Problem Solving",
    },

    {
        name: "HackerRank",
        username: "MudavathTharun45",
        link: "https://www.hackerrank.com/profile/MudavathTharun45",
        icon: faHackerrank,
        type: "fa",
        category: "Coding Practice",
    },

    {
        name: "GeeksforGeeks",
        username: "Tharunnayak",
        link: "https://www.geeksforgeeks.org/profile/tharunnayak",
        icon: SiGeeksforgeeks,
        type: "react",
        category: "DSA & Learning",
    },

    {
        name: "Salesforce Trailblazer",
        username: "Mudavath Tharun",
        link: "https://www.salesforce.com/trailblazer/mudavaththarun45/",
        iconText: "SF",
        type: "text",
        category: "Cloud & CRM",
    },
];


// ------------------------------------
// Component
// ------------------------------------

export default function Profiles() {
    return (
        <section
            id="profiles"
            className="relative overflow-hidden py-24 sm:py-28"
        >

            {/* --------------------------------
                Background Glow
            -------------------------------- */}

            <div className="pointer-events-none absolute inset-0">

                <div
                    className="
                    absolute
                    left-[-150px]
                    top-20
                    h-80
                    w-80
                    rounded-full
                    bg-indigo-500/10
                    blur-[120px]
                    "
                />

                <div
                    className="
                    absolute
                    right-[-150px]
                    bottom-10
                    h-96
                    w-96
                    rounded-full
                    bg-purple-500/10
                    blur-[130px]
                    "
                />

            </div>


            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">


                {/* --------------------------------
                    Heading
                -------------------------------- */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="
                    mx-auto
                    mb-16
                    max-w-3xl
                    text-center
                    "
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

                        <Code2 size={16} />

                        Coding & Professional Profiles

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

                        Coding

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
                            {" "}Profiles
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
                        Explore my professional presence, coding practice,
                        problem-solving platforms, and developer profiles.
                    </p>

                </motion.div>



                {/* --------------------------------
                    Profile Cards
                -------------------------------- */}

                <div
                    className="
                    grid
                    grid-cols-1
                    gap-6
                    sm:grid-cols-2
                    lg:grid-cols-3
                    "
                >

                    {profiles.map((profile, index) => (

                        <motion.div
                            key={profile.name}

                            initial={{
                                opacity: 0,
                                y: 35,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}

                            transition={{
                                duration: 0.55,
                                delay: index * 0.08,
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


                            {/* --------------------------------
                                Top Row
                            -------------------------------- */}

                            <div
                                className="
                                relative
                                flex
                                items-start
                                justify-between
                                gap-4
                                "
                            >

                                {/* Platform Icon */}

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

                                    {/* Font Awesome */}

                                    {profile.type === "fa" && (
                                        <FontAwesomeIcon
                                            icon={profile.icon}
                                            className="
                                            text-3xl
                                            text-indigo-400
                                            transition-transform
                                            duration-500
                                            group-hover:scale-110
                                            "
                                        />
                                    )}


                                    {/* React Icons */}

                                    {profile.type === "react" && (
                                        <profile.icon
                                            className="
                                            text-3xl
                                            text-indigo-400
                                            transition-transform
                                            duration-500
                                            group-hover:scale-110
                                            "
                                        />
                                    )}


                                    {/* Salesforce */}

                                    {profile.type === "text" && (
                                        <span
                                            className="
                                            text-lg
                                            font-bold
                                            text-indigo-300
                                            transition-transform
                                            duration-500
                                            group-hover:scale-110
                                            "
                                        >
                                            {profile.iconText}
                                        </span>
                                    )}

                                </div>


                                {/* Category */}

                                <span
                                    className="
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/[0.035]
                                    px-3
                                    py-1.5
                                    text-[11px]
                                    font-medium
                                    text-gray-400
                                    "
                                >
                                    {profile.category}
                                </span>

                            </div>



                            {/* --------------------------------
                                Profile Information
                            -------------------------------- */}

                            <div className="relative mt-6">

                                <h3
                                    className="
                                    text-xl
                                    font-bold
                                    text-white
                                    transition-colors
                                    duration-300
                                    group-hover:text-indigo-300
                                    "
                                >
                                    {profile.name}
                                </h3>


                                <p
                                    className="
                                    mt-2
                                    truncate
                                    text-sm
                                    text-gray-400
                                    "
                                >
                                    {profile.username}
                                </p>

                            </div>



                            {/* --------------------------------
                                Visit Profile
                            -------------------------------- */}

                            <div
                                className="
                                relative
                                mt-7
                                border-t
                                border-white/10
                                pt-5
                                "
                            >

                                <a
                                    href={profile.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                    group/link
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-sm
                                    font-semibold
                                    text-indigo-400
                                    transition-colors
                                    duration-300
                                    hover:text-indigo-300
                                    "
                                >

                                    Visit Profile

                                    <ArrowUpRight
                                        size={16}
                                        className="
                                        transition-transform
                                        duration-300
                                        group-hover/link:-translate-y-0.5
                                        group-hover/link:translate-x-0.5
                                        "
                                    />

                                </a>

                            </div>

                        </motion.div>

                    ))}

                </div>



                {/* --------------------------------
                    Bottom Statement
                -------------------------------- */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                    }}
                    className="
                    mt-14
                    flex
                    justify-center
                    "
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

                        Building skills through continuous practice

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

