import '../assets/styles/purchases.css'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const purchases = useSelector( state => state.purchases);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getPurchasesThunk() )
    },[])

    console.log( purchases )

    return (
        <div>
            <h2>My purchases</h2>
            <ul>
                {
                    purchases.map( e => (
                        <li key={ e.id } className='purchasesli-box'>
                            <Link to={ e.product.id}>
                                {/* <h2>{ e.product.brand } </h2> */}
                                
                                <figure className='purchases-figure'>
                                    <img src={ e.product.images[0].url} alt="" />
                                </figure>
                                <div className='info-purchase'>
                                    <span> {e.product.title} </span>
                                    <span> price: $ {e.product.price} </span>
                                </div>

                                <div>
                                    <span>quantity: { e.quantity }</span>
                                </div>
                            </Link>
                        </li>
                    ))  
                }
            </ul>
        </div>
    );
};

export default Purchases;