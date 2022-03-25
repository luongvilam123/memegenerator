import memesData from "./memeData"
import React from "react"
export default function Meme(){
    const [memeImage,setMemeImage]=React.useState("")
    

    function getMemeimage(){
        const memeArr = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memeArr.length)
        setMemeImage(memeArr[randomNum].url)
        
        

      }

    return(
    <div className="containner">
        <div className="form">
               <input  className="form-input" type="text" placeholder="Top " />
               <input className="form-input" type="text" placeholder="Bottom" />
               <button className="form-button" onClick={getMemeimage} >Get a new meme image  </button>
        </div>
        <img src={memeImage} alt="meme" className="memeImg" />
    </div>
        
        )
        
            
             
            
             
            
}