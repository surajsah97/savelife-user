import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Add from '../../table/Add';
import Download from '../../table/Download';
import EditBtn from '../../table/EditBtn';
import TableHeader from '../../table/TebleHeader';
import TrashButton from '../../table/TrashButton';
import moment from 'moment';

const Records = ({setname}) => {
  setname("Crash Database")
  const [Data, setData] = useState([])
  const [refresh, setrefresh] = useState(false)
  const [Query, setQuery] = useState("")
  useEffect(() => {
    try{
       axios.get("https://savelife-backend.herokuapp.com/getRecords",{headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      }}).then(data=>{
        if(data.status==200){
          console.log({data});
            setData(data.data.data)
            console.log(data.data.data);
        }
      })
      .catch(err=>{
        console.log(err);
      })
    
      
  }
  catch(err){
  console.log({err});
  }
  },[refresh])

  useEffect(() => {
    if(Query!=""){
    try{
      axios.post("https://savelife-backend.herokuapp.com/caseSearch",{Query},{headers:{
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*'
     }}).then(data=>{
       if(data.status==200){
         console.log({data});
           setData(data.data.data)
           console.log(data.data.data);
       }
     })
     .catch(err=>{
       console.log(err);
     })
   
     
 }
 catch(err){
 console.log({err});
 }
}

  },[Query])
  
  
  console.log({Data},"-----------");
   
    const [Pagination, setPagination] = useState(100)
    const deleteCase=(id)=>{
      console.log({id});
      try{
        axios.post("https://savelife-backend.herokuapp.com/deleteCase",{id},{headers:{
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*'
       }}).then(data=>{
         if(data.status==200){
           console.log({data});
           setrefresh(!refresh)
             console.log(data.data.data);
         }
       })
       
       .catch(err=>{
         console.log(err);
       })

    }
catch(err){
  console.log(err);
}

  }
    const download=()=>{

    }
  return (
    <>
    <div className="table-responsive" style={{border:"1px whitesmoke solid",margin:"10px"}}>
        <div className='bg-light' style={{height:"60px",padding:"10px", fontWeight:"bold"}}>
            <h5 className="float-start">
            Cases
        </h5>
        <div className='float-end'>
        <button type="button" className="btn btn-outline-success m-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
</svg>
                
              </button>
        <button type="button" className="btn btn-outline-primary ">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"></path>
</svg>
                import FIR
              </button>
              <Add path={"database/new-records"}/>

       
              
        </div>
        </div>
      <div className="table-wrapper" style={{padding:"20px"}}>
        <TableHeader setPagination={setPagination} setQuery={setQuery} Pagination={Pagination} />

        <table className="table table-bordered">
          
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th style={{fontSize:"70%"}}>
                Case Number
              </th>
              <th style={{fontSize:"70%"}}>Case Owner</th>
              <th style={{fontSize:"70%"}}>Project</th>
              <th style={{fontSize:"70%"}}>Date Table -01 Count</th>
              <th style={{fontSize:"70%"}}>Date Table -02 Count</th>
              <th style={{fontSize:"70%"}}>Date Table -02 Count</th>
              <th style={{fontSize:"70%"}}>Status</th>
              <th style={{fontSize:"70%"}}>variable #1</th>
              <th style={{fontSize:"70%"}}>last Updated</th>
              <th className="th-last-child">Actions</th>
            </tr>
          </thead>
          

          {/* <TableCollumn collumns={["Tea Name", "Total Members", "Pending Invites", "Decline Invites", "Brief Validity", "Store Messages", "Action"]} /> */}
          <tbody>
          
                      {Data.map((el)=>{
                        return(
                        
          <tr >
                    {/* <td>{perpagerows * (page - 1) + i + 1}</td> */}
                    <td>
                      <div className="d-flex">
          <div className="" style={{fontSize:"80%"}}>
                          {el.caseNumber}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
          <div className="" style={{fontSize:"80%"}}>
                          {el.caseOwner}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
          <div className=" " style={{fontSize:"80%"}}>
                          {el.project}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
          <div className="" style={{fontSize:"80%"}}>
                          {el.dbCount1}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
          <div className="" style={{fontSize:"80%"}}>
                          {el.dbCount2}
                        </div>
                      </div>
                    </td>
                    <td >
                      <div className="d-flex">
          <div className=" " style={{fontSize:"80%"}}>
                          {el.dbCount3}
                        </div>
                      </div>
                    </td>
                    <td className={el.status=="Active"?"bg-success":"bg-danger"}>
                      <div className="d-flex">
          <div className="" style={{fontSize:"80%"}}>
                          {el.status}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="">
          <div className="" style={{fontSize:"80%"}}>
                          {
                          moment(el.variable).format("YYYY/MM/DD kk:mm:ss")}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
          <div className="ml-2 d-flex justify-content-center align-items-center " style={{fontSize:"80%"}}>
                          {el.lastUpdate}
                        </div>
                      </div>
                    </td>
                    
                    <td className="d-flex ">
                  <Download download={download} id="3"/>    
                      <EditBtn path={"database/edit-records"} id={el.id} />

                      <TrashButton deleteCase={deleteCase} id={el.id} />

                    </td>
                    </tr>
                    )})}
                    
         
           
          </tbody>
          
        </table>
        {/* <TablePaginations page={page} setPage={setPage} totalPages={pageData.totalPages} perPageRecords={pageData.perPageRecords} /> */}

      </div>
    </div>
  </>

  )
}
export default Records;