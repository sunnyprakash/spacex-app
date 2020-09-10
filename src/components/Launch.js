import React from "react";
import "../App.css";

const Launch = React.memo((props) => {
  return (
    <div className="col-sm-12 col-md-8 col-lg-10">
      <div className="row">
        {props.initialData && props.initialData.length > 0 ? (
          props.initialData.map((item, index) => {
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-3 py-2 flex"
                key={index}
              >
                <div className="box-white px-2 py-2">
                  <div className="mission-box">
                    <img
                      className="mission-patch"
                      src={item.links.mission_patch_small}
                      alt={item.mission_name}
                    />
                    <div className="row">
                      <div className="col-sm-12 py">
                        <strong className="launh-title">
                          {item.mission_name} #{item.flight_number}
                        </strong>
                      </div>
                      <div className="col-sm-12 py">
                        <strong>Mission Ids:</strong>
                      </div>
                      <div className="col-sm-12 py mission-value">
                        {item.mission_id && item.mission_id.length > 0 && (
                          <ul className="mission-ul">
                            {item.mission_id.map((ids) => (
                              <li key={ids}>{ids}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="col-sm-5 py">
                        <strong>Launch Year:</strong>
                      </div>
                      <div className="col-sm-7 py mission-value">
                        {item.launch_year}
                      </div>
                      <div className="col-sm-5 py">
                        <strong>Successful Launch:</strong>
                      </div>
                      <div className="col-sm-7 py mission-value">
                        {item.launch_success.toString()}
                      </div>
                      <div className="col-sm-5 py">
                        <strong>Successful Landing:</strong>
                      </div>
                      <div className="col-sm-7 py mission-value">
                        {item.rocket.first_stage.cores[0].land_success === null
                          ? null
                          : item.rocket.first_stage.cores[0].land_success.toString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-sm-12 col-md-6 col-lg-3 py-2">
            <div className="box-white px-2 py-2">No records found</div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Launch;
