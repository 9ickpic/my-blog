'use client';

import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { Project } from '@/types/project';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const [mainSlider, setMainSlider] = useState<Slider | undefined>(undefined);
  const [navSlider, setNavSlider] = useState<Slider | undefined>(undefined);
  const mainSliderRef = useRef<Slider | null>(null);
  const navSliderRef = useRef<Slider | null>(null);

  const mainSliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    asNavFor: navSlider,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const navSliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: false,
    swipeToSlide: true,
    asNavFor: mainSlider,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handlePrev = () => {
    mainSliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    mainSliderRef.current?.slickNext();
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Main Slider (Large Cards) */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-opacity slick-prev"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 mx-4 overflow-hidden">
          <Slider
            {...mainSliderSettings}
            ref={(slider) => {
              mainSliderRef.current = slider;
              setMainSlider(slider ?? undefined);
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="px-2 h-full">
                <ProjectCard project={project} variant="large" />
              </div>
            ))}
          </Slider>
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-opacity slick-next"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Nav Slider (Small Cards) */}
      <div className="mt-4 overflow-hidden">
        <Slider
          {...navSliderSettings}
          ref={(slider) => {
            navSliderRef.current = slider;
            setNavSlider(slider ?? undefined);
          }}
        >
          {projects.map((project) => (
            <div key={project.id} className="px-2 h-full">
              <ProjectCard project={project} variant="small" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
