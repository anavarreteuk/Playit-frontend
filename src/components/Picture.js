import React, { Component } from 'react'
import '../App.css'



class Picture extends Component {
    render() {
        return (
            <div>
                <img id='mainPicture' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Martha_Argerich_concierto.jpg/1200px-Martha_Argerich_concierto.jpg'} alt='home'/>
                <h1 id='picText' >What would you like to learn today?</h1>
                <h2 id='picTextSub'> Search thousands of teachers for local and online lessons</h2>
                <input id='form' type="text" placeholder="Type of Lesson" />
                <button id='submit'>Search for your lesson </button>
            </div>
        );
    }
}

export default Picture
