import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const EndSubsection = (): JSX.Element => {
  // Data for skill badges
  const skillBadges = [
    "Figma",
    "User Research",
    "Team Player",
    "10+ years in Design",
    "Computer Since Degree",
    "Adobe",
    "Analytic Tools",
    "Product Design",
    "Prototyping",
    "UI/UX Design",
    "Interaction Design",
    "App Design",
    "User Journey Mapping",
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-12 px-6 py-12 w-full bg-white">
      <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto] overflow-x-auto">
        {skillBadges.map((skill, index) => (
          <Badge
            key={`skill-${index}`}
            variant="outline"
            className="bg-[#00000014] rounded p-1 backdrop-blur-2xl font-light text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px] whitespace-nowrap"
          >
            {skill}
          </Badge>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 max-w-[1232px] w-full">
        <h2 className="self-stretch font-header-2 text-paragraph-1 text-[length:var(--header-2-font-size)] text-center tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] [font-style:var(--header-2-font-style)]">
          Thanks for the visit.
          <br />
          Reach out and let&apos;s chat.
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button
          variant="outline"
          className="w-full sm:w-[408px] h-[54px] flex items-center justify-center gap-4 px-3.5 py-4 border border-solid border-[#0f0f0f] rounded-none"
        >
          <span className="font-bold text-x-101010 text-sm tracking-[-0.70px] leading-[15.4px]">
            E-mail&nbsp;&nbsp;Me
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>

        <Button
          variant="outline"
          className="w-full sm:w-[281px] h-[54px] flex items-center justify-center gap-4 px-3.5 py-4 border border-solid border-[#0f0f0f] rounded-none"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-x-101010 text-sm tracking-[-0.70px] leading-[15.4px]">
            Main Page
          </span>
        </Button>
      </div>
    </section>
  );
}; 