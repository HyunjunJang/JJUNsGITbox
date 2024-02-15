import { useState } from "react"


function EventComponent2(){
  //스태이트를 객체로 관리
  let[data, setData] =  useState({name: '', topic: ''}); //data 변수가 객체로 받아진다

  let handleInput = (e) => {
    // e.target.value - 현재 사용자가 입력한 값
    // e.target.name ->현재 이벤트가 발생한 태그의 이름
    let value = {...data, [e.target.name] : e.target.value}; //{...data}의 역할은 객체를 복사해 온다
    setData(value);
    
  }

  return(
    <div>
      <h3>인풋태크 핸들링</h3>
      <input type="text" onChange={handleInput} name='topic' value={data.topic} placeholder="할일"/><br/> {/* 태그를 구분하기 위해 각 태그에 name을 준다 */}
      <input type="text" onChange={handleInput} name='name' value={data.name} placeholder="이름"/><br/> {/* 태그를 구분하기 위해 각 태그에 name을 준다 */}
      <button type="button" onClick={() => setData({name:'', topic:''})}>클릭 초기화!</button>
      할일:{data.input} 이름:{data.name}
    </div>
  )
  
}

export default EventComponent2