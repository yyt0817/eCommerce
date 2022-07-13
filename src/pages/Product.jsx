import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../Responsive'
const Container = styled.div`
    
`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({ padding: "10px" ,flexDirection: "column"})}
   
`
const ImageContainer = styled.div`
    flex: 1; 
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weigth: 100;
    font-size: 40px;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 50%;
   margin: 30px 0;
   ${mobile({ width: "100%" })}
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`
const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props=>props.color};
   margin: 0 5px;
   cursor: pointer;
`
const FilterSize = styled.select`
   margin-left: 10px;
   padding: 5px;
`
const FilterSizeOption = styled.option`
   
`
const AddContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 50%;
   ${mobile({ width: "100%" })}

`
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
`
const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 5px;
`
const Button = styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 500;
   &:hover{
       background-color: #f8f4f4;
   }
`
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImageContainer>
            <InfoContainer>
                <Title>Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae molestias eius ipsum ratione soluta! Reiciendis in, rerum corrupti quidem, aut, deserunt sit nesciunt minus ipsam placeat dicta possimus tempora labore.</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
