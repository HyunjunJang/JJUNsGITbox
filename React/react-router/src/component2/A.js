import { useRef } from "react"

function A(){

   let idRef = useRef(null)
   let nameRef = useRef(null)
   //userContext(CreateContext객체)
   userContext
   return(
      <div>
         <h3>A컴포넌트</h3>
         <input type="text" ref={idRef} />
         <input type="text" ref={nameRef} />
         <button onClick={handleClick}>값변경하기</button>
      </div>
   )
}
export default A