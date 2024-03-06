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
    .catch(({ err }) => {
      return err.data;
    });
};

export const getMPById = (mp_id) => {
  return parliamentSite
    .get(`/${mp_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch(({ err }) => {
      return err.data;
    });
};

export const getMPExpenses = (mp_id) => {
  return parliamentSite
    .get(`/${mp_id}/RegisteredInterests`)
    .then(({ data }) => {
      return data;
    })
    .catch(({ err }) => {
      return err.data;
    });
};

// /4639/RegisteredInterests
