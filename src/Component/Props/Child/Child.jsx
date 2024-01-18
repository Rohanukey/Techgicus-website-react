import React from 'react'

function Child(props) {
  return (
    <div style={{height:"800px",width:"auto" ,display:"flex",alignItems:"center"}}>
    <div className='child' style={{border:"1px solid grey",height:"600px", width:"500px",display:'flex',flexDirection:"column" , alignItems:"center", justifyContent:"space-evenly"} }>
    <h1>{props.name}</h1>
    <p>{props.about} {props.age}</p>
    <img src={props.img} width={"300px"}/>
    </div>
    </div>
    
  )
}

export default Child