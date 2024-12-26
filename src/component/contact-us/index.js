function ContactUsConponent() {
  return (
    <>
      <div className="contact-us__bg"></div>
      <div className="contact container">
        <div className="contact__banner">
          <img
            src="public/images/contact-animations.png"
            alt=""
            className="contact__img"
          />
        </div>
        <div className="contact__content">
          <p className="contact__text">Contact Us</p>
          <p className="contact__tittle">
            Send your inquiry to our expert team
          </p>
          <p className="contact__description">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </p>
          <form className="contact__form" action="#" method="get">
            <div className="form__name">
              <input
                type="text"
                name="fname"
                className="name__input"
                placeholder="First name"
              />
              <input
                type="text"
                name="lname"
                placeholder="Last name"
                className="name__input"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="form__email"
            />
            <input
              type="text"
              name="message"
              placeholder="Subject message"
              className="form__text"
            />
            <textarea
              name="inquity"
              placeholder="Your inquiry here"
              className="form__textarea"
            ></textarea>
            <button type="button" className="form__btn" onclick="">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default ContactUsConponent;
