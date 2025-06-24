import React from 'react'

const Weather = (props) => {
   if(props.isRaining) {
     return (
       <div>It's raining</div>
     )
   }else if(props.isSnowing) {
     return (
       <div>It's snowing</div>
     )
   }else {
     return (
       <div>It's sunny</div>
     )
   }




}

export default Weather