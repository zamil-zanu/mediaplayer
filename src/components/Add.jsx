import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { addVideoAPI } from '../services/allAPI';

function Add({ setAddVideoResponse }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [videoDetails, setVideoDetails] = useState({ caption: "", imageUrl: "", youtubeUrl: "" })
    console.log(videoDetails);
    const [isInvalidYoutubeUrl, setIsInvalidYoutubeUrl] = useState(false)
    const getEmbedUrl = (link) => {
        if (link.includes("v=")) {
            const videoId = link.split("v=")[1].slice(0, 11)
            setVideoDetails({ ...videoDetails, youtubeUrl: `https://www.youtube.com/embed/${videoId}` })
            setIsInvalidYoutubeUrl(false)
        }
        else {
            setVideoDetails({ ...videoDetails, youtubeUrl: "" })
            setIsInvalidYoutubeUrl(true)
        }
    }
    const handleUpload = async () => {
        const { caption, imageUrl, youtubeUrl } = videoDetails
        if (caption && imageUrl, youtubeUrl) {
            console.log("do api call");
            try {
                const result = await addVideoAPI(videoDetails)
                console.log(result);
                if (result.status >= 200 && result.status < 300) {

                    setAddVideoResponse(result.data)
                    toast.success(`${result.data.caption} added to your collection`)
                    handleClose()
                }
                else {
                    toast.success(result.response.data)
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            toast.success("please fill the form completely")
        }
    }
    return (
        <>
            <div className='d-flex justify-content-center'>
                <h5 className='text-secondary'>Upload New Video</h5>
                <button onClick={handleShow} className='btn btn-danger fw-bold rounded-circle ms-3'>+</button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-danger'>Video Details!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following fields</p>
                    <div className='border border-3 p-3 border-warning rounded '>
                        <FloatingLabel controlId="caption" label="Video Caption" className="mb-3">
                            <Form.Control onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="caption" />

                        </FloatingLabel>
                        <FloatingLabel className="mb-3" controlId="img" label="image URL">
                            <Form.Control onChange={(e) => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })} type="text" placeholder="Image Url" />
                        </FloatingLabel>
                        <FloatingLabel controlId="url" label="Youtube URL">
                            <Form.Control onChange={(e) => getEmbedUrl(e.target.value)} type="text" placeholder="Youtube Url" />
                        </FloatingLabel>
                        {
                            isInvalidYoutubeUrl &&
                            <div >
                                Invalid Url
                            </div>
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="info" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Add