import React from "react";

const Productreducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type=="SET_SINGLE_LOADING") {
    return {
      ...state,
      isSingleLoading: true,
    };
  }
  if (action.type === "MY_API_DATA") {
    const featuredata = action.payload.filter((currentelement) => {
      return currentelement.featured === true;
    });

    return {
      ...state,
      isLoading: false,
      products: action.payload,
      featureProducts: featuredata,
    };
  }
  if (action.type == "API_ERROR") {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }
  if (action.type == "SET_SINGLE_PRODUCT") {
    return {
      ...state,
      isSingleLoading: false,
      singleproduct:action.payload
    };
  }
  if (action.type == "SET_SINGLE_ERROR") {
    return {
      ...state,
      isSingleLoading: false,
      isError:true
    };
  }
};

export default Productreducer;
