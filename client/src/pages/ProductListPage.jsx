import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLaptopList } from "../actions/laptopActions"
import { CREATE_LAPTOP_RESET } from '../constants'
import LaptopList from '../components/LaptopList'
import Footer from '../components/Footer'

const ProductListPage = () => {
  const dispatch = useDispatch()

  // fetch laptop list from redux store
  const { loading:laptopLoading, error:laptoperror, laptop} = useSelector((state)=> state.laptopListReducer)

  useEffect(() => {
    dispatch(getLaptopList());
    dispatch({type: CREATE_LAPTOP_RESET})
  }, [dispatch])

  // Handle loading and error states
  if (laptopLoading){
    return <div>Loading</div>
  }

  if (laptoperror){
    return <div>Error: {laptoperror}</div>
  }

  return (
    <>
      <div>
        <LaptopList laptopList={laptop}/>
      </div>

      <div className='ml-20'>
        <Footer/>
      </div>
    </>
    
     
  )
}

export default ProductListPage