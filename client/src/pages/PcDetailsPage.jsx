import React, {useState, useEffect} from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deletegamingpc, getGamingPcDetails } from '../actions/gamingpcActions'
import { Link } from 'react-router-dom'
import { CREATE_GAMINGPC_RESET, DELETE_GAMINGPC_RESET, MPESA_STK_PUSH_REQUEST, UPDATE_GAMINGPC_RESET } from '../constants'
import { connect } from 'react-redux'
import CartButton from '../components/CartButton'
import { addToCart } from '../actions/cartActions'

const PcDetailsPage = () => {

  const router = useNavigate()
  const {id} = useParams()

  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const pcDetailReducer = useSelector(state=> state.pcDetailReducer)
  const { loading, error, pc } = pcDetailReducer

  const userLoginReducer =useSelector(state =>state.userLoginReducer);
  const{ userInfo } = userLoginReducer

  const deleteGamingpcReducer = useSelector(state=>state.deleteGamingpcReducer)
  const { success:pcDeletionSuccess } = deleteGamingpcReducer

  const baseUrl = 'http://localhost:8000';
  const fullImageUrl = baseUrl + pc.image;

  const item_type = 'gamingpc'
  const [quantity, setQuantity] = useState(1); // State to manage quanti

  useEffect(()=>{
    if (id) {
      dispatch(getGamingPcDetails(id))
    }
    dispatch({
      type: UPDATE_GAMINGPC_RESET
    });
    dispatch({
      type: CREATE_GAMINGPC_RESET
    });
    dispatch({
      type: MPESA_STK_PUSH_REQUEST
    });
  }, [dispatch, id])

  const confirmDelete = () => {
    dispatch(deletegamingpc(id));
    handleClose()
  }

  if (pcDeletionSuccess) {
    alert("Gaming Pcpc successfully deleted.");
    router('/');
    dispatch({
      type: DELETE_GAMINGPC_RESET
    })
    
  }
  return (
    <SectionWrapper>
      <div className=''>
            {loading && <div className="spinner"></div>}
            {error ? <Error variant='danger'>{error}</Error> :
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 ml-10'>
                    <div className='max-w-md bg-gray-800 border border-gray-700 rounded-lg shadow'>
                        <img className='rounded-t-lg w-full' src={fullImageUrl} alt={pc.name} />
                        {userInfo && userInfo.admin &&
                            <div className='flex justify-between p-4'>
                                <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded' onClick={handleShow}>Delete Product</button>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded' onClick={() => router(`/product-update/${pc.id}/`)}>Edit Product</button>
                            </div>
                        }
                    </div>
                    <div>
                        <p className='font-semibold text-3xl text-gray-400'>{pc.name}</p>
                        <hr className='my-8 bg-gray-700 rounded'></hr>
                        <p className='text-gray-500 text-lg'>{pc.description}</p>
                        <p className='text-lg font-bold text-gray-400 mt-10'>Price: <span className="text-gray-700 ml-2">Ksh {pc.price}</span></p>
                    </div>
                    <div className='mb-5'>
                        <h2 className='text-3xl text-gray-400 font-semibold'>Buy</h2>
                        <hr className='my-8 bg-gray-700 rounded'></hr>
                        {pc.stock ?
                        <div className=''>
                          <Link to={`/pc/${pc.id}/pccheckout/`} className=''>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded '>Pay with Mpesa</button>
                            </Link>
                            <CartButton  addToCart={addToCart} item_type={item_type} item_id={pc.id} quantity={quantity}  />
                        </div>
                            :
                            <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                            <p className="font-bold">Out of Stock</p>
                            <p>Will Restock</p>
                            </div> 
                            
                        }
                    </div>
                </div>
            }
            <div className={`fixed top-0 left-0 w-full h-full ${show ? 'block' : 'hidden'}`}>
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">
                        <div className="modal-header flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold">Delete Confirmation</p>
                            <button className="modal-close" onClick={handleClose}>
                                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <path d="M6.46875 0.53125C6.6875 0.3125 6.98438 0.3125 7.20312 0.53125L9 2.32812L10.7969 0.53125C11.0156 0.3125 11.3125 0.3125 11.5312 0.53125C11.75 0.75 11.75 1.04688 11.5312 1.26562L9.73438 3.0625L11.5312 4.85938C11.75 5.07812 11.75 5.375 11.5312 5.59375C11.3125 5.8125 11.0156 5.8125 10.7969 5.59375L9 3.79688L7.20312 5.59375C6.98438 5.8125 6.6875 5.8125 6.46875 5.59375C6.25 5.375 6.25 5.07812 6.46875 4.85938L8.26562 3.0625L6.46875 1.26562C6.25 1.04688 6.25 0.75 6.46875 0.53125ZM0.53125 6.46875C0.3125 6.6875 0.3125 6.98438 0.53125 7.20312L2.32812 9L0.53125 10.7969C0.3125 11.0156 0.3125 11.3125 0.53125 11.5312C0.75 11.75 1.04688 11.75 1.26562 11.5312L3.0625 9.73438L4.85938 11.5312C5.07812 11.75 5.375 11.75 5.59375 11.5312C5.8125 11.3125 5.8125 11.0156 5.59375 10.7969L3.79688 9L5.59375 7.20312C5.8125 6.98438 5.8125 6.6875 5.59375 6.46875C5.375 6.25 5.07812 6.25 4.85938 6.46875L3.0625 8.26562L1.26562 6.46875C1.04688 6.25 0.75 6.25 0.53125 6.46875ZM13.1406 6.98438L9 11.125L4.85938 6.98438C4.64062 6.76562 4.64062 6.46875 4.85938 6.25C5.07812 6.03125 5.375 6.03125 5.59375 6.25L9 9.65625L12.4062 6.25C12.625 6.03125 12.9219 6.03125 13.1406 6.25C13.3594 6.46875 13.3594 6.76562 13.1406 6.98438Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="modal-body py-4 text-gray-500">
                            <p className="text-base leading-relaxed">
                                Are you sure you want to delete this product <span className="font-bold">{pc.name}</span>?
                            </p>
                        </div>
                        <div className="modal-footer flex justify-end p-4 border-t border-gray-700">
                            <button onClick={() => confirmDelete()} className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded mr-2">
                                Confirm Delete
                            </button>
                            <button onClick={handleClose} className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </SectionWrapper>
  )
}

export default PcDetailsPage