"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";


interface ExperienceType {
  role: string;
  company: string;
  duration: string;
  location: string;
  certificate: string;
  description: string;
  skills: string[];
}


export default function Experience() {


  const experiences: ExperienceType[] = [

    {
      role: "ServiceNow Virtual Internship",

      company: "ServiceNow",

      duration: "2025",

      location: "Virtual Internship",

      certificate:
        "/Certificates/servicenow-virtual-internship.pdf",

      description:
        "Completed a ServiceNow Virtual Internship focused on cloud-based platform concepts, workflow automation, IT Service Management, and application development fundamentals.",

      skills: [
        "ServiceNow Platform",
        "Cloud Computing",
        "Workflow Automation",
        "IT Service Management",
        "Application Development",
      ],
    },


    {
      role: "Frontend Development Intern",

      company: "CodeAlpha",

      duration: "July 2026",

      location: "Remote",

      certificate:
        "/Certificates/codealpha-internship.pdf",

      description:
        "Worked as a Frontend Development Intern and developed responsive web applications using HTML, CSS, and JavaScript. Built projects including Image Gallery and Calculator applications while improving UI development and problem-solving skills.",

      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Git",
        "GitHub",
      ],
    },

  ];



  return (

    <section
      id="experience"
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

          Work

          <span className="gradient-text">
            {" "}Experience
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

          My internship experience and practical exposure
          to software development.

        </p>


      </motion.div>





      {/* Experience Cards */}


      <div
        className="
        max-w-4xl
        mx-auto
        mt-12
        space-y-8
        "
      >


        {
          experiences.map((exp, index) => (


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
                duration: 0.6,
              }}

              viewport={{
                once: true,
              }}

              className="
              glass
              rounded-2xl
              p-8
              "

            >



              {/* Header */}


              <div
                className="
                flex
                flex-col
                md:flex-row
                md:justify-between
                gap-4
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

                    <Briefcase
                      size={30}
                      className="text-indigo-400"
                    />

                  </div>



                  <div>

                    <h3
                      className="
                      text-2xl
                      font-bold
                      "
                    >

                      {exp.role}

                    </h3>


                    <p
                      className="
                      text-indigo-400
                      font-semibold
                      "
                    >

                      {exp.company}

                    </p>


                    <p
                      className="
                      text-sm
                      text-gray-400
                      mt-1
                      "
                    >

                      {exp.location}

                    </p>


                  </div>


                </div>




                <div
                  className="
                  flex
                  items-center
                  gap-2
                  text-gray-400
                  "
                >

                  <Calendar size={18} />

                  {exp.duration}

                </div>


              </div>





              {/* Description */}


              <p
                className="
                mt-6
                text-gray-300
                leading-relaxed
                "
              >

                {exp.description}

              </p>





              {/* Skills */}


              <div
                className="
                flex
                flex-wrap
                gap-3
                mt-6
                "
              >

                {
                  exp.skills.map((skill) => (

                    <span

                      key={skill}

                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-indigo-500/10
                      border
                      border-indigo-500/30
                      text-sm
                      text-gray-200
                      "

                    >

                      {skill}

                    </span>

                  ))
                }


              </div>





              {/* Certificate */}


              {
                exp.certificate && (

                  <a

                    href={exp.certificate}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    px-5
                    py-2
                    rounded-full
                    border
                    border-indigo-500
                    text-indigo-400
                    hover:bg-indigo-500
                    hover:text-white
                    transition
                    "

                  >

                    View Certificate

                    <ExternalLink size={16} />

                  </a>

                )
              }


            </motion.div>


          ))
        }


      </div>


    </section>

  );

}