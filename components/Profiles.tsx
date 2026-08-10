"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
};

type ReactIconProfile = {
    name: string;
    username: string;
    link: string;
    type: "react";
    icon: IconType;
};

type TextProfile = {
    name: string;
    username: string;
    link: string;
    type: "text";
    iconText: string;
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
    },

    {
        name: "LinkedIn",
        username: "Mudavath Tharun",
        link: "https://www.linkedin.com/in/mudavaththarun45",
        icon: faLinkedin,
        type: "fa",
    },

    {
        name: "LeetCode",
        username: "Tharunnayak_45",
        link: "https://leetcode.com/u/Tharunnayak_45/",
        icon: SiLeetcode,
        type: "react",
    },

    {
        name: "HackerRank",
        username: "Tharun",
        link: "https://www.hackerrank.com/profile/MudavathTharun45",
        icon: faHackerrank,
        type: "fa",
    },

    {
        name: "GeeksforGeeks",
        username: "Tharun",
        link: "https://www.geeksforgeeks.org/profile/tharunnayak",
        icon: SiGeeksforgeeks,
        type: "react",
    },

    {
        name: "Salesforce Trailblazer",
        username: "Tharun",
        link: "https://www.salesforce.com/trailblazer/mudavaththarun45/",
        iconText: "SF",
        type: "text",
    },

];


// ------------------------------------
// Component
// ------------------------------------

export default function Profiles() {

    return (

        <section
            id="profiles"
            className="section-container"
        >

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

                <h2
                    className="
          text-4xl
          md:text-5xl
          font-bold
          "
                >

                    Coding

                    <span className="gradient-text">
                        {" "}Profiles
                    </span>

                </h2>

                <p
                    className="
          text-gray-400
          mt-4
          max-w-2xl
          mx-auto
          "
                >
                    My professional, coding, and competitive
                    programming profiles.
                </p>

            </motion.div>


            {/* Profile Cards */}

            <div
                className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        mt-12
        "
            >

                {profiles.map((profile, index) => (

                    <motion.div
                        key={profile.name}

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
            glass
            rounded-2xl
            p-8
            card-hover
            "
                    >

                        {/* Icon + Name */}

                        <div
                            className="
              flex
              items-center
              gap-5
              "
                        >

                            {/* Font Awesome */}

                            {profile.type === "fa" && (

                                <FontAwesomeIcon
                                    icon={profile.icon}
                                    className="
                  text-4xl
                  text-indigo-400
                  "
                                />

                            )}


                            {/* React Icons */}

                            {profile.type === "react" && (

                                <profile.icon
                                    className="
                  text-4xl
                  text-indigo-400
                  "
                                />

                            )}


                            {/* Text Icon - Salesforce */}

                            {profile.type === "text" && (

                                <div
                                    className="
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-indigo-500/20
                  border
                  border-indigo-500/30
                  text-indigo-400
                  font-bold
                  text-sm
                  "
                                >
                                    {profile.iconText}
                                </div>

                            )}


                            {/* Profile Details */}

                            <div>

                                <h3
                                    className="
                  text-xl
                  font-bold
                  "
                                >
                                    {profile.name}
                                </h3>

                                <p
                                    className="
                  text-gray-400
                  mt-1
                  "
                                >
                                    {profile.username}
                                </p>

                            </div>

                        </div>


                        {/* Visit Profile */}

                        <a
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"

                            className="
              inline-flex
              items-center
              gap-2
              mt-6
              text-indigo-400
              hover:text-indigo-300
              transition
              "
                        >

                            Visit Profile

                            <ExternalLink
                                size={16}
                            />

                        </a>

                    </motion.div>

                ))}

            </div>

        </section>
    );
}