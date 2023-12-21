import React from 'react';
import Image from 'next/image';
import Button from '@app/components/Button';

const DesignForEveryone = () => {
  return (
    <section className="card_secondary">
      <div className="card_container">
        <div className="card_text">
          <h2 className="card_title">Designed for everyone</h2>
          <p className="card_desc card_desc_secondary mb-8">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <Button
            classNames={'btn_out btn_out_secondary'}
            // clickAction={'Get An Invite from Create and Share'}
            icon={'/assets/shared/desktop/arrow.svg'}
            label={'VIEW THE STORIES'}
          />
        </div>
        <div className="card_photo">
          <Image
            src="/assets/home/mobile/designed-for-everyone.jpg"
            alt="Designed for everyone"
            priority
            width={273}
            height={650}
            className="hidden max-sm:block w-full"
          />
          <Image
            src="/assets/home/tablet/designed-for-everyone.jpg"
            alt="Designed for everyone"
            priority
            width={273}
            height={650}
            className="hidden sm:max-lg:block w-full"
          />
          <Image
            src="/assets/home/desktop/designed-for-everyone.jpg"
            alt="Designed for everyone"
            priority
            width={960}
            height={750}
            className="hidden lg:block w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default DesignForEveryone;
