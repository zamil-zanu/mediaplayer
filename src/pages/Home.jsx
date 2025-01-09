import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  
  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [deletevideoResponse,setDeleteVideoResponse]=useState("")

  const [updateCatResponse,setUpdateCatResponse]=useState("")
  return (
    <>
      <div className='container my-5 d-flex justify-content-between'>
        <Add setAddVideoResponse={setAddVideoResponse} />
        <Link className='text-decoration-none fw-bold text-danger' to={'/history'}>Watch History</Link>
      </div>
      <div className="row container-fluid my-5">
        <div className="col-lg-6">
          <View addVideoResponse={addVideoResponse} deletevideoResponse={deletevideoResponse} setUpdateCatResponse={setUpdateCatResponse} />
        </div>
        <div className="col-lg-6">
          <Category  setDeleteVideoResponse={setDeleteVideoResponse} updateCatResponse={updateCatResponse}/>
        </div>
      </div>
    </>
  )
}
export default Home