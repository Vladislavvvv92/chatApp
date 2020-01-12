import {model} from "./model";

export const registration = (value, person) => {
    localStorage.setItem('isRegistered', true);
    model.xhr.open('POST', '/registration', true);
    model.xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    model.xhr.send(JSON.stringify({value: value, DID: localStorage.getItem('deviceID')}));
    model.xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (JSON.parse(model.xhr.response)) {
                person.setNickName(model.changeNickNameInput.value);
                model.modal.classList.remove('modal--active')
            } else {
                alert('Уже зарегестрирован')
            }
        }
    };
};

export const setNickName = (person) => {
    model.xhr.open('POST', '/setNick', true);
    model.xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    model.xhr.send(JSON.stringify({DID: localStorage.getItem('deviceID')}));
    model.xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            person.setNickName(model.xhr.response)
        }
    }
};

export const printIp = (value) => {
    value.innerHTML = `Ваш IP: ${IP}`;
};
