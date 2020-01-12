import {model, Person} from "./model";
import {registration, setNickName} from "./logic";
import {printIp} from "./logic";
import {getMessageFromDB} from "./messages/logic";
import {setUserOnline, setUsersLength} from "./usersOnline/logic";

export const initController = () => {
    getMessageFromDB();
    const person = new Person(IP);

    if (localStorage.getItem('isRegistered')) {
        setNickName(person)
    }

    printIp(model.changeHeaderIp);

    model.setting.addEventListener('click',  () => {
        model.modal.classList.add('modal--active')
    });

    model.modal.addEventListener('click',  () => {
        model.modal.classList.remove('modal--active');
    });

    model.modal.childNodes[1].addEventListener('click',  (e) => {
        e.stopPropagation()
    });

    model.changeNickNameBtn.addEventListener('click',  () => {
        setUsersLength();
        registration(model.changeNickNameInput.value, person)
    });

    return person;
};


