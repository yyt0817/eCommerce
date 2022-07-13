import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'
const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "fff8f8" })}
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props=>props.color};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>RE-USE</Logo>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illo consequuntur est aliquid, sint culpa optio nam
          </Desc>
          <SocialContainer>
             <SocialIcon color="3B5999">
                 <Facebook/>
             </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Category#1</ListItem>
              <ListItem>Category#2</ListItem>
              <ListItem>Category#3</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/>3335 S Figueroa Street Los Angeles, CA 90007
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/>+1 234 56 78
          </ContactItem>
          <ContactItem>
            <Mail style={{marginRight:"10px"}}/>contact@reuse.com
          </ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
