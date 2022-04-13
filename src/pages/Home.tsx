import React from "react";
import ResultContainer from "../components/resultContainer/ResultContainer";
import SearchBar from "../components/searchBar/SearchBar";
import { LineData } from "../models/Line";

const Home = () => {
  const [isResultVisible, setResultIsVisible] = React.useState<boolean>(false);
  const [searchResult, setSearchResult] = React.useState<LineData>();

  const handleSetSearchResult = (data: LineData) => {
    setSearchResult(data);
    handleSetResultVisible();
  };

  const handleSetResultVisible = () => {
    setResultIsVisible(!isResultVisible);
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
        <div style={{ width: "60vh", height: "10vh", marginTop: "20vh", display: "flex" }}>
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
