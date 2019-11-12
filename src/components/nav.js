import React, {Component} from 'react'
import './nav.css'
class NavBar extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Maps</li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;