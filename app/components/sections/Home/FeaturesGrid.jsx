import features from '@app/data/features';
import Image from 'next/image';

const FeaturesGrid = ({ condition }) => {
  return (
    <section id="home-features">
      <div className="features_container">
        {features.map(
          (feature) =>
            feature.id <= condition && (
              <div
                className="feature"
                key={feature.id}
              >
                <div className="feature_image">
                  <Image
                    src={feature.img}
                    width={72}
                    height={72}
                    priority
                    alt={feature.title}
                  />
                </div>
                <h2 className="feature_title">{feature.title}</h2>
                <p className="feature_desc">{feature.desc}</p>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default FeaturesGrid;
