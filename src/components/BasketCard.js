import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faMinus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector,} from "react-redux";
import {addBasket, decreaseQuantity, deleteFromBasket} from "../redux/actions/actions";
// import { SRLWrapper } from "simple-react-lightbox";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BasketCard = ({el, idx}) => {
    const dispatch = useDispatch()
    const notifyDeleteBasket = (el) => {
        dispatch(deleteFromBasket(el))
        toast.warning("Your product is deleted!");

    }

    const {currency, defaultCurrency,symbolCurrency} = useSelector(s => s)

    const cost = currency[defaultCurrency] * el.price * el.quantity
    const symbol = symbolCurrency[defaultCurrency]



    return (
        <>

        <tr>
            <th>{idx + 1}</th>
            <th>

                    <img className='basket--image' src={el.image} alt=""/>

            </th>
            <th>{el.title}</th>
            <th className='basket--list--quantity'>
                <button onClick={() => dispatch(addBasket(el))} className='basket--list--quantity-btn'><FontAwesomeIcon icon={faAdd}/></button>
                {el.quantity}
                <button
                disabled={el.quantity === 1}
                    onClick={() => dispatch(decreaseQuantity(el.id))} className={el.quantity === 1 ? 'basket--list--quantity-btn1' : 'basket--list--quantity-btn'}><FontAwesomeIcon icon={faMinus}/></button>
            </th>
            <th>{cost.toFixed()} {symbol}</th>
            <th>
                <button onClick={() => notifyDeleteBasket(el.id)} className='table-btn'>Delete</button>
            </th>
        </tr>
    </>);
};

export default BasketCard;