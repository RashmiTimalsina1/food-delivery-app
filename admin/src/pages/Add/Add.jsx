import upload_area from "../../assets/upload_area.png";
import "./Add.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../../utils/config";

const Add = () => {

  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  // Handle input changes
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    console.log("Form Submitted");
    console.log(data);
    console.log(image);
  };

  return (
    <div className="add">

      <h2>Add New Food</h2>

      <form onSubmit={onSubmitHandler}>

        <div>
          <p>Upload Image</p>

          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt="Upload"
              className="upload-image"
            />
          </label>

          <input
            type="file"
            id="image"
            hidden
            onChange={(event) => setImage(event.target.files[0])}
          />
        </div>

        <div>
          <p>Product Name</p>

          <input
            type="text"
            name="name"
            value={data.name}
            onChange={onChangeHandler}
            placeholder="Enter product name"
          />
        </div>

        <div>
          <p>Description</p>

          <textarea
            rows="5"
            name="description"
            value={data.description}
            onChange={onChangeHandler}
            placeholder="Write description here"
          ></textarea>
        </div>

        <div>
          <p>Category</p>

          <select
            name="category"
            value={data.category}
            onChange={onChangeHandler}
          >
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Desserts">Desserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>

        <div>
          <p>Price</p>

          <input
            type="number"
            name="price"
            value={data.price}
            onChange={onChangeHandler}
            placeholder="Enter price"
          />
        </div>

        <button type="submit">
          ADD
        </button>

      </form>

    </div>
  );
};

export default Add;