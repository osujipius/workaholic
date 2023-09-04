import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import Logo from "../atoms/Logo";

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between fixed !w-100 top-0 left-0 right-0 z-20">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block text-2xl lg:hidden text-gray-950"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      <NavLink text="Jobs" />
      <NavLink text="Community" />
      <NavLink text="Pricing" />
      <NavLink text="About us" href={"/about"} />
    </div>
  );
};

const NavLink = ({ text, href }) => {
  return (
    <a
      href={href}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium cursor-pointer"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500 font-mono font-semibold">
          {text}
        </span>
        <span className="flex items-center h-[30px] text-[#317773] font-mono font-semibold">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-[#317773] bg-clip-text text-transparent font-semibold rounded-md whitespace-nowrap font-mono"
      >
        Sign in
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-[#317773] text-white font-semibold rounded-md whitespace-nowrap font-mono"
      >
        Sign up
      </motion.button>
    </div>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute left-0 right-0 flex flex-col gap-4 p-4 origin-top bg-white shadow-lg top-full"
    >
      <MenuLink text="Solutions" />
      <MenuLink text="Community" />
      <MenuLink text="Pricing" />
      <MenuLink text="Company" />
    </motion.div>
  );
};

const MenuLink = ({ text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-[#317773]">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

const Header = () => {
  return (
    <div className="mb-10 bg-gray-50">
      <FlipNav />
    </div>
  );
};

export default Header;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
