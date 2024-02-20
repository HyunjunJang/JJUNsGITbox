import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

function Header(){
   return(
      <Fragment>
         {/* 이 헤더태그가 주소는 상관없이, 
         info, user, home의 공통 레이아웃으로 들어가게 */}
         <header>
            <p>제목</p>
            <ul>
               <li><Link to="/">목록1</Link></li>
               <li><Link to="/user?name=현준&age=20">목록2</Link></li>
               <li><Link to="/info/1/2">목록3</Link></li>
            </ul>
            <div>
               <button type="button">버튼1</button>
               <button type="button">버튼2</button>
            </div>
         </header>

         <Outlet/>
      </Fragment>
   )
}

export default Header;