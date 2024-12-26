function AboutUsComponent() {
  return (
    <>
      <div className="about__bg"></div>
      <div className="about container">
        <div className="about__content">
          <p>About Us</p>
          <p className="about__tittle">We are the best beauty clinic</p>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </p>
          <p className="about__text">
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </p>
          <div className="about__btn">
            <button className="about__more-btn">Learn More</button>
            <button className="about__play-btn">
              <img src="public/images/play-button.svg" alt="" />
              <p className="about__btn-text">Watch Video</p>
            </button>
          </div>
        </div>
        <div className="about__img">
          <img
            src="public/images/about-us-img.png"
            className="about__image"
            alt=""
            width="476px"
            height="350px"
          />
        </div>
      </div>
    </>
  );
}
export default AboutUsComponent;
