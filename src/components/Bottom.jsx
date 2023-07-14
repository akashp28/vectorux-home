import React from 'react'
import styled from 'styled-components'
import logo1 from '../assets/vectoruxlogo.png'


const Container3 = styled.div`
background-color: #191A1D;
width:100%;

.bottom-content{
    display:flex;
    width:100%;
    margin-top: 90px;
}
.logo-div{
    display:flex;
    flex-direction: column;
    width:100%;
    margin:0px 40px 0 40px;
    align-content: center;
    align-items:center;
}
.contact{
    display:flex;
    justify-content:center;
   flex-direction:column;
    width:100%;
    margin:0px 80px 0 0;

}
.msg{
    padding-left:10px;
    margin: 20px 0 0 80px;
    fill:none;
    border-width: 0.1px;
    outline: none;
    border-color: white;
    border-radius: 10px 10px 0 10px;
    background-color: #191A1D;
    color:white;

}

button{
    margin-left: 15px;
    background-color: #63E7DA;
    border-radius: 10px 10px 10px 0;
    outline:none;
    border:none;
    height:20px;
    width:60px;
    color:white;
}
.talk{
    color: #FFF;
font-family: Montserrat;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: normal;

}
span{
    color: #63E7DA;
font-family: Satisfy;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.about{
    color: #D9D9D9;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 40px;
}
.email{
    color: #63E7DA;
display:flex;

}
.emailid{
    color: #63E7DA;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.insta{
    display:flex;
    margin :54px 0 0 20px;
}
.lin{
    display:flex;
    margin :54px 0 0 20px;
}
.connect{
color:white;
font-family: Montserrat;
font-size: 20px;
font-weight: 500;
line-height: 67px;
letter-spacing: 0em;
text-align: left;
float:right;
margin: 180px 20px 0 0;

}
.span-connect{
    color: #63E7DA;
font-family: Satisfy;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
}



@media screen and (max-width: 600px) {
   
    .bottom-content {
        width:100%;
       margin-top: 100px;
      
        
    }
    .logo-div{
        margin-left: 0;
        
    }

    .logo-div img{
       
        width:60px;
        height:60px;

    }
    .contact{
            font-size:10px;
            margin-left: 0;
            margin-right: 0;
            width:100%;

    }
    .talk{
        margin:0px;
        font-size:10px;
    
    }
    .about{
        font-size:8px;
        margin-top: 10px;
    }
    .span-talk{
        font-size:10px;
    }
    .msg{
        margin-left:0px;
        width:80px;
       
        font-size:10px;
    }
    button{
        width:40px;
        height:15px;
        font-size:10px;
    }
    
    .emailid{
        font-size:10px;
       
      
      
    }
    .insta{
        margin: 25px 0 0 10px;
       
       
    }
    .lin{
        margin-top: 25px;
    }
    .connect{
      margin-top: 80px;
        font-size:10px;
    }
    .span-connect{
        font-size:10px;
    }
}


`;


const Bottom = () => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    return (
        <Container3>
            <div className="bottom-content">
                <div className="logo-div">
                    <img src={logo1} alt="" srcset="" width={150} height={150} />
                    <div><input type="text" className='msg' placeholder='write a message' />
                        <button>send</button>
                    </div>

                </div>
                <div className="contact">
                    <div className="talk">Let’s <span className='span-talk'>talk</span> something special.</div>
                    <div className="about">We seek to push the limitations of creativity to create high-engaging, user-friendly and memorable interactive experiences.</div>
                    <div className="email"><h6 className='emailid' onClick={() => window.open('mailto:vectorux0@gmail.com')}>vectorux0@gmail.com</h6>
                        <div className='insta'><i class="fa-brands fa-instagram fa-beat" onClick={() => openInNewTab('https://www.instagram.com/vectorux.in')} ></i></div>
                        <div className="lin"><i class="fa-brands fa-linkedin fa-beat" onClick={() => openInNewTab('https://www.linkedin.com/company/vectorux')}></i></div>
                    </div>
                </div>
            </div >
            <div className="connect">Let’s <span className='span-connect'>connect</span> there</div>


        </Container3 >
    )
}

export default Bottom