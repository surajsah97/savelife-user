import React from "react";
import { Link } from "react-router-dom";

const Subs = ({ id }) => {
  return (
    <div className="row justify-content-center" style={{ border: "1px whitesmoke solid",  }} >
      {/* <div className="col-md-10" style={{ border: "1px whitesmoke solid" }}> */}
      <Link to={ `/database/editform01/${id[id.length-1]}`}
            title="Edit"
            className="text-dark"
        >
        <div className="col-md-10 col-lg-10 col-sm-10 col-xl-10" style={{ border: "px whitesmoke solid" }}>
          <div className="float-start" style={{ padding: "10px" }}>
            Data form 01
          </div>
          <i className="bi bi-chevron-compact-right float-end"></i>
        </div>
        </Link>
        <Link to={`/database/editform02/${id[id.length-1]}`}
            title="Edit"
            className="text-dark"
        >
        <div
          className="col-md-10 col-lg-10 col-sm-10 col-xl-10"
          style={{ border: "1px whitesmoke solid" }}
        >
        <div className="float-start" style={{ padding: "10px" }}>
          Data form 02
        </div>
        <i className="bi bi-chevron-compact-right float-end"></i>
      </div>
      </Link>
      <Link to={ `/database/editform03/${id[id.length-1]}`}
            title="Edit"
            className="text-dark"
        >
      <div className="col-md-10 col-lg-10 col-sm-10 col-xl-10" style={{ border: "1px whitesmoke solid" }}>
        <div className="float-start" style={{ padding: "10px" }}>
          Data form 03
        </div>
        <i className="bi bi-chevron-compact-right float-end"></i>
      </div>
      </Link>
      <Link to={ `/database/editform04/${id[id.length-1]}`}
            title="Edit"
            className="text-dark"
        >
      <div className="col-md-10 col-lg-10 col-sm-10 col-xl-10" style={{ border: "1px whitesmoke solid" }}>
        <div className="float-start" style={{ padding: "10px" }}>
          Data form 04
        </div>
        <i className="bi bi-chevron-compact-right float-end"></i>
      </div>
      </Link>
      <Link to={ `/database/editform05/${id[id.length-1]}`}
            title="Edit"
            className="text-dark"
        >
      <div className="col-md-10 col-lg-10 col-sm-10 col-xl-10" style={{ border: "1px whitesmoke solid" }}>
        <div className="float-start" style={{ padding: "10px" }}>
          Data form 05
        </div>
        <i className="bi bi-chevron-compact-right float-end"></i>
      </div>
      </Link>
    </div>
  );
};
export default Subs;
