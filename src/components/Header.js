import React from 'react'
import logo from './logo.JPG'
import './Header.css'
import {Link, useHistory} from 'react-router-dom';
import Choice from './Choice';
import {useState} from 'react'


function Header() {
    const history = useHistory();
    const navigateTo = () => {
        history.push('/Choice');
    }
    const [copydata,  setCopydata] = useState('');

    return (
        <div class="container">
            <img class ="logo_image" src = {logo}></img>
            <div class="btn_container">
                <button id="btn_first" class="btn1" onClick={navigateTo}>Create Survey</button>
            </div>
            <div>
                <Link to="/description">
                <button class="btn2" >Take Survey</button>
                </Link>
            </div>
        </div>
    )
}

export default Header
