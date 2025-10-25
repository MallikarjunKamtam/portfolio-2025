import React from "react";

const WhatIDo = () => {
  return (
    <section
      id="WhatIDo"
      className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 via-[#aaa] to-gray-100 text-gray-800 px-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        What I Do
      </h2>

      <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-center text-gray-700">
        I’m a{" "}
        <span className="font-semibold text-gray-900">
          Full Stack Developer{" "}
        </span>
        passionate about crafting meaningful digital experiences. I build
        reliable and scalable applications, ensuring both functionality and
        design excellence.
      </p>

      <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-center mt-4 text-gray-700">
        I also enjoy working on{" "}
        <span className="font-semibold text-gray-900">
          DevOps and cloud infrastructure
        </span>
        , where I focus on automation, deployment, and optimization within the
        AWS ecosystem.
      </p>

      <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-center mt-4 text-gray-700">
        My core motivation lies in solving complex challenges, improving system
        performance, and building products that truly make an impact.
      </p>
    </section>
  );
};

export default WhatIDo;
