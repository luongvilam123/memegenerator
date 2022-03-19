import meme from "../images/trollface.png"
export default function Headers() {
    
    return(
        <div className="Header" 
        /* Thẻ div không bị ảnh hưởng display: block từ body
        nếu dùng <header><header/> sẽ bị */> 
            <img clasName="logo" src={meme} alt="meme"/>
            <h2 className="title">Meme generator</h2>
            <h4 className="author">Made by Lam Luong</h4>
        </div>
        )
}