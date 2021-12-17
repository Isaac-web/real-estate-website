import axios from "axios";

const searchApiData = async (params) => {
  var options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      ...params,
      locationExternalIDs: "5002,6020",
      hitsPerPage: "24",
      page: "0",
      lang: "en",
      sort: "city-level-score",
      rentFrequency: "monthly",
      categoryExternalID: "4",
    },
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "19389585e6mshafd7cc46b016bc4p146ec5jsnf0162001a13c",
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default searchApiData;
