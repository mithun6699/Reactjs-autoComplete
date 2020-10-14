import React,{useState} from 'react'
import Information from './Information'

function Toggle() {

const [seeData, setSeedata]= useState(false)
  const  OnToggle=()=>{
      if(seeData){
      setSeedata(false)
}else{
    setSeedata(true)
}
  }
    return (
        <div>
            <button onClick={OnToggle}>click to Toggle</button>
            {seeData && <Information/>}
        </div>
    )
}

export default Toggle
