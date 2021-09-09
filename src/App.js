import logo from './logo.svg';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import './App.css';
import Message from './Message.js'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ChatList } from './ChatList';

// const startingMessages = [
//   {text: "simple", author: "man", id: "1"},
//   {text: "simple", author: "man", id: "2"},
// ]
const startingChats = [
  {name: "Chat №1", id: "chat-1"},
  {name: "Chat №2", id: "chat-2"}
]

function App() {

  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState(startingChats);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "man") {
      setTimeout(() => {setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Hello from React", author: "React-bot", id: `mess-${Date.now()}` },
      ]);
      inputRef.current.focus();}, 1500)
    }
  }, [messages]);

  const handleAddMessage = (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: value,
        author: "man",
        id: `mess-${Date.now()}`,
      },
    ]);

    setValue("");
    inputRef.current.focus();
  };

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [messages]
  );


  return (
    <div className="App">
      <div className="chats"><ChatList chats={chats}/></div>
      <div className="form"> {messages.map((message, i) => (
        <div className="mess"><Message
          key={message.id}
          text={message.text}
          id={message.id}
        /></div>
      ))}
      <form onSubmit={handleAddMessage}>
        <TextField
          placeholder="Enter a message"
          label="Message"
          value={value}
          onChange={handleChange}
          inputRef={inputRef}
        />
        <Button variant="contained">Add Message</Button> 
      </form>
      </div>
    </div>
  );
}

export default App;
