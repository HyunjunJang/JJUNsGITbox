import { useState } from "react";

function EventComponentQ() {

  let [choice, setChoice] = useState('');
  let click = (e) => {
    setChoice(e.target.value);
  }
  return(
    <div>
      <select  onClick={click} > {/* onChange 도 활용가능 */}
        <option value="" >목록</option>
        <option >피자</option> {/* value를 안걸어도 된다 */}
        <option value="햄버거" >햄버거</option>
        <option value="김밥" >김밥</option>
      </select>
      <div>선택한 결과 : {choice}</div>
    </div>
  )
}
export default EventComponentQ