const axios = require("axios");

const parliamentSite = axios.create({
  baseURL: "https://members-api.parliament.uk/api/Members",
});

export const getMPs = () => {
  return parliamentSite
    .get("/Search?IsCurrentMember=true&House=1")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getMPById = (mp_id) => {
  return parliamentSite
    .get(`/${mp_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getMPExpenses = (mp_id) => {
  return parliamentSite
    .get(`/${mp_id}/RegisteredInterests`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};
export const getMPSearch = (mp_name) => {
  return parliamentSite
    .get(`/Search?Name=${mp_name}&skip=0&take=0&IsCurrentMember=true&House=1`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getMPBySurnameStart = (letter) => {
  return parliamentSite
    .get(
      `/Search?NameStartsWith=${letter}&skip=0&take=20&IsCurrentMember=true&House=1`
    )
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};
