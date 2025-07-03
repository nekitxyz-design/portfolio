import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];
const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease } },
};
const slide = {
  initial: { x: 80 },
  enter: (i: number) => ({ x: 0, transition: { duration: 0.8, ease, delay: 0.05 * i } }),
  exit: (i: number) => ({ x: 80, transition: { duration: 0.8, ease, delay: 0.05 * i } }),
};
const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

function Curve() {
  const height = typeof window !== 'undefined' ? window.innerHeight : 1000;
  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height/2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height/2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: { d: targetPath, transition: { duration: 1, ease } },
    exit: { d: initialPath, transition: { duration: 0.8, ease } },
  };

  return (
    <svg className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full fill-[rgb(255,224,69)]">
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  );
}
function Footer() {
  return (
    <div className="flex w-full text-sm justify-between">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
    </div>
  );
}
function NavLink({ data, isActive, setSelectedIndicator }: any) {
  const { title, href, index } = data;
  return (
    <motion.div className="relative flex items-center" onMouseEnter={() => { setSelectedIndicator(href); }} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
      <motion.div variants={scale} animate={isActive ? "open" : "closed"} className="w-2.5 h-2.5 bg-black rounded-full absolute -left-8"></motion.div>
      <Link to={href} className="uppercase font-black">{title}</Link>
    </motion.div>
  );
}

export default function CurvedNavbar({ isActive, setIsActive }: { isActive: boolean, setIsActive: (v: boolean) => void }) {
  const location = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed inset-0 w-full h-full text-black bg-[rgb(255,224,69)] z-50"
    >
      <div className="w-full flex justify-end text-3xl p-4" onClick={() => setIsActive(false)}><IoClose className="text-3xl" /></div>
      <div className="h-full px-2 py-8 md:p-24 flex flex-col justify-between">
        <div onMouseLeave={() => { setSelectedIndicator(location.pathname); }} className="flex flex-col text-3xl md:text-5xl gap-3 mt-10 md:mt-20">
          <div className="text-gray-900 border-b border-gray-800 uppercase text-sm mb-10">
            <p>Brand Logo</p>
          </div>
          {navItems.map((data, index) => (
            <NavLink key={index} data={{ ...data, index }} isActive={selectedIndicator === data.href} setSelectedIndicator={setSelectedIndicator} />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
} 