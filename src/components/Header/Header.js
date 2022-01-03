import React, { useEffect, useState } from 'react'
import './Header.css'
import api from '../../Api'
const Header = () => {
    const [data, setData] = useState();
    const [italianWords, setItalianWords] = useState();
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        let it = [];
        const fetchData = async () => {
            const dataObj = await api.getItems();
            setData(dataObj);

            console.log(dataObj);
            dataObj.forEach((item) => {
                it.push(item.italian)

                // setItalianWords((prevItem)=>{console.log(prevItem)});
            })
            setItalianWords(it);
            console.log("it", it);

        };

        fetchData();
    }, []);

    // console.log("hiiii", data)
    // const displayWords = (elements) => {
    //     const mappedElements =elements.map((word) => {
    //         return (<div>
    //         {word.italian}
    //     </div>
    //      ) })
    //     return mappedElements
    // }

    // useEffect(() => {},)
    function displayWords() {
        return italianWords.map((word) => { return (<span key={word}>{word}</span>) })
    }

    const handleClick = () => {
        // setFlag(true);
        setFlag(prev => !prev);
    }

    return (
        <div className="header" data={data}>
            <span className="title">BiLinguale 🌏</span>
            <div className="img-container">
                {/* <img className="main-img" src={"https://images.unsplash.com/photo-1597392582469-a697322d5c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}></img> */}
            </div>
            <button onClick={handleClick}>get italian words</button>
            <div >
                {/* <button>Get italian words</button> */}


                {flag && displayWords()}

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
