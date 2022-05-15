import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faTag,faTrash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import { deleteFromWishlist} from "../redux/actions/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishListCard = ({el}) => {


    const {currency, defaultCurrency,symbolCurrency} = useSelector(s => s)

    const cost = currency[defaultCurrency] * el.price
    const symbol = symbolCurrency[defaultCurrency]

    const dispatch = useDispatch()

    const notifyDeleteWishList = (item) => {
        dispatch(deleteFromWishlist(item))
        toast.warning("Your product is deleted!");

    }

    return (
        <>

            <div className="col-2 ">
                <div className='wishlist__info'>
                    <img className='wishlist__img' src={el.image} alt=""/>
                    <div className="wishlist__items--item">
                        <h1 className='wishlist__items--title'>{el.title}</h1>
                        <p className='wishlist__items--subtitle'>{el.description}</p>
                        <div className='wishlist__items--stars'>
                            <FontAwesomeIcon className='wishlist__items--star' icon={faStar}/>
                            <FontAwesomeIcon className='wishlist__items--star' icon={faStar}/>
                            <FontAwesomeIcon className='wishlist__items--star' icon={faStar}/>
                            <FontAwesomeIcon className='wishlist__items--star' icon={faStar}/>
                            <FontAwesomeIcon className='wishlist__items--star' icon={faStar}/>
                        </div>
                        <h3 className='wishlist__items--price'>{cost.toFixed()} {symbol}</h3>
                        <div className='wishlist__items--icons'>
                            <h3 className='wishlist__items--tag'><span className='wishlist__items--icon'><FontAwesomeIcon  icon={faTag}/></span> Free Delivery</h3>
                            <span className='wishlist__items--icons__trash'><FontAwesomeIcon onClick={() => notifyDeleteWishList(el.id)} icon={faTrash}/></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WishListCard;