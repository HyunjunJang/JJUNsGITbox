// import logo from './logo.svg';
// import './App.css';

import { Fragment } from "react";

//app함수형 컴포넌트 return에 담기는 구문을 jsx라고 부른다
//jsx는 자바스크립트에 html을 녹이는 형태
function App1() {
  
  let name = "홍길동";
  let age = 20;

  return (

    <Fragment>
      <div>
        <h3>원래는 div가 2태그 이므로 오류이다. 그래서 Fragment 활용함</h3>
        {age >= 20 ? '20세 이상입니다' : '20세 미만입니다'} {/* if문 대신에 삼항연산자 사용 */}
        {age >= 20 ? <h3>20세 이상입니다</h3> : <h3>20세 미만입니다</h3>} {/* 태그도 가능 */}
        {name === '이순신' ? name + '님 환영합니다' : null}<hr/>
      </div>

      <div className="App"> {/* jsx 코드 */}
        <ul style={{backgroundColor: "green", color: 'red'}}> {/* <ul style=""> 불가능 */}
          <li>1.주석은 alt shift a</li>
          <li>2.JSX는 반드시 하나의 태그를 return 해야합니다</li>
          <li>3.전체를 감싸는 div 태그를 쓰기 싫다면, Fragment or <></> 를 사용한다.</li>
          <li>Fragment 에 ctl+space+Enter 를 누르면 자동으로 import 된다</li>
          <li>4.함수안에 만들어진 변수는 {} 참조 할 수 있다</li>
          <li>{name} 으로 변수 참조!</li>
          <li>5.if문 대신에 삼항연산자를 사용합니다.</li>
          <li>6.삼항연산자에서 화면에 보여주고싶은게 없다면 null을 사용한다</li>
          <li>7.어떤 경우에서든 undefined가 반환되면 안됩니다</li>
          <li>8.class속성 대신에 반드시 className속성을 사용해야합니다</li>
          <li>9.홀로 사용하는 태그는 닫는 태그를 반드시 작성한다.</li>
          <li>{/* <input> 같은 경우 <input/> 로 써야한다 */}</li>
          <li>10.DOM에 직접 스타일링하려면 객체로 중괄호 2개로 묶고 카멜표기법을 사용합니다</li>
          <li>따라서 객체처럼 key:value, ~~~</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default App1; /* 이게 바로 함수형 컴포넌트 사용(모듈 내보내기) */
