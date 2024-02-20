// import { useLocation } from "react-router-dom"
import {  useSearchParams } from "react-router-dom"

function User(){
   //1. useLocation을 활용해서 쿼리스트링으로 넘어온 값을 받는다
   // let location = useLocation(); //값을 받았을 때 약간 더럽다. 그래서 2번 방법이 괜찮
   // console.log(location);

   //2. useSearchParam 활용
   // let result = useSearchParams(); - 배열로 나온다 그래서 구조분해할당을 통해 받아준다
   // console.log(result);
   let [obj, f] = useSearchParams(); //obj-파라미터를 제어하는 함수. f-파라미터를 변경하는 함수
   console.log(obj);
   console.log(f);
   let name = obj.get("name"); //request.getParameter("name")
   let age = obj.get("age");
   
   return(
      <div>
         <h3>유저 page</h3>
         쿼리스트링으로 받은값 : {name} , {age}
      </div>
   )
}
export default User