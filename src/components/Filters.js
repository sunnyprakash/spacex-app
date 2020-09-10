import React from "react";
import "./Filters.css";
import { FILTER_LIST } from "../constants/Constants";

const Filters = React.memo((props) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-2 py-2">
      <div className="filters box-white text-center">
        <p className="text-left mx my">
          <strong>Filters</strong>
        </p>
        <p className="my">Launch Year</p>
        <hr />
        <div className="row">
          {props.launchYearList &&
            props.launchYearList.length > 0 &&
            props.launchYearList.map((year) => (
              <div className="col-sm-6" key={year}>
                <button
                  className={`btn mx my ${
                    props.filters[FILTER_LIST.LAUNCH_YEAR] &&
                    parseInt(props.filters[FILTER_LIST.LAUNCH_YEAR]) === year
                      ? "active"
                      : ""
                  }`}
                  aria-label={`Launch Year ${year}`}
                  type="button"
                  name="launch_year"
                  onClick={(e) => props.onClickHandler(e, year)}
                >
                  {year}
                </button>
              </div>
            ))}
        </div>

        <p className="mb">Successful Launch</p>
        <hr />
        <div className="row">
          {props.successfulState.map((state) => (
            <div className="col-sm-6" key={state.id}>
              <button
                className={`btn mx my ${
                  props.filters[FILTER_LIST.LAUNCH_SUCCESS] ===
                  state.id.toString()
                    ? "active"
                    : ""
                }`}
                aria-label={`Successful Launch ${state.id}`}
                type="button"
                name="launch_success"
                onClick={(e) => props.onClickHandler(e, state.id)}
              >
                {state.label}
              </button>
            </div>
          ))}
        </div>

        <p className="mb">Successful Landing</p>
        <hr />
        <div className="row">
          {props.successfulState.map((state) => (
            <div className="col-sm-6" key={state.id}>
              <button
                className={`btn mx my ${
                  props.filters[FILTER_LIST.LAND_SUCCESS] ===
                  state.id.toString()
                    ? "active"
                    : ""
                }`}
                aria-label={`Successful Landing ${state.id}`}
                type="button"
                name="land_success"
                onClick={(e) => props.onClickHandler(e, state.id)}
              >
                {state.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Filters;
