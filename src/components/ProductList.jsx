import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Announcement from './Announcement'
import Products from './Products'
import Newsletter from './Newsletter'
import Footer from './Footer'
import {mobile} from '../Responsive'
const Container = styled.div`
    
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0 20px", display:"flex",
flexDirection:"column" })}
`
const Title = styled.h1`
    margin: 20px;
`
const FilterText = styled.span`
   font-size: 20px;
   font-weight: 600;
   margin-right: 20px;
   ${mobile({ marginRight: "0" })}
`
const Select = styled.select`
    padding: 10px;
    margin: 0px 10px;
    ${mobile({ margin: "10px 0" })}
`
const Option = styled.option`
    
`
const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Women</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter products:</FilterText>
                <Select>
                    <Option>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort products:</FilterText>
                <Select>
                        <Option>newest</Option>
                        <Option>price(asc)</Option>
                        <Option>price(desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
