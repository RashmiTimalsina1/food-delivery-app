import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

function FoodDisplay() {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list && food_list.length > 0 ? (
          food_list.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))
        ) : (
          <p>Loading foods...</p>
        )}
      </div>
    </div>
  );
}

export default FoodDisplay;