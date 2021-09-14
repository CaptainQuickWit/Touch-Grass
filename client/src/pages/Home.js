import React from "react";
import grasskid from '../images/touchgrasskid.jpg';
import Nav from '../components/Nav';

function Home() {

    let url = 'https://www.gofundme.com/f/touchgrass';
    return (
        <div>

            <div className="m-0 text-center text-light bg-gradient">
                <nav class="navbar navbar-dark bg-gradient">
                    <Nav/>
                </nav>                
            </div>
            
            <div className="bg-gradient"
                style={{
                    color: "black",
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/grass.png'})`
                }} >
          

            <div className="" >
              
                    <div className="row align-items-center text-dark bg-gradient">
                  
                  <div className="col-lg-7">

                    <img 
                    className="img-fluid rounded mb-4 mb-lg-0"
                    alt="picture of baby"
                    src={grasskid} />
                  </div>

                  <div className="col-lg-5">
                      <h1 className="font-weight-light">Touch-Grass</h1>
                    <p>
                          Welcome to Touch Grass! This web application is a game that give's user's a random location to go, just like pokemon go, to get people to meet up.
                          
                    </p>

                      
              </div>                      
            </div>
      </div>
            </div>
</div>
  );
}

export default Home; 
