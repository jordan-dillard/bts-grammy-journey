import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [toggleImage, setToggleImage] = useState(true);

  return (
    <div className="Interactive">
      <div className="Headline">
        <h1>Why do Western audiences hate non-English-speaking artists...</h1>
      </div>
      <div className="Lede">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p>Quam viverra orci sagittis eu volutpat. Ac felis donec et odio. Varius quam quisque id diam vel. Pretium viverra suspendisse potenti nullam ac tortor. </p>
      </div>
      <div className="Intro">
        <p> Cursus risus at ultrices mi tempus imperdiet. Sit amet 
          consectetur adipiscing elit. Nam aliquam sem et tortor 
          consequat id. Odio eu feugiat pretium nibh ipsum. Felis 
          imperdiet proin fermentum leo vel orci porta non. Placerat 
          orci nulla pellentesque dignissim enim sit amet venenatis 
          urna. In nisl nisi scelerisque eu ultrices vitae. Eros 
          donec ac odio tempor orci dapibus ultrices in. Pellentesque 
          habitant morbi tristique senectus et netus et.
        </p>
        <p>
        Tortor condimentum lacinia quis vel eros donec ac. Nisl 
        pretium fusce id velit. Ac odio tempor orci dapibus ultrices.
        Aliquam purus sit amet luctus venenatis lectus. Quisque non
        tellus orci ac auctor augue mauris augue. In hendrerit 
        gravida rutrum quisque non tellus orci ac auctor. Lectus 
        arcu bibendum at varius vel pharetra. Laoreet suspendisse 
        interdum consectetur libero id faucibus. 
        </p>
      </div>
      <div className="Transition">
        <p>Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Etiam non quam lacus suspendisse faucibus interdum.</p>
      </div>
      <div className="Sub-Header">
        <h2>Who is BTS?</h2>
      </div>
      <div className="Sub-Header">
        <h2>Who is Luis Fonsi?</h2>
      </div>
      <div className="Sub-Header">
        <h2>Ratings, Streams and Respect</h2>
      </div>


      {/* <div className="K-Pop">

              <div className="BTS-Title">
                <p>BTS</p>
              </div>

              <div className="Lyric-Comparison">
                  <div className="Analysis">
                    Some Analysis
                  </div>
                  <div className="Lyrics">
                    'Cause I, I, I'm in the stars tonight <br></br>
                    So watch me bring the fire and set the night alight (Hey) <br></br>
                    Shinin' through the city with a little funk and soul <br></br>
                    So I'ma light it up like dynamite, woah-oh-oh <br></br>
                  </div>
                  <div className="Lyrics">
                    불타오르네 <br></br>
                    (Ayy, ayy-oh, ayy-oh) <br></br>
                    싹 다 불태워라 Bow-wow-wow <br></br>
                    (Ayy, ayy-oh, ayy-oh) <br></br>
                    싹 다 불태워라 Bow-wow-wow <br></br>
                  </div>
                  <div className="Analysis">
                    Some Analysis
                  </div>


              </div>


        </div> */}
        
      <div className="Latin-Pop">
        
      </div>

    </div>
  );
}

export default App;
