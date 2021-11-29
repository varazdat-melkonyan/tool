const view = {
    createLeftWord: (i, text) => {
        let leftWord = `
            <div id="${i}" class="word">
                <p class="text">${text}</p>
            </div>
        `;
        $("#divOne").append(leftWord);

        $(`#${i}`).css("margin-top", 250 * i);
    },

    createRightWord: (j,text) => {
        let rightWord = `
            <div id="tw${j}" class="word">
                <p class="text">${text}</p>
            </div>
        `;

        $("#divTwo").append(rightWord);

        $(`#tw${j}`).css("margin-top", 250 * j);
    },
    scrollWords: (i,text) => {
        
    }
}