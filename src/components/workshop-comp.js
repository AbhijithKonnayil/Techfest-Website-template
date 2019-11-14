import React, {Component} from 'react'
import './workshops.css'
class WorkshopComp extends Component{
    constructor(){
        super()
        this.state = {
            message : "Register for Workshop"
        }
    }
    registerWorkshop(){
        this.setState({
            message:'Added to Cart',
        })
        console.log("State changed with setState", this.state.message)
    }
    registerWorkshopDir(){
        this.state.message="New Message"
        console.log("State directly assigned",this.state.message)
    }
    render(){
        return(
            <div className="workshop-comp">
                <h2>{this.props.name}</h2>
                <h3>{this.props.venue}</h3>
                <h4>{this.props.fees}</h4>
                <h4>{this.state.message}</h4>
                <button onClick={()=>this.registerWorkshop()}>Register</button>
            </div>
        );
    }
}

export default WorkshopComp;