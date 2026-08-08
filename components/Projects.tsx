"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { image } from "framer-motion/client";

export default function Projects() {

  const projects = [

    {
      title: "Courier Tracking System",

      description:
        "Courier  Tracking System (CTS) is a web-based application developed to streamline courier management operations. The system enables users to book shipments, track delivery status, manage courier details, and maintain shipment records efficiently and backend using JSP, Servlets, JDBC, and MySQL.",
      image: "/projects/Courier-Tracking-System.jpg",

      technologies: [
        "Java",
        "JSP",
        "Servlets",
        "JDBC",
        "MySQL",
        "Apache Tomcat",
      ],

      github:
        "https://github.com/Tharunnayak-45/Courier-Tracking-System-App",

      demo:
        "https://github.com/user-attachments/assets/9db8a6f4-582b-41e7-ab63-4cb5861fa05b",
    },


    {
      title: "BeatVerse Music App",

      description:
        "A responsive music streaming web application with an interactive user interface, music browsing features, and smooth user interactions. Built using HTML, CSS, and JavaScript to deliver an engaging listening experience.",

      image: "/projects/Beatverse.jpg",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],

      github:
        "https://github.com/Tharunnayak-45/CodeAlpha_BeatVerse-Player",

      demo:
        "https://beatverse-player.vercel.app/",
    },


    {
      title: "NeuroTac AI",

      description:
        "An AI-based Tic Tac Toe game featuring smart gameplay logic, multiple difficulty levels, and a responsive user interface. Built using HTML, CSS, and JavaScript to provide an interactive gaming experience.",

      image: "/projects/Tic-Tac-Toe.jpg",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "AI Logic",
      ],

      github:
        "https://github.com/Tharunnayak-45",

      demo:
        "https://neurotac.vercel.app/",
    },

  ];


  return (

    <section
      id="projects"
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

          My

          <span className="gradient-text">
            {" "}Projects
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

          Some of the applications I have developed
          using modern technologies.

        </p>


      </motion.div>



      {/* Projects Grid */}


      <div
        className="
        grid
        md:grid-cols-2
        gap-8
        mt-12
        "
      >


        {
          projects.map((project, index) => (


            <motion.div


              key={project.title}


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
            p-6
            card-hover
            "


            >


              {/* Image */}

              <div
                className="
              overflow-hidden
              rounded-xl
              mb-6
              "
              >

                <Image

                  src={project.image}

                  alt={project.title}

                  width={600}

                  height={350}

                  className="
                w-full
                h-56
                object-cover
                rounded-xl
                hover:scale-105
                transition
                duration-500
                "

                />

              </div>




              {/* Title */}

              <h3
                className="
              text-2xl
              font-bold
              mb-3
              "
              >

                {project.title}

              </h3>




              {/* Description */}

              <p
                className="
              text-gray-400
              mb-5
              leading-relaxed
              "
              >

                {project.description}

              </p>




              {/* Technologies */}

              <div
                className="
              flex
              flex-wrap
              gap-2
              mb-6
              "
              >

                {
                  project.technologies.map((tech) => (

                    <span

                      key={tech}

                      className="
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  bg-indigo-500/10
                  border
                  border-indigo-500/30
                  text-gray-200
                  "

                    >

                      {tech}

                    </span>


                  ))
                }


              </div>




              {/* Buttons */}


              <div
                className="
              flex
              gap-4
              "
              >


                <a

                  href={project.github}

                  target="_blank"

                  className="
                flex
                items-center
                gap-2
                px-5
                py-2
                rounded-lg
                bg-indigo-600
                hover:bg-indigo-700
                transition
                "

                >

                  <Github size={18} />

                  GitHub

                </a>



                {
                  project.demo !== "#" &&

                  (

                    <a

                      href={project.demo}

                      target="_blank"

                      className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-2
                  rounded-lg
                  border
                  border-indigo-500
                  hover:bg-indigo-500/20
                  transition
                  "

                    >

                      <ExternalLink size={18} />

                      Demo

                    </a>

                  )

                }


              </div>



            </motion.div>


          ))
        }


      </div>


    </section>

  );

}