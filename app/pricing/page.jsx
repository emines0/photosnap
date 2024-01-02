'use client';
import { useState } from 'react';
import Hero from '@app/components/Hero';
import PlanBtn from '@app/components/PlanBtn';
import Compare from '@app/components/sections/Compare';

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
      </section>
      <Compare />
    </section>
  );
};

export default Pricing;
