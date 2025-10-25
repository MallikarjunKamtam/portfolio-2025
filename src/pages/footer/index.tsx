import React from "react";
import { SiLeetcode } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

function Footer() {
  return (
    <div
      id="Footer"
      className="bg-[#bbb] text-black p-10 flex gap-5 flex-col items-center justify-center"
    >
      <div className="flex gap-8">
        <a
          href="mailto:mallikarjunkamtam@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LuMail className="cursor-pointer" size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/mallikarjunkamtam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="cursor-pointer" size={20} />
        </a>

        <a
          href="https://leetcode.com/mallikarjunkamtam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="cursor-pointer" size={20} />
        </a>

        <a
          href="https://www.instagram.com/mallikarjun_kamtam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrInstagram className="cursor-pointer" size={20} />
        </a>

        <a
          href="https://github.com/mallikarjunkamtam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer" size={20} />
        </a>
      </div>

      <p>© MK</p>
    </div>
  );
}

export default Footer;
