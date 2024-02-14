function MyComponent(props){
  
    // console.log(props);
    
    // let name = "홍길동"
    // let phone = "010-1234-5678";

    // let name = props.name;
    // let phone = props.phone;
    // let age = props.age;

    let{name, phone, age} = props; //props는 객체이므로 구조재할당으로 한번에 받기
    return(
      <div>
        자식컴포넌트<br/>
        변수값: {name}<br/>
        변수값: {phone}<br/>
        변수값: {age}<br/>
      </div>
    )
  
}
export default MyComponent