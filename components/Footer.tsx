"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Code2,
  Heart,
} from "lucide-react";


export default function Footer() {


  return (

    <footer
      className="
      border-t
      border-white/10
      mt-10
      "
    >


      <div

        className="
        max-w-7xl
        mx-auto
        px-6
        py-8
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-5
        "

      >





        {/* Copyright */}


        <p
          className="
          text-gray-400
          text-sm
          text-center
          "
        >

          © {new Date().getFullYear()}

          <span
            className="
            text-white
            font-semibold
            "
          >

            {" "}Mudavath Tharun

          </span>

          . All rights reserved.

        </p>








        {/* Social Links */}


        <div
          className="
          flex
          items-center
          gap-4
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
            transition
            "

          >

            <Github size={20} />

          </Link>






          <Link

            href="https://www.linkedin.com/in/mudavaththarun45"

            target="_blank"

            className="
            p-3
            rounded-full
            glass
            hover:text-indigo-400
            transition
            "

          >

            <Linkedin size={20} />

          </Link>







          <Link

            href="https://leetcode.com/u/Tharunnayak_45/"

            target="_blank"

            className="
            p-3
            rounded-full
            glass
            hover:text-indigo-400
            transition
            "

          >

            <Code2 size={20} />

          </Link>



        </div>






      </div>





      <div
        className="
        text-center
        pb-5
        text-sm
        text-gray-500
        flex
        justify-center
        items-center
        gap-2
        "
      >

        Built with

        <Heart
          size={16}
          className="
          text-red-500
          fill-red-500
          "
        />

        by Mudavath Tharun


      </div>



    </footer>

  );

}