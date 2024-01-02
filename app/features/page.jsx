'use client';
import Hero from '@app/components/Hero';
import FeaturesGrid from '@app/components/sections/FeaturesGrid';

const Features = () => {
  return (
    <section className="features">
      <Hero type="features" />
      <FeaturesGrid condition={6} />
    </section>
  );
};

export default Features;
