import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Language =  styled.div`
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid red;
`
const Left = styled.div`
    flex:1;
    display: flex;
`
const Center = styled.div`
    flex:1;
`
const Right = styled.div`
    flex:1;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        search
                    </SearchContainer>
                </Left>
                <Center>
                    Center
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>SignIN</MenuItem>
                    <MenuItem>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
