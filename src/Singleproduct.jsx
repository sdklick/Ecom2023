import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "./context/Productcontext";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Star from "./Star";
import Addtocart from "./Addtocart";

const singleApi = "https://api.pujakaitem.com/api/products";

const Singleproduct = () => {
  const { getsingleproduct, isSingleLoading, singleproduct } =
    useProductContext();

  const { id } = useParams();
  const {
    id: alies,
    name,
    company,
    price,
    description,
    category,
    stock,
    reviews,
    stars,
    image = [{ url: "" }],
  } = singleproduct;

  useEffect(() => {
    getsingleproduct(`${singleApi}?id=${id}`);
  }, []);
  return (
    <>
      <div
        className="position-absolute top-0 start-50 translate-middle-x"
        style={{ marginTop: 70 }}
      >
        <div className="card mb-3" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <div className="row row-cols-1 row-cols-md-1 g-2">
                {image.map((val) => {
                  return (
                    <>
                      <div className="col">
                        <div className="card">
                          <img
                            src={val.url}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">{name}</h6>
                <Star stars={stars} />
                <p className="card-text">
                  <small className="text-body-secondary">
                    {reviews} Reviews
                  </small>
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Price : {price}</small>
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {stock >= 0 ? `instock : ${stock}` : `out of stock`}
                  </small>
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    brand : {company}
                  </small>
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Price : {description}
                  </small>
                </p>
                
                  {stock > 0 ? <Addtocart product={singleproduct} /> : null}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleproduct;
