import Hero from '@app/components/Hero';
import StoriesGrid from '@app/components/sections/StoriesGrid';
import React from 'react';

const Stories = () => {
  return (
    <>
      <Hero type="stories" />
      <StoriesGrid condition={16} />
    </>
  );
};

export default Stories;
