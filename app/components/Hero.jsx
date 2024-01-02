'use client';
import React from 'react';
import Button from './Button';
import Image from 'next/image';
import heroes from '@app/data/hero.js';
import { useEffect, useState } from 'react';

const Hero = ({ type }) => {
  const [section, setSection] = useState({});
  useEffect(() => {
    const heroType = heroes.filter((hero) => hero.section === type)[0];
    setSection(heroType);
  }, []);

  return (
    <section className="hero">
      <div
        className={
          section.section === 'stories'
            ? 'hero_container'
            : 'hero_container_primary hero_small '
        }
      >
        <div
          className={
            section.section === 'stories' ? 'hero_text' : 'hero_primary_text'
          }
        >
          {section.section === 'stories' && (
            <p className="hero_subtitle">{section.subtitle}</p>
          )}
          <h1 className="hero_title">{section.title}</h1>
          {section.section === 'stories' && (
            <p className="hero_author_container">
              <span className="hero_author_timestamp">{section.timestamp}</span>
              <span className="hero_author">{section.author}</span>
            </p>
          )}
          <p
            className={
              section.section === 'stories'
                ? 'hero_desc'
                : 'hero_desc hero_desc_primarya'
            }
          >
            {section.desc}
          </p>
          <Button
            classNames={'btn_out btn_out_primary'}
            label={'READ THE STORY'}
            icon={'/assets/shared/desktop/arrow.svg'}
            clickAction={'Stories Hero Button Clicked ---> ' + section.section}
          />
        </div>
        <div
          className={
            section.section === 'stories' ? 'hero_photo' : 'hero_photo_primary'
          }
        >
          <img
            src={section.imgDesktop}
            alt="test"
            className="hidden sm:hidden xl:block w-full"
          />

          <img
            src={section.imgTablet}
            alt="test"
            className="hidden xl:hidden sm:block w-full"
          />

          <img
            src={section.imgMobile}
            alt="test"
            className="sm:hidden lg:hidden w-full"
          />

          {/* <Image
            src={section.imgDesktop}
            alt="hero img"
            priority
            width={1440}
            height={650}
            className="hidden sm:hidden xl:block w-full"
          /> */}

          {/* <Image
            src={section.imgTablet}
            alt="hero img"
            priority
            width={1440}
            height={650}
            className="hidden xl:hidden sm:block w-full"
          />

          <Image
            src={section.imgMobile}
            alt="hero img"
            priority
            width={1440}
            height={650}
            className="sm:hidden lg:hidden w-full"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
