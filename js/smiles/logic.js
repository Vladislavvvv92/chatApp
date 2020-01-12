export const printSmile = (smilesId, smilePrint, input) => {
    for (let i = 0; i < smilesId.length; i++) {
        document.getElementById(`${smilesId[i]}`).addEventListener('click',  () => {
            input.value += smilePrint[i];
        })
    }
};

