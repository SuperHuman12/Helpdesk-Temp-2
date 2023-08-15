import React from 'react';

const CategoryCard = ({ iconUrl, title, description, articleCount }) => {
    return (
      <div className="d-flex justify-content-center categorycontent" style={{ cursor: 'pointer' }}>
        <div className="card text-center background--complementary" style={{ width: '18rem' }}>
          <div className="d-grid gap-3 p-3">
            <img src={iconUrl} className="card-img-top mx-auto d-block" alt="Icon" style={{ width: '25%' }} />
            <div className="card-body">
              <h5 className="card-title fw-bold text--primary">{title}</h5>
              <p className="text--primary">{description}</p>
              <span className="text--secondary opacity-50">{articleCount} Articles</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
const page = () => {
  return (
    <section className="p-5 categoryhome">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-center" data-aos="fade-up">
          <div className="gap-4 d-flex flex-wrap justify-content-center mb-4">
            <CategoryCard
              iconUrl="https://fonts.gstatic.com/s/i/productlogos/chrome/v7/web-64dp/logo_chrome_color_1x_web_64dp.png"
              title="Google Chrome"
              description="Everything about Railway, the Product."
              articleCount={6}
            />

            <CategoryCard
              iconUrl="https://www.gstatic.com/images/branding/product/1x/youtube_64dp.png"
              title="YouTube"
              description="Everything about Railway, the Product."
              articleCount={6}
            />

            <CategoryCard
              iconUrl="https://fonts.gstatic.com/s/i/productlogos/gmail_2020q4/v8/web-64dp/logo_gmail_2020q4_color_1x_web_64dp.png"
              title="Gmail"
              description="Everything about Railway, the Product."
              articleCount={6}
            />

            {/* Add more CategoryCard components for other categories */}
          </div>
        </div>
      </div>
    </section>
  );
};


export default page;
