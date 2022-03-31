import nexterLogo from "../img/logo.png";
import bbcLogo from "../img/logo-bbc.png";
import forbesLogo from "../img/logo-forbes.png";
import techcrunchLogo from "../img/logo-techcrunch.png"
import biLogo from "../img/logo-bi.png";

function Header() {
  return (
    <header className="header">
      <img src={nexterLogo} alt="Nexter logo" className="header__logo"/>
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button class="btn header__btn">View our properties</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
          <img src={bbcLogo} alt="Seen on logo 1"/>
          <img src={forbesLogo} alt="Seen on logo 2"/>
          <img src={techcrunchLogo} alt="Seen on logo 3"/>
          <img src={biLogo} alt="Seen on logo 4"/>
      </div>
    </header>
  );
}

export default Header;
