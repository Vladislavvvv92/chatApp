import {usersOnlineModel} from "./model";

export const setUsersLength = () => {
    let promise = new Promise((resolve, reject) => {
        return new Promise(() => {
            usersOnlineModel.xhr.open('GET', '/getUsersLength', true);
            resolve();
            reject(() => {
                console.log('Err')
            })
        })
            .then(() => {
                usersOnlineModel.xhr.send();
                resolve();
                reject(() => {
                    console.log('Err')
                })
            })
            .then(() => {
                usersOnlineModel.xhr.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        document.getElementById('usersLength').innerHTML = JSON.parse(usersOnlineModel.xhr.response).res;
                        printOnlineUsers(JSON.parse(usersOnlineModel.xhr.response).usersList)
                    }
                };
            })
    })


};

export const setUserOnline = (person) => {
    let promise = new Promise(((resolve, reject) => {
        return new Promise(((resolve1, reject1) => {
            if (!sessionStorage.getItem("session")) {
                console.log(localStorage.getItem('deviceID'));
                usersOnlineModel.xhr.open('PUT', '/userOn', true);
                usersOnlineModel.xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                usersOnlineModel.xhr.send(JSON.stringify({
                    nickName: person.getNickName() ? person.getNickName() : null,
                    IP: person.getIP(),
                    DID: localStorage.getItem('deviceID'),
                }));
                sessionStorage.setItem('session', 'true')
            }
        }))
            .then(()=>{
                setUsersLength()
            })
        //setTimeout(() => , 1000);
    }))

};

export const setUserOffline = (person) => {
    usersOnlineModel.xhr.open('PUT', '/userOff', true);
    usersOnlineModel.xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    usersOnlineModel.xhr.send(JSON.stringify({
        nickName: person.getNickName() ? person.getNickName() : null,
        IP: person.getIP(),
        DID: localStorage.getItem('deviceID'),
    }));
};

export const printOnlineUsers = (...args) => {
    let users = [...args];
    users = users[0];
    console.log(users);
    usersOnlineModel.setUsersUl();
    usersOnlineModel.usersUl.parentNode.removeChild(usersOnlineModel.usersUl);

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'modal__ul ul');
    ul.setAttribute('id', 'table');
    for (let i = 0; i < users.length; i++) {
        const li = document.createElement('li');
        li.setAttribute('class', 'ul__li');
        li.innerHTML = users[i].nickName ? users[i].nickName : users[i].IP;

        if (users[i].DID === localStorage.getItem('deviceID')) {
            li.style.color = '#00a8ec'
        }

        ul.appendChild(li);
    }

    usersOnlineModel.usersTable.appendChild(ul);
};