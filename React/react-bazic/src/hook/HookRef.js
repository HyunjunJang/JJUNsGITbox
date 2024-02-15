import { useRef } from "react"

function HookRef() {

  //특정태그에 이름달기
  let tagName = useRef(null);

  let handleClick = () => {
    console.log(tagName); //객체로 나타남
    console.log(tagName.current);
    console.log(tagName.current.value);
    tagName.current.value = '';
    tagName.current.focus();
    
  }
  return(
    <div>
      할일: <input type="text" ref={tagName} /> {/* 제어할 태그에 ref로 이름 적용 */}
      <button type="button" onClick={handleClick}>useRef사용하기</button>
    </div>
  )

}

export default HookRef