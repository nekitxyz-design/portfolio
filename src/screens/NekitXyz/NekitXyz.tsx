import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturedShowcasesSection } from "./sections/FeaturedShowcasesSection";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ProjectGallerySection } from "./sections/ProjectGallerySection";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export const NekitXyz = (): JSX.Element => {
  return (
    <div className="bg-[#fff080] flex flex-col items-center w-full relative">
      {/* Фиксированный общий фон */}
      <div style={{position: 'fixed', inset: 0, zIndex: 0, width: '100vw', height: '100vh', pointerEvents: 'none'}}>
        <ShaderGradientCanvas
          style={{ width: '100vw', height: '100vh' }}
          className="z-0"
          lazyLoad={false}
          fov={undefined}
          pixelDensity={1}
          pointerEvents='none'
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
            cAzimuthAngle={180}
            cPolarAngle={70}
            cDistance={3.2}
            cameraZoom={8.5}
            lightType='3d'
            brightness={1.3}
            envPreset='city'
            grain='off'
            toggleAxis={false}
            zoomOut={false}
            hoverState=''
            enableTransition={false}
          />
        </ShaderGradientCanvas>
      </div>
      {/* Контент поверх фона */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <MainContentSection />
        <ProjectGallerySection />
        <FeaturedShowcasesSection />
        <AboutMeSection />
        <CallToActionSection />
        <FooterSection />
      </div>
    </div>
  );
};