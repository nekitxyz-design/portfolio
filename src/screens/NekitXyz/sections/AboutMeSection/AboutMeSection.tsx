import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutMeSection = (): JSX.Element => {
  const aboutMeCards = [
    {
      icon: "/group-7.png",
      iconWidth: "w-[23.89px]",
      iconHeight: "h-[19.76px]",
      title: "Design is my long-term passion",
      description:
        "I've been in product design for 8+ years, and I'm here to stay. I love solving real problems and making things people enjoy.",
      padding: "pt-8 pb-6 px-6",
    },
    {
      icon: "/group-8.png",
      iconWidth: "w-[12.28px]",
      iconHeight: "h-[20.07px]",
      title: "Music fuels my creativity",
      description: (
        <>
          I'm always listening to music while I work. Here's my{" "}
          <a
            href="https://open.spotify.com/playlist/007t31FaZmF4t6k9jOyocA?si=c9d5254f2ae641a4"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#3f6d2b99] tracking-[-0.02px] underline"
          >
            Spotify playlist
          </a>{" "}
          if you're curious.
        </>
      ),
      padding: "p-6",
    },
    {
      icon: "/group-9.png",
      iconWidth: "w-[25.1px]",
      iconHeight: "h-[18.88px]",
      title: "I love staying active",
      description:
        "Cycling, skateboarding, or just exploring the city — movement keeps me inspired.",
      padding: "p-6",
    },
    {
      icon: "/group-10.png",
      iconWidth: "w-[23.39px]",
      iconHeight: "h-[18.02px]",
      title: "Self-expression through film photography",
      description: (
        <>
          I shoot a lot on film and share my favorite shots in this{" "}
          <a
            href="https://www.nekit.xyz/pics"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#0200a099] tracking-[-0.02px] underline"
          >
            gallery
          </a>
          .
        </>
      ),
      padding: "p-6",
    },
    {
      icon: "/group-11.png",
      iconWidth: "w-[20.28px]",
      iconHeight: "h-[19.93px]",
      title: "Travel is my way of learning",
      description:
        "I travel a lot and have explored many places — new cultures and perspectives always inspire my work.",
      padding: "pt-6 pb-8 px-6",
    },
  ];

  return (
    <section className="w-full flex flex-col md:flex-row items-start gap-6 md:gap-12 px-4 md:px-16 py-[60px] md:py-[120px] bg-[#ffffffb2] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]">
      <div className="w-full md:w-auto flex flex-col items-start md:items-start md:justify-center md:gap-4">
        <h2 className="relative mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-black text-[36px] md:text-5xl tracking-[-0.96px] leading-[40px] md:leading-[57.6px]">
          Also, a bit about me
        </h2>
      </div>
      <div className="w-full flex flex-col items-stretch gap-4">
        {aboutMeCards.map((card, index) => (
          <Card
            key={index}
            className="w-full bg-[#0000000d] rounded"
          >
            <CardContent
              className={`flex flex-col items-start gap-4 ${card.padding}`}
            >
              <div className="inline-flex items-center justify-center gap-3">
                <img
                  src={card.icon}
                  alt=""
                  className={`${card.iconWidth} ${card.iconHeight} object-contain`}
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[-0.36px] leading-6">
                  {card.title}
                </div>
              </div>
              <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-[#00000099] text-lg tracking-[-0.09px] leading-[26.1px]">
                {card.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};