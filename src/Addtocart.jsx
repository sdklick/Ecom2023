import React from "react";

const Addtocart = ({ product }) => {
  const { id, colors, stock } = product;
  return (
    <>
      <p>
        {colors.map((val) => {
          return (
            <>
              <button className="btn btn-sm m-3" style={{backgroundColor:val}}>Color</button>
            </>
          );
        })}
      </p>
      <button className="btn btn-success float-end mb-2">Add to Cart</button>
    </>
  );
};

export default Addtocart;
