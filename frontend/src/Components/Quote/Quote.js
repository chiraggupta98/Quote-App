import React from 'react'
import styles from './Quote.module.css'
import { useNavigate } from 'react-router-dom'
const Quote = (props) => {
  let navigate = useNavigate();

  const showQuoteHandler =(id)=>{
    navigate(`/quotes/${id}`);
  }


  return (
    <li className={styles.quote}>
        <span>
            <p>{props.text}</p>
            <h3>{props.author}</h3>
        </span>
        <button onClick={()=>showQuoteHandler(props.id)} >View full Quote</button>
    </li>
  )
}

export default Quote