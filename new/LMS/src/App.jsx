import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Cart from './components/Cart'
function App() {
  return (
    <>
      <nav className='flex justify-between'>
        {/* <img></img> */}
        <h1 className='text-2xl'>Title</h1>
        <button className=' border-red-700 mr-5'>Login</button>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 