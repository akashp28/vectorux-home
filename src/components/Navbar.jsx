import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/img1.png';
import icon1 from "../assets/uiux.png";
import icon2 from "../assets/tools.png";
import icon3 from "../assets/pen.png";
import icon4 from "../assets/laptop.png";
import { useState, useEffect } from 'react';

const Container = styled.div`
    position:relative;

    .bgimg{
        background-image:url(${img1});
        background-size: 100% 100%;
    height: 60vh;
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
    font-size: 15px;
    font-weight: 600;
    line-height: 58px;
    letter-spacing: 0em;    
   }
   .link1:hover
   {color:#63E7DA;
  text-shadow:0px 0px 30px #63E7DA;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  -webkit-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
  font-size:20px;
   }
   

   .icon{
    display:none;
   }
.img1{
    width:100%;
}

.nav-icon{
    margin: 20px 10px 0 0;
}
   

.side-nav{
    width:100px;
    height:120px;
    background-color:#63E7DA;
    position:absolute;
    top:0;
    left:0;
    transform:translateY(${(props => props.value ? "0px" : "-300px")});
    transition: all 1s ease;
    display:flex;
    flex-direction:column;
    align-items: center;
    border-radius: 0px 0px 20px 20px;
    
}

   .link1-side{
    font-size: 15px;
    margin: 15px 0 20px 0px;
    font-family: Lato;
    font-weight: 900;
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
    margin: 24vh 0 0 20vh;
    color:white;
}
 .name1{
   animation: color-animation .8s linear infinite;
 }  
   
.h11{
    letter-spacing:0.3em;
    --color-1:  #63E7DA;
    --color-2: white;
}

.vectorabt:hover{
    color:#63E7DA;
  text-shadow:0px 0px 40px #63E7DA;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  -webkit-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
  
} 
.s1{
    color: #63E7DA;
}
.ux{
   
    --color-2:  #63E7DA;
    --color-1: white;
}
@keyframes color-animation {
    0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-1)}
  99%   {color: var(--color-1)}
  100%  {color: var(--color-1)}
}

.vectorabt{
font-family: Merienda;
font-size: 15px;
font-weight: 200;
margin-top:-24px;

}
.work{
    margin-top: -30px;
    display:flex;
    justify-content:space-between;
  
}
 svg:hover{
    height:270px;
    width:400px
    
} 
.def{
   color: #8F8F8F;
font-family: Montserrat;
font-size: 54px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.topic{
    font-family: Montserrat;
font-size: 60px;
font-style: normal;
font-weight: 600;
line-height: normal;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.27) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin:40px 0 40px 0;
}



@media screen and (max-width: 600px) {
    .icon{
        display:flex;
        float:left;
        margin: 15px 10px 0 0;
        color: #63E7DA;
    }
    .links{
        display:none;
        
    }
    
.name{
    
    font-size: 10px;
    font-weight: 200;
    margin: 24vh 0 0 4vh;
}

.vectorabt{
font-size: 8px;
font-weight: 100;
margin-top: -8px;
}

svg{
    width: 80px;
height: 100px;
flex-shrink: 0;
}

svg:hover{
    height:120px;
    width:100px;
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
                        <div className="nav-icon"><i class="fa-solid fa-house" ></i></div> <div className="link1">HOME</div>
                        <div className="nav-icon"><i class="fa-brands fa-searchengin" ></i></div><div className="link1">ABOUT</div>
                        <div className="nav-icon"><i class="fa-solid fa-phone" ></i></div><div className="link1">CONTACT</div>
                    </div>
                    <div className="icon" onClick={() => setstate(!state)}>
                        <i className="fa-solid fa-bars fa-shake fa-xl"></i>
                    </div>
                </div>
                <div className="side-nav">

                    <div className="links-side">
                        <div className="link1-side"><i class="fa-solid fa-house" ></i>HOME</div>
                        <div className="link1-side"><i class="fa-brands fa-searchengin" ></i>ABOUT</div>
                        <div className="link1-side"><i class="fa-solid fa-phone" ></i>CONTACT</div>

                    </div>
                </div>
                <div className="name">
                    <div className='name1'>
                        <h1 className='name1 h11'>VECTOR<span className='name1 ux'>UX</span></h1></div>
                    <div className='vectorabt'>we ideate, create <span className='s1' >&</span> innovate</div>
                </div>
            </div>
            <div className="work">

                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="250" viewBox="0 0 594 832" fill="none">
                    <path d="M2.5 5.00002C2.5 3.6193 3.6193 2.5 5 2.5H494C547.848 2.5 591.5 46.1522 591.5 100V829.5H100C46.1522 829.5 2.5 785.848 2.5 732V5.00002Z" fill="#3C3C3C" stroke="#63E7DA" stroke-width="10" />

                    <foreignObject x="40" y="130" width="531" height="700">
                        <img src={icon1} width={100} height={100} />
                        <div className='topic'>UI & UX</div>
                        <div className="def"> Designing interfaces that are intuitive, efficient, and enjoyable to use.</div>
                    </foreignObject></svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="250" viewBox="0 0 594 832" fill="none">
                    <path d="M2.5 2.5H494C547.848 2.5 591.5 46.1522 591.5 100V829.5H100C46.1522 829.5 2.5 785.848 2.5 732V2.5Z" fill="#3C3C3C" stroke="#63E7DA" stroke-width="10" />
                    <foreignObject x="40" y="130" width="531" height="700">
                        <img src={icon2} width={100} height={100} />
                        <div className='topic'>Web & Mobile App</div>
                        <div className="def">Transforming ideas into exceptional web and mobile app experiences.</div>
                    </foreignObject>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="250" viewBox="0 0 594 832" fill="none">
                    <path d="M2.5 2.5H494C547.848 2.5 591.5 46.1522 591.5 100V829.5H100C46.1522 829.5 2.5 785.848 2.5 732V2.5Z" fill="#3C3C3C" stroke="#63E7DA" stroke-width="10" />
                    <foreignObject x="40" y="130" width="531" height="700">
                        <img src={icon3} width={100} height={100} />
                        <div className='topic'>Design & Creative</div>
                        <div className="def">Crafting visually stunning designs that connect with your audience.</div>
                    </foreignObject>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="250" viewBox="0 0 594 832" fill="none">
                    <path d="M2.5 2.5H494C547.848 2.5 591.5 46.1522 591.5 100V829.5H100C46.1522 829.5 2.5 785.848 2.5 732V2.5Z" fill="#3C3C3C" stroke="#63E7DA" stroke-width="10" />
                    <foreignObject x="40" y="130" width="531" height="700">
                        <img src={icon4} width={100} height={100} />
                        <div className='topic'>Development</div>
                        <div className="def">Bringing your vision to life with the latest technology and design trends.</div>
                    </foreignObject>
                </svg>


            </div>
        </Container >
    )
}

export default Navbar