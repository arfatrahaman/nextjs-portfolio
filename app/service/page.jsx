"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const Service = () => {
  return (
    <AnimatePresence>
      <motion.section
        id="service-page"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-title">
          <h3>My Service</h3>
          <p className="deatil">This Kind Of Services I Provide To My Client</p>
        </div>
        <div className="service-page-wrapper">
          {/* <!-- Single Service Item --> */}
          <div className="single-sercice-item service-item-one">
            <div className="service-item-image">
              <Image
                property="true"
                width={50}
                height={50}
                src="/images/newwebsite.png"
                alt="frontendservice"
                className="service-img"
              />
            </div>
            <div className="service-item-headline">
              <h4>New Websites</h4>
            </div>
            <div className="service-item-deatils">
              <ul>
                <li className="service-list"> - Landing Website</li>
                <li className="service-list"> - Portfolio Website</li>
                <li className="service-list"> - Business Website</li>
                <li className="service-list"> - Educational Website</li>
                <li className="service-list"> - And Many More</li>
              </ul>
            </div>
          </div>
          {/* <!-- Single Service Item End --> */}
          {/* <!-- Single Service Item --> */}
          <div className="single-sercice-item service-item-two">
            <div className="service-item-image">
              <Image
                property="true"
                width={50}
                height={50}
                src="/images/figma.png"
                alt="frontendservice"
                className="service-img"
              />
            </div>
            <div className="service-item-headline">
              <h4>Design To Websites</h4>
            </div>
            <div className="service-item-deatils">
              <ul>
                <li className="service-list"> - Psd To Html</li>
                <li className="service-list"> - Figma To Html</li>
                <li className="service-list"> - Photo To Html</li>
                <li className="service-list"> - Design To Html</li>
                <li className="service-list"> - Penciel Design To Html</li>
              </ul>
            </div>
          </div>
          {/* <!-- Single Service Item End --> */}
          {/* <!-- Single Service Item --> */}
          <div className="single-sercice-item service-item-three">
            <div className="service-item-image">
              <Image
                property="true"
                width={50}
                height={50}
                src="/images/clone.png"
                alt="frontendservice"
                className="service-img"
              />
            </div>
            <div className="service-item-headline">
              <h4>Clone Any Website</h4>
            </div>
            <div className="service-item-deatils">
              <ul>
                <li className="service-list"> - Youtube Clone</li>
                <li className="service-list"> - Instagram Clone</li>
                <li className="service-list"> - Facebook Clone</li>
                <li className="service-list"> - And Many More</li>
              </ul>
            </div>
          </div>
          {/* <!-- Single Service Item End --> */}
          {/* <!-- Single Service Item --> */}
          <div className="single-sercice-item service-item-four">
            <div className="service-item-image">
              <Image
                property="true"
                width={50}
                height={50}
                src="/images/api.png"
                alt="frontendservice"
                className="service-img"
              />
            </div>
            <div className="service-item-headline">
              <h4>3'rd Party Api</h4>
            </div>
            <div className="service-item-deatils">
              <ul>
                <li className="service-list">
                  - Use Api For Create New Website
                </li>
                <li className="service-list">
                  - Use Api For Create Clone Website
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Single Service Item End --> */}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Service;
