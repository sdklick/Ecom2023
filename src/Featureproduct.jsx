import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useProductContext } from "./context/Productcontext";
import { NavLink } from "react-router-dom";

const Featureproduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading === true) {
    return (
      <>
        <div class="card text-center">
          <div class="card-body">
            <i
              class="fa fa-spinner fa-spin align-item-center"
              style={{ fontSize: 54 }}
            ></i>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div class="card text-center">
        <div class="card-header">Featured Product</div>
        <div class="card-body">
          <div class="row row-cols-1 row-cols-md-3 g-4 ">
            {featureProducts.map((val) => {
                const {id,image,category}=val
              return (
                <>
                  <NavLink to={`/singleproduct/${id}`}>
                    <div class="col" key={val.id}>
                      <div class="card">
                        <img src={image} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <button class="btn btn-success border rounded-pill">{category}</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featureproduct;
