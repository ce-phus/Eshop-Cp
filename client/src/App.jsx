import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavbar from './components/SideNavbar'

import { AccountPage, AllAddressOfUsersPage, CartPage, Home, LaptopDetailsPage, Login, ProductListPage, Register } from './pages';


function App() {
  const [open, setOpen] = useState(true);
  return (
   <Router>
    <div className='bg-white flex '>
      <SideNavbar open={open}/>
      <div className={`pl-[${open ? '72' : ''}] flex-1 px-`}>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/laptop/' element={<ProductListPage/>} exact />
        <Route path='/laptop/:id/' element={<LaptopDetailsPage/>} exact />
        <Route path='/cart/' element={<CartPage/>} exact/>
        <Route path='/login/' element={<Login/>} exact/>
        <Route path='/register/' element={<Register/>} exact/>
        <Route path='/account/' element={<AccountPage/>} exact/>
        <Route path='/all-addresses/' element={<AllAddressOfUsersPage/>} exact/>
      </Routes>
      </div>
    </div>
   </Router>
  )
}

export default App
