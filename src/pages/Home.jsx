import '../assets/styles/home.css'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import { useNavigate } from 'react-router-dom';
import ProductsCard from '../components/ProductsCard';


const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    return (
        <div className='products-box'>
            <ProductsCard products={products}/>
            {/* {
                products.map(e => (
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
            } */}
        </div>
    );
};

export default Home;