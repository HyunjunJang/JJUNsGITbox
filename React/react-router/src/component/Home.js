import { Link } from "react-router-dom"

function Home(){
   return(
      <div>
         <h3>홈</h3>
         <ul>
            {/* Link를 a태그처럼 사용 */}
            <li><Link to="/user">User페이지로 이동</Link></li>
            <li><Link to="/user?name=홍길동&age=20">User페이지로 이동(쿼리스트링으로 값 전달)</Link></li>
            <li><Link to="/info/1/4">Info페이지로 이동-1</Link></li> {/* 값을 2개 넘김 */}
            <li><Link to="/info/2">Info페이지로 이동-2</Link></li> 
            <li><Link to="/info/3">Info페이지로 이동-3</Link></li> 
         </ul>

         
      </div>
   )
}
export default Home