const axios = require("axios");

const parliamentSite = axios.create({
  baseURL:
    "https://members-api.parliament.uk/api/Members/4639/RegisteredInterests",
});

export const getMPs = () => {
  return parliamentSite
    .get()
    .then(({ data }) => {
      return data;
    })
    .catch(({ err }) => {
      return err.data;
    });
};

export async function getPracticeMPs() {
  const trial = await axios
    .get(
      "https://members-api.parliament.uk/api/Members/4639/RegisteredInterests"
    )
    .then((response) => {
      console.log(response);
    });
  return trial;
}
