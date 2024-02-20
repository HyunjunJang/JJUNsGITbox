import { useState, useEffect } from 'react';

const HookEffect = () => {
   //useState
   const[name, setName] = useState('');
   const handleName = (e) => {
       setName( e.target.value );
   }
   
  //useEffect    
   useEffect( () => {
       console.log(`name이 업데이트 시 실행됩니다`)
       
       //unmount이후 실행됩니다.
       return () => {
           console.log(`unmount에 실행됩니다.`);
       }
   }, [name]);

   return (
       <div>
           이름:<input type="text" onChange={handleName}/><br/>
           이름:{name}
       </div>
   )
}

export default HookEffect;