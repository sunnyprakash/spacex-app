import React from "react";
import Launch from "./Launch";
import Filters from "./Filters";

const MainContainer = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12">
          <h2>SpaceX Launch Programs</h2>
        </div>
      </div>
      <div className="row">
        {props.error ? (
          <div className="col-sm-12">
            <p className="text-center">API fails.</p>
          </div>
        ) : (
          <React.Fragment>
            <Filters
              launchYearList={props.launchYearList}
              successfulState={props.successfulState}
              onClickHandler={props.onClickHandler}
              filters={props.filters}
            />
            <Launch initialData={props.initialData} />
          </React.Fragment>
        )}
      </div>
      <div className="row">
        <div className="col-sm-12 my">
          <h3 className="text-center">
            Developed by: <br className="hide-md-up" />
            Sunny Prakash
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainContainer;
