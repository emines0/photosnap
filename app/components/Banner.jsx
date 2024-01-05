import React from 'react';
import Button from './Button';
import bgDesktop from '@public/assets/shared/desktop/bg-beta.jpg';
import bgTablet from '@public/assets/shared/tablet/bg-beta.jpg';
import bgMobile from '@public/assets/shared/mobile/bg-beta.jpg';

const Banner = () => {
  return (
    <>
      <section
        className="banner sm:hidden"
        style={{
          backgroundImage: `url(${bgMobile.src})`,
        }}
      >
        <h1 className="banner_heading">
          WE'RE IN BETA. GET YOUR INVITE TODAY!
        </h1>
        <Button
          classNames={'btn_out_primary btn_footer '}
          icon="/assets/shared/desktop/arrow.svg"
          label={'GET AN INVITE'}
          clickAction={'Banner Mob Button Clicked'}
        />
      </section>
      <section
        className="banner max-sm:hidden sm:max-lg:visible lg:hidden"
        style={{
          backgroundImage: `url(${bgTablet.src})`,
        }}
      >
        <h1 className="banner_heading">
          WE'RE IN BETA. GET YOUR INVITE TODAY!
        </h1>
        <Button
          classNames={'btn_out_primary btn_footer'}
          icon="/assets/shared/desktop/arrow.svg"
          label={'GET AN INVITE'}
          clickAction={'Banner Tab Button Clicked'}
        />
      </section>
      <section
        className="banner max-lg:hidden lg:visible"
        style={{
          backgroundImage: `url(${bgDesktop.src})`,
        }}
      >
        <h1 className="banner_heading">
          WE'RE IN BETA. GET YOUR INVITE TODAY!
        </h1>
        <Button
          classNames={'btn_out_primary btn_footer '}
          icon="/assets/shared/desktop/arrow.svg"
          label={'GET AN INVITE'}
          clickAction={'Banner Des Button Clicked'}
        />
      </section>
    </>
  );
};

export default Banner;
