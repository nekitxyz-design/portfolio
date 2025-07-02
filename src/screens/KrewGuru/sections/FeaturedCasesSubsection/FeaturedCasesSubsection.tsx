import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for area badges
const areaBadges = [
  { text: "B2B", bgColor: "bg-[#9fbaf4]" },
  { text: "B2C", bgColor: "bg-[#a9f49f]" },
  { text: "SaaS", bgColor: "bg-[#dff49f]" },
  { text: "WEB", bgColor: "bg-[#f4cf9f]" },
  { text: "Mobile", bgColor: "bg-[#cc9ff4]" },
];

// Data for gallery images - restored original paths
const galleryImages = [
  { src: "/image-1.png", alt: "Gallery image 1" },
  { src: "/image-2.png", alt: "Gallery image 2" },
  { src: "/image-5.png", alt: "Gallery image 5" },
  { src: "/image-6.png", alt: "Gallery image 6", marginRight: "mr-[-16.00px]" },
  { src: "/image-7.png", alt: "Gallery image 7", marginRight: "mr-[-16.00px]" },
];

// Data for metadata sections
const metadataSections = [
  {
    title: "Role",
    content: "Lead Product Designer",
    width: "w-[189px]",
  },
  {
    title: "Team",
    content:
      "Jr. Product Designers, Visual Designer, Product Managers, Engineers & UX Researcher",
    width: "w-[316px]",
  },
  {
    title: "Problem",
    content:
      "Job search platforms in the region were cluttered and unintuitive. Users struggled to find relevant jobs quickly, and employers faced challenges in attracting quality candidates.",
    width: "w-[316px]",
  },
];

// Data for content sections
const contentSections = [
  {
    title: "Goals",
    content: [
      "Make job search and posting fast and intuitive",
      "Increase registration and engagement rates",
      "Improve overall user satisfaction",
    ],
  },
  {
    title: "Research",
    content: [
      "Conducted interviews with job seekers and employers to identify pain points",
      "Analyzed competitors and market trends",
      "Mapped out key user journeys",
    ],
    duplicateContent: true,
  },
  {
    title: "Solution Highlights",
    content: [
      "Simplified onboarding: Quick registration for both user groups",
      "Smart search: Filters and recommendations tailored to user needs",
      "Clear job posting: Step-by-step flow for employers to post vacancies",
    ],
  },
  {
    title: "Results",
    content: [
      "100,000+ users joined the platform",
      "CV creation time reduced by 3x",
      "Seafarer hiring process accelerated by 2x",
    ],
  },
  {
    title: "Key Takeaways",
    content: [
      "Early user testing helped avoid major usability issues",
      "Collaboration with developers ensured smooth implementation",
      "Focusing on core user needs led to measurable business results",
    ],
    extraPadding: true,
  },
];

// Process section data - restored original paths
const processSections = [
  {
    title: "1. User Flow & Wireframes",
    description: [
      "Created streamlined user flows for both job seekers and employers",
      "Designed low-fidelity wireframes to test main scenarios",
    ],
    images: [
      { src: "/image.png", alt: "User flow diagram" },
      { src: "/image-3.png", alt: "Wireframe mockup" },
    ],
    layout: "dual",
  },
  {
    title: "Prototyping & Testing",
    description: [
      "Built interactive prototypes for early usability testing",
      "Gathered feedback and iterated on the design",
    ],
    images: [
      {
        src: "/image-4.png",
        alt: "Prototype screenshot",
        width: "w-[680px]",
        height: "h-[279px]",
      },
    ],
    layout: "right",
  },
  {
    title: "3. Final UI Design B2C",
    subSections: [
      {
        subtitle: "3.1 CV Builder",
        description: "Built CV Builder platform.",
        images: [
          { src: "/image-8.png", alt: "CV Builder interface" },
          { src: "/image-9.png", alt: "CV Builder interface" },
        ],
        layout: "dual",
      },
      {
        subtitle: "3.2 Motivation System",
        description:
          "Developed and launched the response system for seafarers.",
        images: [
          {
            src: "/image-10.png",
            alt: "Motivation System interface",
            fullWidth: true,
          },
        ],
      },
      {
        subtitle: "3.3 Respond System",
        description:
          "Developed and launched the response system for seafarers.",
        images: [
          {
            src: "/image-11.png",
            alt: "Respond System interface",
            fullWidth: true,
          },
        ],
      },
    ],
  },
];

