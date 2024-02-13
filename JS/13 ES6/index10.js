
//export -> 내보내기
export const name = '홍길동';
export const age = 20;
export const getInfo = () => {
    console.log(name,age);
}

//export{} 객체로 여러개 한번에 내보내기
let sum = 0;
let add = (a) => { //애로우함수 한줄엔 안되는 이유가 뭐지?
    sum += a;
}
export{sum, add};
    
