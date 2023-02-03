import React, { useState } from 'react';
import '../assets/styles/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getProductsBySearch, getProductsCategoryThunk, getProductsThunk } from '../store/slices/products.slice';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBar from './SideBar';
import { getCartThunk } from '../store/slices/Cart';

const Appnavbar = () => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const logout = () => {
        localStorage.setItem('token', '');
    }

    const updatingCart = () => {
        dispatch(getCartThunk());
        handleShow();
    }

    return (
        <div className='navbar-main'>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>e-commerce</Navbar.Brand>
                    {/* <Link to={'/'}>
                        <div className='title-box' >
                            <h1 onClick={ () => dispatch(getProductsThunk())}> e-commerce </h1>
                        </div>
                    </Link> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className='navbar-all'>
                            <Nav className='nav-icons'>
                                {/* <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                <Nav.Link as={Link} to='/cart'>cart</Nav.Link> */}
                                <Link to={'/login'}><i className='bx bx-user' ></i></Link>
                                <Link to={'/login'} onClick={logout} > <i className='bx bx-log-out'></i> </Link>
                                <Link to={'/purchases'}><i className='bx bxs-box' ></i></Link>
                                <Link to={'/'} onClick={updatingCart}> <i className='bx bx-cart-alt' ></i> </Link>
                                <div className='dropdown-box'>
                                    <NavDropdown title={<i className='bx bx-category' ></i>} id="basic-nav-dropdown">
                                        {/* <NavDropdown.Item onClick={ () => alert( stoves) }>Stoves</NavDropdown.Item>
                                        <NavDropdown.Item >Smart TV's</NavDropdown.Item>
                                        <NavDropdown.Item >Smartphones</NavDropdown.Item>
                                        <NavDropdown.Item >Computers</NavDropdown.Item> */}
                                        <h4 onClick={() => dispatch(getProductsThunk())}>All</h4>
                                        <h4 onClick={() => dispatch(getProductsCategoryThunk(1))}>Stoves</h4>
                                        <h4 onClick={() => dispatch(getProductsCategoryThunk(2))}>Smart TV's</h4>
                                        <h4 onClick={() => dispatch(getProductsCategoryThunk(3))}>Smartphones</h4>
                                        <h4 onClick={() => dispatch(getProductsCategoryThunk(4))}>Computers</h4>
                                        {/* <Link to={'/'} onClick={ () => dispatch(getProductsCategoryThunk(1))}> Stoves</Link> */}
                                    </NavDropdown>
                                    <div className='search-box'>
                                        <input
                                            type="text"
                                            placeholder='Search by name'
                                            value={search}
                                            onChange={e => setSearch(e.target.value)}
                                        />
                                        <button onClick={() => dispatch(getProductsBySearch(search))}>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SideBar show={show} handleClose={handleClose}/>
        </div>
    );
};

export default Appnavbar;