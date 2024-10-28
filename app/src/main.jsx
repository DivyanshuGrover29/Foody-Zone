import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

    *{
     margin:0;
     padding:0;
     box-sizing:border-box;
    }

    body{
       min-height : 100vh;
       background-color: #323334;
       color:white;
       font-family: 'Inter' , sans-serif;
    }
`;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <GlobalStyle />
   <App />
  </React.StrictMode>
);


 