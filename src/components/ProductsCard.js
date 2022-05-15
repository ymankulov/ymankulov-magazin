import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping, faHeart, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {addBasket, addToWishlist, deleteFromWishlist, getProducts} from "../redux/actions/actions";
import {useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductsCard = ({el}) => {


    const {basket,wishList,currency, defaultCurrency,symbolCurrency} = useSelector(s => s)

    const cost = currency[defaultCurrency] * el.price
    const symbol = symbolCurrency[defaultCurrency]
    const dispatch = useDispatch()
    const findLiked = wishList.find(product => product.id === el.id)
    const basketId = basket.find(product => product.id === el.id)



    const notify = (el) => {
        dispatch(addToWishlist(el))
        toast.success("Your product added successfully!");

    }
    const notifyBasket = (el) => {
        dispatch(addBasket(el))
        toast.success("Your product added successfully!");

    }

    useEffect(() =>{
        dispatch(getProducts())
    },[dispatch])

    return (
        <>

            <div className="col-4">
                <div className='products--character'>

                        <img className='products--character--image' src={el.image} alt=""/>

                    <div className='products--info'>
                        <div className='products--info--items'>
                            <h2 className='product--info__title'>{el.title}</h2>
                            <h4 className='product--info__price'>{cost.toFixed()} {symbol}</h4>
                        </div>
                        <div className='product--info__icons'>
                            <button className='product--info__icons--bg'>
                                <FontAwesomeIcon onClick={() => {
                                   return  findLiked ? findLiked.liked ? dispatch(deleteFromWishlist(el.id)) : '' :  notify(el)}
                                } className={`${findLiked ? findLiked.liked ? 'product--info__icons__icon1' : 'product--info__icons__icon' : 'product--info__icons__icon'}`} icon={faHeart}/>
                            </button>
                            <button onClick={() =>  basketId ? null : notifyBasket(el)

                            }
                                 className='product--info__icons--bg'>
                                {basketId ?  <Link to='/basket'><FontAwesomeIcon className='product--info__icons__icon' icon={faCircleArrowRight}/> </Link>: <FontAwesomeIcon className='product--info__icons__icon' icon={faBagShopping}/>}
                            </button>
                        </div>
                    </div>
                    <div className='product--items'>
                        <span className='product--items__item'>#платья</span>
                        <span className='product--items__item'>#магазин-одежды</span>
                        <span className='product--items__item'>#весна</span>
                        <span className='product--items__item'>#скидки</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsCard;