import { useParams } from "react-router-dom"

function BoardContent(){
   let {num} = useParams(); //객체로 받으니
   return(
      <div>
         <h3>글상세</h3>
         {num} 전달 받은 자료
      </div>
   )
}

export default BoardContent