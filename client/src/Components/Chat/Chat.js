import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css'
import InfoBar from '../Infobar/InfoBar'
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from '../TextContainer/TextContainer';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users,setUsers]=useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(window.location.search);

         socket = io.connect(ENDPOINT); //connect with server

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, [ENDPOINT, window.location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((msg)=>[...msg,message]);
        });
       
        socket.on('roomData',({users})=>{
            console.log('users',users)
            setUsers(users);
        })

    }, []);
     
    // console.log('messages',messages);

    // function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();  //avoid reloading of whole page.

        if (message) {
            socket.emit('sendMessage', message, () => {
                setMessage('');
            })
        }
    }

    // console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                 <Messages messages={messages} name={name} />
                <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>
            <TextContainer  users={users}/>
        </div>
    )
}

export default Chat;