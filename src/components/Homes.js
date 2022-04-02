import house_1 from "../img/house-1.jpeg";
import sprite from "../img/sprite.svg";

function Homes() {
  return (
    <section className="homes">
       <div className="home">
          <img src={house_1} alt="House 1" className="home__img"/>
          <svg className="home__like">
              <use xlinkHref={sprite + "#icon-heart-full"}></use>
          </svg>
          <h5 className="home__name">Beautiful Familiy House</h5>
          <div className="home__location">
              <svg>
                  <use xlinkHref={sprite + "#icon-map-pin"}></use>
              </svg>
              <p>USA</p>
          </div>
          <div className="home__rooms">
              <svg>
                  <use xlinkHref={sprite + "#icon-profile-male"}></use>
              </svg>
              <p>5 rooms</p>
          </div>
          <div className="home__area">
              <svg>
                  <use xlinkHref={sprite + "#icon-expand"}></use>
              </svg>
              <p>325 m<sup>2</sup></p>
          </div>
          <div className="home__price">
              <svg>
                  <use xlinkHref={sprite + "#icon-key"}></use>
              </svg>
              <p>$1,200,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
      </div>
      
    </section>
  );
}

export default Homes;
