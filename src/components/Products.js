import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../redux/actions/actions";
import {MyData} from '../myData/MyData'
import '../styles/Products.css'
import ProductsCard from "./ProductsCard";


const Products = () => {

    const dispatch = useDispatch()
    const {products} = useSelector(s => s)

    useEffect(() =>{
        dispatch(getProducts(MyData))
    },[])

    return (
        <>
            <section id='products'>
                <div className="container">
                    <div className="products">
                        <h1 className='products__list--title'>Your Product List</h1>
                        <div className="row">
                            {
                                products.map(el => (
                                    <ProductsCard key={el.id} el={el}/>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Products;