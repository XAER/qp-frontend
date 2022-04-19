import React from "react";
import ResultContainer from "../components/resultContainer/ResultContainer";
import SearchBar from "../components/searchBar/SearchBar";
import { LineData } from "../models/Line";

const Home = () => {
  const [isResultVisible, setResultIsVisible] = React.useState<boolean>(false);
  const [searchResult, setSearchResult] = React.useState<LineData>();

  const handleSetSearchResult = (data: LineData) => {
    setResultIsVisible(false);
    setSearchResult(data);
    handleSetResultVisible();
  };

  const handleSetResultVisible = (visible = true) => {
    setResultIsVisible(visible);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div style={{ width: "40vh", position: "absolute" }}>
          <SearchBar onSearch={handleSetSearchResult} />
        </div>
        <div
          style={{
            height: "10vh",
            marginTop: "20vh",
            position: "absolute",
            marginLeft: "50vh",
          }}
        >
          <ResultContainer
            results={searchResult!}
            isVisible={isResultVisible}
            toggleIsVisible={handleSetResultVisible}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
