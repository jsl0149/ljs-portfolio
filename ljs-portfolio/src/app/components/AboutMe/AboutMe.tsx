'use client';

import Image from 'next/image';
import clip from '@/app/images/clip.svg';
import { useEffect, useRef, useState } from 'react';
import photo from '@/app/images/photo.jpg';
import { TagCloud } from 'react-tagcloud';
import useStore from './Store/store';

const data = [
  { value: '프론트', count: 38 },
  { value: '배려', count: 30 },
  { value: 'INFP', count: 15 },
  { value: '감성적', count: 13 },
  { value: '이타적', count: 18 },
  { value: '통기타', count: 15 },
  { value: '책임감', count: 35 },
  { value: '눈치빠름', count: 25 },
  { value: '소통', count: 30 },
  { value: '열정', count: 38 },
  { value: '친화력', count: 15 },
  { value: '흡수력', count: 20 },
  { value: '팔로워십', count: 20 },
  { value: '긍정적', count: 38 },
];

const AboutMe = () => {
  const { isVisible, setVisible, setHidden } = useStore();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible();
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  });

  return (
    <section
      className="relative w-full h-fit bg-[#1b1b1e] flex flex-row justify-center py-[4rem] "
      id="AboutMe"
    >
      <div
        className={`max-w-[1080px] w-[calc(100%-140px)] h-fit   text-white flex flex-col justify-center items-center gap-5 px-[0dvw] ${
          isVisible ? 'opacity-100 animate-fade_in_slow ' : 'opacity-0'
        }`}
        ref={ref}
      >
        <div className="relative w-full flex flex-row top-[10px]">
          <h3 className="text-[2rem] font-GangwonEduPowerExtraBoldA text-center">
            About Me
          </h3>
        </div>
        <div className="relative w-full h-fit ">
          <div
            className={`absolute bg-white h-[0.5px] w-0left-0 ${
              isVisible && 'animate-liner'
            }`}
          ></div>
        </div>
        <div className="relative w-full h-fit flex flex-row gap-[2rem]">
          <div className="relative w-fit h-fit flex flex-col text-[1rem] flex-shrink-0">
            <div className="relative w-fit flex flex-row items-end">
              <span className="text-[2rem] ">
                이진선 &nbsp;
                <span className="text-[1.2rem]">Lee Jin Seon</span>
              </span>
            </div>
            <Image src={photo.src} alt="photo" width={213} height={263}></Image>
            <span>1998.08.22</span>
            <span>Phone. 010-3367-9406</span>
            <span>Email. coooding.la@gmail.com</span>
            <span className="w-fit">Education. Inha University CSE</span>
          </div>
          <div className="relaive w-full ">
            <TTT></TTT>
          </div>
        </div>
      </div>
    </section>
  );
};

const TTT = () => {
  const { isVisible, setVisible, setHidden } = useStore();

  return (
    <div className="animate-fade_in_slow">
      <TagCloud
        minSize={35}
        maxSize={80}
        tags={data}
        disableRandomColor={true}
        randomSeed={13}
        onClick={(tag) => alert(`'${tag.value}' was selected!`)}
      />
      <div className="relative w-full h-fit top-[57px]">
        <div
          className={`absolute bg-white h-[0.5px] w-0 left-0 ${
            isVisible && 'animate-liner'
          }`}
        ></div>
      </div>
    </div>
  );
};

const AboutMeField = ({
  category,
  value,
}: {
  category: string;
  value: string;
}) => {
  return (
    <div className="relative flex flex-row justify-center w-[224px] ">
      <div className="relaive flex flex-col items-center gap-3">
        <span className="text-[1.4rem]  font-bold text-gray-500">
          {category}
        </span>
        <span className="text-[1.2rem]">{value}</span>
      </div>
    </div>
  );
};

export default AboutMe;
