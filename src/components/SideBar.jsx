import '../assets/styles/cart.css'
import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { delPurchasesThunk, getCartThunk } from '../store/slices/Cart';
import { getPurchasesThunk, purchasesCartThunk } from '../store/slices/purchases.slice';
import axios from 'axios';
import getConfig from '../utils/getConfig';


const SideBar = ({ show, handleClose }) => {

    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    const buyProducts = () => {
        dispatch( purchasesCartThunk() );
        dispatch(getCartThunk())
    }

    const delProducts = (id) => {
        alert( id )
        dispatch(delPurchasesThunk(id))
        dispatch(getCartThunk())
    }



    return (
        <div>
            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='ul-cart'>
                        {
                            cart.map(e => (
                                <li key={e.id} className='li-cart'>
                                    <figure className='figure-cart'>
                                        <img src={e.product.images[0].url} alt="" />
                                    </figure>

                                    <div className='info-cart'>
                                        <div className='title-cart'>
                                            <span>{e.product.title}</span>
                                            <i className='bx bx-trash' onClick={() => delProducts( e.product.id )}></i>
                                        </div>
                                        <div className='buttons-cart'>
                                            <button>-</button>
                                            <span>{e.quantity}</span>
                                            <button>+</button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                        <hr />
                        <span> Total: $ { 500}</span>
                        <button onClick={buyProducts}>CheckOut</button>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default SideBar;