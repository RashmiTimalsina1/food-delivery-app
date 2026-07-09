import "./Header.css";
import { assets } from "../../assets/assets";

function Header() {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <div className="header-contents">
        <h2>Order your favourite food here</h2>

        <p>
          Choose from a diverse menu.
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;