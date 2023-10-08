import React from "react"
import img1 from '../images/troll-face.png'

export default function Header() {
    return (
        <header className="header" id="header-this">
            <img 
                src={img1}
                className="header--image" 
                id="header-this-image"
            />
            <h2 className="header--title"
            id="header--title">Meme Generator</h2>
        </header>
    )
}