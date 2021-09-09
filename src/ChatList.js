import {List, ListItem} from '@material-ui/core';
import './ChatList.css'

export const ChatList = ({chats}) => {
    return <List>{chats.map(chat => (
    <ListItem key={chat.id}>{chat.name}</ListItem>
    ))}</List>
};