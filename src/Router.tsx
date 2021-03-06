import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingContext } from "./context/LoadingProvider";
import { Spinner } from "@chakra-ui/react";
import Home from "./pages/Home";

const Router = () => {
  const { isLoading } = React.useContext(LoadingContext);

  return (
    <>
      {isLoading && (
        <div
          style={{
            opacity: ".8",
            backgroundColor: "#444",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          id="loading-overlay"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="black"
            size="xl"
          />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Router;
