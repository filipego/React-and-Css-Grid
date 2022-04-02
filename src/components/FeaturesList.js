import Sprite from "../img/sprite.svg";

function FeaturesList(props) {

    const { icon, title, text } = props;

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

