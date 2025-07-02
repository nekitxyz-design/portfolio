import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export const MainContentSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Showcases", imgSrc: "/group.png" },
    { label: "Gallery", imgSrc: "/group-1.png" },
    { label: "About Me", imgSrc: "/group-2.png" },
  ];

  return (
    <section className="h-[100vh] pt-0 pb-16 px-6 relative w-full bg-[#31313133] flex flex-col items-center">
      {/* ShaderGradient фон */}
      <div style={{position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%'}}>
      <ShaderGradientCanvas
        style={{
          width: '100vw',
          height: '100%',
        }}
        className='z-10 '
        lazyLoad={false}
        fov={undefined}
        pixelDensity={1}
        pointerEvents='auto'
      >
        <ShaderGradient
          animate='on'
          type='waterPlane'
          wireframe={true}
          shader='defaults'
          uTime={12}
          uSpeed={0.5}
          uStrength={2.5}
          uDensity={2}
          uFrequency={0}
          uAmplitude={0}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={60}
          rotationY={0}
          rotationZ={30}
          color1='#FFC410'
          color2='#F6F5F3'
          color3='#ffd600'
          reflection={0.4}
          // View (camera) props
          cAzimuthAngle={180}
          cPolarAngle={70}
          cDistance={3.2}
          cameraZoom={8.5}
          // Effect props
          lightType='3d'
          brightness={1.3}
          envPreset='city'
          grain='off'
          // Tool props
          toggleAxis={false}
          zoomOut={false}
          hoverState=''
          // Optional - if using transition features
          enableTransition={false}
        />
      </ShaderGradientCanvas>
      </div>
      {/* Header moved inside the section and positioned at top */}
      <header className="flex items-start justify-center px-8 py-3 relative w-full bg-transparent" style={{zIndex: 1}}>
        <div className="flex max-w-[1600px] items-center justify-between relative flex-1 grow">
          {/* Logo */}
          <div className="inline-flex items-center gap-1 p-1 relative flex-[0_0_auto] bg-[#ebe4da]">
            <img
              className="relative w-6 h-6"
              alt="Logo"
              src="/group-9495.png"
            />
          </div>

          {/* Navigation */}
          <NavigationMenu className="inline-flex items-center justify-end gap-[50px] pl-5 pr-0 pt-3 pb-2.5 self-stretch relative flex-[0_0_auto]">
            <NavigationMenuList>
              {navItems.map((item, index) => (
                <NavigationMenuItem
                  key={index}
                  className="mt-[-4.00px] mb-[-4.00px] inline-flex items-center gap-2 relative flex-[0_0_auto]"
                >
                  <NavigationMenuLink className="relative w-fit mt-[-1.00px] font-text-link font-[number:var(--text-link-font-weight)] text-divider text-[length:var(--text-link-font-size)] tracking-[-0.48px] leading-[var(--text-link-line-height)] whitespace-nowrap [font-style:var(--text-link-font-style)]">
                    <span className="text-black tracking-[-0.08px] font-text-link [font-style:var(--text-link-font-style)] font-[number:var(--text-link-font-weight)] leading-[var(--text-link-line-height)] text-[length:var(--text-link-font-size)]">
                      {item.label}
                    </span>
                  </NavigationMenuLink>
                  <div className="relative w-[13px] h-[18px] -rotate-180">
                    <img
                      className="absolute w-[9px] h-3 top-[3px] left-0.5 rotate-180"
                      alt="Arrow icon"
                      src={item.imgSrc}
                    />
                  </div>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Hero Content - positioned to left and bottom */}
      <div className="flex flex-col max-w-[1600px] items-start gap-6 relative w-full flex-1 justify-end" style={{zIndex: 1}}>
        {/* Headline and Subtitle */}
        <div className="flex flex-col max-w-[900px] items-start gap-2 relative w-full flex-[0_0_auto]">
          <h1 className="mt-[-1.00px] font-normal text-[64px] leading-[64px] relative self-stretch [font-family:'Inter',Helvetica] text-paragraph-1">
            <span className="font-bold tracking-[-2.05px] leading-[70.4px]">
              Senior Product Designer, User-Focused, 8+ Years
            </span>
          </h1>

          <p className="relative self-stretch font-body font-[number:var(--body-font-weight)] text-paragraph-1 text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
            Delivering results through user-centered design
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
          <Button className="inline-flex items-center gap-4 px-3.5 py-4 relative flex-[0_0_auto] bg-[#0029f7] h-auto rounded-none">
            <span className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-white text-sm tracking-[-0.70px] leading-[15.4px] whitespace-nowrap">
              Connect w/ Me
            </span>
            <img
              src="/inbug-white-1.png"
              alt="LinkedIn"
              className="w-6 h-[22px] object-contain"
            />
          </Button>

          <Button
            variant="outline"
            className="flex w-[180px] h-[54px] items-center justify-center gap-4 px-3.5 py-4 relative border border-solid border-[#0f0f0f] rounded-none bg-transparent"
          >
            <span className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-x-101010 text-sm tracking-[-0.70px] leading-[15.4px] whitespace-nowrap">
              Download CV
            </span>
            <img
              className="h-[23.54px] mt-[-0.77px] mb-[-0.77px] relative w-6"
              alt="Download icon"
              src="/envelope-fill-2.svg"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};