import React from "react";

export const FooterSubsection = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-center gap-24 p-8 relative self-stretch w-full bg-[#f7f7f7] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]">
      <div className="flex flex-col items-start gap-14 relative flex-1 grow">
        <div className="flex flex-col items-start gap-2 self-stretch w-full">
          <div className="relative w-[31px] h-[31.61px]">
            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15.5" cy="16" r="15.5" fill="#ff5630"/>
              <text x="15.5" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">N</text>
            </svg>
          </div>

          <div className="flex items-center gap-2 relative self-stretch w-full">
            <h2 className="relative w-fit mt-[-1.00px] font-sans font-normal text-black text-2xl tracking-[-0.48px] leading-[34.8px] whitespace-nowrap">
              Nick Polkovnikov | nekit.xyz
            </h2>
          </div>

          <p className="relative self-stretch font-sans font-medium text-[#00000073] text-base tracking-[-0.08px] leading-[23.2px]">
            Crafting thoughtful digital products since 2017.
            <br />
            Let&apos;s build something great together.
          </p>
        </div>

        <div className="inline-flex items-center gap-6 relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12Z" fill="currentColor"/>
            <path d="M12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
          
          <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.37 0H3.63C1.63 0 0 1.63 0 3.63V20.37C0 22.37 1.63 24 3.63 24H24.37C26.37 24 28 22.37 28 20.37V3.63C28 1.63 26.37 0 24.37 0ZM8.4 20.4H4.2V9H8.4V20.4ZM6.3 7.56C4.95 7.56 3.87 6.48 3.87 5.13C3.87 3.78 4.95 2.7 6.3 2.7C7.65 2.7 8.73 3.78 8.73 5.13C8.73 6.48 7.65 7.56 6.3 7.56ZM24.15 20.4H19.95V14.85C19.95 13.32 19.92 11.37 17.82 11.37C15.69 11.37 15.36 13.02 15.36 14.73V20.4H11.16V9H15.21V10.8H15.27C15.81 9.9 17.04 8.94 18.96 8.94C23.22 8.94 24.15 11.73 24.15 15.42V20.4Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </footer>
  );
}; 