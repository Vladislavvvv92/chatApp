import {messagesModel} from "./model";
import {sendMessageToDB, isBlockMsg} from "./logic";
import {smilesModel} from "../smiles/model";

export const initMessagesController = (person) => {
    messagesModel.setWs(person);

    messagesModel.sendBtn.addEventListener('click',  (e) => {
        e.preventDefault();
        messagesModel.setInputValue();
        isBlockMsg(messagesModel.getInputValue());

        smilesModel.allSmiles.classList.remove('smiles__all-smiles--active');

        if (messagesModel.getInputValue().trim() !== '' && !messagesModel.isBlocked) {
            messagesModel.ws.send(JSON.stringify({
                nickName : person.getNickName() ? person.getNickName() : null,
                IP : person.getIP(),
                DID: localStorage.getItem('deviceID'),
                msgValue: messagesModel.getInputValue(),
            }));
            sendMessageToDB(person.getNickName(), person.getIP(), messagesModel.getInputValue(), messagesModel.getTime());
        }

        messagesModel.clearInputValue()
    });
};