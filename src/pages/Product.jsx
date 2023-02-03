import '../assets/styles/product.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsCategoryThunk } from '../store/slices/products.slice';
import SlideProduct from '../components/SlideProduct';
import ProductsCard from '../components/ProductsCard';
import { addPurchasesThunk } from '../store/slices/purchases.slice';
import { getCartThunk } from '../store/slices/Cart';

const Product = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState('');
    const similars = useSelector(state => state.products)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(res => {
                setProduct(res.data);
                dispatch(getProductsCategoryThunk(res.data.categoryId))
            })

    }, [id])

    const addToPurchases = () => {
        if( quantity > 0) {
            const purchase = {
                "quantity": quantity,
                "productId": product.id
            };
            dispatch( addPurchasesThunk( purchase ));
            // dispatch(getCartThunk())
        } else {
            alert('incorrect quantity')
        }
    }




    return (
        <div>
            <div className='product-detail'>
                {/* <figure className='product-figurebox'>
                    <img src={product.images?.[0].url} alt="" />
                </figure> */}
                <figure className='product-figurebox'>
                    <SlideProduct product={product} />
                </figure>
                <main className='product-main'>
                    <h4>{product.brand}</h4>
                    <h5> {product.title} </h5>
                    <p> {product.description}</p>
                    <div className='product-price'>
                        <span>price: ${product.price}</span>
                        <div className='buttons-product'>
                            {/* <button>-</button> */}
                            <span>Quantity</span>
                            <input 
                                type="number"
                                value={ quantity }
                                onChange={ e => setQuantity( e.target.value )}
                            />
                            {/* <button>+</button> */}
                        </div>
                    </div>
                    <div className='addButton-cartBox'>
                        <button onClick={addToPurchases} className='addButton-cart'>
                            add to cart
                        </button>
                    </div>    
                </main>
            </div>
            <div className='similar-box'>
                <h3>similar items</h3>
                <hr />
                <ProductsCard products={similars} />
            </div>

        </div>
    );
};

export default Product;