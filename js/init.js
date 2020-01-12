document.addEventListener('DOMContentLoaded', init);

import '../style/main.less';
import {initController} from "./controller";
import {initMessagesController} from "./messages/controller";
import {initUsersOnlineControll} from "./usersOnline/controller";
import {initArrowControll} from "./scrollArrow/controller";
import {initSmilesControll} from "./smiles/controller";
import {initBtnStyle} from "./changeStyle/controller";

function init() {
    if (!localStorage.getItem('deviceID')) {
        localStorage.setItem('deviceID', `${Math.floor(Math.random()*10000)}`)
    }
    const person = initController();
    initSmilesControll();
    initArrowControll();
    initMessagesController(person);
    initUsersOnlineControll(person);
    initBtnStyle()
}