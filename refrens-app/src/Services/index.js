import axios from "axios";

// custom function to call api and store response
export async function getDataFromAPI(url, setData) {
  try {
    const response = await axios.get(url).then((response) => response.data);
    setData(response);
  } catch (error) {
    console.error(error);
  }
}
