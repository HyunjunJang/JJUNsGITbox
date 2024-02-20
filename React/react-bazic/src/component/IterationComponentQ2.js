import { useState } from "react";
import { useRef } from "react";

function IterationComponentQ2() {
  const data = [
    { id: 1, type: "Java", teacher: "이순신" },
    { id: 2, type: "Java", teacher: "홍길자" },
    { id: 3, type: "Javascript", teacher: "홍길동" },
    { id: 4, type: "Oracle", teacher: "이순신" },
    { id: 5, type: "Mysql", teacher: "이순신" },
    { id: 6, type: "CSS", teacher: "박찬호" },
    { id: 7, type: "HTML", teacher: "coding404" },
  ];

  //1.data 값을 돌려서 li를 채운다
  // let[lidata, setLidata] = useState(data);
  let val = data.map((v, i) => (
    <li key={i}>
      {v.type}-{v.teacher}
    </li>
  ));
  let [lis, setLis] = useState(val);

  // //2. select 에서 클릭한 값을 스태이트로 받고 그 값으로 lidata를 filter 돌린다
  let handleSelect = (e) => {
    if (e.target.value === "data") {
      setLis(val);
    } else {
      let selectlis = data
        .filter((v) => v.type === e.target.value)
        .map((v, i) => (
          <li key={i}>
            {v.type}-{v.teacher}
          </li>
        ));

      setLis(selectlis);
    }
  };
  let tagName = useRef(null);
  let handleClick = () => {
    if (tagName.current.value === "") {
      setLis(val);
    } else {
      let selectlis = data
        .filter(
          (v) =>
            v.type === tagName.current.value ||
            v.teacher === tagName.current.value
        )
        .map((v, i) => (
          <li key={i}>
            {v.type}-{v.teacher}
          </li>
        ));
      setLis(selectlis);
    }
  };
  return (
    <div>
      <h3>실습</h3>
      <input type="text" ref={tagName} />
      <button onClick={handleClick}>찾기</button>
      <br />
      <select onClick={handleSelect}>
        <option value="data">목록</option>
        <option value="Java">Java</option>
        <option value="Javascript">Javascript</option>
        <option value="Oracle">Oracle</option>
        <option value="Mysql">Mysql</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
      </select>
      <ul>{lis}</ul>
    </div>
  );
}
export default IterationComponentQ2;
