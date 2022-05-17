import React from 'react'

const Download = ({download,id}) => {
    // const {download}=props
  return (
    <a
    title="Delete "
    className="m-1 btn btn-icon btn-light-danger btn-hover-danger btn-sm svg-icon-button border-success"
    onClick={() => download(id)}

>
    <span className="svg-icon svg-icon-sm svg-icon-danger">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
        {/* <i className='glyphicon glyphicon-trash'></i> */}
        {/* <SVG src={toAbsoluteUrl("/media/svg/icons/General/Delete.svg")} /> */}
    </span>
</a>
  )
}
export default Download;