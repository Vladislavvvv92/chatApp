export const usersOnlineModel = {
    xhr: new XMLHttpRequest(),
    chat: document.getElementById('chat'),
    usersUl: document.getElementById('table'),
    usersLi: document.getElementsByClassName('ul__li'),
    usersTable: document.getElementById('online'),
    usersLength: document.getElementById('usersLength'),
    users: document.getElementById('users'),
    setUsersUl() {
        this.usersUl = document.getElementById('table')
    },
};