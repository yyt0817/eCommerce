import styled from "styled-components"
import { mobile } from "../Responsive"
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";
const Front = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Back = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20 vh" })}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`
const CategoryItem = ({item}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    <Front>
      <Image src={item.img}/>
      <Info>
          <Title>{item.title}</Title>
          <Button onClick={handleClick}>SHOP NOW</Button>
      </Info>
    </Front>
    <Back>
        <Image src={item.img2} />
        <Info>
          <Title>{item.title2}</Title>
          <Button onClick={handleClick}>click to flip</Button>
        </Info>
    </Back>
    </ReactCardFlip>
  )
}

export default CategoryItem
