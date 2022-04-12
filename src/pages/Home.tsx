import React from "react";
import SearchBar from "../components/searchBar/SearchBar";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div style={{ width: "400px" }}>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Home;
