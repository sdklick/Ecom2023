import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/Productreducer.jsx";

const Appcontext = createContext();
const Api = "https://api.pujakaitem.com/api/products";

const initialstate = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleproduct: {},
};

const Appprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const getProduct = async (apiurl) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(apiurl);
      const products = await response.data;
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getsingleproduct = async (apiurl) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(apiurl);
      const singleproducts = await response.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleproducts });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(Api);
  }, []);
  return (
    <Appcontext.Provider value={{ ...state, getsingleproduct }}>
      {children}
    </Appcontext.Provider>
  );
};

const useProductContext = () => {
  return useContext(Appcontext);
};

export { Appprovider, Appcontext, useProductContext };
