import sprite from "../img/sprite.svg";

function HomesList({ home_img, home_title, home_country, home_rooms, home_size, home_price }) {
  return (
    <div className="home">
          <img src={home_img} alt="House 1" className="home__img"/>
          <svg className="home__like">
              <use xlinkHref={sprite + "#icon-heart-full"}></use>
          </svg>
          <h5 className="home__name">{home_title}</h5>
          <div className="home__location">
              <svg>
                  <use xlinkHref={sprite + "#icon-map-pin"}></use>
              </svg>
              <p>{home_country}</p>
          </div>
          <div className="home__rooms">
              <svg>
                  <use xlinkHref={sprite + "#icon-profile-male"}></use>
              </svg>
              <p>{home_rooms}</p>
          </div>
          <div className="home__area">
              <svg>
                  <use xlinkHref={sprite + "#icon-expand"}></use>
              </svg>
              <p>{home_size}<sup>2</sup></p>
          </div>
          <div className="home__price">
              <svg>
                  <use xlinkHref={sprite + "#icon-key"}></use>
              </svg>
              <p>{home_price}</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
      </div>
  );
}

export default HomesList;
