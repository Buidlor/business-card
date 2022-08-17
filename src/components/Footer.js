import React from 'react';
import Facebook from '../images/Facebook.png';
import GitHub from '../images/GitHub.png';
import Instagram from '../images/Instagram.png';
import Linkedin from '../images/Linkedin.png';
import Twitter from '../images/Twitter.png';
import telegram2 from '../images/telegram2.png';

export default function Footer(){
    return(
        <footer className='footer'>
            <ul>
                <li><img src={telegram2} alt='img not found'/></li>
                <li><img src={GitHub} alt='img not found'/></li>
                <li><img src={Instagram} alt='img not found'/></li>
                <li><img src={Linkedin} alt='img not found'/></li>
                <li><img src={Twitter} alt='img not found'/></li>
            </ul>
            
        </footer>
    )
}