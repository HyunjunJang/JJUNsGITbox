import { useEffect, useState } from "react";
import axios from 'axios';

function App(){

   const [data, setData] = useState(null);
   
   let handleClick = async() => {
   //    axios.get('https://run.mocky.io/v3/f25f9a29-6f67-4542-bf18-b517419fe010')
   //    .then(response => setData(response.data))
   //  //promise형 객체는 .then 을 꼭 생각

   //시나리오 : 순서대로 데이터를 3개를 가져와 보기
      //axios.get을 3개 써서 가져오기 //비동기라 순서가 보장되지 않는다
      // https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json
      // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      // .then(response => console.log(response.data))
      // // https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json
      // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
      // .then(response => console.log(response.data))
      // // https://raw.githubusercontent.com/yopy0817/data_example/master/by.json
      // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
      // .then(response => console.log(response.data))


      //순서대로 받기 위해 콜백함수를 사용한다 -> 콜백지옥 
      // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      // .then(response => {
      //    console.log(response.data); //hi.json 도착

      //    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
      //    .then(response => {
      //       console.log(response.data); //hello.json
             
      //          axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
      //          .then(response => {
      //             console.log(response.data);
      //       })
      //    })
      
      // })

      const response1 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      console.log(response1)
      const response2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
      console.log(response2)
      const response3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
      console.log(response3)
      const response4 = await fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
      const data = await response4.json()
      console.log(data)
   }

   //화면이 로드 될 때 데이터를 가져오기
   useEffect( () => {
      //fetch or axios
      //await을 쓰고싶으면 async
      (async() => {

      })
   })
   
   return(
      <div>
         <h3>axio 활용하기</h3>
         <button onClick={handleClick}>클릭시에 테이터 가져오기</button>
         {
            data &&  
            <div>
               짠! : {data.name}
            </div>
         }
      </div>
   )
}
export default App