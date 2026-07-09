import "./FoodDisplay.css";
import { food_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay() {
  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;