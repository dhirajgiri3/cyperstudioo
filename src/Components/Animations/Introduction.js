import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  // Define a custom cubic bezier easing
  const customEase = [0.42, 0, 0.58, 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: customEase, staggerChildren: 0.3 }}
    >
      <h1>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: customEase }}
        >
          Why To Choose Us?
        </motion.span>
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: customEase }}
      >
        Looking for a web agency that exceeds expectations?
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: customEase }}
      >
        Choose Cyper Studio! We're a top-rated web development agency in Delhi,
        India, creating digital masterpieces with unique designs and
        eye-catching software.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: customEase }}
      >
        With expertise in web development, app development, SEO, and graphic
        design, we're your one-stop-shop for all your digital needs.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: customEase }}
      >
        Our team of creative wizards brings your ambitions to life with
        exceptional user experiences, timely delivery, and outstanding customer
        service.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: customEase }}
      >
        We involve you in every step of the process, ensuring superhero-like
        delivery times and responsive support.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: customEase }}
      >
        Partner with the best web development agency in India and achieve
        digital success with Cyper Studio!
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: customEase }}
      >
        Invest in your digital future and let's rock your web game together!
      </motion.p>
    </motion.div>
  );
};

export default Introduction;
