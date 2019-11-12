import React, {Component} from 'react'
import './nav.css'
class NavBar extends Component{
    render(){
        return(
            <nav>
                <h1>Flagship Event</h1>
                <ul>
                    <li>About</li>
                    <li>Workshops</li>
                    <li>Speakers</li>
                    <li>Register</li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;