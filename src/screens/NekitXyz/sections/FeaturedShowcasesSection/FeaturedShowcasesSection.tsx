import React, { useRef, useEffect, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent, CardTitle } from "../../../../components/ui/card";

// Project data for mapping
const projects = [
  {
    title: "CSP — Cloud Services Panel",
    logo: "/logo.svg",
    bgColor: "bg-[#e1f1f6bd]",
    images: [
      { url: "/image-1-2.png", alt: "CSP project image 1" },
      { url: "/image-2-2.png", alt: "CSP project image 2" },
      { url: "/image-4-2.png", alt: "CSP project image 3" },
    ],
    summary:
      "Supported and evolved the global B2B support platform, focusing on cross-platform workflows and continuous improvement of the internal design system. Enhanced the smart design library, streamlining project delivery for the team.",
    achievements:
      "- Implemented a new support platform that increased user issue resolution speed by 35%.\n- Upgraded the design system, resulting in faster project turnaround and improved user satisfaction.",
    team: "Product Designer, Product Managers, Engineers, UX Writer & UX Researcher",
    areas: [
      { label: "B2B", color: "bg-[#9fbaf4]" },
      { label: "SaaS", color: "bg-[#dff49f]" },
      { label: "WEB", color: "bg-[#f4cf9f]" },
    ],
    links: [{ label: "Open Website", icon: "/group-3.png" }],
  },
  {
    title: "Yandex.Maps",
    logo: "/logo.svg",
    bgColor: "bg-[#ffffffbd]",
    images: [
      { url: "/image-1-3.png", alt: "Yandex.Maps project image 1" },
      { url: "/image-2-3.png", alt: "Yandex.Maps project image 2" },
      { url: "/image-4-3.png", alt: "Yandex.Maps project image 3" },
    ],
    summary:
      "Worked as a product designer on Yandex Maps, collaborating with the team to design an improved bus schedule experience focused on clarity, usability, and seamless journey planning.",
    achievements:
      "Launched an improved bus schedule interface that increased user engagement with public transport features by 15% and reduced journey planning time for users.",
    team: "Product Designers, Product Managers, Engineers & UX Researcher",
    areas: [
      { label: "B2C", color: "bg-[#a9f49f]" },
      { label: "WEB", color: "bg-[#f4cf9f]" },
      { label: "Mobile", color: "bg-[#cc9ff4]" },
    ],
    links: [
      { label: "Website", icon: "/group-4.png" },
      { label: "Mobile App", icon: "/group-5.png" },
    ],
  },
  {
    title: "Miro",
    logo: "/logo.svg",
    bgColor: "bg-[#edd686]",
    images: [
      { url: "/image-1-4.png", alt: "Miro project image 1" },
      { url: "/image-2-4.png", alt: "Miro project image 2" },
      { url: "/image-4-4.png", alt: "Miro project image 3" },
    ],
    summary:
      "We created a digital catalog, focusing on refined typography and immersive visuals. We elevated the perceived value of Anders' furniture and created a seamless browsing experience.",
    achievements:
      "Enhanced Miro's platform user engagement by {25%}, by designing intuitive features with cross-functional teams.",
    team: "Product Designer, Product Managers, Engineers, UX Writer & UX Researcher",
    areas: [
      { label: "B2B", color: "bg-[#9fbaf4]" },
      { label: "B2C", color: "bg-[#a9f49f]" },
      { label: "SaaS", color: "bg-[#dff49f]" },
      { label: "WEB", color: "bg-[#f4cf9f]" },
      { label: "Mobile", color: "bg-[#cc9ff4]" },
    ],
    links: [{ label: "Website", icon: "/group-6.png" }],
  },
];

