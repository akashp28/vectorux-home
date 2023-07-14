import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Middle from '../components/Middle';

const Container = styled.div``;

const home = () => {
    return (

        <Container>
            <Navbar />
            <Middle />

        </Container>
    )
}

export default home