// import memesData from "./memeData"
import React from "react"
export default function Meme(){

    //const [memeImage,setMemeImage]=React.useState("https://i.imgflip.com/30b1gx.jpg")

    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
                                           
})
    const [allMemes,setAllMemes] = React.useState([])
/**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    
    React.useEffect( () =>
    {
        async function getMemes(){
            const response = await fetch(`https://api.imgflip.com/get_memes`)
            const data = await response.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
        
    }, [])
    
    function getMemeimage(){
        // const memeArr = allMemes.data.data.memes
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url

        setMeme( prevMeme =>({
               ...prevMeme,
               randomImage : url
        }))
    }
        function handleChange(event){
            const{name,value}= event.target
            setMeme(prevMeme =>({
                ...prevMeme,
                [name]: value

            }))
        }
        


    return(
    <div className="containner">

        <div className="form">

               <input  
               className="form-input" 
               type="text" 
               placeholder="Top "
               name="topText"
               value={meme.topText}
               onChange={handleChange} />

               <input 
               className="form-input" 
               type="text" 
               placeholder="Bottom"
               name="bottomText"
               value={meme.bottomText}
               onChange={handleChange} />

               <button 
               className="form-button" 
               onClick={getMemeimage} >Get a new meme image  </button>
        </div>

        <div className="meme">
          <img src={meme.randomImage} alt="meme" className="memeImg" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>


    </div>
        
        )
        
            
             
            
             
            
}