
//export default 방식
//단 1개의 값이나 변수를 내보내는 방식 
//Class를 내보낼 때 주로 사용한다

const NAME = "홍길동";
const AGE = 20;
// export default NAME;
// export default AGE; //두번 사용하니깐 에러!

class Person{
    name = "이순신";
    age = 20
    constructor(age){
        this.age = age;
    }

    getAge = () => {
        return this.age;
    }
}
export default Person;