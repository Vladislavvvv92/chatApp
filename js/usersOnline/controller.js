import {usersOnlineModel} from "./model";
import {setUserOffline, setUserOnline, setUsersLength} from "./logic";

export const initUsersOnlineControll  = (person) => {

    window.onunload  = function () {
       setUserOffline(person);
    };

    setInterval(() => {
        setUsersLength();
    }, 10000);

    usersOnlineModel.users.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    usersOnlineModel.usersLength.addEventListener('click',  (e) => {
        e.stopPropagation();
    });

    usersOnlineModel.usersLength.addEventListener('mouseover',  (e) => {
        e.stopPropagation();
        usersOnlineModel.usersTable.classList.add('users__modal--active')
    });

    usersOnlineModel.chat.addEventListener('click',  () => {
        usersOnlineModel.usersTable.classList.remove('users__modal--active')
    });

};


