const CategoryCard = ({ iconUrl='', title='', description='', articleCount=0 ,clickfun}) => {
    return (
      <div className="d-flex justify-content-center categorycontent"
      onClick={()=>clickfun(title)}
      style={{ cursor: 'pointer' }}>
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

export default CategoryCard;