"use client";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import projectdata from "/components/projectdata";

const Project = () => {
  return (
    <AnimatePresence>
      <motion.section
        id="project-page"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-title">
          <h3 className="headline">My Project</h3>
          <p className="deatil">
            Redesign some websites for my own practice, some are for challenging
            myself, and also some for local business.
          </p>
        </div>

        <article className="project-data">
          {projectdata.map((project, index) => {
            return (
              <div
                className={`project-data-wrapper project-item-${index}`}
                key={index}
              >
                <div className="project-image">
                  <Image
                    className="project-image"
                    src={project.projectImg}
                    width="400"
                    height="300"
                    priority
                    alt={`frontendproject${index}`}
                    property="true"
                  />
                </div>

                <div className="project-content">
                  <h4 className="project-title">{project.projectName}</h4>
                  <p>{project.projectDiscription}</p>
                  <ul className="project-list-box">
                    <li className="project-dis-list">
                      {project?.discList?.list1}
                    </li>
                    <li className="project-dis-list">
                      {project?.discList?.list2}
                    </li>
                    <li className="project-dis-list">
                      {project?.discList?.list3}
                    </li>
                  </ul>
                  <div className="project-skills">
                    {project.skills.map((item) => {
                      return <span className="skill-item">{item}</span>;
                    })}
                  </div>
                  <a
                    target="_blank"
                    href={project.visitLink}
                    className="page-btn"
                  >
                    Visit Live
                  </a>
                </div>
              </div>
            );
          })}
        </article>
      </motion.section>
    </AnimatePresence>
  );
};

export default Project;
