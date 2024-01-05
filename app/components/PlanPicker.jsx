import React from 'react';
import Button from './Button';

const PlanPicker = ({ pricing, checked }) => {
  return (
    <div className="plan_picker_container">
      {pricing.map((plan, index) => (
        <div
          className={`item ${plan.title === 'Pro' ? 'pro' : ''}`}
          key={index}
        >
          <div className={`plan_item ${plan.title === 'Pro' ? 'pro' : ''}`}>
            <div className="plan_item_text">
              <div
                className={`plan_item_header ${
                  plan.title === 'Pro' ? 'pro' : ''
                }`}
              >
                <h3 className="heading_3 plan_item_heading">{plan.title}</h3>
                <p
                  className={`plan_item_desc ${
                    plan.title === 'Pro' ? 'pro' : ''
                  }`}
                >
                  {plan.desc}
                </p>
              </div>
              <div className="plan_item_price">
                <span
                  className={`plan_item_price_number ${
                    plan.title === 'Pro' ? 'pro' : ''
                  }`}
                >{`$${!checked ? plan.priceMonth : plan.priceYear}`}</span>
                <span
                  className={`plan_item_price_period ${
                    plan.title === 'Pro' ? 'pro' : ''
                  }`}
                >
                  {!checked ? 'per month' : 'per year'}
                </span>
              </div>
            </div>
            <Button
              classNames={`plan_item_btn ${plan.title === 'Pro' ? 'pro' : ''}`}
              clickAction={'Picked plan - ' + plan.title}
              icon={''}
              label={'PICK PLAN'}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanPicker;

//, ,
