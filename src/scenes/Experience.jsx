// import React from "react";

// const Experience = () => {
//   return <div>Experience</div>;
// };

// export default Experience;

import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/p1.jpeg"
import project2 from "../assets/p2.jpg"
import project3 from "../assets/p3.jpeg"
import project4 from "../assets/p4.jpg"
import project5 from "../assets/p5.jpg"
import project6 from "../assets/p6.jpg"

import Project from "../components/Project"

const Projects = () => {

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="projects" className="pt-24 pb-48">
      {/* HEADING */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        // this shows thas 0.5(50%) jab ye div viewport par ayga tab once ye animation chalega
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">Seniour’s Experience</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>


      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-5 sm:my-0 my-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* ROW 1 */}
          <Project title="Suraj - SDE, Amazon" proImage={project1} projectLink={""} projectVariant={projectVariant} />
          <Project title="Akta - SDE, TechFix" proImage={project2} projectVariant={projectVariant} />

          {/* ROW 2 */}
          <Project title="Rahul, AffordMed" proImage={project3} projectVariant={projectVariant} />
          <Project title="Aman - CEO,DevXpert" proImage={project4} projectVariant={projectVariant} />
          <Project title="Yash - SDE, Google" proImage={project5} projectVariant={projectVariant} />

          {/* ROW 2 */}
          <Project title="Mohan - GFX, DeltaX" proImage={project6} projectVariant={projectVariant} />

        </motion.div>
      </div>
    </section>
  )
}

export default Projects