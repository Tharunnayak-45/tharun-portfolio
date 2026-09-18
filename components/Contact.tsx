"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
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
      link: "https://www.linkedin.com/in/mudavaththarun45",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Tharunnayak-45",
      link: "https://github.com/Tharunnayak-45",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, Telangana, India",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="section-container scroll-mt-20"
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
        <h2 className="text-4xl md:text-5xl font-bold">
          Contact
          <span className="gradient-text"> Me</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Feel free to connect with me for opportunities,
          collaborations, projects, or any professional
          inquiries.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 mt-12">
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
          className="space-y-5"
        >
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.link}
                target={
                  item.link.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  glass
                  rounded-xl
                  p-5
                  flex
                  items-center
                  gap-5
                  border
                  border-white/10
                  hover:border-indigo-500/60
                  hover:bg-white/[0.07]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  group
                "
              >
                {/* Icon */}
                <div
                  className="
                    p-3
                    rounded-full
                    bg-indigo-500/20
                    group-hover:bg-indigo-500/30
                    transition
                    duration-300
                    shrink-0
                  "
                >
                  <Icon
                    size={25}
                    className="
                      text-indigo-400
                      group-hover:text-purple-400
                      transition
                      duration-300
                    "
                  />
                </div>

                {/* Details */}
                <div className="min-w-0">
                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1 break-all">
                    {item.value}
                  </p>
                </div>
              </Link>
            );
          })}
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
          onSubmit={(e) => e.preventDefault()}
          className="
            glass
            rounded-2xl
            p-6
            md:p-8
            space-y-5
            border
            border-white/10
          "
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-gray-300 mb-2"
            >
              Your Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
              className="
                w-full
                px-5
                py-3
                rounded-lg
                bg-white/5
                border
                border-white/10
                text-white
                placeholder-gray-500
                outline-none
                focus:border-indigo-500
                focus:ring-1
                focus:ring-indigo-500
                transition
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-300 mb-2"
            >
              Your Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="
                w-full
                px-5
                py-3
                rounded-lg
                bg-white/5
                border
                border-white/10
                text-white
                placeholder-gray-500
                outline-none
                focus:border-indigo-500
                focus:ring-1
                focus:ring-indigo-500
                transition
              "
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-gray-300 mb-2"
            >
              Your Message
            </label>

            <textarea
              id="message"
              rows={5}
              placeholder="Write your message..."
              required
              className="
                w-full
                px-5
                py-3
                rounded-lg
                bg-white/5
                border
                border-white/10
                text-white
                placeholder-gray-500
                outline-none
                resize-none
                focus:border-indigo-500
                focus:ring-1
                focus:ring-indigo-500
                transition
              "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              primary-btn
              flex
              items-center
              justify-center
              gap-2
              w-full
              py-3
              rounded-lg
              hover:scale-[1.02]
              active:scale-[0.98]
              transition
              duration-300
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