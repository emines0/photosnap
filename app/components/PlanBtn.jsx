const PlanBtn = ({ checked, setChecked }) => {
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <label className="btn_price_plan_container">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <span
          className={`label btn_price_plan_text ${
            !checked ? 'opacity-100' : 'opacity-50'
          }`}
        >
          Monthly
        </span>
        <span
          className={`slider btn_price_plan_bg ${
            checked ? 'bg-primary-color' : 'bg-grey-color'
          }`}
        >
          <span
            className={`dot btn_price_plan_dot ${
              checked
                ? 'translate-x-[28px] bg-secondary-color'
                : 'bg-primary-color'
            }`}
          ></span>
        </span>
        <span
          className={`label btn_price_plan_text ${
            checked ? 'opacity-100' : 'opacity-50'
          }`}
        >
          Yearly
        </span>
      </label>
    </>
  );
};

export default PlanBtn;
