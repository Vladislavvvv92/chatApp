import {messagesModel} from "./model";
import {modelStyle} from "../changeStyle/model";

function cutNick(value) {
    if (value.length > 15) {
        return value.slice(0, 15) + '...';
    } else return value;
}

export const isBlockMsg = (msg) => {
    if (!(msg === '')) {
        if (messagesModel.sendedMsg.length === 2) {
            if ((msg === messagesModel.sendedMsg[0]) && (msg === messagesModel.sendedMsg[1])) {
                messagesModel.isBlocked = true;
                alert('Чат заблокирован на 1 минуту по причине спама');
                setTimeout(() => {
                    messagesModel.isBlocked = false;
                    alert('Чат разблокирован');
                }, 60000)
            }

            messagesModel.sendedMsg.shift();
            messagesModel.sendedMsg.push(msg);
        } else messagesModel.sendedMsg.push(msg);
    }
};

export const printMessage = (value, divType, person, date) => {
    const msgType = divType === 'user-msg' ? 'user-msg__msg' : 'other-msg__msg';
    const div = document.createElement('div');
    div.setAttribute('class', divType);

    const massage = document.createElement('div');

    try {
        let length = value.length * 2 / 1.75;
        for (let i = 1; i < length; i++) {
            if (i % 40 === 0 && value[i] === ' ') {
                let beforeSubStr = value.substring(0, i);
                let afterSubStr = value.substring(i, value.length);
                value = `${beforeSubStr}<br/>${afterSubStr}`;
            } else if (i % 40 === 0 && value[i] !== ' ') {
                for (let j = i; j < value.length; j++) {
                    if (value[j] === ' ') {
                        let beforeSubStr = value.substring(0, j);
                        let afterSubStr = value.substring(j, value.length);
                        value = `${beforeSubStr}<br/>${afterSubStr}`;
                        break
                    }
                }
            }
        }
    } catch (e) {
        console.log(e)
    }

    massage.innerHTML = value;
    massage.setAttribute('class', msgType);
    if (modelStyle.isWhite) {
        if (msgType === 'user-msg__msg') {
            massage.classList.add('user-msg__msg-white-theme');
            div.classList.add('user-msg--white');
        } else {
            massage.classList.add('other-msg__msg-white-theme');
            div.classList.add('other-msg--white');
        }
    } else {
        if (msgType === 'user-msg__msg') {
            div.classList.add('user-msg--black');
        } else {
            div.classList.add('other-msg--black');
        }
    }

    if (msgType !== 'user-msg__msg') {
        const nickName = document.createElement('p');
        nickName.innerHTML = person.nickName ? `${cutNick(person.nickName)} (${person.IP})` : person.IP;
        nickName.setAttribute('class', 'nickname');
        div.appendChild(nickName);
    }

    const time = document.createElement('p');
    time.innerHTML = date ? date : messagesModel.getTime();
    time.setAttribute('class', 'time');
    if (modelStyle.isWhite) {
        time.classList.add('time-white-theme');
    }

    const data = document.createElement('div');
    data.setAttribute('class', 'data');

    div.appendChild(massage);
    div.appendChild(time);

    const after = document.createElement(':after');

    messagesModel.messages.appendChild(div);
    messagesModel.messages.scrollTo(0, messagesModel.messages.scrollHeight);
};

export const sendMessageToDB = (nickName, IP, text, date) => {
    let promise = new Promise(((resolve, reject) => {
        messagesModel.xhr.open('PUT', '/putMessage', true);
        messagesModel.xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        messagesModel.xhr.send(JSON.stringify({
            nickName: nickName,
            IP: IP,
            text: text,
            date: date,
            deviceId: localStorage.getItem('deviceID')
        }));
        messagesModel.xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //console.log(messagesModel.xhr.response)
                resolve(messagesModel.xhr.response)
                reject('Error')
            }
        };
    }))
    promise.then((data) => {
        console.log(data)
    })
};

export const getMessageFromDB = () => {
    let promise = new Promise(((resolve, reject) => {
        return new Promise((resolve, reject) => {
            messagesModel.xhr.open('GET', '/getMessages', true);
            resolve()
            reject(()=>{
                console.log('Err')
            })
        })
            .then(() => {
                messagesModel.xhr.send();
                console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW")
                resolve();
            })
            .then(() => {
                messagesModel.xhr.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        console.log(JSON.parse(messagesModel.xhr.response));
                        const messages = JSON.parse(messagesModel.xhr.response).messages;
                        messages.forEach(function (item) {
                            if (item.deviceId === localStorage.getItem('deviceID')) {
                                printMessage(item.text, 'user-msg', item, item.date)
                            } else {
                                printMessage(item.text, 'other-msg', item, item.date)
                            }
                        })
                    }
                };
            })

    }))
    promise.then(() => {
        console.log('Download messages Done!')
    })
};
