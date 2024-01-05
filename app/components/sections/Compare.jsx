import React from 'react';
import pricingFeatures from '@app/data/pricingFeatures';

const Compare = () => {
  return (
    <section className="compare_container">
      <h1 className="heading_1">Compare</h1>

      <div className="compare_table_container">
        <table className="compare_table ">
          <thead>
            <tr className="compare_table_header">
              <th className="">The Features</th>
              <th className="">Basic</th>
              <th className="">Pro</th>
              <th className="">Business</th>
            </tr>
          </thead>
          <tbody>
            {pricingFeatures.map((feature, index) => (
              <tr
                key={index}
                className="compare_table_row"
              >
                <td className="">{feature.title}</td>
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
