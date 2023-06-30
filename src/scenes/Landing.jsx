
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Community from "../assets/communities.png";
import rightarrow from "../assets/arrow.png";



const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className=""
          >
            <img
              alt="profile"
              className="hover:filter transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={Community}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={Community}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-[#0F4D36] text-4xl font-bold">Welcome to</p>

          <p className="text-[64px] font-bold font-playfair z-10 text-center md:text-start">
            Geek Community
          </p>

          <p className="mt-10 mb-7 text-darkgreen text-[36px] font-light leading-[60px] text-center md:text-start text-[#0F4D36]">
            We here at ‘Geek Community’ provide the best guide 
            for your development & Placement Journey, and make you aware about various activities.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="flex bg-green text-[#fbfbfb] rounded-[10px] py-3 px-7 text-[36px] font-light leading-[50px] transition duration-500"
            onClick={() => setSelectedPage("home")}
            href="#home"
          >
            Get Started <img className="place-items-center px-[20px] object-fill" src={rightarrow} alt="" />
          </AnchorLink>
        </motion.div>

      </div>
    </section>
  );
};

export default Landing;