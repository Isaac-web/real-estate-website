import axios from "axios";

const fetchApiData = async (url) => {
  var options = {
    baseURL: "https://bayut.p.rapidapi.com/properties",
    url,
    method: "GET",
    params: { lang: "en" },
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "19389585e6mshafd7cc46b016bc4p146ec5jsnf0162001a13c",
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
