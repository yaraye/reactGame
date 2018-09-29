import React from 'react';
import {Link} from 'react-router-dom';
import sampleImage from '../sampleImage';

const Nav = props => (
<ul className = 'nav nav-tabs'>

    <li className='nav-brand' id='click'>
        <Link to='/' className='nav-link' onClick ={()=> props.handleShuffle(sampleImage)}>Click Game  </Link>
    </li>
    <li className='nav-brand' id='score' >
        <p>{props.message}</p> 
    </li>
    <li className='nav-brand' id='score' >
        <p>Score: {props.score}</p> 
    </li>
    <li className='nav-brand' id='Topscore' >
    <p>Top Score:{props.topScore}</p>
    </li>
  
</ul>
);

export default Nav;

