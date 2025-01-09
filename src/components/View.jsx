import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { addVideoAPI, getVideoAPI, updateCategoryAPI } from '../services/allAPI'


function View({ addVideoResponse, deletevideoResponse ,setUpdateCatResponse}) {

    const [allVideos, setAllVideos] = useState([])
    const [deleteVideoResponse, setDeleteVideoResponse] = useState("")
    console.log(allVideos);
    useEffect(() => {
        getAllVideos()

    }, [addVideoResponse, deleteVideoResponse, deletevideoResponse])    
    const getAllVideos = async () => {
        try {
            const result = await getVideoAPI()
            console.log(result);
            if (result.status >= 200 && result.status < 300) {
                setAllVideos(result.data)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const dragOverView = (e) => {
        e.preventDefault()
    }
    const handleCategoryVideo= async (e)=>{        
        const {categoryDetails,videoDetails} =JSON.parse(e.dataTransfer.getData("shareData"))
        console.log(categoryDetails,videoDetails);        
        const updatedCategoryVideos = categoryDetails.allVideos.filter(video=>video.id!=videoDetails.id)
        const {id,categoryName} = categoryDetails
        try{           
            const result = await updateCategoryAPI(id,{id,categoryName,allVideos:updatedCategoryVideos})
            console.log(result);
            if(result.status>=200 && result.status<300){
                setUpdateCatResponse(result.data)                         
            }
            const {caption,imageUrl,youtubeUrl}=videoDetails           
             const resp= await addVideoAPI({caption,imageUrl,youtubeUrl})
             if(resp.status>=200 && resp.status<300){
                getAllVideos()
             }       
        }
        catch(err){
            console.log(err);   
        }
    }
    return (
        <>          
            <Row className='mt-5' droppable={true} onDragOver={(e) => dragOverView(e)} onDrop={(e)=>handleCategoryVideo(e)}>               
                {
                    allVideos?.length > 0 ?
                        allVideos.map(video => (
                            <Col lg={4} md={6} sm={12}>
                                <Videocard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse} />
                            </Col>
                        ))
                        :
                        <div className='text-danger fw-bold'>Nothing to Display</div>
                }
            </Row>
        </>
    )
}
export default View