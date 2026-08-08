"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Wrench,
  Brain,
} from "lucide-react";

export default function Skills() {

  const skillGroups = [

    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        {
          name: "Java",
          level: 90,
          color: "bg-orange-500",
        },
        {
          name: "Python",
          level: 80,
          color: "bg-yellow-400",
        },
        {
          name: "JavaScript",
          level: 85,
          color: "bg-yellow-500",
        },
        {
          name: "Data Structures & Algorithms",
          level: 75,
          color: "bg-green-500",
        },
      ],
    },


    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        {
          name: "HTML5",
          level: 90,
          color: "bg-orange-600",
        },
        {
          name: "CSS3",
          level: 85,
          color: "bg-blue-500",
        },
        {
          name: "Next.js",
          level: 75,
          color: "bg-gray-200",
        },
        {
          name: "Tailwind CSS",
          level: 80,
          color: "bg-cyan-400",
        },
      ],
    },


    {
      title: "Database & Backend",
      icon: Database,
      skills: [
        {
          name: "MySQL",
          level: 80,
          color: "bg-blue-600",
        },
        {
          name: "JDBC",
          level: 75,
          color: "bg-purple-500",
        },
        {
          name: "Servlets",
          level: 75,
          color: "bg-red-500",
        },
        {
          name: "Node.js",
          level: 70,
          color: "bg-green-600",
        },
      ],
    },


    {
      title: "Development Tools",
      icon: Brain,
      skills: [
        {
          name: "Git",
          level: 80,
          color: "bg-orange-500",
        },
        {
          name: "GitHub",
          level: 85,
          color: "bg-gray-300",
        },
        {
          name: "VS Code",
          level: 90,
          color: "bg-blue-400",
        },
        {
          name: "Vercel",
          level: 75,
          color: "bg-white",
        },
      ],
    },

  ];


  return (

    <section
      id="skills"
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

          Technical

          <span className="gradient-text">
            {" "}Skills
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

          Technologies and tools I use to build
          modern software applications.

        </p>


      </motion.div>



      {/* Skill Cards */}


      <div
        className="
        grid
        md:grid-cols-2
        gap-8
        mt-12
        "
      >


        {
          skillGroups.map((group, index) => {

            const Icon = group.icon;


            return (

              <motion.div

                key={group.title}

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


                <div
                  className="
                flex
                items-center
                gap-4
                mb-6
                "
                >

                  <Icon
                    size={35}
                    className="text-indigo-400"
                  />


                  <h3
                    className="
                  text-xl
                  font-semibold
                  "
                  >

                    {group.title}

                  </h3>


                </div>




                <div
                  className="space-y-5"
                >


                  {
                    group.skills.map((skill) => (


                      <div
                        key={skill.name}
                      >


                        <div
                          className="
                      flex
                      justify-between
                      mb-2
                      "
                        >

                          <span
                            className="text-gray-200"
                          >
                            {skill.name}
                          </span>


                          <span
                            className="text-indigo-400"
                          >
                            {skill.level}%
                          </span>


                        </div>



                        <div
                          className="
                      w-full
                      h-2
                      bg-gray-700
                      rounded-full
                      overflow-hidden
                      "
                        >


                          <motion.div

                            initial={{
                              width: 0,
                            }}

                            whileInView={{
                              width: `${skill.level}%`,
                            }}

                            transition={{
                              duration: 1,
                            }}

                            viewport={{
                              once: true,
                            }}

                            className={`h-2 ${skill.color} rounded-full`}

                          />


                        </div>


                      </div>


                    ))
                  }


                </div>


              </motion.div>


            );

          })
        }


      </div>


    </section>

  );

}