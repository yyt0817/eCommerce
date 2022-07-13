import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../Responsive'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    text-align: center;
    font-weight: 300;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const TopButton = styled.button`
    padding: 10px;
    cursor: pointer;
    font-weight: 300;
    color: ${props => props.type === "filled" && "white"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    border: ${props=>props.type === "filled" && "none"};
`
const TopTexts = styled.div`
    display: flex;
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
    margin: 0 10px;
    text-decoration: underline;
    cursor: pointer;
`

const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    padding: 20px;
    border: solid lightgray 0.5px;
    border-radius: 10px;
    height: 50vh;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductSize = styled.div`
    
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryTitle = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const SummaryItemText = styled.span`
    
`
const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    font-weight: 600;
`
const cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                  <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                            <Details>
                                <ProductName><b>Product:</b>SHOES</ProductName>
                                <ProductId><b>ID:</b>123456</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>10</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>2</ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 50</ProductPrice>                   
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                            <Details>
                                <ProductName><b>Product:</b>SHOES</ProductName>
                                <ProductId><b>ID:</b>123456</ProductId>
                                <ProductColor color="gray"/>
                                <ProductSize><b>Size:</b>10</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>2</ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 50</ProductPrice>                   
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemText>$ 80.0</SummaryItemText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemText>$ 5.90</SummaryItemText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemText>- $ 5.90</SummaryItemText>
                    </SummaryItem>
                      <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemText>$ 80.0</SummaryItemText>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default cart
