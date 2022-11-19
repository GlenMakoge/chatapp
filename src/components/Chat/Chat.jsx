import React, { useState } from 'react'
import './Chat.css'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import axios from '../../axios';

function Chat({messages}) {

  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

   await axios.post('/messages/new', {
    message: input,
    name: "Glen",
    timestamp: "time...",
    received: true,
    });

      setInput('',)
  };
 

  return (
    <div className='chat'>
       <div className="chat__header">
          <img src="../images/1.jpg" alt="" />

          <div className="chat__headerInfo">
            <h3>Name</h3>
            <p>Last seen..</p>
          </div>

          <div className="chat__headerRight">
    
          </div>
       </div>

       <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message ${message.received && "chat__reciever"}`}>
            <span className='chat__name'>{message.name}</span>
               {message.message}
            <span className='chat__timestamp'>{message.timestamp}</span>
          </p>
        ))}
       
       </div>
         
       <div className="chat__footer">
        
        <form>
          <EmojiEmotionsIcon />
          <input value={input}
          onChange = {(e) => setInput(e.target.value)} 
          type="text" 
          placeholder='Type a message'
           />
          <button onClick={sendMessage} type='submit'>Send a message</button>
          <MicIcon />
        </form>
       </div>
    </div>
  )
}

export default Chat