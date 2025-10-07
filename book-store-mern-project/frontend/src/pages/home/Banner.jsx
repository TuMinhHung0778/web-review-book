import React from "react";

import bannerImg from "../../assets/banner.png";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { FaEnvelope, FaReact, FaNodeJs } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse py-16 px-6 md:px-16 justify-between items-center gap-12 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Ảnh minh hoạ */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end">
        <img
          src={bannerImg}
          alt="Profile banner"
          className="max-w-sm md:max-w-md h-auto rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Nội dung giới thiệu */}
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-3xl font-bold mb-5 text-gray-800 dark:text-white leading-snug">
          👋 Hello World, I'm{" "}
          <span className="text-blue-600">Từ Minh Hưng</span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          I’m a passionate <strong>Software Engineer</strong> specializing in{" "}
          <strong>React.js</strong> & <strong>Node.js</strong>. This website
          showcases my self-study journey and real projects for job
          applications.
          <br />
          Thank you for visiting! 🙏
          <br />
          📱 Contact My Zalo: <strong>0898 124 614</strong>
        </p>

        {/* Kỹ năng */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            <FaReact /> React.js
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            <FaNodeJs /> Node.js
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
            <SiExpress /> Express
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            <SiMongodb /> MongoDB
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium">
            <SiTailwindcss /> Tailwind
          </span>
        </div>

        {/* Nút hành động */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a
            href="/cv.pdf"
            download="TuMinhHung_Software_Engineer_CV.pdf"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
          >
            📄 Download My CV
          </a>
          <a
            href="mailto:tuminhhung0901@gmail.com"
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2 transition duration-300"
          >
            <FaEnvelope /> Contact Gmail
          </a>
        </div>

        {/* Tài khoản dùng thử */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-sm text-gray-700">
          <p className="font-semibold mb-1">
            🔐 You can try login using this test account:
          </p>
          <p>
            📧 Email1: <span className="font-medium">user1@gmail.com</span>
          </p>{" "}
          <p>
            📧 Email2: <span className="font-medium">1@gmail.com</span>
          </p>
          <p>
            🔑 Password: <span className="font-medium">123456</span>
          </p>
        </div>

        {/* Tài khoản admin */}
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg shadow-sm text-gray-700">
          <p className="font-semibold mb-2">
            ⚠️ If you want to use an <strong>admin role</strong> account:
          </p>
          <p>
            📧 <strong>Email:</strong> admin
          </p>
          <p>
            🔑 <strong>Password:</strong> 123456
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
