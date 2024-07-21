import React from "react";

const Header = () => {
    return(
        <>
            <header style={{background:"#5BC0F8", padding:"10px", textAlign:"center" }}>
                <h1>My App</h1>
                <nav>
                    <a href="/" style={{margin:'0 10px'}}>Home</a>
                    <a href="/about" style={{margin:'0 10px'}}>About</a>
                    <a href="/contact" style={{margin:'0 10px'}}>Contact</a>
                </nav>
            </header>
        </>
    );
};
export default Header