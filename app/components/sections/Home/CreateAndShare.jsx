import Button from '@app/components/Button';
import React from 'react';
import Image from 'next/image';

const CreateAndShare = () => {
  return (
    <section className="card_primary">
      <div className="card_container">
        <div className="card_text">
          <h2 className="card_title">Create and share your photo stories.</h2>
          <p className="card_desc card_desc_primary mb-8">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <Button
            classNames={'btn_out btn_out_primary'}
            // clickAction={'Get An Invite from Create and Share'}
            icon={'/assets/shared/desktop/arrow.svg'}
            label={'GET AN INVITE'}
          />
        </div>
        <div className="card_photo">
          <Image
            src="/assets/home/mobile/create-and-share.jpg"
            alt="Create and share"
            priority
            width={273}
            height={650}
            className="hidden max-sm:block w-full"
          />
          <Image
            src="/assets/home/tablet/create-and-share.jpg"
            alt="Create and share"
            priority
            width={273}
            height={650}
            className="hidden sm:max-lg:block w-full"
          />
          <Image
            src="/assets/home/desktop/create-and-share.jpg"
            alt="Create and share"
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

export default CreateAndShare;
