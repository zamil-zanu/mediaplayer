
import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className='container mt-5 w-100' style={{ height: '400px' }}>
                <div className='row'>
                    <div className='col-lg-4'>
                        <h4> <i className="fa-solid fa-music me-3"></i>Media Player</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi consectetur earum sint dolorem quo modi doloremque, aliquam provident! Molestiae excepturi a ratione cum corporis architecto blanditiis aliquid nemo, dicta ab!</p>
                        <p>Code is licensed by Luminar</p>
                        <p>currently v5.3.2</p>
                    </div>
                    <div className='col-lg-2'>
                        <div className='mt-4'>
                            <h5>Links</h5>
                            <Link className='text-decoration-none text-white' to={'/'}>Landing</Link><br />
                            <Link className='text-decoration-none text-white' to={'/home'}>Home</Link><br />
                            <Link className='text-decoration-none text-white' to={'/history'}>History</Link>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='mt-4'>
                            <h5>Guides</h5>
                            <a className='text-decoration-none text-white' href="">React</a>
                            <a className='text-decoration-none text-white' href="">React Bootstrap</a>
                            <a className='text-decoration-none text-white' href="">React Router</a>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='mt-4'>
                            <h5>Contact Us</h5>
                            <div>
                                <input type="text" />
                                <button className='btn btn-warning'><i class="fa-solid fa-arrow-right ms-3 "></i></button>
                            </div>
                            <div className='d-flex gap-3 mt-2'>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-square-instagram"></i>
                                <i className="fa-solid fa-phone"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center'>Copyright &copy; september 2024 Batch,Media Player,Built with react</p>
            </div>
        </>
    )
}

export default Footer