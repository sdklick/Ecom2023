import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Appprovider } from "./context/Productcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Appprovider>
      <App />
    </Appprovider>
  </>
);
