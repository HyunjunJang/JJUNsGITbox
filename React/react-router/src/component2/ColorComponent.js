import ColorContext from "../contextAPI/ContextAPI";

function ColorComponent() {
  
   const 함수 = (value) => {
      return(
         <div style={{color: value.color}}>
            <h1>context API 값 : {value.color}</h1>
         </div>
      )
   }
   return (
    <>
      <ColorContext.Consumer>
         {함수}
      </ColorContext.Consumer>
    </>
  );
}

export default ColorComponent;
