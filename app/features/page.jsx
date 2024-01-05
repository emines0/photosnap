'use client';
import Banner from '@app/components/Banner';
import Hero from '@app/components/Hero';
import FeaturesGrid from '@app/components/sections/FeaturesGrid';

const Features = () => {
  return (
    <section className="features">
      <Hero type="features" />
      <FeaturesGrid condition={6} />
      <Banner />
    </section>
  );
};

export default Features;
