//컨텍스트 API의 Provider와 Consumer를 외부에서 관리

import { createContext } from "react";

//1.컨텍스트 초기값
const UserContext = createContext({
   state : {id: '', name: ''},
   action : {
      setUser : () => {}  //함수
   }
})

//2.Provider 컴포넌트
const UserProvider = ({children}) => {
   return <UserContext.Provider value={변경할 값}>
      {children}
   </UserContext.Provider>
}