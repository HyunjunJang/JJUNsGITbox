import { useState } from "react";

function IterationComponent2(){
  //state로 관리할 배열 생성
  const data =[
    {id:1, topic:'hello'}, 
    {id:2, topic:'bye'}, 
    {id:3, topic:'안녕!'}
    ]
  const[list, setList] = useState(data);
  const[topic, setTopic] = useState('') //input 으로 입력한 데이터

  //삭제를 위한 익명함수 (당겨쓰기 때문에)
  let handleRemove = (id) => {
    console.log(id);
    //filter -> return true인 값으로 필터링 해준다
    const newList = list.filter( item => item.id !== id)
    setList(newList);
  }

  //state를 반복 돌려서 출력할 때
  //해당 태그에서 id를 넘겨주는 방법. 이벤트 안에 함수에 함수를 넣어서 전달하는... 복잡스키
  const lis = list.map( a => <li key={a.id} onDoubleClick={ () => handleRemove(a.id) }>{a.topic}</li>) //a는 여기서 객체다

  let handleInput = (e) => {
    setTopic(e.target.value);
  }
  //input 데이터를 list에 반영
  let handleClick = (e) => {
    let obj = {id: list[list.length-1].id + 1, topic: topic}
    let newList = list.concat(obj);
    // console.log(newList);
    setList(newList);
  }
    

  return(
    <div>
      <h3>할일목록 추가 or 삭제하기</h3>
      <input type="text" name="topic" onChange={handleInput} value={topic} placeholder="할일목록을적으시오"/>
      <button type="button" onClick={handleClick}>추가하기</button>
      <ul>
        {/* li는 배열로 그려 나간다 */}
        {lis}
      </ul>
    </div>
  )
}
export default IterationComponent2;