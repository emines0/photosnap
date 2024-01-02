import Button from '@app/components/Button';
import React from 'react';
import Image from 'next/image';
import stories from '@app/data/stories';

const StoriesGrid = ({ condition }) => {
  return (
    <section>
      <div className="stories_container">
        {stories.map(
          (story) =>
            story.id <= condition && (
              <div
                className="story"
                key={story.id}
              >
                <div className="story_image">
                  <Image
                    src={story.desktopImg}
                    alt={story.title}
                    priority
                    width={360}
                    height={500}
                    className="max-sm:hidden sm:visible w-full"
                  />
                  <Image
                    src={story.mobileImg}
                    alt={story.title}
                    priority
                    width={360}
                    height={500}
                    className="max-sm:visible sm:hidden w-full"
                  />
                </div>

                <div className="story_text">
                  <h2 className="story_title">{story.title}</h2>
                  <p className="story_author">{`by ${story.author}`}</p>
                  <div className="content_underline border-grey-color opacity-25 my-2"></div>
                  <Button
                    classNames={'btn_out btn_out_primary font-xs'}
                    icon={'/assets/shared/desktop/arrow.svg'}
                    label={'READ STORY'}
                    clickAction={
                      'Home Read Story Button Clicked ---> ' + story.title
                    }
                  />
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default StoriesGrid;
