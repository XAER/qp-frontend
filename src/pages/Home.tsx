import { TextField } from "@mui/material";
import React from "react";

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
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            color="success"
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
