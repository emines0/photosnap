'use client';
import { useState } from 'react';
import Hero from '@app/components/Hero';
import PlanBtn from '@app/components/PlanBtn';
import Compare from '@app/components/sections/Compare';
import PlanPicker from '@app/components/PlanPicker';
import pricing from '@app/data/pricing';
import Banner from '@app/components/Banner';

const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="pricing">
      <Hero type="pricing" />
      <section className="pricing_container">
        <PlanBtn
          checked={isChecked}
          setChecked={setIsChecked}
        />
        <PlanPicker
          pricing={pricing}
          checked={isChecked}
        />
      </section>
      <Compare />
      <Banner />
    </section>
  );
};

export default Pricing;
