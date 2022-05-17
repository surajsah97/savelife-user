import React, { useState } from "react";

const EditForm02 = ({setname}) => {
  setname("Data Form -02")
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const [var3, setvar3] = useState("")
  const [count5, setcount5] = useState(0)
  const [count6, setcount6] = useState(0)
  const handleSubmit = () => {};
  const handleCount2 = () => {};

  const handleCount1 = () => {};
  const handleVar3=()=>{

  }
  const handleCount5=()=>{

  }
  const handleCount6=()=>{

  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card">
          <div className="card-header ">
            <h6>Data Form -02</h6>
          </div>
          <div className="card-body">
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div class="row">
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #1
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #2
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
              </div>

              <div className="form-group">
                                        <label for="confirm" className="cols-sm-2 control-label">variable #3</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                <input type="text" className="form-control form-control-sm" name="confirm" id="confirm" value={var3} onChange={handleVar3} placeholder="Confirm your Password" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="import" className="cols-sm-2 control-label">variable #4</label>
                                        <div className="cols-sm-10">
                                        <div className="form-group">
                                  
                                  <select  className="form-control form-control-sm">
                                    <option selected>Choose ...</option>
                                    <option> </option>
                                    
                                  </select>
                        </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="Count2" className="cols-sm-2 control-label">variable #5</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                
                                                <input type="Number" className="form-control form-control-sm" name="Count5" id="Count5" value={count5} onChange={handleCount5} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="Count2" className="cols-sm-2 control-label">variable #6</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                
                                                <input type="Number" className="form-control form-control-sm" name="Count6" id="Count6" value={count6} onChange={handleCount6} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="CaseNumber" className="cols-sm-2 control-label">variable #7</label>
                                        <div className="cols-sm-8">
                                            <div className="input-group">
                                                
                                                <input type="file" className="" name="CaseNumber" id="CaseNumber" placeholder="Enter your Case Number" />
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-sm btn-block" style={{width:"100%",marginTop:"10px"}}>Updated</button>
                                    </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditForm02;
