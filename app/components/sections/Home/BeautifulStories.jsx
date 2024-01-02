import Image from 'next/image';
import Button from '@app/components/Button';

const BeautifulStories = () => {
  return (
    <section className="card_secondary">
      <div className="card_container max-sm:flex-col">
        <div className="card_photo">
          <Image
            src="/assets/home/mobile/beautiful-stories.jpg"
            alt="Beautiful stories"
            priority
            width={273}
            height={650}
            className="hidden max-sm:block w-full"
          />
          <Image
            src="/assets/home/tablet/beautiful-stories.jpg"
            alt="Beautiful stories"
            priority
            width={273}
            height={650}
            className="hidden sm:max-lg:block w-full"
          />
          <Image
            src="/assets/home/desktop/beautiful-stories.jpg"
            alt="Beautiful stories"
            priority
            width={960}
            height={750}
            className="hidden lg:block w-full"
          />
        </div>
        <div className="card_text">
          <h2 className="card_title">Beautiful Stories every time</h2>
          <p className="card_desc card_desc_secondary mb-8">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <Button
            classNames={'btn_out btn_out_secondary'}
            icon={'/assets/shared/desktop/arrow.svg'}
            label={'VIEW THE STORIES'}
            clickAction={'Home Beautiful Stories Button Clicked'}
          />
        </div>
      </div>
    </section>
  );
};

export default BeautifulStories;
