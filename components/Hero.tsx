"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Code2,
  Download,
  Mail,
} from "lucide-react";

import { motion } from "framer-motion";


export default function Hero() {

  return (

    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      pt-24
      px-6
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >



        {/* LEFT CONTENT */}

        <motion.div

          initial={{
            opacity: 0,
            x: -50,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
          }}

        >


          <p
            className="
            text-indigo-400
            text-lg
            font-semibold
            "
          >
            Hello, I'm
          </p>



          <h1
            className="
            text-5xl
            md:text-6xl
            font-bold
            mt-3
            "
          >

            Mudavath

            <span className="gradient-text">

              {" "}Tharun

            </span>

          </h1>




          <h2
            className="
            text-2xl
            md:text-3xl
            font-semibold
            mt-4
            "
          >

            Computer Science Engineering Student

          </h2>





          <p
            className="
            mt-6
            text-gray-400
            leading-relaxed
            max-w-xl
            "
          >

            Final year B.Tech CSE student passionate about
            Software Development, Full Stack Web Development,
            Java, Python, Data Structures, and Artificial
            Intelligence. Building scalable projects and
            preparing for top IT company placements.

          </p>






          {/* BUTTONS */}

          <div
            className="
            flex
            flex-wrap
            gap-4
            mt-8
            "
          >


            <a

              href="/Tharun_Resume_545.pdf"

              download

              className="
              primary-btn
              flex
              items-center
              gap-2
              "

            >

              <Download size={20} />

              Download Resume

            </a>




            <Link

              href="#contact"

              className="
              px-7
              py-3
              rounded-full
              border
              border-indigo-500
              hover:bg-indigo-500
              transition
              "

            >

              Contact Me

            </Link>


          </div>







          {/* SOCIAL LINKS */}


          <div
            className="
            flex
            gap-5
            mt-8
            "
          >



            <Link

              href="https://github.com/Tharunnayak-45"

              target="_blank"

              className="
              p-3
              rounded-full
              glass
              hover:text-indigo-400
              "

            >

              <Github size={25} />

            </Link>






            <Link

              href="https://www.linkedin.com/in/mudavaththarun45"

              target="_blank"

              className="
              p-3
              rounded-full
              glass
              hover:text-indigo-400
              "

            >

              <Linkedin size={25} />

            </Link>







            <Link

              href="https://leetcode.com/u/Tharunnayak_45/"

              target="_blank"

              className="
              p-3
              rounded-full
              glass
              hover:text-indigo-400
              "

            >

              <Code2 size={25} />

            </Link>






            <Link

              href="mailto:mtharun616@gmail.com"

              className="
              p-3
              rounded-full
              glass
              hover:text-indigo-400
              "

            >

              <Mail size={25} />

            </Link>



          </div>







          {/* STATS */}


          <div
            className="
            flex
            gap-10
            mt-10
            "
          >


            <div>

              <h3
                className="
                text-3xl
                font-bold
                gradient-text
                "
              >
                8.5
              </h3>

              <p className="text-gray-400">
                CGPA
              </p>

            </div>




            <div>

              <h3
                className="
                text-3xl
                font-bold
                gradient-text
                "
              >
                4+
              </h3>

              <p className="text-gray-400">
                Projects
              </p>

            </div>





            <div>

              <h3
                className="
                text-3xl
                font-bold
                gradient-text
                "
              >
                5+
              </h3>

              <p className="text-gray-400">
                Certifications
              </p>

            </div>


          </div>




        </motion.div>








        {/* PROFILE IMAGE */}


        <motion.div

          initial={{
            opacity: 0,
            scale: 0.8,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 0.8,
          }}

          className="
          flex
          justify-center
          "

        >



          <div
            className="
            relative
            w-72
            h-72
            md:w-96
            md:h-96
            float-animation
            "
          >


            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-r
              from-indigo-500
              via-purple-500
              to-pink-500
              blur-2xl
              opacity-40
              "
            />



            <Image

              src="/profiles.png"

              alt="Mudavath Tharun"

              fill

              priority

              className="
              rounded-full
              object-cover
              border-4
              border-indigo-500
              "

            />


          </div>



        </motion.div>



      </div>


    </section>

  );

}