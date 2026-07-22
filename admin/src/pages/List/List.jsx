import "./List.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../utils/config";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
  try {
    const response = await axios.get(`${url}/api/food/list`);

    console.log("Response:", response.data);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      alert("Error fetching food list");
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

  useEffect(() => {
    fetchList();
  }, []);
  const removeFood = async (foodId) => {
  try {
    const response = await axios.post(`${url}/api/food/remove`, {
      id: foodId,
    });

    if (response.data.success) {
      alert("Food Removed Successfully");
      fetchList(); // Refresh the list
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.log(error);
    alert("Error removing food");
  }
};

 return (
  <div className="list add">
    <h2>All Food List</h2>

    <div className="list-table">
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
         <b>Action</b>
      </div>

      {list.map((item, index) => (
        <div key={index} className="list-table-format">
          <img
            src={`${url}/images/${item.image}`}
            alt={item.name}
            width="70"
          />

          <p>{item.name}</p>

          <p>{item.category}</p>

          <p>Rs. {item.price}</p>
          <p
  onClick={() => removeFood(item._id)}
  style={{
    cursor: "pointer",
    color: "red",
    fontWeight: "bold",
    fontSize: "20px",
  }}
>
  ×
</p>
        </div>
      ))}
    </div>
  </div>
);
};

export default List;