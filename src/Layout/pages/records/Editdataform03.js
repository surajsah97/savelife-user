import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

 const Editdataform03 = ({setname}) => {
  setname("Data Form - 03")
  const id= useLocation().pathname.split("/") 
  console.log({id},"====================================");
  const [vehicle, setvehicle] = useState(id[id.length-1])
  const [var3, setvar3] = useState("")
  const [count1, setcount1] = useState(0)
  const handlevehicle=(e)=>{

  }

  const handleVar3=(e)=>{

  }
  const handleCount1=()=>{

  }
   const handleSubmit=(e)=>{}
  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card">
          <div className="card-header ">
            <h6>Data Form - 03</h6>
          </div>
          <div className="card-body">
            <form className="form-horizontal" onSubmit={handleSubmit}>
            
            <div className="form-group">
                                        <label for="CaseNumber" className="cols-sm-2 control-label">vehicle no.</label>
                                        <div className="cols-sm-8">
                                            <div className="input-group">
                                                
                                                <input type="text" className="form-control form-control-sm" name="CaseNumber" value={vehicle} onChange={handlevehicle} id="CaseNumber" placeholder="Enter your Case Number" />
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #1
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
                  variable #2
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var3}
                      onChange={handleVar3}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="CaseNumber" className="cols-sm-2 control-label">
                  variable #3
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var3}
                      onChange={handleVar3}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #4
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #5
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #6
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #7
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #8
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #9
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #10
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #11
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #12
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #13
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
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
                      value={var3}
                      onChange={handleVar3}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #15
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
                <div class="col">
                  <label for="Count2" className="cols-sm-2 control-label">
                    variable #16
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="Count1"
                    id="Count1"
                    value={count1}
                    onChange={handleCount1}
                  />
                </div>
              </div>


                      <div className="form-group">
                <label for="import" className="cols-sm-2 control-label">
                  variable #17
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
                  variable #18
                </label>
                <div className="cols-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="CaseNumber"
                      value={var3}
                      onChange={handleVar3}
                      id="CaseNumber"
                      placeholder="Enter your Case Number"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                                        <label for="Count3" className="cols-sm-2 control-label">variable #19</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                
                                                <input type="Number" className="form-control form-control-sm" name="Count3" id="Count3" value={count1} onChange={handleCount1}  />
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
  )
}
export default Editdataform03;