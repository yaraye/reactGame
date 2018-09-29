import React from 'react';

const Horoscope = props =>  (
  

        <div className="card">     
              <button className= 'card' onClick ={()=> props.handleHoroscope(props.id)}>
              <img src={props.image} alt ={props.name}/>
               </button>
          
        </div>
       
 

);

export default Horoscope;

