import axios from 'axios';
// import React, { useState, useEffect } from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react";



//const fetchShow = () => {

  //  const [show, setShow] = useState(null);
   // const [seasons, setSeasons] = useState([]);
   // const [selectedSeason, setSelectedSeason] = useState("");
   // const episodes = seasons[selectedSeason] || [];
  
   // useEffect(() => {
     export  const fetchShow = () => {
        return axios
          .get(
            "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
          )
          .then(res => {
            
            return res.data; // or res.data, however you want to set that up
          })
          .catch(err => {
            return err;
          });
          
      };
//       fetchShow();
//      [];
  
//     const handleSelect = e => {
//       setSelectedSeason(e.value);
//     };
  
//     if (!show) {
//       return <h2>Fetching data...</h2>;
//     };
  
//     return [show, seasons, handleSelect, selectedSeason, episodes];
  
  
// };

export default fetchShow;