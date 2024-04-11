import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGamingpcList } from '../actions/gamingpcActions'
import { CREATE_GAMINGPC_RESET } from '../constants'
import { PcList } from '../components'
import Footer from '../components/Footer'

const PcListPage = () => {
  const dispatch = useDispatch()

  // fetch laptop list from redux store
  const { loading:pcLoading, error:pcerror, pc} = useSelector((state)=> state.pcListReducer)

  useEffect(() => {
    dispatch(getGamingpcList());
    dispatch({type: CREATE_GAMINGPC_RESET})
  }, [dispatch])

  // Handle loading and error states
  if (pcLoading){
    return <div>Loading</div>
  }

  if (pcerror){
    return <div>Error: {pcerror}</div>
  }
  return (
    
    <>
      <div>
        <PcList pcList={pc} />
        
      </div>

      <div className='flex items-center justify-center w-full'>
      <Footer/>
      </div>
    </>
  )
}

export default PcListPage