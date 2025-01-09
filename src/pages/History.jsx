import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'


function History() {
  const [allHistory, setAllHistory] = useState([])
  console.log(allHistory);

  useEffect(() => {
    getAllHistory()

  }, [])

  const getAllHistory = async () => {

    try {
      const result = await getHistoryAPI()
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setAllHistory(result.data)
      }

    }
    catch (err) {
      console.log(err);

    }
  }
  const handledeleteHistory= async(videoId)=>{
    try{
      await deleteHistoryAPI(videoId)
      getAllHistory()

    }
    catch(err){
      console.log(err);
      
    }
  }

  return (
    <>
      <div className='container mt-5 d-flex justify-content-between '>
        <h4 className='text-warning'>Watch History</h4>
        <Link className='text-decoration-none fw-bold fs-5 text-info' to={'./Home'}>Back to <i class="fa-solid fa-house"></i></Link>
      </div>
      {
        allHistory?.length > 0 ?
          <table className='table container mt-5'>
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>Url</th>
                <th>Date and Time</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
             {
              
              allHistory?.map((video,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{video.caption}</td>
                <td><a href={video.youtubeUrl}>{video.youtubeUrl}</a></td>
                <td>{video.formattedDate}</td>
                <td><button onClick={()=>handledeleteHistory(video.id)}><i className="fa-solid fa-trash text-danger"></i></button></td>
              </tr>
              ))
              
              }
            </tbody>
          </table>
          :
          <div className='text-danger fw-bold px-5'>
            No videos watched yet
          </div>
      }
    </>
  )
}
export default History