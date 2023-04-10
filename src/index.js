import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Header(){
  return(
  <div class="header">
      <nav class="a">
        <img class="b" src="https://www.kindpng.com/picc/m/410-4105079_decent-memes-png-logo-harry-potter-starbucks-transparent.png" height="50" width="50"/>
        <h1> Meme Generator</h1>
        <p> React Course - Project 3</p>
      </nav>
      </div>
  )
}

function Maincontent(){
  
  //const[memeimage,setmemeimage]=React.useState("https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg");
  
  const[memeimage,setmemeimage]=React.useState({  
    toptext:"",   
    bottomtext:"",
   randomimage:"https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg" 
  })
  
  
  const[allmemeimage,setallmemeimage]=React.useState([]);
  
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setallmemeimage(data.data.memes))
    
  },[])
  
  function Handlechange(event){
    const{name,value}=event.target
    setmemeimage(prevstate=>(
   {
     ...prevstate,
    [name]:value
   }))
    
    
  }
 
  function Meme()
  {
   
    const randomnumber=Math.floor(Math.random()*allmemeimage.length);
    const url=allmemeimage[randomnumber].url
   setmemeimage(prevstate=>(
   {
     ...prevstate,
     randomimage:url
   })
   );
  }
  return(
  <div class="maincontent">
      <form> 
        <input 
          type="text"
          id="first" 
          placeholder="top"
          name="toptext"
          value={memeimage.toptext}
          onChange={Handlechange}
          />
          <input type="text" id="second"  name="bottomtext"
          value={memeimage.bottomtext}
          onChange={Handlechange}
            placeholder="bottom"/>
          </form>
          <button onClick={Meme}>Get a new meme image</button>
      <div class="image">
          <img src={memeimage.randomimage} class="yoho"/>
        <h2 class="top">{memeimage.toptext}</h2>
        <h2 class="bottom">{memeimage.bottomtext}</h2>
      
      </div>
          
      </div>
      )
}

function Page(){
  return(
  <div class="maindiv">
      <Header/>
    <Maincontent/>
  </div>
  )
}

ReactDOM.render(<Page/>,document.getElementById("root"))  