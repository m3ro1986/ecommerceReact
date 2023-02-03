import '../assets/styles/footer.css'
import React from 'react';

const Footer = () => {
    return (
        <div className='footer-box'>

            <h2>Academlo</h2>
            <div className='footer-icons'>
                <a href="https://www.youtube.com/c/academlo" ><i className='bx bxl-youtube'></i></a>
                <a href="https://www.instagram.com/academlohq/?hl=es" ><i className='bx bxl-instagram-alt' ></i></a>
                <a href="https://www.youtube.com/c/academlo" ><i className='bx bxl-linkedin-square' ></i></a>
            </div>
        </div>

    );
};

export default Footer;