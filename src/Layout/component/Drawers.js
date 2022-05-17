import React from 'react'
import { Link } from 'react-router-dom';
import data from "../../data"
const Drawers = () => {
    return (
        <div className="sidebar">
            {data.data.map(el => {
                return (
                    <>{el.isActive == 0 ? <div>
                        <p className='listItem' style={{ color: "InactiveCaptionText" }}>{el.name}</p></div> : <div style={{ padding: "10px" }}>{el.path ? <Link to={"records"} type="button" style={{ textDecoration: "inherit", color: "black", padding: "5px" }}><i className={el.icon} style={{ paddingRight: "10px" }}></i>{el.name} </Link> : <div type="button"><i className={el.icon} style={{ paddingRight: "10px" }}></i>{el.name} <i className="bi bi-chevron-compact-right float-end"></i></div>}</div>
                    }
                    </>)
            })}

            {/* <ul className='list '>
      <li className='listItem'>
          <Link to={"/dashboard"} style={{textDecoration:"inherit" ,color:"black"}}>Dashboard</Link>
      </li>
      <li className='listItem' style={{color:"InactiveCaptionText"}}>Interface</li>
      <li className='listItem' >
          <button to={"/dashboard"} style={{textDecoration:"inherit" ,color:"black"}}>Database</button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
</svg>
      </li>
      <li className='listItem'>
          <Link to={"/dashboard"} style={{textDecoration:"inherit" ,color:"black"}}>Dashboard</Link>
      </li>
      <li className='listItem'>
          <Link to={"/dashboard"} style={{textDecoration:"inherit" ,color:"black"}}>Dashboard</Link>
      </li>
  </ul> */}

        </div>
    )
}
export default Drawers;