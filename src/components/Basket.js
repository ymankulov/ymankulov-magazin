import React from 'react';
import '../styles/basket.css'
import {useSelector} from "react-redux";
import BasketCard from "./BasketCard";

const Basket = () => {
    const {basket,currency,defaultCurrency,symbolCurrency} =useSelector(s => s)
    if (basket.length === 0){
        return (
            <h1 className='basket--first__title'>NO LIST</h1>
        )
    }else{

        const totalCost = basket.reduce((acc, rec) => {
            return rec.price * rec.quantity + acc
        }, 0)

        const symbol = symbolCurrency[defaultCurrency]
        const cost = currency[defaultCurrency] * totalCost

        return (

           <section id='basket'>
               <div className="container">
                   <div className="basket">
                       <h1 className='basket--title'>Your Basket List</h1>
                       <div className='basket--table'>
                           <table className='table-list'>
                               <thead>
                               <tr>
                                   <th>#</th>
                                   <th>Products View</th>
                                   <th>Product Name</th>
                                   <th>Quantity</th>
                                   <th>Product Price</th>
                                   <th>X</th>
                               </tr>
                               </thead>

                               <tbody>
                               {
                                   basket.map((el, idx) => (
                                       <BasketCard key={el.id} el={el} idx={idx}/>
                                   ))
                               }
                               </tbody>
                           </table>

                           <div className='basket--total'>
                               <h2 className='basket--total__cost'>Your Total Cost: <span className='cost'>{cost.toFixed()} {symbol} рубль</span></h2>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

    );
}};

export default Basket;