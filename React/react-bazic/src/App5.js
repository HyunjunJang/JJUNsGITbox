// import ReviewCom from "./reviewcomponent/ReviewCom"
// import IterationComponent from "./component/IterationComponent"
// import MapFunc from "./reviewcomponent/MapFunc";
// import ReviewCom2 from "./reviewcomponent/ReviewCom2";

import IterationComponentQ2 from "./component/IterationComponentQ2"; //컴포넌트 임폴트
import "./css/App.css"; //css파일을 그대로 임폴트
import mystyle from "./css/App.module.css"; //module의 경우 변수명을 정한다

function App() {
    return (
        <div>
        {/* <ReviewCom></ReviewCom> */}
        {/* <ReviewCom2></ReviewCom2> */}
        {/* <MapFunc></MapFunc> */}
        {/* <IterationComponent></IterationComponent> */}
        <IterationComponentQ2></IterationComponentQ2>
        <hr />
        <h3 className="myApp">css파일 임폴트</h3>
        <h3 style={{ backgroundColor: "blue" }}>태그에 직접 스타일 적용</h3>
        <h3 className={mystyle.app_wrap}>
            App.module.css 파일로 디자인하기
            <span className={mystyle.app_item}>홍길동</span>
        </h3>
        {/* :global 키워드 활용 */}
        <h3 className="title">App.module.css 파일로 디자인하기</h3>
        <h3 className="public_style">Public에 css 넣고 html에 링크걸고 디자인하기</h3>
    </div>
  );
}

export default App;
