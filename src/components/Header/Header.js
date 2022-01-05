import React, { useEffect,useState}from 'react'
import './Header.css'
// import api from '../../Api'
const Header = () => {
const [btn,setbtn]= useState("false");

const start=()=>{
    console.log("start");
    setbtn(prevState=>!prevState);
    disp();
}
const disp=()=>{
    return(<div><h3>Please log in</h3></div>)
}

useEffect(() => {
 
})
    return (
        <div className="header">
            <span className="title">BiLinguale <span className="glob">🌏</span></span>
            <div className="img-container">
            </div>
                <button className="btn start" onClick={start}><h3> Start!</h3></button>
                <div>
                    {!btn&&disp()}
                </div>
                {/* {displayWords(italianWords)} */}
                {/* {() => displayWords()} */}
                {/* {italianWords} */}
            {/* <div>{()=>displayWords()}</div> */}
            {/* <div className="inputs"></div> */}
        </div>
    )
}

export default Header
