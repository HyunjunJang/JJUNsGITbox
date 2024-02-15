import { useState } from "react";

function EventComponent(){

  //input value 값을 state로 관리
  const [topic, setTopic] = useState('');
  const [name, setName] = useState('');
  let handleTopic = (e) => {
    console.log(e.target.value);
    setTopic(e.target.value);
  };
  let handleName = (e) => {
    setName(e.target.value);
  }
  let handleChange = () =>{
    alert(`${name}님의 할일은 없다`);
    setName('');
    setTopic('');
  }
  let handlePress = (e) => {
    if(e.key == 'Enter'){ //사용자가 enter키를 누름
      handleChange();
    }
  }

  return(
    <div>
      <h3>인풋태크 핸들링</h3>
      <input type="text" onChange={handleTopic} value={topic}/><br/>
      <input type="text" onChange={handleName} onKeyUp={handlePress} value={name}/><br/>
      <button type="button" onClick={handleChange}>클릭!</button>
      인풋의결과:{name}
      

    </div>
  )
}
export default EventComponent