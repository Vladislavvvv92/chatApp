import {setUserOffline, setUserOnline} from "../usersOnline/logic";
import {printMessage} from "./logic";

export const messagesModel = {
    xhr: new XMLHttpRequest(),
    ws: new WebSocket('ws://chat-chat.eu-4.evennode.com/'),
    //ws: new WebSocket('ws://localhost:4000/'),
    sendBtn: document.getElementById('send'),
    messages: document.getElementById('messages'),
    isBlocked: false,
    sendedMsg: [],
    inputValue: null,
    setWs(person) {
        this.ws = new WebSocket('ws://chat-chat.eu-4.evennode.com/');
        //this.ws = new WebSocket('ws://localhost:4000/');
        this.ws.onopen = () => {
            setUserOnline(person)
        };
        this.ws.onclose = () => {
            this.setWs(person)
        };
        this.ws.onmessage = (response) => {
            let res = JSON.parse(response.data);
            res.DID === localStorage.getItem('deviceID')
                ? printMessage(res.msgValue, 'user-msg', person)
                : printMessage(res.msgValue, 'other-msg', res);
        };
    },
    setInputValue() {
        this.inputValue = document.getElementById('input').value;
    },
    getInputValue() {
        return this.inputValue;
    },
    clearInputValue() {
        document.getElementById('input').value = ''
    },
    getTime() {
        const date = new Date();
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return `${day}.${month}.${year}; ${hours}:${minutes}:${second}`
    },
};