import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";

function App(){
  return(
  <Fragment>
      <h3>나의 첫번째</h3>
      <div>
        자식컴포넌트<br/>
        변수값: <br/>
        변수값: <br/>
      </div>
    <MyComponent name="홍길동" phone={"010-1234-1234"} age={1}/>
    <MyComponent name="이순신" phone={"010-4567-4567"} age={2}/>
    <MyComponent name="이름만준다" />
    <MyComponent2/>
    <MyComponent3/>
  
  </Fragment>
  )
}
export default App