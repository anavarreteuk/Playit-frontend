import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'


import '../App.css'


class Category extends Component {

   

    render() {
       
        return (
            <div>
                <h1 id='instText' >{this.props.inst}</h1>
            </div>
        );
    }
}

export default withRouter( Category)
