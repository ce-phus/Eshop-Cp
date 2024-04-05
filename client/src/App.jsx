import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavbar from './components/SideNavbar'
import { AiOutlineUser,} from "react-icons/ai";


import { AccountPage, AllAddressOfUsersPage, CartPage, CheckoutPage, Home, LaptopDetailsPage, Login, OrderListPage, Payments, PcCheckoutPage, PcDetailsPage, PcListPage, Product, ProductListPage, Register } from './pages';


function App() {
  const [open, setOpen] = useState(true);
  return (
   <Router>
    <div className='bg-white flex '>
      <SideNavbar open={open}/>
      <div className={`pl-[${open ? '20' : ''}] flex-1 px-`}>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/laptop/' element={<ProductListPage/>} exact />
        <Route path='/laptop/:id/' element={<LaptopDetailsPage/>} exact />
        <Route path='/cart/' element={<CartPage/>} exact/>
        <Route path='/login/' element={<Login/>} exact/>
        <Route path='/register/' element={<Register/>} exact/>
        <Route path='/account/' element={<AccountPage/>} exact/>
        <Route path='/all-addresses/' element={<AllAddressOfUsersPage/>} exact/>
        <Route path="laptop/:id/checkout/" element={<CheckoutPage/>} exact/>
        <Route path="/payments-status/" element={<Payments/>} exact/>
        <Route path='/product/' element={<Product/>} exact/>
        <Route path='/pc/' element={<PcListPage/>} exact/>
        <Route path='/pc/:id/' element={<PcDetailsPage/>} exact/>
        <Route path='/pc/:id/pccheckout' element={<PcCheckoutPage/>} exact/>
        <Route path='/orders/' element={<OrderListPage/>} exact />
      </Routes>
      </div>
    </div>
   </Router>
  )
}

export default App
