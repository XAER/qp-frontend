import React from "react";
import stops from "../../data/stops/Stops";
import { Stop } from "../../models/Stop";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const [matches, setMatches] = React.useState<Stop[]>([]);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // ! While handling the change, I need to also check if there are matches from the ../../data/stops.json file
    // ! based off the code value.
    setSearchTerm(event.target.value);

    if (event.target.value.length > 0) {
      const matches = stops.filter((stop: Stop) => {
        return stop.code.includes(event.target.value);
      });
      setMatches(matches);
    }

    if (event.target.value === "") {
      setMatches([]);
    }
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
        <div className={styles.custom_search_button}>Search</div>
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
                {match.code}
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
