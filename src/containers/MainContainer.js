import React, { useState, useEffect, useRef } from "react";
import Main from "../components/Main";
import { FILTER_LIST } from "../constants/Constants";

const MainContainer = (props) => {
  let [initialData, setInitialData] = useState([]);
  let [error, setError] = useState(false);
  let launchYearList = [];
  let successfulState = [
    { id: "true", label: "True" },
    { id: "false", label: "False" },
  ];
  let [filters, setFilters] = useState({});

  const getUrlParams = () => {
    let queryParams = new URL(window.location.href).searchParams;
    let params = {};

    for (let key in FILTER_LIST) {
      let value = queryParams.get(FILTER_LIST[key]);
      if (value) {
        params[FILTER_LIST[key]] = value;
      }
    }
    setFilters(params);
  };

  useEffect(() => {
    getUrlParams();
  }, []);

  for (let i = 2006; i <= 2020; i++) {
    launchYearList.push(i);
  }

  const getData = (params = "") => {
    fetch(`https://api.spaceXdata.com/v3/launches?limit=100${params}`)
      .then((response) => response.json())
      .then((data) => setInitialData(data))
      .catch((error) => {
        setError(true);
        console.error("Error:", error);
      });
  };

  const onClickHandler = (event, value) => {
    let name = event.target.name;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getFilteredData = () => {
    let params = "";
    for (let key in filters) {
      params = `${params}&${key}=${filters[key]}`;
    }

    window.history.replaceState(
      "object or string",
      "Title",
      `${params === "" ? "/" : "/?" + params.substring(1)}`
    );

    getData(params);
  };

  useEffect(() => {
    getFilteredData();
  }, [filters]);

  return (
    <React.Fragment>
      <Main
        initialData={initialData}
        launchYearList={launchYearList}
        successfulState={successfulState}
        onClickHandler={onClickHandler}
        filters={filters}
        error={error}
      />
    </React.Fragment>
  );
};

export default MainContainer;
