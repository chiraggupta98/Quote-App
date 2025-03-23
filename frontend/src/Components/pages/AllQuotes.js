import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Quote from '../Quote/Quote';
const AllQuotes = () => {

  let dummyQuotes = [];

  let [quotes,setQuotes] = useState(dummyQuotes);  

  async function getQuotes(){
    let res = await axios.get('http://localhost:8080/allquotes');
    // console.log(res);
    setQuotes(res.data);
  }
  useEffect(()=>{
    getQuotes();
  },[]);



  return (
    <div>
      <h1>AllQuotes
        <ul>
          {
            quotes.map((quote,index)=>{
              return <Quote 
                      key={quote._id}
                      author={quote.author}
                      text={quote.text}
                      id={quote._id}
                    /> 
            })
          }
        </ul>
      </h1>
    </div>
  )
}

export default AllQuotes