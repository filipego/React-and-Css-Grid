import RealtorsList from "./RealtorsList";

import realtor1 from "../img/realtor-1.jpeg";
import realtor2 from "../img/realtor-2.jpeg";
import realtor3 from "../img/realtor-3.jpeg";

function Realtors() {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
          <RealtorsList realtor_img={realtor1} realtor_img_alt="Realtor 1" name="Erik Feinman" sold="45 houses sold"  />
          <RealtorsList realtor_img={realtor2} realtor_img_alt="Realtor 2" name="Kim Brown" sold="212 houses sold"  />
          <RealtorsList realtor_img={realtor3} realtor_img_alt="Realtor 3" name="Toby Ramsey<" sold="198 houses sold"  />
      </div>
    </div>
  );
}

export default Realtors;
