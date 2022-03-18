import meme from "../images/trollface.png"
export default function Headers() {
    
    return(
        <div className="Header" 
        /* Thẻ div không bị ảnh hưởng display: block từ body
        nếu dùng <header><header/> sẽ bị */> 
            <img src={meme} alt="meme"/>
            <h2>Meme generator</h2>
            <h4>Made by Luong Vi Lam</h4>
        </div>
        )
}