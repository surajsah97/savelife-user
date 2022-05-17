import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Add from '../../table/Add';
import EditBtn from '../../table/EditBtn';
import TableHeader from '../../table/TebleHeader';
import TrashButton from '../../table/TrashButton';

const EditForm04 = ({setname}) => {
  setname("Data Form - 04")
    const id= useLocation().pathname.split("/") 
    const [data, setdata] = useState(0)
    const [Pagination, setPagination] = useState(0)
    const [Query, setQuery] = useState("")
    useEffect(() => {
        try{
            axios.post("https://savelife-backend.herokuapp.com/findRecords",{id:id[id.length-1]},{headers:{
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*'
           }}).then(data=>{
            console.log({data});
             if(data.status==200){
               
               let Data=data.data.data
               setdata(Data.dbCount2)
               
               
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

    console.log(Array.from(Array(10).keys()));

    const deleteCase=(id)=>{

    }
    
  return (
    <div className="table-responsive" style={{border:"1px whitesmoke solid",margin:"10px"}}>
    <div className='bg-light' style={{height:"60px",padding:"10px", fontWeight:"bold"}}>
        <h5 className="float-start">
        Data Table - 02
    </h5>
    <div className='float-end'>
   
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
            vehicle number
          </th>
          <th style={{fontSize:"70%"}}>Case Owner</th>
          <th style={{fontSize:"70%"}}>Variable A</th>
          <th style={{fontSize:"70%"}}>Variable B</th>
          <th style={{fontSize:"70%"}}>Variable C</th>
          <th style={{fontSize:"70%"}}>Variable D</th>
          <th style={{fontSize:"70%"}}>Variable E</th>
          <th className="th-last-child">Actions</th>
        </tr>
      </thead>
      

      {/* <TableCollumn collumns={["Tea Name", "Total Members", "Pending Invites", "Decline Invites", "Brief Validity", "Store Messages", "Action"]} /> */}
      <tbody>
      
                  {Array.from(Array(Number(data)).keys()).map((el)=>{
                    return(
                    
      <tr >
                {/* <td>{perpagerows * (page - 1) + i + 1}</td> */}
                <td>
                  <div className="d-flex">
      <div className="" style={{fontSize:"80%"}}>
                     vehicle {el+1}
                    </div>
                  </div>
                </td>
                <td>
                  
                </td>
                <td>
                  
                </td>
                <td>
                                  </td>
                
                <td>
                  
                </td>
                <td>
                  
                </td>
                <td>
                  
                  </td>
                
                <td className="d-flex ">
              
                  <EditBtn path={`database/edit-records-4/edit-data/${id[id.length-1]}`} id={el+1} />

                  <TrashButton deleteCase={deleteCase} id={el+1} />

                </td>
                </tr>
                )})}
                
     
       
      </tbody>
      
    </table>
    {/* <TablePaginations page={page} setPage={setPage} totalPages={pageData.totalPages} perPageRecords={pageData.perPageRecords} /> */}

  </div>
</div>
  )
}
export default EditForm04;