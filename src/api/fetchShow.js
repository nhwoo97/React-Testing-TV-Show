import React, { useState, useEffect } from "react";
import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};

// export const fetchShow = () => {
//     return axios.get
//       .then(res => return res) // or res.data, however you want to set that up
//   }
