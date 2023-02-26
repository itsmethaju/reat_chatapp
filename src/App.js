// import { PrettyChatWindow } from "react-chat-engine-pretty";

// const chatapp=()=>{
//   return(
//   <div style={{height:"100vh"}}>
//   <PrettyChatWindow
//   projectId="df8de9aa-2b11-49e0-ba05-531001db0dc7"
//   username="thaju"
//   secret="12345"
//   style={{height:"100%"}}
//   />
//   </div>
//   )
// }
// export default chatapp

import { useState } from "react";

import AuthPage from "./authpage";
import ChatsPage from "./chatPage";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;