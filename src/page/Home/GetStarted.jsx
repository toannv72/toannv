"use client";

import { motion } from "framer-motion";

import styles from "./../../styles/index";
import { startingFeatures } from "../constants";
import { StartSteps, TitleText, TypingText } from "./components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F8c5ee1c2-622d-40e7-837e-771305a643c0.jpg?alt=media&token=a2a4b136-bcbe-4647-8d7e-23e8659b44ca"
          alt="get-started"
          className="w-[94%] h-[90%]  rounded-full "
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Giới thiệu về tôi" />
        <TitleText title={<>Hãy bắt đầu tìm hiểu về tôi</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
