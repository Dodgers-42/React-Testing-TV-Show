import React, { useState, useEffect } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";



const usefetchShow = () => {

    const [show, setShow] = useState(null);
    const [seasons, setSeasons] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState("");
    const episodes = seasons[selectedSeason] || [];
  
    useEffect(() => {
      const fetchShow = () => {
        axios
          .get(
            "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
          )
          .then(res => {
            setShow(res.data);
            setSeasons(formatSeasons(res.data._embedded.episodes));
          });
      };
      fetchShow();
    }, []);
  
    const handleSelect = e => {
      setSelectedSeason(e.value);
    };
  
    if (!show) {
      return <h2>Fetching data...</h2>;
    };
  
    return [show, seasons, handleSelect, selectedSeason, episodes];
  

};