import React, { useState } from 'react'
import Searchbox from './Searchbox'
import { emoji } from './Emojies'
const Main = () => {
   const keys = Object.keys(emoji)
   const [emojilist, setemojilist] = useState(keys)
   const [meaning, setmeaning] = useState("")
   const [current, setcurrent] = useState("")
   
   
   return (
      <main>
         <Searchbox setmeaning={setmeaning} emoji={emoji} setcurrent={setcurrent} />
         <p id="output">{current}&nbsp;{meaning}</p>
         <div id="choosebox">
            {emojilist.map((e,index) => {
               return (
                  <div className="emojies" style={{backgroundColor:(current===e)?"#ffe602":"whitesmoke"}} key={index} onClick={()=>{setmeaning(emoji[e])
                                                         setcurrent(e)}}>
                   {e}
                  </div>
               )
            })


            }
         </div>
      </main>
   )
}

export default Main