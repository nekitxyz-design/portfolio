import { MailIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  // Skills data for the badges
  const skills = [
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
    <section className="flex flex-col w-full items-center justify-center gap-12 px-6 py-12 bg-[#f9e6aa99] backdrop-blur-2xl">
      <div className="flex flex-wrap max-w-[1600px] items-start gap-4 relative w-full mx-auto">
        {skills.map((skill, index) => (
          <Badge
            key={`skill-${index}`}
            variant="outline"
            className="bg-[#00000017] backdrop-blur-2xl text-paragraph-1 font-light text-base tracking-[-0.48px] leading-[17.6px] rounded p-1 [font-family:'Inter',Helvetica]"
          >
            {skill}
          </Badge>
        ))}
      </div>

      <div className="max-w-[1232px] flex flex-col items-center gap-4">
        <h2 className="font-header-2 font-[number:var(--header-2-font-weight)] text-paragraph-1 text-[length:var(--header-2-font-size)] text-center tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] [font-style:var(--header-2-font-style)]">
          Thanks for the visit.
          <br />
          Reach out and let&apos;s chat.
        </h2>
      </div>

      <Button
        variant="outline"
        className="flex w-[408px] h-[54px] items-center justify-center gap-4 px-3.5 py-4 border border-solid border-[#0f0f0f] rounded-none bg-transparent"
      >
        <span className="[font-family:'Inter',Helvetica] font-bold text-x-101010 text-sm tracking-[-0.70px] leading-[15.4px]">
          E-mail&nbsp;&nbsp;Me
        </span>
        <MailIcon className="h-6 w-6" />
      </Button>
    </section>
  );
};