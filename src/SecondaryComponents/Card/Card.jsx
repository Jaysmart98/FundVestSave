// import React, { useState } from 'react'
// import Button from "../../PrimaryComponents/Button/Button.jsx"
// import Input from '../../PrimaryComponents/Input/Input.jsx'
// import './Card.css'

// const Card = ({ text, description, image, setDivBG=()=>{}}) => {
//     const [mint, setMint] = useState("Parent")
//   return (
//     <>
//     <div className='card-container'  onClick={()=> setDivBG("Blue")}>
//       <div className='cardComponent'>
//           <div style={{ justifyContent: "center" }} >
//               <img src={image} alt="teen" width={100} height={100}/>
//           </div>
//           <Input label={""}/>
//           <p>{text}</p>
//           {mint}
//           <p>{description}</p>
//           <Button bgColor={"#000"} setMint={setMint}   colorParams={"red"} action={()=> alert("Button clicked")} text={"click"}/>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Card

import React from 'react'
import Button from "../../PrimaryComponents/Button/Button.jsx"
import Input from '../../PrimaryComponents/Input/Input.jsx'

const Card = () => {
  return (
    <div>
      inline icon with h1 below
      <h1>Financial Advisor</h1>

      <div className='flex-row'>
        <div>
            People icon
            <p>Investment</p>
        </div>
        <div>
            Location icon
            <p>New York, NY</p>
        </div>

        <div>
            Clock icon
            <p>Full-Time</p>
        </div>
      </div>

      <h4>Provide personalized investment advice and porfolio management services to clients</h4>

      <div>
        <h2>Requirements:</h2>
        <ul>
            <li>Series 7 & 63 licenses</li>
            <li>3+ years experience</li>
            <li>Strong communication skills</li>
        </ul>
      </div>
    </div>
  )
}

export default Card
