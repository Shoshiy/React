import './Message.css'

export const Message = ({ text, onClick, id }) => {
    const handleClick = () => {
      onClick(id);
    }
    return <div onClick={handleClick}>{text}</div>;
  };

export default Message;