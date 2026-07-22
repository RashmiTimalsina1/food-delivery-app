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

      <p>Total Foods: {list.length}</p>
    </div>
  );
};

export default List;