import React from 'react';
import pricingFeatures from '@app/data/pricingFeatures';

const Compare = () => {
  return (
    <section className="compare">
      <h1 className="heading_1">Compare</h1>

      <div className="compare_table_container">
        <table className="compare_table">
          <thead>
            <tr>
              <th className="compare_table_heading"></th>
              <th className="compare_table_heading">Basic</th>
              <th className="compare_table_heading">Pro</th>
              <th className="compare_table_heading">Business</th>
            </tr>
          </thead>
          <tbody>
            {pricingFeatures.map((feature, index) => (
              <tr key={index}>
                <td className="compare_table_feature">{feature.title}</td>
                <td className="compare_table_feature">
                  {feature.basic ? (
                    <img
                      src={feature.img}
                      alt=""
                    />
                  ) : (
                    ''
                  )}
                </td>
                <td className="compare_table_feature">
                  {feature.pro ? (
                    <img
                      src={feature.img}
                      alt=""
                    />
                  ) : (
                    ''
                  )}
                </td>
                <td className="compare_table_feature">
                  {feature.business ? (
                    <img
                      src={feature.img}
                      alt=""
                    />
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Compare;
