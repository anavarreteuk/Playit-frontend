import React, { Component } from 'react'


import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Button from '@material-ui/core/Button'
import '../App.css'



class NavBar extends Component {
    render() {
        return (
            <div className='NavBar' >
                <img src={'./logo.png'} alt='logo'/>
                <Button>Sign Up</Button>
                <Button>Log In</Button>
                <Button>Lessons</Button>
                <Button>   
                    <ShoppingCartIcon/>
                    Cart
                </Button>

            </div>
        );
    }
}

export default NavBar