// AutoScrollingImageRow компонент
const AutoScrollingImageRow = ({ images }: { images: { url: string, alt: string }[] }) => {
  const imgs = images.length >= 4 ? images.slice(0, 4) : [...images, ...Array(4 - images.length).fill(images[images.length - 1])];
  const loopImgs = [...imgs, ...imgs];
  const rowRef = useRef<HTMLDivElement>(null);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) return;
    const row = rowRef.current;
    if (!row) return;
    let frame: number;
    let last = Date.now();
    const animate = () => {
      const now = Date.now();
      const dt = now - last;
      last = now;
      row.scrollLeft += dt * 0.04;
      if (row.scrollLeft >= row.scrollWidth / 2) {
        row.scrollLeft = 0;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isDragging]);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setDragStart('touches' in e ? e.touches[0].clientX : e.clientX);
    setScrollLeft(rowRef.current?.scrollLeft || 0);
  };
  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || dragStart === null) return;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const dx = dragStart - x;
    if (rowRef.current) {
      rowRef.current.scrollLeft = scrollLeft + dx;
      if (rowRef.current.scrollLeft >= rowRef.current.scrollWidth / 2) {
        rowRef.current.scrollLeft = 0;
      }
      if (rowRef.current.scrollLeft < 0) {
        rowRef.current.scrollLeft = rowRef.current.scrollWidth / 2;
      }
    }
  };
  const onDragEnd = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  return (
    <div
      ref={rowRef}
      className="flex items-center gap-4 px-4 py-0 w-full overflow-x-hidden cursor-grab select-none"
      style={{ touchAction: 'pan-x' }}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDragMove}
      onTouchEnd={onDragEnd}
    >
      {loopImgs.map((image, idx) => (
        <img
          key={idx}
          className="object-cover rounded w-[243px] h-[243px] min-w-[243px] min-h-[243px] max-w-[243px] max-h-[243px] md:w-[480px] md:h-[480px] md:min-w-[480px] md:min-h-[480px] md:max-w-[480px] md:max-h-[480px] flex-shrink-0"
          src={image.url}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export const FeaturedShowcasesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4 bg-[#f6f5f3e8] backdrop-blur-2xl">
      <div className="flex flex-col w-full md:max-w-[1600px] items-start gap-12 py-6 px-4 md:px-6 md:mx-auto">
        <header className="w-full flex flex-col items-start gap-4 px-0">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[36px] md:text-5xl tracking-[-0.96px] leading-[40px] md:leading-[57.6px]">
            Project Gallery
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-medium text-[#00000099] text-lg tracking-[-0.09px] leading-[26.1px]">
            Browse through my project highlights
          </p>
        </header>

        {projects.map((project, index) => (
          <Card
            key={index}
            className={`w-full ${project.bgColor} backdrop-blur-[5px] overflow-hidden px-0`}
          >
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-6 pt-8 pb-[25px] px-0 w-full">
                <div className="flex h-[42px] items-center justify-between w-full px-4">
                  <CardTitle className="flex-1 [font-family:'Inter',Helvetica] font-semibold text-paragraph-1 text-[32px] tracking-[-0.64px] leading-8">
                    {project.title}
                  </CardTitle>
                  <img
                    className="w-[155px] h-[42px]"
                    alt="Logo"
                    src={project.logo}
                  />
                </div>

                {/* Новый компонент с автоскроллом */}
                <AutoScrollingImageRow images={[...project.images, project.images[2] || project.images[project.images.length-1]]} />

                <div className="flex flex-wrap items-start gap-[24px_30px] px-6 py-0 w-full">
                  <div className="flex items-start gap-[30px] flex-1 grow">
                    <div className="flex flex-col items-start gap-4 flex-1 grow">
                      <h3 className="w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                        Summary
                      </h3>
                      <p className="w-full [font-family:'Inter',Helvetica] font-light text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                        {project.summary}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-4 flex-1 grow">
                      <h3 className="w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                        Achievements
                      </h3>
                      <p className="w-full [font-family:'Inter',Helvetica] font-light text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                        {project.achievements}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-4 flex-1 grow">
                      <h3 className="w-full font-medium mt-[-1.00px] [font-family:'Inter',Helvetica] text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                        Team
                      </h3>
                      <p className="w-full [font-family:'Inter',Helvetica] font-light text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                        {project.team}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-start gap-6 pl-6 pr-0 py-0">
                  <div className="flex flex-col w-[300px] items-start gap-4">
                    <h3 className="w-full font-medium mt-[-1.00px] [font-family:'Inter',Helvetica] text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                      Area
                    </h3>
                    <div className="flex flex-wrap items-start gap-4 w-full">
                      {project.areas.map((area, areaIndex) => (
                        <Badge
                          key={areaIndex}
                          className={`${area.color} p-1 rounded font-light`}
                        >
                          <span className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-paragraph-1 text-base text-center tracking-[-0.48px] leading-[17.6px] whitespace-nowrap">
                            {area.label}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col w-[300px] items-start gap-4">
                    <h3 className="w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-paragraph-1 text-base tracking-[-0.48px] leading-[17.6px]">
                      Helpful Links
                    </h3>
                    <div className="flex items-start gap-4">
                      {project.links.map((link, linkIndex) => (
                        <button
                          key={linkIndex}
                          className="flex items-center gap-2"
                        >
                          <span className="w-fit mt-[-1.00px] font-text-link font-[number:var(--text-link-font-weight)] text-divider text-[length:var(--text-link-font-size)] tracking-[-0.48px] leading-[var(--text-link-line-height)] whitespace-nowrap [font-style:var(--text-link-font-style)]">
                            {link.label}
                          </span>
                          <div className="w-[13px] h-[18px] -rotate-180">
                            <img
                              className="absolute w-[9px] h-3 top-[3px] left-0.5 rotate-180"
                              alt="Arrow icon"
                              src={link.icon}
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};