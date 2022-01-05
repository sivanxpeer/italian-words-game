import React, { useEffect, useState } from 'react'
import './Header.css'
import api from '../../Api'
const Header = () => {

    return (
        <div className="header">
            {/* <img className= "img-glob" src={"https://static.vecteezy.com/system/resources/previews/001/197/966/non_2x/earth-png.png"} alt="" /> */}

            <span className="title">BiLinguale <span className="glob">🌏</span></span>
            {/* <span className="title">BiLinguale</span> */}
            <div className="img-container">
                {/* <img className="main-img" src={"https://images.unsplash.com/photo-1597392582469-a697322d5c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}></img> */}
            </div>
            <div >
                {/* <button>Get italian words</button> */}



                {/* {displayWords(italianWords)} */}
                {/* {() => displayWords()} */}
                {/* {italianWords} */}
            </div>
            {/* <div>{()=>displayWords()}</div> */}
            {/* <div className="inputs"></div> */}
        </div>
    )
}

export default Header
