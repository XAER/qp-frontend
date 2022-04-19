import React from "react";
import { LineData } from "../../models/Line";
import { Stop } from "../../models/Stop";
import styles from "./ResultContainer.module.css";
import { FaTimes } from "react-icons/fa";
import { LoadingContext } from "../../context/LoadingProvider";
import { GetRealTimeStopDataProvider } from "../../api/CallsProvider";
import { useDisclosure } from "@chakra-ui/react";
import RealTimeDataResultModal from "../realTimeDataResultModal/RealTimeDataResultModal";
import { StopRealTimeData } from "../../models/StopRealTimeData";

interface ResultContainerInterface {
  results: LineData;
  isVisible: boolean;
  toggleIsVisible: (visible: boolean) => void;
}

const ResultContainer: React.FC<ResultContainerInterface> = ({
  results,
  isVisible,
  toggleIsVisible,
}) => {
  const [realTimeDataResult, setRealTimeDataResult] =
    React.useState<StopRealTimeData>();

  const { startLoad, endLoad } = React.useContext(LoadingContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleGetStopRealTimeData = (stop: Stop) => {
    // Handle making the get request
    startLoad();
    // TODO: Make a model for the response
    GetRealTimeStopDataProvider("it", stop.Code).then(
      (response: StopRealTimeData) => {
        console.log(response);
        if (response) {
          setRealTimeDataResult(response);
        }
        endLoad();
        onOpen();
      }
    );
  };

  return (
    <div
      className={styles.main_result_container}
      style={{ display: !isVisible ? "none" : "" }}
    >
      <div
        className={styles.close_container_button}
        onClick={() => toggleIsVisible(false)}
      >
        <FaTimes className={styles.close_button} />
      </div>
      {results &&
        results.Stops.map((stop: Stop, index: number) => {
          return (
            <div
              key={index.toString() + "_container"}
              className={styles.result_container}
              onClick={() => handleGetStopRealTimeData(stop)}
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
      <RealTimeDataResultModal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        data={realTimeDataResult!}
      />
    </div>
  );
};

export default ResultContainer;
