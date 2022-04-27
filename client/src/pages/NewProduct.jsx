import "./newProduct.css";
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function NewProduct() {
  const [listOfProducts, setListofProducts] = useState([]);
  const [name, setName] = useState("");
  const [productType, setproductType] = useState(0);
  const [description, setdescription] = useState("");

  const createProduct = () => {
    Axios.post("http://localhost:3001/createProduct", {
      name,
      productType,
      description,
    }).then((response) => {
      setListofProducts([
        ...listOfProducts,
        {
          name,
          productType,
          description,
        },
      ]);
    });
  };

  return (
    <div className="productSection">
      {" "}
      <h1>Create a new product</h1>
      <hr />
      <div class="inputbox">
        <input
          type="text"
          placeholder="Insert product name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Insert product type"
          onChange={(event) => {
            setproductType(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Insert product description"
          onChange={(event) => {
            setdescription(event.target.value);
          }}
        />
        <button onClick={createProduct}> Create product </button>
      </div>
    </div>
  );
}

export default NewProduct;
