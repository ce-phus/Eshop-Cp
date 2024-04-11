import { combineReducers } from "redux"
import {
    accessoriesDetailReducer,
    accessoriesListReducer,
    createaccessoriesReducer,
    updateaccessoriesReducer,
    deleteAccessoriesReducer,
    changeDeliveryStatusReducer,
} from "./accessoriesReducer"

import {
    cartReducer
} from "./cartReducers"

import {
    computerpartsListReducer,
    computerpartsDetailReducer,
    createcomputerpartsReducer,
    updatecomputerpartsReducer,
    deleteComputerPartsReducer,
} from "./computerpartsReducers"

import {
    pcListReducer,
    pcDetailReducer,
    createpcReducer,
    updatepcReducer,
    deleteGamingpcReducer,
} from "./gamingpcReducers"

import {
    graphicscardDetailReducer,
    graphicscardListReducer,
    creategraphicscardReducer,
    updategraphicscardReducer,
    deleteGraphicscardReducer,
} from "./graphicscardReducers"

import {
    laptopDetailReducer,
    laptopListReducer,
    createlaptopReducer,
    updatelaptopReducer,
    deleteLaptopReducer,
} from "./laptopReducers"

import {
    tftDetailReducer,
    tftListReducer,
    createtftReducer,
    updatetftReducer,
    deleteTftReducer
} from "./tftReducers"

import {
    mpesaCallbackHandlerReducer,
    mpesaStkPushReducer
} from "./mpesaReducers"

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userDetailsUpdateReducer,
    deleteUserAccountReducer,
    checkTokenValidationReducer,
    getSingleAddressReducer,
    getAllAddressesOfUserReducer,
    createUserAddressReducer,
    updateUserAddressReducer,
    deleteUserAddressReducer,
    getAllOrdersReducer,
} from "./userReducers";

const allReducers = combineReducers({
    accessoriesDetailReducer,
    accessoriesListReducer,
    createaccessoriesReducer,
    updateaccessoriesReducer,
    deleteAccessoriesReducer,
    changeDeliveryStatusReducer,
    computerpartsListReducer,
    computerpartsDetailReducer,
    createcomputerpartsReducer,
    updatecomputerpartsReducer,
    deleteComputerPartsReducer,
    pcListReducer,
    pcDetailReducer,
    createpcReducer,
    updatepcReducer,
    deleteGamingpcReducer,
    graphicscardDetailReducer,
    graphicscardListReducer,
    creategraphicscardReducer,
    updategraphicscardReducer,
    deleteGraphicscardReducer,
    laptopDetailReducer,
    laptopListReducer,
    createlaptopReducer,
    updatelaptopReducer,
    deleteLaptopReducer,
    tftDetailReducer,
    tftListReducer,
    createtftReducer,
    updatetftReducer,
    deleteTftReducer,
    mpesaCallbackHandlerReducer,
    mpesaStkPushReducer,
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userDetailsUpdateReducer,
    deleteUserAccountReducer,
    checkTokenValidationReducer,
    getSingleAddressReducer,
    getAllAddressesOfUserReducer,
    createUserAddressReducer,
    updateUserAddressReducer,
    deleteUserAddressReducer,
    getAllOrdersReducer,
    cartReducer,
})

export default allReducers