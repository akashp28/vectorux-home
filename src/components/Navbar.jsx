import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/img1.png'

import { useState, useEffect } from 'react';

const Container = styled.div`
    position:relative;

    .bgimg{
        background-image:url(${img1});
        background-size: 100% 100%;
    height: 100vh;
    width: 100%;
    
    }

   .nav-main{
  
    display:flex;
    justify-content:space-between;
    float:right;
  
   }
   .links{
    display:flex;
   color:#FFFFFF;
   
   }
   .link1{
    margin-right: 40px;
    font-family: Lato;
    font-size: 20px;
    font-weight: 600;
    line-height: 58px;
    letter-spacing: 0em;
   

    
   }
   .icon{
    display:none;
   }
.img1{
    width:100%;
}
   

.side-nav{
    width:130px;
    height:20vh;
    background-color:#63E7DA;
    position:absolute;
    top:0;
    left:0;
    transform:translateY(${(props => props.value ? "0px" : "-300px")});
    transition: all 1.5s ease;
    display:flex;
    flex-direction:column;
    align-items: center;
    border-radius: 0px 0px 300px 200px;
    
}

   .link1-side{
    font-size: 20px;
    margin: 10px 0 20px 0px;
    font-family: Lato;
    font-weight: 600;
    text-transform: capitalize;
   }
.name{
    display:flex;
    float:left;
    flex-direction:column;
    font-family: Staatliches;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    margin: 40vh 0 0 20vh;
    color:white;
}
.ux{
    color:#63E7DA
}
.vectorabt{
font-family: Merienda;
font-size: 20px;
font-weight: 200;
margin-top:-13px;
}

@media screen and (max-width: 600px) {
    .icon{
        display:flex;
        float:left;
        margin-right: 10px;
        color: #63E7DA;
    }
    .links{
        display:none;
        
    }
    
.name{
    
    font-size: 10px;
    font-weight: 200;
    margin: 40vh 0 0 4vh;
}

.vectorabt{
font-size: 10px;
font-weight: 100;
}
    
    
    
}


`;

const Navbar = () => {

    const [state, setstate] = useState(false);

    return (
        <Container value={state}>
            <div className="bgimg">
                <div className="nav-main">

                    <div className="links">
                        <div className="link1">HOME</div>
                        <div className="link1">ABOUT</div>
                        <div className="link1">CONTACT</div>
                    </div>
                    <div className="icon" onClick={() => setstate(!state)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className="side-nav">

                    <div className="links-side">
                        <div className="link1-side">HOME</div>
                        <div className="link1-side">ABOUT</div>
                        <div className="link1-side">CONTACT</div>

                    </div>
                </div>
                <div className="name">
                    <h1 >VECTOR<span className='ux'>UX</span></h1>
                    <div className='vectorabt'>we ideate, create <span className='ux' >&</span> innovate</div>
                </div>

            </div>
        </Container >
    )
}

export default Navbar