import house_1 from "../img/house-1.jpeg";
import sprite from "../img/sprite.svg";

function Homes() {
  return (
    <section className="homes">
       <div class="home">
          <img src={house_1} alt="House 1" class="home__img"/>
          <svg class="home__like">
              <use xlinkHref={sprite + "#icon-heart-full"}></use>
          </svg>
          <h5 class="home__name">Beautiful Familiy House</h5>
          <div class="home__location">
              <svg>
                  <use xlinkHref={sprite + "#icon-map-pin"}></use>
              </svg>
              <p>USA</p>
          </div>
          <div class="home__rooms">
              <svg>
                  <use xlinkHref={sprite + "#icon-profile-male"}></use>
              </svg>
              <p>5 rooms</p>
          </div>
          <div class="home__area">
              <svg>
                  <use xlinkHref={sprite + "#icon-expand"}></use>
              </svg>
              <p>325 m<sup>2</sup></p>
          </div>
          <div class="home__price">
              <svg>
                  <use xlinkHref={sprite + "#icon-key"}></use>
              </svg>
              <p>$1,200,000</p>
          </div>
          <button class="btn home__btn">Contact realtor</button>
      </div>
      
    </section>
  );
}

export default Homes;
