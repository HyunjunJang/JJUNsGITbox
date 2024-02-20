import { useParams } from "react-router-dom"

function Info(){
   let params = useParams() //객체로 받는다
   console.log(params);
   let {a} = params; //객체에서 값을 호출하는법 {'key'}
   let b = params.b;
   console.log(a);
   console.log(b);
   
   

   
   return(
      //useParams - URL파라미터 값을 받는 훅
      
      <div>
         <h2>인포.. <br /></h2>
         {a}번 데이터와 {b}번 데이터 입니다.
      </div>
   )
}
export default Info