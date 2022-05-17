import React, { useState } from "react";

const EditForm01 = ({setname}) => {
  setname("Data Form -01")
  const [var1, setvar1] = useState("");
  const [var2, setvar2] = useState("");
  const [var5, setvar5] = useState("");
  const handleSubmit = (e) => {};
  const handleVar1 = (e) => {};
  const handleVar2 = (e) => {};
  const handleVar5 = (e) => {};
  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card">
          <div className="card-header ">
            <h6>Data Form -01</h6>
          </div>
          <div className="card-body">
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="confirm" className="cols-sm-2 control-label">
                  variable #1
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
                    </span>
                    <input
                      type="datetime-local"
                      className="form-control form-control-sm"
                      name="confirm"
                      id="confirm"
                      value={var1}
                      onChange={handleVar1}
                      placeholder="Confirm your Password"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="confirm" className="cols-sm-2 control-label">
                  variable #2
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
                    </span>
                    <input
                      type="datetime-local"
                      className="form-control form-control-sm"
                      name="confirm"
                      id="confirm"
                      value={var2}
                      onChange={handleVar2}
                      placeholder="Confirm your Password"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #3
                </label>
                <div className="cols-sm-10">
                  <div className="form-group">
                    <select className="form-control form-control-sm">
                      <option selected>Choose ...</option>
                      <option> </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #4
                </label>
                <div className="cols-sm-10">
                  <div className="form-group">
                    <select className="form-control form-control-sm">
                      <option selected>Choose ...</option>
                      <option> </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #5
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #6
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #7
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #8
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #9
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="confirm" className="cols-sm-2 control-label">
                  variable #10
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
                    </span>
                    <input
                      type="datetime-local"
                      className="form-control form-control-sm"
                      name="confirm"
                      id="confirm"
                      value={var1}
                      onChange={handleVar1}
                      placeholder="Confirm your Password"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #11
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #12
                </label>
                <div className="cols-sm-10">
                  <div className="form-group">
                    <select className="form-control form-control-sm">
                      <option selected>Choose ...</option>
                      <option> </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="confirm" className="cols-sm-2 control-label">
                  variable #13
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
                    </span>
                    <input
                      type="datetime-local"
                      className="form-control form-control-sm"
                      name="confirm"
                      id="confirm"
                      value={var1}
                      onChange={handleVar1}
                      placeholder="Confirm your Password"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #14
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #15
                </label>
                <div className="cols-sm-10">
                  <div className="form-group">
                    <select className="form-control form-control-sm">
                      <option selected>Choose ...</option>
                      <option> </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #16
                </label>
                <div className="cols-sm-10">
                  <div className="form-group">
                    <select className="form-control form-control-sm">
                      <option selected>Choose ...</option>
                      <option> </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #17
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #18
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #19
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #20
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #21
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #22
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #23
                </label>
                <div className="cols-sm-10">
                  <div className="form-group">
                    <select className="form-control form-control-sm">
                      <option selected>Choose ...</option>
                      <option> </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #24
                </label>
                <div className="cols-sm-10">
                  <div className="form-group">
                    <select className="form-control form-control-sm">
                      <option selected>Choose ...</option>
                      <option> </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #25
                </label>
                <div className="cols-sm-10">
                  <div className="form-group">
                    <select className="form-control form-control-sm">
                      <option selected>Choose ...</option>
                      <option> </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #26
                </label>
                <div className="cols-sm-10">
                  <div className="form-group">
                    <select className="form-control form-control-sm">
                      <option selected>Choose ...</option>
                      <option> </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #27
                </label>
                <div className="cols-sm-10">
                  <div className="form-group">
                    <select className="form-control form-control-sm">
                      <option selected>Choose ...</option>
                      <option> </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #28
                </label>
                <div className="cols-sm-10">
                  <div className="form-group">
                    <select className="form-control form-control-sm">
                      <option selected>Choose ...</option>
                      <option> </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  Raw File
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="file"
                      className=""
                      name="CaseNumber"
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #29
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <textarea
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #30
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <textarea
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var5}
                      onChange={handleVar5}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm btn-block"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditForm01;
