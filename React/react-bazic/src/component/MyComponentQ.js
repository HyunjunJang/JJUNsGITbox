import { useState } from "react";

const MyComponentQ = () =>{
  let [num, setNum] = useState(0);
  
  
  return(
    <div>
      <div>{num}</div> {/* 변수를 사용한다 {} */}
      <button type="button" onClick={ () => setNum(num+1)}> 증가 </button>
      <button type="button" onClick={ () => setNum( (prev) => {return prev+1})}> 증가 </button>
      <button type="button" onClick={ () => setNum( (prev) => prev-1)}> 감소 </button>
      <button type="button" onClick={ () => setNum( 0)}> 초기화 </button>
      {/* setNum의 매개변수에 콜백함수를 넣어주면, 이전 state값을 받을 수 있다 */}
    </div>
  )
}
export default MyComponentQ