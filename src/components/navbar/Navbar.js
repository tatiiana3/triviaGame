import React from 'react';
import {
    AppBar,
} from '@material-ui/core';
import swal from 'sweetalert';

import './NavbarStyle.css'

const Navbar = ({setTriviaStatus, status}) => {
    const refresh = () => {
        swal({
            title: "Do you want to leave the current trivia game?",
            buttons: ["Cancel", "Yes" ],
          })
          .then((willDelete) => {
            if (willDelete) {
                setTriviaStatus(false)
            } 
          });

    }
    return (
        <AppBar position="static" className="navbar">
                <div onClick={() =>{
                    if(status){
                        refresh()
                }}}>
                    Trivia Hero
                </div>
        </AppBar>
    )
}

export default Navbar