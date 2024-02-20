import ColorComponent from "./component2/ColorComponent";
import ColorContext from "./contextAPI/ContextAPI";

export default function App() {
  return (
    <div>
      <h1>컨텍스트 API 예시</h1>
      {/* provider는 하위 consumer에서 변경된 값을 전달하는 역할 */}
      <ColorContext.Provider value={{ color: "blue" }}>
        <ColorComponent />
      </ColorContext.Provider>
    </div>
  );
}
