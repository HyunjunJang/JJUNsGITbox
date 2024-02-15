

function IterationComponent(){
  
  //map 함수 -> 콜백함수의 리턴에 담긴 값으로 새로운 배열을 만들어냄
  const arr = [1,2,3,4,5];
  const newArr = arr.map( (v, i, ar) => {
    return ar;
  });
  console.log(newArr);

  const lis = arr.map( (v, i) => <li key={i}>{v}입니다</li>) //변수 v 값을 문자열로 참고하려고 {v} 로 쓴다
  console.log(lis);
  console.log('-----------------------------');
  
  return(
    <ul>
      {lis} {/* 변수 참조 */}
    </ul>
  )
}
export default IterationComponent