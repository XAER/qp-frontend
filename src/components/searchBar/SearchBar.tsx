import React from "react";
import { SearchLineDataProvider } from "../../api/CallsProvider";
import { LoadingContext } from "../../context/LoadingProvider";
import stops from "../../data/stops/Stops";
import { LineData } from "../../models/Line";
import { Stop } from "../../models/Stop";
import styles from "./SearchBar.module.css";
import { useToast } from "@chakra-ui/react";

interface SearchBarInterface {
  onSearch: (data: LineData) => void;
}

// TODO hide search bar suggestions on handleSearch
const SearchBar: React.FC<SearchBarInterface> = ({ onSearch }) => {
  const toast = useToast();

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
        return stop.Code.includes(event.target.value);
      });

      // Get only the first 5 matches
      setMatches(matchesFound.slice(0, 5));
    }

    if (event.target.value === "") {
      setMatches([]);
    }
  };

  const handleSearch = () => {
    // Remove matches from underneath the search bar
    setMatches([]);

    // Handle making the post request
    startLoad();

    if (searchTerm.length > 5 || searchTerm.length < 5) {
      endLoad();
      toast({
        title: "Invalid search term",
        description: "The Stop Code must be 5 characters long",
        status: "error",
        duration: 4000,
        isClosable: true,
        variant: "left-accent",
      });
      setSearchTerm("");
      return;
    }

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
        {matches.length > 0 &&
          matches.map((match: Stop, index: any) => {
            return (
              <React.Fragment
                key={match.Code.toString() + "_" + index.toString()}
              >
                <div
                  key={index.toString()}
                  className={styles.search_bar_results_item}
                  onClick={() => {
                    setSearchTerm(match.Code.toString().trim());
                    startLoad();
                    setMatches([]);
                    endLoad();
                  }}
                >
                  {match.Code}
                </div>
                {index === matches.length - 1 ? (
                  ""
                ) : (
                  <div
                    key={index.toString() + "_divider"}
                    className={styles.search_bar_result_divider}
                  ></div>
                )}
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default SearchBar;
