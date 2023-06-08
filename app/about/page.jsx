"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const About = () => {
  return (
    <AnimatePresence>
      <motion.section
        id="about-page"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-title">
          <h3 className="headline">About Me</h3>
          <p className="deatil">Some words about me and my career</p>
        </div>
        <div className="about-page-wrapper">
          <div className="about-page-left-section about-item-1">
            <div className="about-page-left-content">
              <div className="about-content">
                <h4>Who I Am ?</h4>
                <p>
                  Highly motivated and self-taught front-end developer with a
                  strong passion for web development and creating visually
                  appealing user experiences. Seeking an opportunity to leverage
                  my skills in HTML, CSS, JavaScript, Bootstrap, React.js, and
                  Next.js to contribute to a dynamic development team.
                  <br />
                  <br />I have 3+ years experience in front end development. My
                  projects will ensure my experience in this sector. I have
                  experience in building new websites, converting designs to
                  websites, cloning websites, build e-commerce websites, also I
                  can build websites using 3rd party API.
                  <br />
                  <br />
                  You will find out my all project in project section. I am very
                  passionate about my work. I always try to do my work
                  perfectly. And also I am open to learning new things.
                </p>
              </div>
            </div>
          </div>
          <div className="about-page-right-section about-item-1">
            <div className="about-page-right-content">
              <div className="my-skill-section">
                <h4 className="skill-headline">My Skills</h4>
                <div className="skill">
                  <button className="skill-btn">
                    <Image
                      src="/images/next.png"
                      width={100}
                      height={100}
                      alt="frontendskills"
                      property="true"
                    />
                  </button>
                  <button className="skill-btn">
                    <Image
                      property="true"
                      alt="frontendskills"
                      src="/images/react.png"
                      width={100}
                      height={100}
                    />
                  </button>
                  <button className="skill-btn">
                    <Image
                      property="true"
                      alt="frontendskills"
                      src="/images/js.png"
                      width={100}
                      height={100}
                    />
                  </button>
                  <button className="skill-btn">
                    <Image
                      property="true"
                      alt="frontendskills"
                      src="/images/jquery.png"
                      width={100}
                      height={100}
                    />
                  </button>
                  <button className="skill-btn">
                    <Image
                      property="true"
                      alt="frontendskills"
                      src="/images/bootstap.png"
                      width={100}
                      height={100}
                    />
                  </button>
                  <button className="skill-btn">
                    <Image
                      property="true"
                      alt="frontendskills"
                      src="/images/wordpress.png"
                      width={100}
                      height={100}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default About;
