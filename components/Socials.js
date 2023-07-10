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
      <Link
        href={"https://github.com/parteek2813"}
        className="hover:text-accent transition-all duration-300"
        legacyBehavior
      >
        <a target="_blank" rel="noopender nore">
          <RiGithubLine />
        </a>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/parteek-kumar-68881b15a/"}
        className="hover:text-accent transition-all duration-300"
        legacyBehavior
      >
        <a target="_blank" rel="noopender nore">
          <RiLinkedinLine />
        </a>
      </Link>
      <Link
        href={"https://leetcode.com/digitalparteek/"}
        className="hover:text-accent transition-all duration-300"
        legacyBehavior
      >
        <a target="_blank" rel="noopender nore">
          <SiLeetcode />
        </a>
      </Link>
      <Link
        href={"https://www.instagram.com/its__prateek28/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.behance.net/parteekkumar7"}
        className="hover:text-accent transition-all duration-300"
        legacyBehavior
      >
        <a target="_blank" rel="noopender nore">
          <RiBehanceLine />
        </a>
      </Link>
      <Link
        href={""}
        className="hover:text-accent transition-all duration-300"
        legacyBehavior
      >
        <a target="_blank" rel="noopender nore">
          <RiPinterestLine />
        </a>
      </Link>
    </div>
  );
};

export default Socials;
