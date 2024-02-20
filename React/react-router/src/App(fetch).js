import {useEffect, useState} from 'react';

function App(){

   const[data,setData] = useState(null);
   
   let handleClick = () => {
      //데이터를 가져온다
      fetch('https://run.mocky.io/v3/f25f9a29-6f67-4542-bf18-b517419fe010')
      .then( response => response.json())
      .then( data => setData(data))
   }

   //화면이 렌더링 되는 순간 테이터를 가져옴
   // 스태이트 값 변하면서 리렌더링 되므로 무한 루프에 빠진다
   const[example, setExample] = useState(null);
   // fetch('https://run.mocky.io/v3/f0026144-1a89-4a10-a8f4-3e9263d5698e')
   //    .then( response => response.json())
   //    .then( data => setExample())

   useEffect( () => {
      fetch('https://run.mocky.io/v3/f25f9a29-6f67-4542-bf18-b517419fe010')
      .then( response => response.json())
      .then( data => setExample(data))
   }, []);
   return (
      <div>
         hello world
         <button onClick={handleClick}>mock에서 가져오기</button>
         {
            data === null ? <div>데이터를 불러오는중</div> :
               <div>
                  {data.name}<br/>
                  {data.info.age}<br/>
                  {data.info.phone}<br/>
               </div>
         }
         <hr/>
         {
            example &&
            <div>
               {example.name}<br/>
               {example.info.age}<br/>
               {example.info.phone}<br/>
            </div>
         }
      </div>
      
   )
}
export default App;