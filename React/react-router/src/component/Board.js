import { Link, Outlet } from "react-router-dom";

function Board() {
  return (
    <div>
      <h3>공통글목록</h3>
      <ul>
        <li><Link to="/board">홈</Link></li>
        <li><Link to="/board/1">1번</Link></li>
        <li><Link to="/board/2">2번</Link></li>
        <li><Link to="/board/3">3번</Link></li>
      </ul>
      {/* 하위 라우팅 컴포넌트를 그린다 */}
      <Outlet />
    </div>
  );
}
export default Board;
