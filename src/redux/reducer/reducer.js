import {
    GET_PRODUCTS,
    ADD_TO_BASKET,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET,
    ADD_TO_WISHLIST, DELETE_FROM_WISHLIST, CHANGE_CURRENCY, GET_SINGLE_PRODUCTS
} from "../actionTypes/actionTypes";

const initialState = {
    products: [],
    singleItem: {},
    basket: JSON.parse(localStorage.getItem('basket')) || [],
    wishList: JSON.parse(localStorage.getItem('wishList')) || [],
    currency: {
        RUB: 67.80,
        USS: 1,
        KGS: 82.10,
        EUR: 0.95
    },
    symbolCurrency: {
        RUB: '₽',
        USS: '$',
        KGS: 'c',
        EUR: '€'
    },

    defaultCurrency: 'RUB'
}

export function reducer(state = initialState,actions){


    switch (actions.type){
        case GET_PRODUCTS:
            return {...state, products: actions.payload}

        case GET_SINGLE_PRODUCTS :
            return {...state, singleItem: actions.payload}

        case ADD_TO_BASKET: {
            const foundId = state.basket.find(el => el.id === actions.payload.id)
            console.log(foundId)

            if (foundId) {
                return {
                    ...state, basket: state.basket.map(el => {
                        return el.id === actions.payload.id ? {...el, quantity: el.quantity + 1} : el
                    })
                }
            }
            return {...state, basket: [ ...state.basket,  {...actions.payload, quantity: 1}]}
        }


        case DECREASE_QUANTITY:
            const foundId = state.basket.find(el => el.id === actions.payload)
            if (foundId.quantity > 1){
                return {...state, basket: state.basket.map(el =>{
                    return el.id === actions.payload ? {...el, quantity: el.quantity - 1} : el
                    })}
            }

        case DELETE_FROM_BASKET:
            const findId = actions.payload
            if  (findId) {
                return {...state, basket: state.basket.filter(el => {
                    return el.id !== actions.payload
                    })}
            }

        case ADD_TO_WISHLIST :
            return {...state, wishList:[...state.wishList, {...actions.payload, liked: true}] }


        case DELETE_FROM_WISHLIST:

                return {...state, wishList: state.wishList.filter(el => {
                        return el.id !== actions.payload
                    })}

        case CHANGE_CURRENCY :
            return {...state, defaultCurrency: actions.payload}


        default: return  state
    }
}