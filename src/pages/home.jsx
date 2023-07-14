import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Middle from '../components/Middle';
import Bottom from '../components/Bottom';

const Container = styled.div``;

const home = () => {
    return (

        <Container>
            <Navbar />
            <Middle />
            <Bottom />
        </Container>
    )
}

export default home