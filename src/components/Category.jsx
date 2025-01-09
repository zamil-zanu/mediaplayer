import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import { addCategoryAPI, deleteCategoryAPI, deleteVideoAPI, getCategoryAPI, getSingleVideoAPI, updateCategoryAPI } from '../services/allAPI';
import Videocard from './Videocard';

function Category({ setDeleteVideoResponse, updateCatResponse }) {
    const [categoryName, setCategoryName] = useState("")
    console.log(categoryName);
    const [allCategory, setAllCategory] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddCategory = async () => {
        if (categoryName) {
            try {
                const result = await addCategoryAPI({ categoryName, allVideos: [] })
                console.log(result);
                if (result.status >= 200 && result.status < 300) {
                    toast.success(`${result.data.categoryName} is added`)
                    handleClose()
                    getallCategory()
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            toast.warning("enter the category name")
        }
    }
    useEffect(() => {
        getallCategory()
    }, [updateCatResponse])
    const getallCategory = async () => {
        try {
            const result = await getCategoryAPI()
            console.log(result);
            setAllCategory(result.data)
        } catch (err) {
            console.log(err);
        }
    }
    const handledeleteCategory = async (categoryId) => {
        try {
            await deleteCategoryAPI(categoryId)

            getallCategory()
        } catch (err) {
            console.log(err);
        }
    }
    const videoDroped = async (e, categoryId) => {
        console.log(`video droped with category id ${categoryId}`);
        const videoId = e.dataTransfer.getData("videoId")
        console.log(videoId);
        try {
            const { data } = await getSingleVideoAPI(videoId)
            console.log(data);
            const selectedCategory = allCategory?.find(item => item.id == categoryId)
            console.log(selectedCategory);
            selectedCategory.allVideos.push(data)
            console.log(selectedCategory);
            updateCategoryAPI(categoryId, selectedCategory)
            getallCategory()
            const result = await deleteVideoAPI(videoId)
            setDeleteVideoResponse(result.data)
        } catch (err) {
            console.log(err);
        }
    }
    const dragOverCategory = (e) => {
        e.preventDefault()
    }
    const videoDraged = (e, categoryDetails, videoDetails) => {
        console.log(categoryDetails, videoDetails);
        const shareData = { categoryDetails, videoDetails }
        e.dataTransfer.setData("shareData", JSON.stringify(shareData))
    }
    return (
        <>
            <div className='justify-content-between d-flex'>
                <h5>All Catogories</h5>
                <button onClick={handleShow} className='btn btn-danger fw-bold rounded-circle ms-3' > +</button>
            </div>
            {
                allCategory?.length > 0 ?
                    allCategory?.map(category => (
                        <div onDragOver={(e) => dragOverCategory(e)} droppable={true} onDrop={(e) => videoDroped(e, category?.id)} className='border rounded border-3 p-3 my-2 w-100 bg-light' style={{ height: '380px' }}>
                            <div className='d-flex justify-content-between '>
                                <h5 className='text-danger'>{category.categoryName}</h5>
                                <button className='btn' onClick={() => handledeleteCategory(category?.id)}> <i className="fa-solid fa-trash text-danger"></i></button>
                            </div>
                            {
                                category?.allVideos.length > 0 &&
                                <div className='row'>
                                    {
                                        category?.allVideos.map(video => (

                                            <div draggable={true} onDragStart={(e) => videoDraged(e, category, video)} className='col-lg-4'>

                                                <Videocard displayData={video} insideCategory={true} />
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    ))
                    :
                    <div className='text-danger fw-bold'>No Category Added Yet</div>
            }
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-danger'>Category Details!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='border border-3 p-3 border-warning rounded '>
                        <FloatingLabel controlId="caption" label="Catogory" className="mb-3">
                            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Catogory Name" />
                        </FloatingLabel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="info" onClick={handleAddCategory}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Category