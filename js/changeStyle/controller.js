import {changeStyleWhiteTheme} from "../changeStyle/logic"
import {changeStyleBlackTheme} from "../changeStyle/logic"
import {modelStyle} from "./model";
export const initBtnStyle = () => {
    modelStyle.btnChangeWhiteTheme.addEventListener('click', function () {
        changeStyleWhiteTheme();
    });
    modelStyle.btnChangeBlackTheme.addEventListener('click', function () {
        changeStyleBlackTheme();
    })
};