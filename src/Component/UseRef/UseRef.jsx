import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

function UseRef() {
    const [prev,setPrev]=useState()
    const f = useRef("")

    useEffect(()=>{
        f.current=f.current=prev
    },[prev])

    function focus() {
        console.log(f.current)
        f.current.focus()
        f.current.style.color="red"
        f.current.style.width="120px"
        
    }
    return (
        <div>
        <div style={{ display: "flex", alignItems: "center", height: "400px", width: "auto", justifyContent: "center" }}>
            <input type="text" value={prev} onChange={(e)=>setPrev(e.target.value) }></input>
            <button type="button" onClick={focus}>Sumbit</button>
        </div>
        <div style={{textAlign:"center"}}>

        <h1>Count:-{prev}</h1>
        <h1>Count:-{f.current}</h1>
        </div>
    </div>)
}

export default UseRef