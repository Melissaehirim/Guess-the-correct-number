import React, { useRef } from 'react'
import { useState} from 'react'

function Project() {
    var [number, setNumber]= useState(9)

    var [dad, setDad] = useState("Tries Left: ")

    var [word,setWord]=useState("Enter your value")

    var [num,setNum]= useState(Math.floor(Math.random()*10))

    var [btn2,setBtn2]=useState("Submit")

    var boy = useRef ()


function btn() {
    if (boy.current.value < num) {

        setWord("the number you entered is less than my number try entering some bigger value")

        setNumber(number-1)

     }else  if (boy.current.value == num) {
        setWord("won")
        setBtn2("Restart")

     }else if (number ==  0) {
        setWord ("try again in some minutes")
        

     }else if (boy.current.value > 10) {
      setWord("Your value must be between 1 & 10")


    } else if (boy.current.value>num) {
      setWord("the number you entered is higher than my number try entering some lower value")
  
    }
}
function olu() {
  if (boy.current.value==="") {
    setWord("Enter value")
  }
}


  return (
    <div className='lola'>

        <div className="asa">

           <div className="obi">Guess my number</div>

           <div className="obi1"> The number is between 1 and 10</div>

           <div className="obi1">{dad}{number}</div>

          <input type="text" className='input'ref={boy} onChange={olu}/>

          <div className='ada'>{word}</div>

          <button className='btn2' onClick={btn}>{btn2} </button>
        </div>
    </div>
  )
}

export default Project