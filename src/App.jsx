import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Purchases from './pages/Purchases'
import Loading from './components/Loading'
import Appnavbar from './components/Appnavbar'
import { useSelector } from 'react-redux'
import Footer from './components/Footer'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

    const isLoading = useSelector( state => state.isLoading );

    return (
        <HashRouter>
            <Appnavbar/>
            { isLoading && <Loading/> }
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/login' element={ <Login />} />
                <Route path='/product/:id' element={ <Product />} />
                

                <Route element={ <ProtectedRoutes />}>
                    <Route path='/purchases' element={ <Purchases />} />
                </Route>
            </Routes>
            <Footer/>
        </HashRouter>
    )
}

export default App
