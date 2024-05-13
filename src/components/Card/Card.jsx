import styled from "styled-components"


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const CardContainer = styled.div`
  width: 350px;
  margin: 100px -20px 0px 147px ; 
  
 
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  
  
    
    
`
const CardThumbnail = styled.div`
    width: 350px;
    height: 230px;
    position: relative;
    background-color: gray;
    display: flex;
  flex-direction: column;
`

const Thumbnail = styled.img`
    width: 100%;
    height: 240px;
    background-size: cover;
    background-position: center; 
    background-image: url('/src/assets/MyCat.jpg'); 
`



const CardText = styled.p`
 width: 350px;
 height: 90px;
text-align: center;
margin-top: 40px;
`
const Button1 =styled.button`
position: relative;
   bottom: -10px;
   left: 30px;
`

const Button2 = styled.button`
   position: relative;
   bottom :-10px;
   left: 30px;
`
const Time = styled.p`
  position: relative;
  bottom :20px;
  left: 280px;
  font-size: small;
`

const Card = () => {
    
    return (
    <div>
    <Container>
    <CardContainer>
        <CardThumbnail>
            <Thumbnail ></Thumbnail>
        </CardThumbnail>
        <CardText>This is a wider card with supporting text <br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</CardText>

        <Button1>View</Button1>
        <Button2>Edit</Button2>

        <Time>9 mins</Time>
    </CardContainer>
        
    <CardContainer>
        <CardThumbnail>
       
            <Thumbnail ></Thumbnail>
        </CardThumbnail>
        <CardText>This is a wider card with supporting text <br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</CardText>

        <Button1>View</Button1>
        <Button2>Edit</Button2>

        <Time>9 mins</Time>
    </CardContainer>
    <CardContainer>
          <CardThumbnail>
            <Thumbnail ></Thumbnail>
        </CardThumbnail>
        <CardText>This is a wider card with supporting text <br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</CardText>

        <Button1>View</Button1>
        <Button2>Edit</Button2>

        <Time>9 mins</Time>


    </CardContainer>


    <CardContainer>
        <CardThumbnail>
            <Thumbnail ></Thumbnail>
        </CardThumbnail>
        <CardText>This is a wider card with supporting text <br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</CardText>

        <Button1>View</Button1>
        <Button2>Edit</Button2>

        <Time>9 mins</Time>
    </CardContainer>

    <CardContainer>
        <CardThumbnail>
            <Thumbnail ></Thumbnail>
        </CardThumbnail>
        <CardText>This is a wider card with supporting text <br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</CardText>

        <Button1>View</Button1>
        <Button2>Edit</Button2>

        <Time>9 mins</Time>
    </CardContainer>

    <CardContainer>
        <CardThumbnail>
            <Thumbnail ></Thumbnail>
        </CardThumbnail>
        <CardText>This is a wider card with supporting text <br></br> below as a natural lead-in to additional<br></br> content. This content is a little bit longer.</CardText>

        <Button1>View</Button1>
        <Button2>Edit</Button2>

        <Time>9 mins</Time>
    </CardContainer>

    
    </Container>
        
    </div>
    )

}







export default Card;