import React, { useEffect, useState } from 'react'
import './Header.css'
import api from '../../Api'
const Header = () => {
    const [data, setData] = useState();
    const [italianWords, setItalianWords] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const d = await api.getItems();
            let it = [];
            setData(d);
            d.forEach((item) => {
                it.push(item.italian)
                setItalianWords(item.italian);
            })
            console.log("it",it);
            
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


    return (
        <div className="header">
            <span className="title">BiLinguale 🌏</span>
            {/* <button onClick={()=>displayWords(data.italian)}>get italian words</button> */}
            <div>

            </div>
            {/* <div>{()=>displayWords()}</div> */}
            {/* <div className="inputs"></div> */}
        </div>
    )
}

export default Header
