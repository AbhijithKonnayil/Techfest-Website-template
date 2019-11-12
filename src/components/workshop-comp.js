import React, {Component} from 'react'
import './workshops.css'
class WorkshopComp extends Component{
    render(){
        return(
            <div className="workshop-comp">
                <h2>{this.props.name}</h2>
                <h3>{this.props.fees}</h3>
                <h4>{this.props.venue}</h4>
            </div>
        );
    }
}

export default WorkshopComp;