import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturedShowcasesSection } from "./sections/FeaturedShowcasesSection";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ProjectGallerySection } from "./sections/ProjectGallerySection";

export const NekitXyz = (): JSX.Element => {
  return (
    <div className="bg-[#fff080] flex flex-col items-center w-full">
      <MainContentSection />
      <ProjectGallerySection />
      <FeaturedShowcasesSection />
      <AboutMeSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};