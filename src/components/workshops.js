import React, {Component} from 'react'
import './workshops.css'
import WorkshopComp from './workshop-comp'
class Workshops extends Component{
    render(){
        return(
            <div className="workshops">
                <WorkshopComp name="React JS" venue="Networking Lab" fees="500 Rs"/>
                <WorkshopComp name="Django" venue="OS Lab" fees="600 Rs"/>
                <WorkshopComp name="Node JS" venue="IT Lab" fees="500 Rs"/>
                <WorkshopComp name="Maya" venue="Sopanam" fees="1500 Rs"/>
                <WorkshopComp name="MySQL" venue="DBMS Lab" fees="500 Rs"/>
                <WorkshopComp name="React JS" venue="Networking Lab" fees="500 Rs"/>
                <WorkshopComp name="Django" venue="OS Lab" fees="600 Rs"/>
                <WorkshopComp name="Node JS" venue="IT Lab" fees="500 Rs"/>
            </div>
        );
    }
}

export default Workshops;