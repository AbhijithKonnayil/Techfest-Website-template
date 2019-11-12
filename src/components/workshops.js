import React, {Component} from 'react'
import './workshops.css'
import WorkshopComp from './workshop-comp'
class Workshops extends Component{
    render(){
        return(
            <div className="workshops">
                <WorkshopComp/>
            </div>
        );
    }
}

export default Workshops;