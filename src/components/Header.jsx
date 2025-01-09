import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand >     
            <Link className='text-decoration-none fw-bold text-white'>
            <i className="fa-solid fa-music me-3"></i>
            Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header