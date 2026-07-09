import "./FoodItem.css";
import { assets } from "../../assets/assets";

function FoodItem({ id, name, image, price, description }) {
  return (
    <div className="food-item">

      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={image}
          alt={name}
        />

        <img
          className="add"
          src={assets.add_icon_white}
          alt="Add"
        />
      </div>

      <div className="food-item-info">

        <div className="food-item-name-rating">
          <p>{name}</p>

          <img
            src={assets.rating_starts}
            alt="Rating"
          />
        </div>

        <p className="food-item-desc">
          {description}
        </p>

        <p className="food-item-price">
          ${price}
        </p>

      </div>

    </div>
  );
}

export default FoodItem;