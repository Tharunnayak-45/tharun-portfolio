
import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Profiles from "@/components/Profiles";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Navbar />

            {/* Hero */}
            <Hero />

            {/* About */}
            <About />

            {/* Skills */}
            <Skills />

            {/* Education */}
            <Education />

            {/* Projects */}
            <Projects />

            {/* Experience */}
            <Experience />

            {/* Certifications */}
            <Certifications />

            {/* Coding Profiles */}
            <Profiles />

            {/* Achievements */}
            <Achievements />

            {/* Contact */}
            <Contact />
        </main>
    );
}

