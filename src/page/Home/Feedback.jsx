"use client";

import { motion } from "framer-motion";

import styles from "./../../styles/index";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Nguyễn Văn Toàn
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Web Developer, FPT University Student
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “Với niềm đam mê công nghệ và sự sáng tạo, tôi đã khám phá ra thế giới
          của lập trình web và các công nghệ mới. Từ những dòng code đầu tiên,
          tôi đã biết rằng đây là con đường mình muốn theo đuổi, và không ngừng
          học hỏi để trở thành một lập trình viên xuất sắc.”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F1747103b-311a-49b4-9192-a3ffc1afbc1e.jpg?alt=media&token=f2fab33d-3338-45db-b865-9e2f144eb129" // Thay bằng đường dẫn đến hình ảnh của bạn
          alt="Nguyen Van Toan"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png" // Thay bằng biểu tượng cá nhân hoặc logo của bạn
            alt="personal-stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
