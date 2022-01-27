import {ChatEngine} from 'react-chat-engine'
import "./App.css";
import  ChatFeed   from './components/ChatFeed';
import LoginForm from './components/LoginForm'
const projectID = 'e469583e-dfe6-484a-96e3-38033006913a';
const App=()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;