import React from 'react'

const Arrows = () => {
  return (
    <div>
      
    </div>
  )
}

export function NextArrow(props){
    return (
        <>
            <div className="{props.className}" 
            style={{...props.style}}
            onClick={props.onClick}/>
        </>
    );
}
export function PrevArrow(props){
    return (
        <>
            <div className="{props.className}" 
            style={{...props.style}}
            onClick={props.onClick}/>
        </>
    );
}
