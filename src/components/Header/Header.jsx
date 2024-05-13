
import styled from "styled-components"



const Wrapper = styled.div`
    width: 100%;
    height: 55px;
    margin: 0 auto;

    

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between !important;
    align-items: center;
    padding-left: 420px;
    
    background-color:#343a40 ;

    position: sticky;
        top: 0;

    
    font-size: 20px;
    strong{color:white}
    
`;


  
const Header = () => {
    return (
      <>
        <Wrapper>
        
       <div class="container">
        <a href="#" class="navbar-brand d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="white" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
        <strong>Album</strong>
       </a>

       
       </div>
        </Wrapper>

      

        
        
        
       
      </>
        

       

       
   
    )
}

 
export default Header;