"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";


export default function Certifications() {

  const certifications = [

    {
      title: "PCAP - Python Programming Certification",

      issuer: "Python Institute",

      year: "2024",

      pdf: "/Files/pcap.pdf",

      description:
        "Certified in Python programming fundamentals including data types, control flow, functions, and object-oriented programming.",
    },


    {
      title: "Infosys Springboard Certification",

      issuer: "Infosys",

      year: "2024",

      pdf: "/Files/infosys.pdf",

      description:
        "Completed industry-oriented learning programs focused on technology skills and professional development.",
    },

    {
      title: "Java Basic Certification",

      issuer: "HackerRank",

      year: "2026",

      pdf: "/Files/hackerrank-java.pdf",

      description:
        "Validated Java programming skills including object-oriented concepts, data structures, and problem solving.",
    },

  ];

  return (

    <section
      id="certifications"
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

        className="
        text-center
        "

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
            {" "}Certifications
          </span>


        </h2>


        <p
          className="
          text-gray-400
          mt-4
          "
        >

          Professional certifications and continuous
          learning achievements.

        </p>


      </motion.div>







      {/* Certification Cards */}


      <div

        className="
        grid
        md:grid-cols-2
        gap-8
        mt-12
        "

      >


        {

          certifications.map((certificate, index) => (


            <motion.div


              key={certificate.title}


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
              p-7
              card-hover
              "

            >



              <div
                className="
                flex
                items-center
                gap-4
                "
              >


                <div
                  className="
                  p-3
                  rounded-full
                  bg-indigo-500/20
                  "
                >

                  <Award

                    size={30}

                    className="
                    text-indigo-400
                    "

                  />


                </div>




                <div>


                  <h3
                    className="
                    text-xl
                    font-bold
                    "
                  >

                    {certificate.title}

                  </h3>


                  <p
                    className="
                    text-indigo-400
                    mt-1
                    "
                  >

                    {certificate.issuer}

                  </p>


                </div>


              </div>






              <p
                className="
                text-gray-400
                mt-5
                leading-relaxed
                "
              >

                {certificate.description}

              </p>





              <div
                className="
                flex
                justify-between
                items-center
                mt-6
                "
              >


                <span
                  className="
                  text-sm
                  text-gray-300
                  "
                >

                  {certificate.year}

                </span>




                <Link

                  href={certificate.pdf}

                  className="
                  flex
                  items-center
                  gap-2
                  text-indigo-400
                  hover:text-indigo-300
                  transition
                  "

                >

                  View

                  <ExternalLink size={16} />

                </Link>



              </div>



            </motion.div>


          ))

        }


      </div>




    </section>

  );

}