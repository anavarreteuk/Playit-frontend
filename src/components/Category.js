import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'


import '../App.css'


class Category extends Component {

   

    render() {
    //    console.log(this.props.inst)
        return (
            <div>
                <h1 id='instText' >{this.props.inst}</h1>
            </div>
        );
    }
}

export default withRouter( Category)
