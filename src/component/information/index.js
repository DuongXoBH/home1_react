function InformationComponent() {
  return (
    <>
      <div className="infor container">
        <div className="infor__content">
          <p>Professional Teams</p>
          <p className="infor__tittle">The Professional expert</p>
          <p className="infor__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
        <div className="infor__item">
          <div className="infor__card">
            <img src="public/images/professional-surgeon.png" alt="" />
            <p className="professional__post">Surgeon</p>
            <p className="professional__name">Briyan Nevalli</p>
            <p className="professional__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="infor__media">
              <img src="public/images/twitter-professional.svg" alt="" />
              <img src="public/images/facebook-professional.svg" alt="" />
              <img src="public/images/instagram-professional.svg" alt="" />
            </div>
          </div>
          <div className="infor__card">
            <img src="public/images/professional-bella.png" alt="" />
            <p className="professional__post">Dermatologist</p>
            <p className="professional__name">Bella sebastian</p>
            <p className="professional__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="infor__media">
              <img src="public/images/twitter-professional.svg" alt="" />
              <img src="public/images/facebook-professional.svg" alt="" />
              <img src="public/images/instagram-professional.svg" alt="" />
            </div>
          </div>
          <div className="infor__card">
            <img src="public/images/professional-lilly.png" alt="" />
            <p className="professional__post">Stylist expert</p>
            <p className="professional__name">Lilly Adams</p>
            <p className="professional__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="infor__media">
              <img src="public/images/twitter-professional.svg" alt="" />
              <img src="public/images/facebook-professional.svg" alt="" />
              <img src="public/images/instagram-professional.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InformationComponent;
