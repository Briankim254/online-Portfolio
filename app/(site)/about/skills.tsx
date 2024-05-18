import React from "react";
import OrbitingCircles from "../components/magicui/orbiting-circles";
import { FaLaravel, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function Skills() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Skills
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.Laravel />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.php />
      </OrbitingCircles>

      {/* middle Circles */}
      <OrbitingCircles
        className="h-[40px] w-[40px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={135}
      >
        <Icons.React />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[40px] w-[40px] border-none bg-transparent"
        duration={18}
        delay={20}
        radius={135}
      >
        <Icons.JavaScript />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <Icons.python />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => <FaGithub color="" size={30} />,
  php: () => <FaPhp size={30} />,
  React: () => <FaReact color="lightblue" size={30} />,
  JavaScript: () => <IoLogoJavascript color="yellow" size={30} />,
  python: () => <FaPython size={30} />,
  Laravel: () => <FaLaravel color="red" size={30} />,
};
