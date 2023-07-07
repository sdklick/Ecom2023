import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div class="card text-center mt-5">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title text-danger">404 Error</h5>
          <p class="card-text">This Page Does not Exists</p>
          <NavLink to="/">
            <button class="btn btn-primary">Go Home</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
