import IterationComponent from "./component/iterationComponent"
import IterationComponent2 from "./component/IterationComponent2"
import IterationComponentQ from "./component/IterationComponentQ"
import IterationComponentQ2 from "./component/IterationComponentQ2"


function App(){
  
  return(
    <div>
      <h3>컴포넌트 반복</h3>
      <IterationComponent></IterationComponent> <hr/>
      <IterationComponent2></IterationComponent2><hr/>
      <IterationComponentQ></IterationComponentQ><hr/>
      <IterationComponentQ2></IterationComponentQ2>
    </div>
  
  )
}

export default App