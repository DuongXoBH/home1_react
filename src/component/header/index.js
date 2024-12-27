import "./header.css";

function HeaderComponent() {
  return (
    <div>
      <div className="header__bg"></div>
      <div className="header container">
        <div className="header__nav" id="top">
          <div className="nav__img">
            <img src="assets/images/group-1.svg" alt="" />
            <p className="nav__text">Beautice</p>
          </div>
          <div className="nav__list">
            <ul>
              <li>
                <a href="#">Home</a>
                <img src="assets/images/plus-icon.png" alt="" />
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Gallary</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <a href="#">
              <button className="nav__btn">Contact</button>
            </a>
          </div>
        </div>
        <div className="header__content">
          <div className="header__row-1">
            <div className="header__description">
              <p className="header__tittle">Clinic & beauty consultant</p>
              <p className="header__bonus">
                It is a long established fact that a reader will be by the
                readable content of a page.
              </p>
              <button className="header__btn">More Details</button>
            </div>
            <div className="header__banner">
              <img src="assets/images/banner.png" alt="" />
            </div>
          </div>
          <div className="slide__btn">
            <img src="assets/images/slide-button.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default HeaderComponent;
