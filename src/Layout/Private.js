import React from 'react'
import { Route, Router } from 'react-router-dom'
import NewRecord from './pages/records/NewRecord'
import Records from './pages/records/Records'

 const Private = () => {
  return (
      <Router>
    <Route path='/records' element={<Records/>}/>
    <Route path='/new-records' element={<NewRecord/>}/>
    </Router>
  )
}
export default Private