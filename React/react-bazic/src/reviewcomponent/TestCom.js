
function TestCom(){

   let obj = {
      name : '현준',
      age : 12,
      city : 'busan'
   }
   console.log(obj);
   //구조분해할당
   let { name , b , c} = obj;
   console.log(name);
   
   return(
      <div>
         이거되냐;오오오오오 신기
         {b};
         {name};
      </div>
   )
}
export default TestCom