import HomesList from "./HomesList";

import house_1 from "../img/house-1.jpeg";
import house_2 from "../img/house-2.jpeg";
import house_3 from "../img/house-3.jpeg";
import house_4 from "../img/house-4.jpeg";
import house_5 from "../img/house-5.jpeg";
import house_6 from "../img/house-6.jpeg";


function Homes() {
  return (
    <section className="homes">
       <HomesList home_img= {house_1} home_country="USA" home_title="Beautiful Familiy House" home_rooms="5 rooms" home_size="325 m" home_price="$1,200,000" />

       <HomesList home_img= {house_2} home_country="Canada" home_title="Modern Glass Villa" home_rooms="6 rooms" home_size="450 m" home_price="$2,750,000" />

       <HomesList home_img= {house_3} home_country="UK" home_title="Cozy Country House" home_rooms="4 rooms" home_size="250 m" home_price="$850,000" />

       <HomesList home_img= {house_4} home_country="Portugal" home_title="Large Rustical Villa" home_rooms="6 rooms" home_size="480 m" home_price="$1,950,000" />

       <HomesList home_img= {house_5} home_country="Germany" home_title="Majestic Palace House" home_rooms="18 rooms" home_size="4230 m" home_price="$9,500,000" />

       <HomesList home_img= {house_6} home_country="Italy" home_title="Modern Family Apartment" home_rooms="3 rooms" home_size="180 m" home_price="$600,000" />
      
    </section>
  );
}

export default Homes;
