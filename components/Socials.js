import Link from "next/link";

// icons
import {
  RiGithubLine,
  RiLinkedinLine,
  RiInstagramLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

import { SiLeetcode } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://github.com/parteek2813"} legacyBehavior>
        <a
          target="_blank"
          rel="noopender noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          <RiGithubLine />
        </a>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/parteek-kumar-68881b15a/"}
        legacyBehavior
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          <RiLinkedinLine />
        </a>
      </Link>
      <Link href={"https://leetcode.com/devParteek/"} legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          <SiLeetcode />
        </a>
      </Link>
      <Link href={"https://www.instagram.com/its__prateek28/"} legacyBehavior>
        <a
          target="_blank"
          rel="noopender noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          <RiInstagramLine />
        </a>
      </Link>
      <Link href={"https://www.behance.net/parteekkumar7"} legacyBehavior>
        <a
          target="_blank"
          rel="noopender noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          <RiBehanceLine />
        </a>
      </Link>
      <Link href={"/"} legacyBehavior>
        <a
          target="_blank"
          rel="noopender noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          <RiPinterestLine />
        </a>
      </Link>
    </div>
  );
};

export default Socials;
