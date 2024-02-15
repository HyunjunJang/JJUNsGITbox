import { useState } from "react";

function IterationComponentQ() {
  const arr = [
    { src: "/img/img1.png", title: "아이폰10", price: 1000 },
    { src: "/img/img2.png", title: "아이폰11", price: 2000 },
    { src: "/img/img3.png", title: "아이폰12", price: 3000 },
    { src: "/img/img4.png", title: "아이폰13", price: 4000 },
  ];

  const [list, setList] = useState(arr);
  const [selectedItem, setSelectedItem] = useState('/img/img1.png');

  const handleClick = (e) => {
    setSelectedItem(e.target);
  };

  const lis = list.map((v, i) => (
    <div key={i} style={{float : "left"}}>
      <img src={v.src}  onClick={handleClick} />
      <p>{v.title}</p>
      <p>{v.price}</p>
    </div>
  ));

  return (
    <div>
      <div>
          <img src={selectedItem.src} />
      </div>
      <div style={{overflow : "hidden"}}>
        {lis}
      </div>
    </div>
  );
}

export default IterationComponentQ;
