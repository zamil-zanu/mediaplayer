import React from 'react'
import { Link } from 'react-router-dom'
import music from '../assets/musicimage.gif'
import settingsimg from '../assets/settingsimage.jpg'
import { Button, Card } from 'react-bootstrap'
import categoryimg from '../assets/categoriesimage.jpg'
import historyimg from '../assets/historyimage.jpg'
function Landing() {
  return (
    <>
      <div className='container'>
        <div className='row mt-5 p-3'>
          <div className='col-lg-6 mt-5'>
            <h4 style={{ fontFamily: 'Rochester' }}>Welcome to <span className='text-danger' >Media Player</span></h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde impedit veritatis qui adipisci. Iusto, quis dignissimos at vel recusandae neque ut omnis quibusdam suscipit optio odit aut reprehenderit quae explicabo!</p>
            <Link to={'/home'} className='btn btn-warning mt-3'>Get Started</Link>
          </div>
          <div className='col-lg-6'>
            <img src={music} alt="" className='w-100' />
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <h2 className='text-danger text-center' style={{ fontFamily: 'Rochester' }}>Features</h2>
        <div className='row mt-3'>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={settingsimg} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload,view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={categoryimg} />
              <Card.Body>
                <Card.Title>Catogories Videos</Card.Title>
                <Card.Text>
                  Users can catogorize the video by drag and drop features
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem', }}>
              <Card.Img variant="top" src={historyimg} style={{ height: '286px' }} />
              <Card.Body>
                <Card.Title>Managing Hisory</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>

      </div>
      <div className='container border border-white border-3 mt-5'>
        <div className='row p-5'>
          <div className='col-lg-6'>
            <h4 className='text-danger'>Simple Fast and Powerful</h4>
            <div className='mt-5'>
              <p><span className='fw-bold'>Play Everything:</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi officiis architecto provident facere magnam? Autem voluptates quia quaerat beatae quos ducimus unde quibusdam doloribus suscipit, est hic error rem! Dolorum.</p>
              <p><span className='fw-bold'>Catogorize Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, delectus, distinctio aspernatur soluta temporibus fuga harum repellat nesciunt nulla, modi magni voluptates dicta aliquid ut voluptatem obcaecati quidem error vel.</p>
              <p><span className='fw-bold'>Manage History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ratione dolorum esse, ullam delectus voluptatum rem aut dolorem perspiciatis laborum nihil alias repellat laudantium amet sapiente deleniti quod nam. Suscipit?</p>
            </div>
          </div>
          <div className='col-lg-6'>
            <iframe className='w-100' height="400px" src="https://www.youtube.com/embed/tOM-nWPcR4U?si=zYBZMW-XBqqwsrcv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
export default Landing