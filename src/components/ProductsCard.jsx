import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({products}) => {

    // const products = useSelector(state => state.products);
    const navigate = useNavigate();

    return (
        <div className='products-box'>
            {
                products?.map(e => (
                    <li key={e.id} className='product-box' onClick={ () => navigate(`/product/${ e.id }`)}>

                        <figure className='products-img'>
                            <img src={e.images[0].url} alt="" />
                        </figure>

                        <h5> {e.brand} </h5>
                        <h6> {e.title} </h6>
                        <div className='button-box'>
                            <span> price: ${e.price}</span>
                            
                            <i className='bx bxs-plus-circle' ></i>
                            
                        </div>

                    </li>
                ))
            }
        </div>
    );
};

export default ProductsCard;