import {modelStyle} from "./model";

    export const changeStyleWhiteTheme = () => {
        modelStyle.isWhite = true;
        modelStyle.main[0].classList.add('main-white-theme');
        modelStyle.header[0].classList.add('chat__header-white-theme');
        modelStyle.footer[0].classList.add('footer-white-theme');
        modelStyle.history[0].classList.add('main__message-white-theme');
        modelStyle.btnSend[0].classList.add('form__btn-white-theme');
        modelStyle.inputField[0].classList.add('form__input-white-theme');
        modelStyle.idUserLenght.classList.add('users--white');
        modelStyle.modalBackground[0].classList.add('nickname-white-theme');
        modelStyle.modalInput.classList.add('input-white-theme');
        modelStyle.modalTitle[0].classList.add('title-white-theme');
        modelStyle.modalBtnSend[0].classList.add('btn-white-theme');

        for (let i = 0; i < modelStyle.otherMsg.length; i++) {
            modelStyle.otherMsg[i].classList.add('other-msg__msg-white-theme');
            modelStyle.otherMsgAfter[i].classList.remove('other-msg--black');
            modelStyle.otherMsgAfter[i].classList.add('other-msg--white');
        }

        for (let i = 0; i < modelStyle.userMsg.length; i++) {
            modelStyle.userMsg[i].classList.add('user-msg__msg-white-theme')
            modelStyle.userMsgAfter[i].classList.remove('user-msg--black');
            modelStyle.userMsgAfter[i].classList.add('user-msg--white')
        }

        for (let i = 0; i < modelStyle.time.length; i++) {
            modelStyle.time[i].classList.add('time-white-theme')
        }

        for (let i = 0; i < modelStyle.nickname.length; i++) {
            modelStyle.nickname[i].classList.add('nickname-white-theme')
        }

    };

    export const changeStyleBlackTheme = () => {
        modelStyle.isWhite = false;
        modelStyle.main[0].classList.remove('main-white-theme');
        modelStyle.header[0].classList.remove('chat__header-white-theme');
        modelStyle.footer[0].classList.remove('footer-white-theme');
        modelStyle.history[0].classList.remove('main__message-white-theme');
        modelStyle.btnSend[0].classList.remove('form__btn-white-theme');
        modelStyle.inputField[0].classList.remove('form__input-white-theme');
        modelStyle.idUserLenght.classList.remove('users--white');

        for (let i = 0; i < modelStyle.otherMsg.length; i++) {
            console.log(modelStyle.otherMsg[i])
            modelStyle.otherMsg[i].classList.remove('other-msg__msg-white-theme');
            modelStyle.otherMsgAfter[i].classList.add('other-msg--black');
            modelStyle.otherMsgAfter[i].classList.remove('other-msg--white');
        }

        for (let i = 0; i < modelStyle.userMsg.length; i++) {
            modelStyle.userMsg[i].classList.remove('user-msg__msg-white-theme');
            modelStyle.userMsgAfter[i].classList.add('user-msg--black');
            modelStyle.userMsgAfter[i].classList.remove('user-msg--white');
        }

        for (let i = 0; i < modelStyle.time.length; i++) {
            modelStyle.time[i].classList.remove('time-white-theme')
        }

        for (let i = 0; i < modelStyle.nickname.length; i++) {
            modelStyle.nickname[i].classList.remove('nickname-white-theme')
        }

    };
