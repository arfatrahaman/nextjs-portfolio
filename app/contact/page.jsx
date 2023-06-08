"use client";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  return (
    <AnimatePresence>
      <motion.section
        id="contact-page"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="contact-page-wrapper">
            <div className="section-title">
              <h3 className="headline">Contact With Us</h3>
            </div>
            <div className="contact-page-item">
              <form
                action="https://formspree.io/f/mgebozoe"
                method="POST"
                className="contact-form"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="off"
                  required
                  className="input-box input-name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="off"
                  required
                  className="input-box input-email"
                />
                <textarea
                  name="message"
                  id=""
                  placeholder="Your Messages"
                  cols="30"
                  rows="10"
                  className="input-box input-textarea"
                ></textarea>
                <button type="submit" className="contact-submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Contact;
