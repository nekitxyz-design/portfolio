import React from "react";

export const IntroSectionSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#ff5630] py-16 px-6 overflow-hidden">
      {/* Curved white background shape */}
      <div className="absolute w-[1382px] h-[671px] top-[72px] left-[-315px] bg-white rounded-[691px/335.5px]" />

      <div className="relative flex flex-col max-w-[1600px] mx-auto gap-2.5 z-10">
        <h1 className="text-[64px] font-bold tracking-[-2.05px] leading-[70.4px] text-paragraph-1 font-['Inter',Helvetica] mt-[-1.00px]">
          Krew Guru
        </h1>

        <p className="font-body text-paragraph-1 text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] font-[number:var(--body-font-weight)]">
          Krew Guru is an HRTech startup in the maritime sphere. It helps
          seafarers from all over the world to find jobs at sea and helps
          employees (crewing companies, shipping companies) to find the best
          employers for the positions they have.
        </p>

        <a
          href="https://krew.guru/"
          rel="noopener noreferrer"
          target="_blank"
          className="font-body [font-style:var(--body-font-style)] font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] text-[length:var(--body-font-size)] leading-[var(--body-line-height)] text-paragraph-1 underline"
        >
          Website
        </a>
      </div>
    </section>
  );
}; 