import React from "react";

  function RealtorsList(props) {
    const {realtor_img, realtors__img_alt, name, sold } = props;

    return (
      <React.Fragment>
          <img src={realtor_img} alt={realtors__img_alt} className="realtors__img"/>
          <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">{name}</h4>
              <p className="realtors__sold">{sold}</p>
          </div>
      </React.Fragment>
    );
  }

export default RealtorsList;
