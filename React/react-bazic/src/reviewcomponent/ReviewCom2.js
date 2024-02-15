import { useState } from "react";
//Input 관련 복습
function ReviewCom2(){
  let [changeVal, setchangVal] = useState(''); //아 그래서 여기서 스태이트를 선언하는구나
  let handleChange = (e) => {
    console.log(changeVal); //공백
    console.log(e.target); //input 태그가 뜰듯
    console.log(e.target.value); //input에 입력할때마다 바뀐 값
    setchangVal(e.target.value);
    console.log(changeVal); // 입력할 때 마다 바뀌나
    
  }
  return(
    <div>
      <input type="text" onChange={handleChange} value={changeVal} placeholder="입력위치" />입력해봐
      <h3>{changeVal}</h3>
    </div>
  )
}

export default ReviewCom2