import "./Add.css";
const Add = () => {
  return (
    <div className="add">

      <h2>Add New Food</h2>

      <form>

        <div>
          <p>Upload Image</p>
          <input type="file" />
        </div>

        <div>
          <p>Product Name</p>
          <input
            type="text"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <p>Description</p>
          <textarea
            rows="5"
            placeholder="Write description here"
          ></textarea>
        </div>

        <div>
          <p>Category</p>

          <select>
            <option>Salad</option>
            <option>Rolls</option>
            <option>Desserts</option>
            <option>Sandwich</option>
            <option>Cake</option>
            <option>Pure Veg</option>
            <option>Pasta</option>
            <option>Noodles</option>
          </select>
        </div>

        <div>
          <p>Price</p>
          <input
            type="number"
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