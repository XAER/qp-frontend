import React from "react";
import { SearchLineDataProvider } from "../../api/CallsProvider";
import { LoadingContext } from "../../context/LoadingProvider";
import stops from "../../data/stops/Stops";
import { LineData } from "../../models/Line";
import { Stop } from "../../models/Stop";
import styles from "./SearchBar.module.css";

interface SearchBarInterface {
  onSearch: (data: LineData) => void;
}

const SearchBar: React.FC<SearchBarInterface> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [matches, setMatches] = React.useState<Stop[]>([]);

  const { startLoad, endLoad } = React.useContext(LoadingContext);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);

    if (event.target.value.length > 0) {
      const matchesFound = stops.filter((stop: Stop) => {
        // I want to show a max of 5 matches.
        if (matches.length > 5) {
          return false;
        }
        return stop.Code.includes(event.target.value);
      });
      setMatches(matchesFound);
    }

    if (event.target.value === "") {
      setMatches([]);
    }
  };

  const handleSearch = () => {
    // Handle making the post request
    startLoad();
    SearchLineDataProvider("it", searchTerm).then((response: LineData) => {
      console.log(response);
      if (response) {
        onSearch(response);
      }
      endLoad();
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          className={styles.search_bar_input}
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <div className={styles.custom_search_button} onClick={handleSearch}>
          Search
        </div>
      </div>
      <div
        className={styles.search_bar_results}
        style={{
          display: matches.length === 0 ? "none" : "",
          transition: "1s",
        }}
      >
        {matches.map((match: Stop, index: any) => {
          return (
            <>
              <div key={index} className={styles.search_bar_results_item}>
                {match.Code}
              </div>
              {index === matches.length - 1 ? (
                ""
              ) : (
                <div
                  key={index + "_divider"}
                  className={styles.search_bar_result_divider}
                ></div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default SearchBar;
