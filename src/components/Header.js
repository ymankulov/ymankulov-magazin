
import Logo from '../assets/Logo.svg'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrency} from "../redux/actions/actions";



const Header = () => {

    const {basket,wishList} =useSelector(s => s)


    const dispatch =  useDispatch()



    return (
        <>
          <header id='header'>
              <div className='container'>
                  <div className="header">
                      {/*<a href=""><img src={Logo} alt="" className='header--logo'/></a>*/}
                      <nav className='header--navbar'>
                          <ul className='header--nav'>
                              <li className='header--nav__list'>
                                  <NavLink to='/' className='header--nav__list--item'>Home</NavLink>
                              </li>
                              <li className='header--nav__list'>
                                  <NavLink to='/about' className='header--nav__list--item'>About</NavLink>
                              </li>
                              <li className='header--nav__list'>
                                  <NavLink to='/products' className='header--nav__list--item'>Products</NavLink>
                              </li>
                              <li className='header--nav__list'>
                                  <NavLink to='/contactUs' className='header--nav__list--item'>Contact Us</NavLink>
                              </li>
                              <li className='header--nav__list'>
                                  {
                                      basket.length > 0 ? <div className='header--nav__list--circle'>{basket.length}</div> : null
                                  }
                                  <NavLink to='/basket' className='header--nav__list--item'><FontAwesomeIcon icon={faBasketShopping}/></NavLink>
                              </li>
                              <li className='header--nav__list'>
                                  {
                                      wishList.length > 0 ? <div className='header--nav__list--circle2'>{wishList.length}</div> : null
                                  }
                                  <NavLink to='/wishList' className='header--nav__list--item'><FontAwesomeIcon icon={faHeart} /></NavLink>
                              </li>
                              <li>
                                  <select onChange={(e) => dispatch(changeCurrency(e.target.value))} className='change--currency' name="" id="">
                                      <option  value="RUB">RUB</option>
                                      <option value="USS">USS</option>
                                      <option value="KGS">KGS</option>
                                      <option value="EUR">EUR</option>
                                  </select>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </header>  
        </>
    );
};

export default Header;