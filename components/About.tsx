"use client";

import { motion } from "framer-motion";
import { Code, Brain, Rocket, Users } from "lucide-react";


export default function About() {

  const highlights = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Building efficient and scalable applications using Java, Python, JavaScript, and modern web technologies.",
    },

    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Exploring Artificial Intelligence, Machine Learning, and data-driven solutions.",
    },

    {
      icon: Rocket,
      title: "Project Building",
      description:
        "Creating real-world projects with clean architecture and user-friendly experiences.",
    },

    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Strong problem-solving skills with experience working on academic and internship projects.",
    },
  ];


  return (

    <section
      id="about"
      className="
      section-container
      "
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

          About

          <span className="gradient-text">
            {" "}Me
          </span>

        </h2>


        <p
          className="
          mt-4
          text-gray-400
          max-w-2xl
          mx-auto
          "
        >

          A passionate Computer Science Engineering student
          focused on software development, problem solving,
          and building impactful technology solutions.

        </p>


      </motion.div>







      {/* Content */}


      <div
        className="
        mt-12
        grid
        md:grid-cols-2
        gap-10
        items-center
        "
      >



        {/* Description */}


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

        >


          <div
            className="
            glass
            rounded-2xl
            p-8
            "
          >


            <h3
              className="
              text-2xl
              font-semibold
              mb-4
              "
            >

              Who I Am

            </h3>



            <p
              className="
              text-gray-300
              leading-relaxed
              "
            >

              I am Mudavath Tharun, a B.Tech Computer Science and Engineering student with a strong interest in Full Stack Development, Java, Python, Data Structures, and Artificial Intelligence.

              <br />
              <br />

              I am passionate about solving programming problems, building innovative software solutions, and continuously enhancing my technical skills. My goal is to become a successful software developer by applying my knowledge to create efficient, scalable, and user-focused applications.
            </p>



          </div>


        </motion.div>







        {/* Highlights */}


        <motion.div

          initial={{
            opacity: 0,
            x: 40,
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
          grid
          sm:grid-cols-2
          gap-5
          "

        >


          {

            highlights.map((item, index) => {


              const Icon = item.icon;


              return (

                <div

                  key={index}

                  className="
                  glass
                  rounded-xl
                  p-5
                  card-hover
                  "

                >

                  <Icon
                    size={32}
                    className="
                    text-indigo-400
                    mb-4
                    "
                  />


                  <h4
                    className="
                    font-semibold
                    text-lg
                    "
                  >

                    {item.title}

                  </h4>


                  <p
                    className="
                    text-sm
                    text-gray-400
                    mt-2
                    leading-relaxed
                    "
                  >

                    {item.description}

                  </p>


                </div>

              );

            })

          }


        </motion.div>



      </div>


    </section>

  );

}