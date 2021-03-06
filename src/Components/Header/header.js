import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";


const Header = () => {
  return (
    
 <MDBContainer className="text-center">
<MDBRow>
  <MDBCol>
    <MDBJumbotron className="Header bg-success text-light">
      <h2 className="font-weight-bold h1 display-4">MyGifys</h2>
      <br></br>
      <p className="lead">
        Search and save your favorite GIFS.
      </p>
      
    </MDBJumbotron>
  </MDBCol>
</MDBRow>
</MDBContainer> 
    
  )
}

export default Header;