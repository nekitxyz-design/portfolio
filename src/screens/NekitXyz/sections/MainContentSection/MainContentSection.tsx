import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import CurvedNavbar from "../../../../components/ui/CurvedNavbar";
import { useState } from "react";

export const MainContentSection = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Navigation menu items data
  const navItems = [
    { label: "Showcases", imgSrc: "/group.png" },
    { label: "Gallery", imgSrc: "/group-1.png" },
    { label: "About Me", imgSrc: "/group-2.png" },
  ];

  return (
    <section className="h-[100vh] pt-0 pb-16 px-6 relative w-full bg-[#31313133] flex flex-col items-center">
      {/* Новый Navbar */}
      <div className="w-full flex justify-center items-center px-4 pt-4" style={{zIndex: 2}}>
        <div className="flex items-center justify-between w-full md:max-w-[1600px]">
          <img
            src="/group-9495.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <img
            src="/Menu.svg"
            alt="Menu"
            className="w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>
      {menuOpen && <CurvedNavbar isActive={menuOpen} setIsActive={setMenuOpen} />}
      {/* Hero Content - positioned to left and bottom */}
      <div className="flex flex-col w-full md:max-w-[1600px] items-start gap-6 relative w-full flex-1 justify-end" style={{zIndex: 1}}>
        {/* Headline and Subtitle */}
        <div className="flex flex-col w-full md:max-w-[900px] items-start gap-2 relative w-full flex-[0_0_auto]">
          <h1 className="mt-[-1.00px] font-normal text-[36px] md:text-[64px] leading-[40px] md:leading-[64px] relative self-stretch [font-family:'Inter',Helvetica] text-paragraph-1">
            <span className="font-bold tracking-[-2.05px] leading-[42px] md:leading-[70.4px]">
              Senior Product Designer, User-Focused, 8+ Years
            </span>
          </h1>

          <p className="relative self-stretch font-body font-[number:var(--body-font-weight)] text-paragraph-1 text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
            Delivering results through user-centered design
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
          <Button className="inline-flex items-center gap-4 px-3.5 py-4 relative flex-[0_0_auto] bg-[#0029f7] h-auto rounded-none">
            <span className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-white text-sm tracking-[-0.70px] leading-[15.4px] whitespace-nowrap">
              Connect w/ Me
            </span>
            <img
              src="/inbug-white-1.png"
              alt="LinkedIn"
              className="w-6 h-[22px] object-contain"
            />
          </Button>

          <Button
            variant="outline"
            className="flex w-[180px] h-[54px] items-center justify-center gap-4 px-3.5 py-4 relative border border-solid border-[#0f0f0f] rounded-none bg-transparent"
          >
            <span className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-x-101010 text-sm tracking-[-0.70px] leading-[15.4px] whitespace-nowrap">
              Download CV
            </span>
            <img
              className="h-[23.54px] mt-[-0.77px] mb-[-0.77px] relative w-6"
              alt="Download icon"
              src="/envelope-fill-2.svg"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};