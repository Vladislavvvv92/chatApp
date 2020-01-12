export const model = {
    xhr: new XMLHttpRequest(),
    modal: document.getElementById('modal'),
    setting: document.getElementById('setting'),
    history: document.getElementsByClassName('message__history'),
    userMsg: document.getElementsByClassName('user-msg__msg'),
    otherMsg: document.getElementsByClassName('other-msg__msg'),
    changeHeaderIp: document.getElementById('ip-user'),
    changeNickNameBtn: document.getElementById('nickNameBtn'),
    changeNickNameInput: document.getElementById('nickNameInput'),
};

export class Person {
    constructor(IP) {
        this.IP = IP;
        this.nickName = null;
    }
    setIP(value) {
        this.IP = value;
    };
    getIP() {
        return this.IP;
    };
    setNickName(value) {
        this.nickName = value;
    };
    getNickName() {
        return this.nickName
    };
}