"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  Send,
} from "lucide-react";

import Link from "next/link";


export default function Contact() {


  const contactDetails = [

    {
      icon: Mail,
      title: "Email",
      value: "mtharun616@gmail.com",
      link: "mailto:mtharun616@gmail.com",
    },


    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/mudavaththarun45",
      link:
        "https://www.linkedin.com/in/mudavaththarun45",
    },


    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Tharunnayak-45",
      link:
        "https://github.com/Tharunnayak-45",
    },


    {
      icon: Phone,
      title: "Location",
      value: "Hyderabad, Telangana, India",
      link: "#",
    },


  ];



  return (

    <section
      id="contact"
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

          Contact

          <span className="gradient-text">
            {" "}Me
          </span>


        </h2>


        <p
          className="
          text-gray-400
          mt-4
          "
        >

          Feel free to connect with me for
          opportunities and collaborations.

        </p>


      </motion.div>








      <div
        className="
        grid
        md:grid-cols-2
        gap-10
        mt-12
        "
      >





        {/* Contact Information */}


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
            duration: 0.6,
          }}


          viewport={{
            once: true,
          }}



          className="
          space-y-5
          "

        >


          {

            contactDetails.map((item, index) => {


              const Icon = item.icon;


              return (


                <Link

                  key={index}

                  href={item.link}

                  target={
                    item.link.startsWith("http")
                      ?
                      "_blank"
                      :
                      undefined
                  }


                  className="
                  glass
                  rounded-xl
                  p-5
                  flex
                  items-center
                  gap-5
                  hover:border-indigo-500
                  transition
                  "

                >



                  <div
                    className="
                    p-3
                    rounded-full
                    bg-indigo-500/20
                    "
                  >

                    <Icon

                      size={25}

                      className="
                      text-indigo-400
                      "

                    />

                  </div>





                  <div>

                    <h3
                      className="
                      font-semibold
                      "
                    >

                      {item.title}

                    </h3>


                    <p
                      className="
                      text-gray-400
                      text-sm
                      "
                    >

                      {item.value}

                    </p>


                  </div>



                </Link>


              );


            })

          }



        </motion.div>









        {/* Contact Form */}


        <motion.form


          initial={{
            opacity: 0,
            x: 40,
          }}


          whileInView={{
            opacity: 1,
            x: 0,
          }}


          transition={{
            duration: 0.6,
          }}


          viewport={{
            once: true,
          }}



          className="
          glass
          rounded-2xl
          p-8
          space-y-5
          "

        >



          <input

            type="text"

            placeholder="Your Name"

            className="
            w-full
            px-5
            py-3
            rounded-lg
            bg-white/5
            border
            border-white/10
            outline-none
            focus:border-indigo-500
            "

          />





          <input

            type="email"

            placeholder="Your Email"

            className="
            w-full
            px-5
            py-3
            rounded-lg
            bg-white/5
            border
            border-white/10
            outline-none
            focus:border-indigo-500
            "

          />






          <textarea

            rows={5}

            placeholder="Your Message"

            className="
            w-full
            px-5
            py-3
            rounded-lg
            bg-white/5
            border
            border-white/10
            outline-none
            focus:border-indigo-500
            "

          />







          <button

            type="submit"

            className="
            primary-btn
            flex
            items-center
            justify-center
            gap-2
            w-full
            "

          >

            Send Message

            <Send size={18} />

          </button>




        </motion.form>





      </div>



    </section>

  );

}