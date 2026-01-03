import React from 'react'

function Card({message,image}) {
  return (
    <div className='box_q' style={{background:'#05030fff',widt:'auto',height:'40vh',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2vh',borderRadius:'10px'}}>
        <img style={{height:'20vh',width:'auto'}} src={image} alt="" />
        <h3 style={{color:'aliceblue'}}>{message}</h3>
        
    </div>
  )
}

export default Card
