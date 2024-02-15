//map함수 찾아보기
// (1)반복문이 사용되는 경우 사용하는 함수
// (2)각 요소들을 꺼내서 호출하고 그 값을 매개변수로 받는 콜백함수를 적용하고 그 결과로 이루어진
// 새로운 배열을 만들어준다.

function MapFunc(){

  const arr = [1,2,3,4,5];
  const arr2 = arr.map( function(value){
    return value * 2 ;
  } )
  console.log(arr2);

  const arr3 = [1,2,3,4];
  const arr4 = arr3.map( function(v){
    return v **3;
  })
  const arr5 = arr3.map( (v) => v**3)

  const people = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
  ];

  const names = people.map( (v) => v.name);
  console.log(names);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const allnumbers = numbers.map( num => {
    if ( num%2 === 0){
      return num;
    } else {
      return null;
    }
  } )
  console.log(allnumbers);
  const evennumbers = allnumbers.filter( v => v !== null);
  console.log(evennumbers);
  
  const words = ["apple", "banana", "kiwi", "orange", "grape"];
  const newwords = words.filter( (word) => word.length > 3)
  console.log(newwords);
  
  return(
    <div>
      {arr2} <hr />
      {arr4} <hr />
      {arr5} <hr />
      {names}
    </div>
  )
}

export default MapFunc