import { handlePostRequest } from "./api";
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
