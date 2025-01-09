import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { deleteVideoAPI, saveHistoryAPI } from '../services/allAPI';
function Videocard({ displayData, setDeleteVideoResponse, insideCategory }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async () => {    
        const { caption, youtubeUrl } = displayData        
        const localTime = new Date()
        const formattedDate = localTime.toLocaleString()
        console.log(formattedDate);
        const historyDetails = { caption, youtubeUrl, formattedDate }
        try {
            const result = await saveHistoryAPI(historyDetails)           
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
        setShow(true);
    }
    const handleDeleteVideo = async (videoId) => {
        try {
            const result = await deleteVideoAPI(videoId)
            console.log(result);
            setDeleteVideoResponse(result.data)
        }
        catch (err) {
            console.log(err);
        }
    }
    const videoDragStart = (e, videoId) => {
        console.log(`video drag with id ${videoId}`);       
        e.dataTransfer.setData("videoId", videoId)
    }
    return (
        <>       
            <Card draggable={true} onDragStart={(e) => videoDragStart(e, displayData?.id)} >
                <Card.Img onClick={handleShow} variant="top" src={displayData?.imageUrl} height={'200px'} />                
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between">
                            <h5>{displayData?.caption}</h5>                           
                            {
                            !insideCategory &&
                                <button className='btn' onClick={() => handleDeleteVideo(displayData?.id)}><i className=" fa-solid fa-trash text-danger"></i></button>
                            }                        </div>
                    </Card.Title>
                </Card.Body>
            </Card>
            <Modal size='lg' show={show} onHide={handleClose}>               
                <Modal.Header closeButton>
                    <Modal.Title>Avesham Song</Modal.Title>
                </Modal.Header>               
                <Modal.Body><iframe width="100%" height="315" src={`${displayData?.youtubeUrl}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
            </Modal>
        </>
    )
}
export default Videocard