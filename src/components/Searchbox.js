import React from 'react'
import search from './search.svg'
const Searchbox = ({setmeaning,emoji,setcurrent}) => {
    function changehandler(e)
    {
    if(e.target.value.length===0)
    { setmeaning("");
         setcurrent("")  ;
         return 0;  
     }  
    if(emoji[e.target.value]===undefined)
       { setmeaning("Not found in Dictionary");
         setcurrent("")  ;
         return 0;  
       }
    setmeaning(emoji[e.target.value])
    setcurrent(e.target.value)
    }
    return (

        <div id="search">
            <input type="search" placeholder='Enter emoji here' onChange={changehandler} />
            {/* <div id="imagewrapper">
                <img src={search} alt="..." />
            </div> */}
        </div>

    )
}

export default Searchbox