"use client";

import { motion } from "framer-motion";
import { TypingText } from "./components";

import styles from "./../../styles/index";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Giới thiệu về tôi" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Xin chào! Tôi là{" "}
        <span className="font-extrabold text-white">Nguyễn Văn Toàn</span>, sinh
        ngày 17 tháng 12 năm 2000. Với niềm đam mê sâu sắc đối với công nghệ và
        lập trình, tôi đã dành nhiều thời gian để trau dồi kỹ năng và kiến thức
        trong lĩnh vực này. Tôi luôn cố gắng học hỏi và phát triển bản thân mỗi
        ngày, với mục tiêu trở thành một lập trình viên chuyên nghiệp, đóng góp
        tích cực vào các dự án mà tôi tham gia. Với sự kiên trì và tận tâm, tôi
        luôn tìm cách cải thiện và hoàn thiện bản thân qua từng ngày. Hãy cùng{" "}
        <span className="font-extrabold text-white">khám phá</span> hành trình
        của tôi bằng cách kéo xuống dưới.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
    
  </section>
);

export default About;
