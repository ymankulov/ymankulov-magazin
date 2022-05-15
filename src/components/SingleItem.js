import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addBasket, getSingleProducts} from "../redux/actions/actions";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faTag, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import '../styles/singleItem.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import basket from "./Basket";

const SingleItem = () => {
    const {basket,currency, defaultCurrency,symbolCurrency,singleItem} = useSelector(s => s)

    const cost = currency[defaultCurrency] * singleItem.price
    const symbol = symbolCurrency[defaultCurrency]

    const dispatch = useDispatch()

    const {id} = useParams()


    useEffect(() => {
        dispatch(getSingleProducts(id))
    },[dispatch])

    const findSingleId = basket.find(el => el.id === singleItem.id)

    const notifySingle = (el) => {
        console.log(el)
        dispatch(addBasket(el))
        toast.success("Your product added successfully!!");

    }
    const notifySingleList = () => {
        toast.warn("Your product already added!");
    }

    return (
        <>
            <section id='singleITem'>
                <div className="container">
                    <div className="singleITem">
                        <h1 className='singleITem--title'>Your Single-List</h1>
                        <div className="singleITem__items">
                                <div className='row'>
                                    <div className="col-3">
                                        <img className='singleITem__img' src={singleItem.image} alt=""/>
                                    </div>
                                    <div className="col-3">
                                        <div className="singleITem__items--item">
                                            <h1 className='singleITem__items--title'>{singleItem.title}</h1>
                                            <p className='singleITem__items--subtitle'>{singleItem.description}</p>
                                            <div className='singleITem__items--stars'>
                                                <FontAwesomeIcon className='singleITem__items--star' icon={faStar}/>
                                                <FontAwesomeIcon className='singleITem__items--star' icon={faStar}/>
                                                <FontAwesomeIcon className='singleITem__items--star' icon={faStar}/>
                                                <FontAwesomeIcon className='singleITem__items--star' icon={faStar}/>
                                                <FontAwesomeIcon className='singleITem__items--star' icon={faStar}/>
                                            </div>
                                            <h3 className='singleITem__items--price'>{cost.toFixed()} {symbol}</h3>
                                            <div className='singleITem__items--icons'>
                                                <h3 className='singleITem__items--tag'><span className='wishlist__items--icon'><FontAwesomeIcon  icon={faTag}/></span> Free Delivery</h3>
                                                <button onClick={() => findSingleId  ? notifySingleList() : notifySingle(singleItem)} className='singleITem__items--icons__trash'><FontAwesomeIcon  icon={faCartShopping}/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default SingleItem;