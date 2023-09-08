import React from "react";
import './Jobcard.css'

const Jobcard = (props) => {
  return (
    <div className="jobcontainer">
    {props.jobcard.map((jobs) => (
        <div className="jobcard">
        <h3>{jobs.title}</h3>
        <p>{jobs.tyoe}</p>
        <p>{jobs.location}</p>
        <p>{jobs.salary}</p>
        <button className="jobcardbtn">See Details</button>
      </div>
    ))}
    </div>
  );
};
export default Jobcard;
