import {arrowModel} from "./model";
import {scrollDown} from "./logic";

export const initArrowControll = () => {
    arrowModel.chat.addEventListener('scroll', () => {
        arrowModel.arrow.hidden = ((arrowModel.chat.scrollHeight - arrowModel.chat.scrollTop) < 2000)
    });

    arrowModel.arrow.addEventListener('click', () => {
        scrollDown(arrowModel.chat)
    })
};