import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
// import Login from './components/login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';
function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
    .then((response) => {
      setMessages(response.data)
    })
  })

  useEffect(() => {
    const pusher = new Pusher('2f2b4d0f146388008475', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      
    };
  }, [messages])

       console.log(messages)

  return (
    <div className="App">
      <div className='app__body'>
         <Sidebar />
         <Chat messages={messages} />
         {/* <Login /> */}
      </div>
    </div>
  );
}

export default App;
