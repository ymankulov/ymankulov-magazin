import React from 'react';
import '../styles/WishList.css'

import { useSelector} from "react-redux";
import WishListCard from "./WishListCard";

const WishList = () => {
    const {wishList} = useSelector(s => s)


    if (wishList.length === 0){
        return <div>
            <h1 className='wishlist--first__title'>NO LIST</h1>
        </div>

    }

    return (
        <>
          <section id='wishlist'>
              <div className="container">
                  <div className="wishlist">
                      <h1 className='wishlist--title'>Your Wish-List</h1>
                      <div className="wishlist__items">
                          <div className="row">
                              {
                                  wishList.map(el => (
                                      <WishListCard key={el.id} el={el}/>
                                  ))
                              }
                          </div>

                      </div>
                  </div>
              </div>
          </section>
        </>
    );
};

export default WishList;