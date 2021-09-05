import logo from './logo.svg';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import './App.css';
import Message from './Message.js'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

function App() {

  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "man") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Hello from React", author: "React-bot", id: `mess-${Date.now()}` },
      ]);
      inputRef.current.focus();
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
     {messages.map((message, i) => (
        <Message
          key={message.id}
          text={message.text}
          id={message.id}
        />
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
  );
}

export default App;