export const FeaturedCasesSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 pt-[15px] pb-0 px-[15px] relative self-stretch w-full flex-[0_0_auto] bg-black backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]">
      {/* Image Gallery */}
      <div className="flex h-[446px] items-center gap-4 px-4 py-0 relative self-stretch w-full overflow-hidden">
        {galleryImages.map((image, index) => (
          <div
            key={`gallery-image-${index}`}
            className={`relative w-[461.25px] h-[446px] flex-shrink-0 ${image.marginRight || ""}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.currentTarget.style.backgroundColor = '#333';
                e.currentTarget.style.display = 'flex';
                e.currentTarget.style.alignItems = 'center';
                e.currentTarget.style.justifyContent = 'center';
                e.currentTarget.innerHTML = '<span style="color: white; font-size: 14px;">Image Loading...</span>';
              }}
            />
          </div>
        ))}
      </div>

      {/* Metadata Section */}
      <div className="flex flex-wrap items-start gap-[24px_30px] px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
        {/* Area Tags */}
        <div className="flex flex-col w-[198px] items-start gap-4 relative">
          <h3 className="self-stretch font-medium text-[#f4f4f4] text-base tracking-[-0.48px] leading-[17.6px] relative mt-[-1.00px] [font-family:'Inter',Helvetica]">
            Area
          </h3>

          <div className="flex flex-wrap items-start gap-[16px_16px] relative self-stretch w-full flex-[0_0_auto]">
            {areaBadges.map((badge, index) => (
              <Badge
                key={`area-badge-${index}`}
                className={`p-1 ${badge.bgColor} rounded text-paragraph-1`}
              >
                <span className="font-light text-base tracking-[-0.48px] leading-[17.6px] [font-family:'Inter',Helvetica]">
                  {badge.text}
                </span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Role, Team, Problem */}
        {metadataSections.map((section, index) => (
          <div
            key={`metadata-${index}`}
            className={`flex flex-col ${section.width} items-start gap-4 relative`}
          >
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#f4f4f4] text-base tracking-[-0.48px] leading-[17.6px]">
              {section.title}
            </h3>
            <p className="relative self-stretch font-body font-[number:var(--body-font-weight)] text-[#f4f4f4] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Goals and Research Sections */}
      <Card className="flex flex-col max-w-[1600px] items-center gap-12 pt-12 pb-6 px-6 relative w-full flex-[0_0_auto] border-none">
        <CardContent className="p-0 w-full">
          {contentSections.slice(0, 2).map((section, index) => (
            <div
              key={`content-${index}`}
              className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto] mb-12"
            >
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] font-header-2 font-[number:var(--header-2-font-weight)] text-[#f4f4f4] text-[length:var(--header-2-font-size)] tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] [font-style:var(--header-2-font-style)]">
                  {section.title}
                </h2>

                <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className={`flex items-start ${section.duplicateContent ? "justify-between" : "justify-around"} gap-4 relative self-stretch w-full flex-[0_0_auto]`}
                  >
                    <div className="relative flex-1 mt-[-1.00px] font-body font-[number:var(--body-font-weight)] text-[#f4f4f4] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                      {section.content.map((item, i) => (
                        <React.Fragment key={`content-item-${i}`}>
                          {item}
                          {i < section.content.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>

                    {section.duplicateContent && (
                      <div className="relative flex-1 mt-[-1.00px] font-body font-[number:var(--body-font-weight)] text-[#f4f4f4] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                        {section.content.map((item, i) => (
                          <React.Fragment key={`content-item-dup-${i}`}>
                            {item}
                            {i < section.content.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Process Section */}
      <Card className="flex flex-col max-w-[1600px] items-center gap-12 pt-12 pb-6 px-6 relative w-full flex-[0_0_auto] border-none">
        <CardContent className="p-0 w-full">
          <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] font-header-2 font-[number:var(--header-2-font-weight)] text-[#f4f4f4] text-[length:var(--header-2-font-size)] tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] [font-style:var(--header-2-font-style)]">
              Process
            </h2>

            {/* User Flow & Wireframes */}
            {processSections.map((section, sectionIndex) => (
              <div
                key={`process-section-${sectionIndex}`}
                className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
              >
                <h3 className="relative w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f4f4f4] text-[38px] tracking-[-0.76px] leading-[38px]">
                  {section.title}
                </h3>

                {section.description && (
                  <div className="relative self-stretch font-body font-[number:var(--body-font-weight)] text-[#f4f4f4] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                    {section.description.map((item, i) => (
                      <React.Fragment key={`desc-${sectionIndex}-${i}`}>
                        {item}
                        {i < section.description.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {section.images && section.layout === "dual" && (
                  <div className="flex h-[710.5px] items-start gap-8 relative self-stretch w-full">
                    {section.images.map((image, imageIndex) => (
                      <img
                        key={`process-image-${sectionIndex}-${imageIndex}`}
                        className="relative flex-1 self-stretch grow object-cover"
                        alt={image.alt}
                        src={image.src}
                        onError={(e) => {
                          e.currentTarget.style.backgroundColor = '#333';
                          e.currentTarget.style.display = 'flex';
                          e.currentTarget.style.alignItems = 'center';
                          e.currentTarget.style.justifyContent = 'center';
                          e.currentTarget.innerHTML = '<span style="color: white; font-size: 14px;">Image Loading...</span>';
                        }}
                      />
                    ))}
                  </div>
                )}

                {section.images && section.layout === "right" && (
                  <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 mt-[-1.00px] font-body font-[number:var(--body-font-weight)] text-[#f4f4f4] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                      {section.description.map((item, i) => (
                        <React.Fragment key={`desc-right-${sectionIndex}-${i}`}>
                          {item}
                          {i < section.description.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>

                    {section.images.map((image, imageIndex) => (
                      <img
                        key={`process-image-right-${sectionIndex}-${imageIndex}`}
                        className={`relative ${image.width || "w-auto"} ${image.height || "h-auto"} object-cover`}
                        alt={image.alt}
                        src={image.src}
                        onError={(e) => {
                          e.currentTarget.style.backgroundColor = '#333';
                          e.currentTarget.style.display = 'flex';
                          e.currentTarget.style.alignItems = 'center';
                          e.currentTarget.style.justifyContent = 'center';
                          e.currentTarget.innerHTML = '<span style="color: white; font-size: 14px;">Image Loading...</span>';
                        }}
                      />
                    ))}
                  </div>
                )}

                {section.subSections &&
                  section.subSections.map((subSection, subIndex) => (
                    <div
                      key={`subsection-${sectionIndex}-${subIndex}`}
                      className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
                    >
                      <h4 className="relative self-stretch mt-[-1.00px] font-h1-mob font-[number:var(--h1-mob-font-weight)] text-[#f4f4f4] text-[length:var(--h1-mob-font-size)] tracking-[var(--h1-mob-letter-spacing)] leading-[var(--h1-mob-line-height)] [font-style:var(--h1-mob-font-style)]">
                        {subSection.subtitle}
                      </h4>

                      <div className="relative w-[477px] h-[22px] font-body font-[number:var(--body-font-weight)] text-white text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
                        {subSection.description}
                      </div>

                      {subSection.layout === "dual" ? (
                        <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                          {subSection.images.map((image, imageIndex) => (
                            <img
                              key={`subsection-image-${sectionIndex}-${subIndex}-${imageIndex}`}
                              className="relative flex-1 grow h-[433px] object-cover"
                              alt={image.alt}
                              src={image.src}
                              onError={(e) => {
                                e.currentTarget.style.backgroundColor = '#333';
                                e.currentTarget.style.display = 'flex';
                                e.currentTarget.style.alignItems = 'center';
                                e.currentTarget.style.justifyContent = 'center';
                                e.currentTarget.innerHTML = '<span style="color: white; font-size: 14px;">Image Loading...</span>';
                              }}
                            />
                          ))}
                        </div>
                      ) : (
                        subSection.images.map((image, imageIndex) => (
                          <img
                            key={`subsection-image-full-${sectionIndex}-${subIndex}-${imageIndex}`}
                            className="relative self-stretch w-full h-[547.36px] object-cover"
                            alt={image.alt}
                            src={image.src}
                            onError={(e) => {
                              e.currentTarget.style.backgroundColor = '#333';
                              e.currentTarget.style.display = 'flex';
                              e.currentTarget.style.alignItems = 'center';
                              e.currentTarget.style.justifyContent = 'center';
                              e.currentTarget.innerHTML = '<span style="color: white; font-size: 14px;">Image Loading...</span>';
                            }}
                          />
                        ))
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Solution Highlights, Results, Key Takeaways */}
      {contentSections.slice(2).map((section, index) => (
        <Card
          key={`final-section-${index}`}
          className="flex flex-col max-w-[1600px] items-center gap-12 pt-12 pb-6 px-6 relative w-full flex-[0_0_auto] border-none"
        >
          <CardContent
            className={`p-0 w-full ${section.extraPadding ? "pb-8" : ""}`}
          >
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] font-header-2 font-[number:var(--header-2-font-weight)] text-[#f4f4f4] text-[length:var(--header-2-font-size)] tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] [font-style:var(--header-2-font-style)]">
                {section.title}
              </h2>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start justify-around gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-body font-[number:var(--body-font-weight)] text-[#f4f4f4] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                    {section.content.map((item, i) => (
                      <React.Fragment key={`final-content-${index}-${i}`}>
                        {item}
                        {i < section.content.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}; 