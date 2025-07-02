import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Link } from "react-router-dom";

// Project data for mapping
const projects = [
  {
    id: 1,
    title: "HRTech Platform for Seamen",
    background: "bg-[#282828]",
    logo: "/logo-2.svg",
    images: [
      { url: "/image-1.png", alt: "HRTech platform screenshot 1" },
      { url: "/image-2.png", alt: "HRTech platform screenshot 2" },
      { url: "/image-4.png", alt: "HRTech platform screenshot 3" },
    ],
    summary:
      "Built Krew Guru's HRTech platform from the ground up, designing seamless end-to-end workflows for maritime recruitment and HR digitalization.",
    areas: [
      { name: "B2B", color: "bg-[#9fbaf4]" },
      { name: "B2C", color: "bg-[#a9f49f]" },
      { name: "SaaS", color: "bg-[#dff49f]" },
      { name: "WEB", color: "bg-[#f4cf9f]" },
      { name: "Mobile", color: "bg-[#cc9ff4]" },
    ],
    role: "Lead Product Designer",
    team: "Jr. Product Designers, Visual Designer, Product Managers, Engineers & UX Researcher",
  },
  {
    id: 2,
    title: "Gaming Mobile App for Children",
    background: "bg-[#ffcabca3]",
    logo: "/logo-2.svg",
    images: [
      { url: "/image-1-1.png", alt: "Gaming app screenshot 1" },
      { url: "/image-2-1.png", alt: "Gaming app screenshot 2" },
      { url: "/image-4-1.png", alt: "Gaming app screenshot 3" },
    ],
    summary:
      "The application has been developed specifically for scientific centers for nuclear power engineering.",
    areas: [
      { name: "B2C", color: "bg-[#a9f49f]" },
      { name: "Mobile", color: "bg-[#cc9ff4]" },
    ],
    role: "Product Designer & Manager",
    team: "Visual Designer, Product Managers, Engineers & Child Psychologist",
  },
];

export const ProjectGallerySection = (): JSX.Element => {
  return (
    <section className="w-full py-12 px-4 bg-[#ffffffcc] backdrop-blur-2xl">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="relative w-[30px] h-[30px] bg-[#fdefc0]">
            <img
              className="absolute w-[25px] h-6 top-0.5 left-[3px]"
              alt="Star"
              src="/star-1.svg"
            />
          </div>

          <h2 className="font-header-2 font-[number:var(--header-2-font-weight)] text-paragraph-1 text-[length:var(--header-2-font-size)] tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] [font-style:var(--header-2-font-style)]">
            Featured Showcases
          </h2>

          <p className="font-body font-[number:var(--body-font-weight)] text-paragraph-1 text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
            In-depth breakdowns of my product design process
          </p>
        </div>

        {/* Project Cards */}
        {projects.map((project) => (
          <Card
            key={project.id}
            className="w-full bg-[#fafafa80] rounded backdrop-blur-[5px] overflow-hidden shadow-none border-0"
          >
            {/* Project Header with Images */}
            <div
              className={`${project.background} flex flex-col items-start gap-6 pt-8 pb-[25px] px-6 w-full backdrop-blur-[5px]`}
            >
              <img
                className="w-[155px] h-[42px]"
                alt="Logo"
                src={project.logo}
              />

              <div className="flex items-center gap-4 px-4 py-0 w-full overflow-hidden">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    className={`w-[461.25px] h-[446px] object-cover ${index === 2 ? "mr-[-16.00px]" : ""}`}
                    src={image.url}
                    alt={image.alt}
                  />
                ))}
              </div>
            </div>

            <CardContent className="flex flex-col items-start gap-6 pl-6 pr-0 py-8">
              <h3 className="w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-paragraph-1 text-[32px] tracking-[-0.64px] leading-8">
                {project.title}
              </h3>

              <div className="flex flex-wrap items-start gap-[24px_30px] w-full">
                {/* Summary */}
                <div className="flex flex-col w-[349px] items-start gap-4">
                  <h4 className="self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                    Summary
                  </h4>
                  <p className="self-stretch [font-family:'Inter',Helvetica] font-light text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                    {project.summary}
                  </p>
                </div>

                {/* Area */}
                <div className="flex flex-col w-[198px] items-start gap-4">
                  <h4 className="self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                    Area
                  </h4>
                  <div className="flex flex-wrap items-start gap-[16px_16px] w-full">
                    {project.areas.map((area, index) => (
                      <Badge
                        key={index}
                        className={`p-1 ${area.color} rounded [font-family:'Inter',Helvetica] font-light text-paragraph-1 text-base text-center tracking-[-0.48px] leading-[17.6px]`}
                      >
                        {area.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Role */}
                <div className="flex flex-col w-[189px] items-start gap-4">
                  <h4 className="self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                    Role
                  </h4>
                  <p className="self-stretch [font-family:'Inter',Helvetica] font-light text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                    {project.role}
                  </p>
                </div>

                {/* Team */}
                <div className="flex flex-col w-[316px] items-start gap-4">
                  <h4 className="self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                    Team
                  </h4>
                  <p className="self-stretch [font-family:'Inter',Helvetica] font-light text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                    {project.team}
                  </p>
                </div>
              </div>

              {/* Кнопка только для первой карточки (HRTech Platform) */}
              {project.id === 1 ? (
                <Link to="/krewguru" style={{ width: "281px" }}>
                  <Button
                    variant="outline"
                    className="w-full h-[54px] flex items-center justify-center gap-4 px-3.5 py-4 border border-solid border-[#0f0f0f] rounded-none"
                  >
                    <span className="[font-family:'Inter',Helvetica] font-bold text-x-101010 text-sm tracking-[-0.70px] leading-[15.4px]">
                      Open Showcase
                    </span>
                    <img
                      className="w-6 h-[23.53px]"
                      alt="Envelope fill"
                      src="/envelope-fill-2-1.svg"
                    />
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="outline"
                  className="w-[281px] h-[54px] flex items-center justify-center gap-4 px-3.5 py-4 border border-solid border-[#0f0f0f] rounded-none"
                >
                  <span className="[font-family:'Inter',Helvetica] font-bold text-x-101010 text-sm tracking-[-0.70px] leading-[15.4px]">
                    Open Showcase
                  </span>
                  <img
                    className="w-6 h-[23.53px]"
                    alt="Envelope fill"
                    src="/envelope-fill-2-1.svg"
                  />
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};