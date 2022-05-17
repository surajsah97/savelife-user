import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

 const Editdataform05 = ({setname}) => {
   setname("Data Form - 05")
  const id= useLocation().pathname.split("/") 
  console.log({id},"====================================");
  const [vehicle, setvehicle] = useState(id[id.length-1])
  const [var5 , setvar5] = useState("")
  const [count1, setcount1] = useState(0)
  const handlevehicle=(e)=>{

  }

  const handleVar5=(e)=>{

  }
  const handleCount1=()=>{

  }
   const handleSubmit=(e)=>{}
  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card">
          <div className="card-header ">
            <h6>Data Form - 05</h6>
          </div>
          <div className="card-body">
            <form className="form-horizontal" onSubmit={handleSubmit}>
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
                <label for="import" className="cols-sm-2 control-label">
                  variable #2
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
                <label for="import" className="cols-sm-2 control-label">
                  variable #5
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
                  variable #6
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
                <label for="import" className="cols-sm-2 control-label">
                  variable #7
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
                  variable #8
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
                  variable #9
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
export default Editdataform05;
