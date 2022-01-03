// import React, { useState } from 'react';
// import axios from "axios";
// //this is the api for translating 


// const WordsData = () => {
//     const arr = ["father", "mother", "sister", "brother"];
//     //method to get a word in a language and 5 words in english, (one of them is the right translation)
//     const [myData, setMyData] = useState(null);
//     // useEffect(()=>{counter+=1},[myData]) //equal to componentDidmount
//     const [counter,setCounter]=useState(0);
//     const getData = async (textParam) => {
//         try {
//             if(arr[counter])
//             {
//                 const { data } = await axios.get("https://nlp-translation.p.rapidapi.com/v1/translate", {
//                     params: { text: textParam, to: 'it', from: 'en' },
//                     headers: {
//                         'x-rapidapi-host': 'nlp-translation.p.rapidapi.com',
//                         'x-rapidapi-key': 'd40f514ce8msh502a22fb9b4072bp110b64jsn102955aa68b4'
//                     }
//                 })
//                 setMyData(data);
//                 setCounter(prevState=>prevState+1);
//                 console.log(data.original_text, data.translated_text);
//             }
//         } catch (error) {
//             console.log(error.message);
//         }

//     }

//     return (
//         <div>
//             <button onClick={() => getData(arr[counter])}>Get data</button>

//             <div>{myData && myData.original_text}</div>
//         </div>
//     );
// }
// export default WordsData;