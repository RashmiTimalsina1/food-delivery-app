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

 return (
  <div className="list add">
    <h2>All Food List</h2>

    <div className="list-table">
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
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
        </div>
      ))}
    </div>
  </div>
);
};

export default List;