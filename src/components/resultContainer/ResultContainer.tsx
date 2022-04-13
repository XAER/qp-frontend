import React from "react";
import { LineData } from "../../models/Line";
import { Stop } from "../../models/Stop";
import styles from "./ResultContainer.module.css";
import { FaTimes } from "react-icons/fa";

interface ResultContainerInterface {
  results: LineData;
  isVisible: boolean;
  toggleIsVisible: () => void;
}

const ResultContainer: React.FC<ResultContainerInterface> = ({
  results,
  isVisible,
  toggleIsVisible,
}) => {
  return (
    <div
      className={styles.main_result_container}
      style={{ display: !isVisible ? "none" : "" }}
    >
      <div className={styles.close_container_button} onClick={toggleIsVisible}>
        <FaTimes />
      </div>
      {results &&
        results.Stops.map((stop: Stop, index: number) => {
          return (
            <div
              key={index.toString() + "_container"}
              className={styles.result_container}
            >
              <div
                key={index.toString() + "_stop_name"}
                className={styles.result_container_stop_name}
              >
                {stop.Name}
              </div>
              <div
                key={index.toString() + "_stop_code"}
                className={styles.result_container_stop_code}
              >
                {stop.Code}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ResultContainer;
