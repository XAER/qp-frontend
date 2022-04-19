import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import {
  StopData,
  StopDetail,
  StopRealTimeData,
} from "../../models/StopRealTimeData";
import styles from "./RealTimeDataResultModal.module.css";

interface RealTimeDataResultModalInterface {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  data: StopRealTimeData;
}

const RealTimeDataResultModal: React.FC<RealTimeDataResultModalInterface> = ({
  isOpen,
  onClose,
  onOpen,
  data,
}) => {
  const stopData: StopData[] =
    data && data.RealTimeData ? data.RealTimeData.stopdata : [];
  const stopDetail: StopDetail[] =
    data && data.RealTimeData ? data.RealTimeData.stopdetail : [];
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} onEsc={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Results for: {"\t"}
            {stopData.length > 0 ? stopData[0].palinanome : ""}
          </ModalHeader>
          <ModalBody>
            {stopDetail.length > 0 &&
              stopDetail.map((stop: StopDetail, index: number) => {
                let stopStyle = styles.stop_detail_circle_status_default;
                if (stop.distanzaAVM !== "A CAPOLINEA") {
                  stopStyle = styles.stop_detail_circle_status_traveling;
                }

                return (
                  <div
                    key={index.toString() + stop.linecode}
                    className={styles.stop_detail_container}
                  >
                    <div className={styles.stop_detail_status_code_container}>
                      <div
                        className={stopStyle}
                        // style={{ backgroundColor: statusColor }}
                      ></div>
                      <p style={{ marginLeft: "1rem" }}>{stop.line}</p>
                    </div>
                    <div className={styles.stop_detail_line_direction_section}>
                      <p>Dir. {stop.linedest}</p>
                    </div>
                    <p>{stop.distanzaAVM}</p>
                  </div>
                );
              })}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blackAlpha" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RealTimeDataResultModal;
