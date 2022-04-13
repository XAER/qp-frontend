import React from "react";
import "./App.css";
import LoadingProvider from "./context/LoadingProvider";
import Router from "./Router";

function App() {
  return (
    <>
      <LoadingProvider>
        <Router />
      </LoadingProvider>
    </>
  );
}

export default App;
