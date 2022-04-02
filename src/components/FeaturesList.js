import Sprite from "../img/sprite.svg";

function FeaturesList({icon, title, text}) {


  return (
    <div className="feature">
        <svg className="feature__icon">
            <use xlinkHref={Sprite + icon}></use>
        </svg>
        <h4 className="heading-4 heading-4--dark">{title}</h4>
        <p className="feature__text">{text}</p>
    </div>
  );
}

export default FeaturesList;

