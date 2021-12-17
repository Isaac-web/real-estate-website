import axios from "axios";

const fetchApiData = async (url) => {
  var options = {
    baseURL: "https://bayut.p.rapidapi.com/properties",
    url,
    method: "GET",
    params: { lang: "en" },
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": process.env.CLIENT_KEY,
    },
  };

  try {
    const { data } = await axios.request(options);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchApiData;
