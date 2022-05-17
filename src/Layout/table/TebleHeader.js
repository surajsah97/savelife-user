import React from 'react'

const TableHeader=(props)=> {
    const {setQuery ,setPagination,Pagination} = props
    return (
        <>
            <div className="table">
            <div className="row">
              <div className="col-sm-4 mt-2 table-title-tag">
                  <div className='float-start'>
              show <input type='number' value={Pagination} className="w-25" onChange={(e) => setPagination(e.target.value)}/> entries
              </div>
              </div>
              <div className="col-sm-8">
                <div className="search-box float-end">
                   <p1> Search  </p1>
                 <input
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    // className="form-control"
                    placeholder="Search&hellip;"
                  />
                  {/* <img src="/media/bg/iconSearch.png" alt="Profile" className="img" /> */}

                </div>

              </div>
            </div>
          </div>


        </>
    )
}
export default TableHeader