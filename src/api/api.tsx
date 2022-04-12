import axios from "axios";
import * as constants from "./EndpointConstants";

export const BACKEND_URL = constants.BACKEND_URL;

export async function handlePostRequest(
  url: string,
  data: any,
  userToken?: string
) {
  let responseData = null;
  try {
    const response = await axios({
      method: "POST",
      url: `${BACKEND_URL}${url}`,
      data: data,
      headers: {},
    });

    responseData = response.data;
  } catch (err) {
    console.error(err);
  }

  return responseData;
}
