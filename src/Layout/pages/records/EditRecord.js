import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate,useLocation } from "react-router-dom";

const EditRecord = ({id}) => {
    const [caseNumber, setcaseNumber] = useState("")
    const [owner, setowner] = useState("")
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)
    const [count3, setcount3] = useState(0)
    const [date, setdate] = useState("")
    const [project, setproject] = useState("")
    const [checkNumstatus, setcheckNumStatus] = useState(false)
    const [checkOwnerStatus, setcheckOwnerStatus] = useState(false)
    const [checkDateStatus, setcheckDateStatus] = useState(false)
    const [ProjectStatus, setProjectStatus] = useState(false)
    
    const [url, seturl] = useState("")
    const [status, setstatus] = useState("")
    // const [data, setdata] = useState({})
    const navigate = useNavigate();
    
    // console.log(typeof(id[id.length-1]));

    useEffect(() => {
        try{
            axios.post("https://savelife-backend.herokuapp.com/findRecords",{id:id[id.length-1]},{headers:{
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*'
           }}).then(data=>{
            console.log({data});
             if(data.status==200){
               
               let Data=data.data.data
               console.log({Data});
               setcaseNumber(Data.caseNumber)
               setowner(Data.caseOwner)
               setcount1(Data.dbCount1)
               setcount2(Data.dbCount2)
               setcount3(Data.dbCount3)
               setproject(Data.project)
               setdate(Data.variable)
               setstatus(Data.status)
               
               
             }
           })
           .catch(err=>{
             console.log(err);
           })
         
           
       }
       catch(err){
       console.log({err});
       }
    
      
    }, [])
    

const saveData=async(data)=>{
    try{
        console.log(data);
        data.id=id[id.length-1]
    let saveData=await axios.put("https://savelife-backend.herokuapp.com/recordUpdate",data,{headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*'
}})
console.log({saveData});
    if(saveData.status==200){
        console.log({saveData});
        navigate("/database/cases")
    }
}
catch(err){
console.log({err});
}
}
    const handleUrl=(e)=>{
        e.preventDefault() 
        seturl(e.target.value)
    }
    const handleStatus=(e)=>{
        e.preventDefault() 
        setstatus(e.target.value)
        
    }

    const handleDate=(e)=>{
        e.preventDefault()
        setdate(e.target.value)
        console.log(date,"date");
    }
    const handleCaeNum=(e)=>{
        e.preventDefault()
        setcaseNumber(e.target.value)
        console.log(caseNumber,"case");
    }
    const handleowner=(e)=>{
        e.preventDefault()
        setowner(e.target.value)
        console.log(owner,"owner");
    }
    const handleCount1=(e)=>{
        e.preventDefault()
        setcount1(e.target.value)
        console.log(count1,"count1");
    }
    const handleCount2=(e)=>{
        e.preventDefault()
        setcount2(e.target.value)
        console.log(count2,"count2");
    }
    const handleCount3=(e)=>{
        e.preventDefault()
        setcount3(e.target.value)
        console.log(count3,"count3");
    }
    const handleProject=(e)=>{
        e.preventDefault()
        setproject(e.target.value)
        console.log(project);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        checkEmpty()
    }
    const checkEmpty=(e)=>{
        if(caseNumber===""){
            setcheckNumStatus(!checkNumstatus)
        }
       else if(owner===""){
            setcheckOwnerStatus(!checkOwnerStatus)
        }
      else if(project===""){
        setProjectStatus(!ProjectStatus)
      }
       else if(date===""){
            setcheckDateStatus(!checkDateStatus)
        }
    else{
       let data={caseNumber,owner,count1,count2,count3,date,project,status}
       console.log({data})
        saveData(data)
    }

    }


  return (
    
    
<div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="card " >
                            <div className="card-header "><h6>General information</h6></div>
                            <div className="card-body">

                                <form className="form-horizontal" onSubmit={handleSubmit}>

                                    <div className="form-group">
                                        <label for="CaseNumber" className="cols-sm-2 control-label">Case Number</label>
                                        <div className="cols-sm-8">
                                            <div className="input-group">
                                                
                                                <input type="text" className="form-control form-control-sm" name="CaseNumber" value={caseNumber} onChange={handleCaeNum} id="CaseNumber" placeholder="Enter your Case Number" />
                                            </div>
                                            {checkNumstatus?<p style={{color:"red"}}>!please fill case number</p>:""}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="import" className="cols-sm-2 control-label">import from field form</label>
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
                                        <label for="owner" className="cols-sm-2 control-label">Case Owner</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                
                                                <input type="text" className="form-control form-control-sm" name="owner" id="owner" value={owner} onChange={handleowner} placeholder="Enter your " />
                                            </div>
                                            {checkOwnerStatus?<p style={{color:"red"}}>!please fill case owner</p>:""}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="username" className="cols-sm-2 control-label">Project</label>
                                        <div className="cols-sm-10">
                                        <div className="form-group">
                                  
                                  <select  className="form-control form-control-sm" onChange={handleProject} value={project}>
                                    <option value="">Choose ...</option>
                                    <option value="new Buyer"> New Buyer</option>
                                    
                                  </select>
                        </div>
                        {ProjectStatus?<p style={{color:"red"}}>!please choose project</p>:""}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="Count01" className="cols-sm-2 control-label">Date Table -01 Count</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                
                                                <input type="Number" className="form-control form-control-sm" name="Count01" id="Count01" value={count1} onChange={handleCount1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="Count2" className="cols-sm-2 control-label">Date Table -02 Count</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                
                                                <input type="Number" className="form-control form-control-sm" name="Count2" id="Count2" value={count2} onChange={handleCount2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="Count3" className="cols-sm-2 control-label">Date Table -03 Count</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                
                                                <input type="Number" className="form-control form-control-sm" name="Count3" id="Count3" value={count3} onChange={handleCount3}  />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="CaseNumber" className="cols-sm-2 control-label">Report Url</label>
                                        <div className="cols-sm-8">
                                            <div className="input-group">
                                                
                                                <input type="text" className="form-control form-control-sm" name="url" value={url} onChange={handleUrl} id="CaseNumber" placeholder="Enter report url" />
                                            </div>
                                            {checkNumstatus?<p style={{color:"red"}}>!please fill case number</p>:""}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="username" className="cols-sm-2 control-label">Project</label>
                                        <div className="cols-sm-10">
                                        <div className="form-group">
                                  
                                  <select  className="form-control form-control-sm" onChange={handleStatus} value={status}>
                                    <option value="Active">Active</option>
                                    <option value="inactive"> inactive</option>
                                    
                                  </select>
                        </div>
                        {ProjectStatus?<p style={{color:"red"}}>!please choose project</p>:""}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="confirm" className="cols-sm-2 control-label">variable #1</label>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                <input type="datetime-local" className="form-control form-control-sm" name="confirm" id="confirm" value={date} onChange={handleDate} placeholder="Confirm your Password" />
                                            </div>
                                            {checkDateStatus?<p style={{color:"red"}}>!please enter date</p>:""}
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
  )
}
export default EditRecord;