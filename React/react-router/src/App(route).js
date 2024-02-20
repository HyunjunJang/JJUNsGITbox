import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import User from "./component/User";
import Info from "./component/Info";
import BoardContent from "./component/BoardContent";
import Board from "./component/Board";
import Header from "./header/Header";

function App() {
  return (
    /* 2.Routers 컴포넌트 */
    <Routes>
      {" "}
      {/* 라우트 경로를 이용해 페이지가 여러개인거처럼 */}
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        {/* URL파라미터 방식 */}
        <Route path="/info/:a/:b" element={<Info />} />{" "}
        {/* /info/:a/:b/:c/:d 가변파라미터 4개 전달 */}
      </Route>
      {/* 
      <Route path="/board" element={ <Board/>}/>
      <Route path="/board/:num" element={ <BoardContent/>}/> 
      */}
      {/* 중첩라우터 -> 상위컴포넌트에서 Outlet을 사용해 자식컴포넌트를 그린다 */}
      <Route path="/board" element={<Board />}>
        <Route path=":num" element={<BoardContent />} />
      </Route>
    </Routes>
  );
}

export default App;
