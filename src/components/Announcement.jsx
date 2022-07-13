import styled from "styled-components"
const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;   //vertically
    justify-content: center; //horizontally
    font-size: 14px;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>
      Swiss stilton monterey jack stilton cheese strings mozzarella smelly cheese feta!
    </Container>
  )
}

export default Announcement
