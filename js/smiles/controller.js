import {smilesModel} from "./model";
import {printSmile} from "./logic";

export const initSmilesControll = () => {
    printSmile(smilesModel.smilesId, smilesModel.smildesPrint, smilesModel.input);

    smilesModel.smiles.addEventListener('click', () => {
        smilesModel.allSmiles.classList.toggle('smiles__all-smiles--active')
    })
};