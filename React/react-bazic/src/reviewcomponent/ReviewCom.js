
function ReviewCom () {

  let obj = {age:10, name:"jun", weight:70}
  let newobj = {...obj};
  console.log(newobj);
  let newobj2 = {...obj, name:"jang"}
  console.log(newobj2);
  let newobj3 = {age:10, name:"jun", weight:70, age:20}
  console.log(newobj3);

  function handleClick(e) {
    console.log(e.target); // 클릭된 엘리먼트
  }
  
  let handleFocus = (e) => {
    console.log(e.target);
    
  }

  function handleKeyPress(e) {
    console.log(e.target); // 키보드 이벤트가 발생한 엘리먼트 (일반적으로는 document 또는 해당 엘리먼트)
  }
  
  return(
    <div>
      <button onClick={handleClick}>Click me</button>

      <input type="text" onFocus={handleFocus}/>
      <hr />
      <div onKeyDown={handleKeyPress}></div>
    </div>
  )
}
export default ReviewCom