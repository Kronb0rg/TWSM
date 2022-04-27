import "./content.css";
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function Content() {
  const [listOfProducts, setListofProducts] = useState([]);
  const [name, setName] = useState("");
  const [productType, setproductType] = useState(0);
  const [description, setdescription] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getProducts").then((response) => {
      setListofProducts(response.data);
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div class="contentdiv">
      <div>
        <div class="searchDiv">
          <input
            class="searchBox"
            type="text"
            placeholder="Looking for something specific?"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        <div className="productsDisplay">
          {listOfProducts
            .filter((product) => {
              if (searchTerm == "") {
                return product;
              } else if (
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return product;
              } else if (
                product.productType
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => {
              return (
                <div>
                  <div class="card">
                    <h1>{product.name}</h1>
                    <h2>{product.productType}</h2>
                    <p>{product.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Content;
