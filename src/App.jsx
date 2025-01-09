
import { Route, Routes } from 'react-router-dom'
import './App.css'
import History from './pages/History'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer position="top-right" theme="light"/>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/history' element={<History />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
