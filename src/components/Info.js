import React from 'react';
import minion from'../images/minion.jpg';
import me from '../images/me.jpg';
import icon from '../images/Icon.png';


export default function Info(){
    return(
        <div className='info'>
            <img src={minion} className='image' alt='nothing here' />
            <h1 className='name'>Jo Joey</h1>
            <h4 className='title'>Web3 Developer</h4>
            <h5 className='site'>my.website</h5>
            <button className='emailBtn'>
                <img className='emailIcon' src={icon} alt = "icon gone"/>
                Email
            </button>
        </div>
    )
}