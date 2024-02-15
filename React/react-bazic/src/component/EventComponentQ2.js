import {useState} from 'react';

function EventComponentQ2(){

  let [data, setData] = useState({data:'', result:''});
  
  let handleChange = (e) => {
    // e.target.value - 사용자의 이벤트가 발생한 값(객체인지 함수인지 태그인지 스트링인지)
    setData( {...data, data: e.target.value}); //...data를 쓰고 안쓰고 의 차이 -> 안쓰면 객체에서 값을 잃고 간다. 여기서 객체 값변화를 {a:'', b: '', a:'aa'} 라고하면 key a값이 바뀌는가
  }
  let handleClick = (e) => {
    setData({data:'', result: data.data})
  } 

  return(
    <div>
      <input type="text" value={data.data} onChange={handleChange} /> <button onClick={handleClick}>추가하기</button>
      <h3>결과</h3>
      <h2>{data.result}</h2>
    </div>
  )
}

export default EventComponentQ2