"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";


export default function Education() {


  const education = [

    {
      degree: "Bachelor of Technology - Computer Science & Engineering",

      institution:
        "Vidya Jyothi Institute of Technology (VJIT), Hyderabad", duration: "2023 - 2027",

      score:
        "CGPA: 8.5 / 10.0",

      description:
        "Pursuing B.Tech in Computer Science Engineering with focus on Software Development, Data Structures, Artificial Intelligence, Database Management Systems, and Web Technologies.",

    },


    {
      degree:
        "Intermediate - MPC",

      institution:
        "Jaagruthi Junior College",

      duration:
        "2021 - 2023",

      score:
        "Percentage: 96.1 %",

      description:
        "Completed intermediate education with Mathematics, Physics, and Chemistry as major subjects.",

    },


    {
      degree:
        "Secondary School Certificate (SSC)",

      institution:
        "TTWREIS School",

      duration:
        "2021",

      score:
        "GPA: 10.0 / 10.0",

      description:
        "Completed secondary education with strong academic performance.",

    },


  ];



  return (

    <section
      id="education"
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
            {" "}Education
          </span>


        </h2>


        <p
          className="
          text-gray-400
          mt-4
          "
        >

          Academic background and qualifications.

        </p>


      </motion.div>








      {/* Timeline */}

      <div
        className="
        max-w-4xl
        mx-auto
        mt-12
        space-y-8
        "
      >


        {

          education.map((item, index) => (


            <motion.div


              key={index}


              initial={{
                opacity: 0,
                x: -40,
              }}


              whileInView={{
                opacity: 1,
                x: 0,
              }}


              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}


              viewport={{
                once: true,
              }}



              className="
              relative
              glass
              rounded-2xl
              p-8
              "

            >



              <div
                className="
                flex
                gap-5
                "
              >



                <div
                  className="
                  hidden
                  md:flex
                  items-start
                  "
                >

                  <div
                    className="
                    p-3
                    rounded-full
                    bg-indigo-500/20
                    "
                  >

                    <GraduationCap
                      size={32}
                      className="text-indigo-400"
                    />

                  </div>


                </div>






                <div
                  className="flex-1"
                >


                  <div
                    className="
                    flex
                    flex-col
                    md:flex-row
                    md:justify-between
                    gap-3
                    "
                  >


                    <h3
                      className="
                      text-xl
                      md:text-2xl
                      font-bold
                      "
                    >

                      {item.degree}

                    </h3>



                    <span
                      className="
                      text-indigo-400
                      font-semibold
                      "
                    >

                      {item.duration}

                    </span>


                  </div>






                  <p
                    className="
                    mt-2
                    text-gray-300
                    font-medium
                    "
                  >

                    {item.institution}

                  </p>





                  <p
                    className="
                    mt-3
                    text-indigo-400
                    font-semibold
                    "
                  >

                    {item.score}

                  </p>






                  <p
                    className="
                    mt-4
                    text-gray-400
                    leading-relaxed
                    "
                  >

                    {item.description}

                  </p>



                </div>



              </div>




            </motion.div>


          ))

        }



      </div>




    </section>

  );

}