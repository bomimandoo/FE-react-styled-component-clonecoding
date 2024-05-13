import styled from "styled-components"

const Wrapper = styled.div`




`
const Title = styled.h1`
display: flex;
text-align: center;
font-size: 40px;
font-weight: 200;
justify-content: center;
padding-top: 55px;
`

const Content = styled.h3`
display: flex;
text-align: center;
justify-content: center;
font-weight: 200;
`

const ButtonContainer = styled.div`
 display: flex;
 justify-content: center;

 
`
const Button1 = styled.button`
  background-Color: #007bff;
  border: none;
  border-Radius: 5px;
  font-Size: 17px;
  font-Weight: lighter;
  padding: 10px 10px;
  color: white;

           
`

const Button2 = styled.button`
  background-color: gray;
  border: none;
  border-Radius: 5px;
  font-Size: 17px;
  font-Weight: lighter;
  padding: 10px 10px;
  color: white;
  margin-left: 10px;
`

const Main = () => {
    return (
        <div>
            <Wrapper>
                <Title>Album example </Title>
            
                <Content>Something short and leading about the collection below—its contents, <br></br> the creator, etc. Make it short and sweet, but not too short so folks don’t<br></br> simply skip over it entirely.</Content>

                <ButtonContainer>
                  <Button1>Main call to action</Button1>
                  <Button2>Secondary action</Button2>
                </ButtonContainer>
            </Wrapper>
        </div>
    )


}




export default Main;