import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickedPic, setClickedPic] = useState(null);
  const [pics, setPics] = useState([
    "http://www.freeiconspng.com/uploads/hammer-icon-6.png",
    "https://static.vecteezy.com/system/resources/previews/000/350/572/original/scissor-vector-icon.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.-qkIDjQKxDCB_WSpw6z84gHaHw&pid=Api&P=0&h=180",
    "https://static.vecteezy.com/system/resources/thumbnails/000/358/001/small_2x/Construction__28117_29.jpg",
    "https://static.vecteezy.com/ti/gratis-vektor/p3/552199-zahnrader-icon-kostenlos-vektor.jpg",
    "https://image.freepik.com/free-icon/screwdriver_318-48347.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/84/10/59/1000_F_284105979_vQxfX46tZm9fd3XXWYyu9bfnl9ZSIrO4.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.kgR1s3STFRk0gcvkOgVRXAHaHZ&pid=Api&P=0&h=180"
  ]);
  const back = "https://www.publicdomainpictures.net/pictures/120000/velka/seamless-carpet-pattern-1425829108zuX.jpg";

  let changeImage = (pic, index) => {
    
  };

  return (
    <div>
      {pics.map((pic, index) => (
        <div key={index} onClick={() => handleClick(pic, index)} className="image-container"> 
            <img src={back} alt={`Image ${index}`} width="200px" height="200px" /> 
            <img src={pic} alt={`Image ${index}`} width="200px" height="200px" />
          
        </div>
      ))}
    </div>
  );
}

export default App;
