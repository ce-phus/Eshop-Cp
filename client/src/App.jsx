import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavbar from './components/SideNavbar'

import { CartPage, Home, LaptopDetailsPage, ProductListPage } from './pages';


function App() {
  const [open, setOpen] = useState(true);
  return (
   <Router>
    <div className='bg-gray-100 flex '>
      <SideNavbar open={open}/>
      <div className={`pl-[${open ? '72' : ''}] flex-1 px-`}>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/laptop/' element={<ProductListPage/>} exact />
        <Route path='/laptop/:id/' element={<LaptopDetailsPage/>} exact />
        <Route path='/cart/' element={<CartPage/>} exact/>
      </Routes>
      </div>
    </div>
   </Router>
  )
}

export default App
