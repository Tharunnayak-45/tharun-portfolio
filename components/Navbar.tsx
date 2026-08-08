"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";


export default function Navbar() {


  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);



  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];



  // Scroll spy

  useEffect(() => {


    const sections =
      document.querySelectorAll("section[id]");



    const observer =
      new IntersectionObserver(

        (entries) => {


          entries.forEach((entry) => {


            if (entry.isIntersecting) {

              setActiveSection(entry.target.id);

            }


          });


        },

        {
          threshold: 0.5,
        }

      );



    sections.forEach((section) => {

      observer.observe(section);

    });



    return () => {

      sections.forEach((section) => {

        observer.unobserve(section);

      });

    };


  }, []);






  return (

    <nav

      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/50
      border-b
      border-white/10
      "

    >


      <div

        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "

      >



        {/* Logo */}


        <Link

          href="#home"

          className="
          text-2xl
          font-bold
          gradient-text
          "

        >

          Tharun

        </Link>






        {/* Desktop Menu */}


        <div

          className="
          hidden
          md:flex
          items-center
          gap-7
          "

        >


          {

            navItems.map((item) => (


              <Link

                key={item.name}

                href={item.href}

                className="
              relative
              text-gray-300
              hover:text-indigo-400
              transition
              "

              >


                <span

                  className={

                    activeSection === item.href.substring(1)

                      ?

                      "text-indigo-400"

                      :

                      ""

                  }

                >

                  {item.name}

                </span>



                {


                  activeSection === item.href.substring(1)

                  &&

                  (

                    <motion.span

                      layoutId="underline"

                      className="
                  absolute
                  left-0
                  -bottom-2
                  w-full
                  h-0.5
                  bg-indigo-500
                  rounded-full
                  "

                    />


                  )


                }



              </Link>


            ))

          }


        </div>






        {/* Mobile Button */}


        <button

          onClick={() => setOpen(!open)}

          className="
          md:hidden
          text-white
          "

        >

          {

            open

              ?

              <X size={28} />

              :

              <Menu size={28} />

          }


        </button>




      </div>








      {/* Mobile Menu */}


      {

        open &&


        (

          <motion.div

            initial={{
              opacity: 0,
              height: 0,
            }}

            animate={{
              opacity: 1,
              height: "auto",
            }}

            className="
            md:hidden
            px-6
            pb-6
            "

          >


            {

              navItems.map((item) => (


                <Link

                  key={item.name}

                  href={item.href}

                  onClick={() => setOpen(false)}

                  className={`
                block
                py-3
                text-gray-300
                border-b
                border-white/10

                ${activeSection === item.href.substring(1)
                      ?
                      "text-indigo-400"
                      :
                      ""
                    }

                `}

                >

                  {item.name}


                </Link>


              ))

            }


          </motion.div>

        )


      }


    </nav>


  );

}