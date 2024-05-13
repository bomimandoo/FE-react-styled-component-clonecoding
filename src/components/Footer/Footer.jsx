import styled from "styled-components"

const Box = styled.div`
    width: 100%;
    height: 200px;
    background-color: #f7f7f7;
`

const Text = styled.p`
    font-size: 15px;
    position: relative;
    left: 400px;
    top: 90px;
    a{color: blue}
`
const BackText = styled.p`
  font-size: 15px; 
  color : blue;
  float: right;
  margin-left: 10px;
  margin-right: 220px;
  margin-top: 50px;
  cursor: pointer;

`




const Footer = () => {
    
    return (
        <Box>

            <Text>Album example is © Bootstrap, but please download and customize it for yourself!<br></br>
            New to Bootstrap? <a href="#">Visit the homepage</a> or read our <a href="#">getting started guide.</a></Text>

            <BackText a href="#">Back to top</BackText>
        </Box>

    )
}







export default Footer;