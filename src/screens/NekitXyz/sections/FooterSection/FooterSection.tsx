import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex w-full h-auto items-center justify-center gap-24 p-8 bg-white/90 backdrop-blur-2xl">
      <div className="flex flex-col items-start gap-14 relative flex-1 grow max-w-[1600px]">
        <div className="flex flex-col items-start gap-2 self-stretch w-full">
          <img
            src="/group-9494.png"
            alt="Logo"
            className="w-[31px] h-[31.61px] object-contain"
          />

          <div className="flex items-center gap-2 self-stretch w-full">
            <h2 className="relative w-fit mt-[-1.00px] font-sans font-normal text-black text-2xl tracking-[-0.48px] leading-[34.8px] whitespace-nowrap">
              Nick Polkovnikov | nekit.xyz
            </h2>
          </div>

          <p className="relative self-stretch font-sans font-medium text-black/45 text-base tracking-[-0.08px] leading-[23.2px]">
            Crafting thoughtful digital products since 2017.
            <br />
            Let&apos;s build something great together.
          </p>
        </div>

        <div className="inline-flex items-center gap-6">
          <img
            className="relative w-6 h-6"
            alt="Social link"
            src="/social-link-2.svg"
          />

          <img
            className="relative w-7 h-[24.39px]"
            alt="Group"
            src="/group-9505.png"
          />
        </div>
      </div>
    </footer>
  );
};