"use client";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.section
        id="home-page"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className="home-page-content">
          <h6 className="home-page-title">I Am Arfat Rahaman Hridoy</h6>
          <h2 className="home-page-headline">A Front End Developer</h2>
          <p>
            Highly motivated and self-taught front-end developer with a strong
            passion for web development and creating visually appealing user
            experiences.
          </p>
          <div className="page-to-go">
            <Link href="/project" className="page-btn">
              My Projects
            </Link>
            <Link href="/about" className="page-btn">
              About Me
            </Link>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Home;
