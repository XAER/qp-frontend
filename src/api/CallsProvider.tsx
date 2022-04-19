import { handleGetRequest, handlePostRequest } from "./api";
import * as constants from "./EndpointConstants";

export const SearchLineDataProvider = async (
  languageName: string,
  searchedText: string
) => {
  let response;

  try {
    response = await handlePostRequest(constants.BACKEND_SEARCH_LINE_DATA, {
      languageName,
      searchedText,
    });
  } catch (err) {
    console.error(err);
  }

  return response;
};

export const GetRealTimeStopDataProvider = async (
  languageName: string,
  stopCode: string
) => {
  let response;

  try {
    response = await handleGetRequest(
      constants.BACKEND_GET_STOP_REAL_TIME_DATA + `/${languageName}/${stopCode}`
    );
  } catch (err) {
    console.error(err);
    return err;
  }

  return response;
};
