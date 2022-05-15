import {
    ADD_TO_BASKET,
    ADD_TO_WISHLIST, CHANGE_CURRENCY,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET, DELETE_FROM_WISHLIST,
    GET_PRODUCTS, GET_SINGLE_PRODUCTS
} from "../actionTypes/actionTypes";
import axios from "axios";

export const getProducts = () => {
    return async (dispatch) => {
        const url = await axios("https://fakestoreapi.com/products")
        const response = await url
        dispatch({type: GET_PRODUCTS, payload: response.data})
    }
}
export const getSingleProducts = (id) => {
    return async (dispatch) => {
        const url = await axios(`https://fakestoreapi.com/products/${id}`)
        const response = await url
        dispatch({type: GET_SINGLE_PRODUCTS, payload: response.data})
    }
}
export const addBasket = (data) => {



    let basket = JSON.parse(localStorage.getItem('basket')) || []

    const foundId = basket.find(el => el.id === data.id)
    console.log(foundId)

    if (foundId) {

            basket = basket.map(el => {
                return el.id === data.id ? {...el, quantity: el.quantity + 1} : el
            })

    }else {
        basket = [...basket, {...data, quantity: 1}]

    }
    localStorage.setItem('basket', JSON.stringify(basket))
    return {type: ADD_TO_BASKET, payload: data}

}

export const decreaseQuantity = (data) => {

    let basket = JSON.parse(localStorage.getItem('basket')) || []

    basket = basket.map(el => {
        return el.id === data ? {...el, quantity : el.quantity -1} : el
    }
    )

    localStorage.setItem("basket", JSON.stringify(basket))
    return {type: DECREASE_QUANTITY, payload: data}
}

export const deleteFromBasket = (data) => {

   let basket = JSON.parse(localStorage.getItem('basket')) || []
    basket = basket.filter(el => {
       return  el.id !== data
    })

    localStorage.setItem('basket',JSON.stringify(basket))
    return {type: DELETE_FROM_BASKET, payload: data}
}

export const addToWishlist = (data) => {

    let wishList = JSON.parse(localStorage.getItem('wishList')) || []


       wishList = [...wishList, {...data, liked: true}]


    localStorage.setItem('wishList',JSON.stringify(wishList))
    return {type: ADD_TO_WISHLIST, payload: data}

}

export const deleteFromWishlist = (data) => {

    let wishList = JSON.parse(localStorage.getItem('wishList'))
     wishList = wishList.filter(el => {
        return el.id !== data
    })


    localStorage.setItem('wishList', JSON.stringify(wishList))
    return {type: DELETE_FROM_WISHLIST, payload: data}
}


export const changeCurrency = (data) => {
    return {type: CHANGE_CURRENCY, payload: data}
}