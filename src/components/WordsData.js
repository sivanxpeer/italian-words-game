    
import axios from "axios";
//this is the api for translating 


export default function WordsData(){
const options = {
  method: 'GET',
  url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
  params: {text: 'ladder', to: 'it', from: 'en'},
  headers: {
    'x-rapidapi-host': 'nlp-translation.p.rapidapi.com',
    'x-rapidapi-key': 'd40f514ce8msh502a22fb9b4072bp110b64jsn102955aa68b4'
  }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

    return(<div>Hi</div>)
}
