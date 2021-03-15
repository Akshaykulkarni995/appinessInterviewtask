import React from 'react';
import fb from '../src/Assets/fb.png';


const Footer = () => {
    return (
        <div class="container footer">
            <footer class="text-center text-white footer1 " >
                <div class="row">
                    <div class="column socialimages ">
                        <img src={fb} alt="Facebook" />
                    </div>
                    <div class="column socialimages">
                        <img src={fb} alt="Facebook" />
                    </div>
                    <div class="column socialimages">
                        <img src={fb} alt="Facebook" />
                    </div>
                    <div class="column socialimages">
                        <img src={fb} alt="Facebook" />
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer;