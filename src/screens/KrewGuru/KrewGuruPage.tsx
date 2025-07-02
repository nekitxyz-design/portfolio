import React from "react";
import { IntroSectionSubsection } from "./sections/IntroSectionSubsection/IntroSectionSubsection";
import { FeaturedCasesSubsection } from "./sections/FeaturedCasesSubsection/FeaturedCasesSubsection";
import { EndSubsection } from "./sections/EndSubsection/EndSubsection";
import { FooterSubsection } from "./sections/FooterSubsection/FooterSubsection";

export const KrewGuruPage = () => (
  <div className="flex flex-col items-center w-full">
    <IntroSectionSubsection />
    <FeaturedCasesSubsection />
    <EndSubsection />
    <FooterSubsection />
  </div>
); 