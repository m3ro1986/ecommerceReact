import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SlideProduct = ({product}) => {

    // const { id } = useParams();
    // const [product, setProduct] = useState({});


    // useEffect(() => {
    //     axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
    //         .then(res => {
    //             setProduct(res.data);
    //         })
    // }, [id])



    return (
        <div>
            <Carousel>
                {
                    product.images?.map( e => (
                        <Carousel.Item key={ e.url }>
                            <figure className='caurosel-box'>
                                <img
                                    className="d-block w-100"
                                    src={ e.url }
                                    alt="First slide"
                                />
                            </figure>
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default SlideProduct;