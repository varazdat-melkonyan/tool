const view = {
    createCard: (i, text, type, title) => {
        if (text.length > 650) {
            $(`#${i} .text`).css("top","153.05px");
            $(`#${i} .text`).html(text.slice(0, 650).concat('...'));
        }

        let card = `
            <div id="${i}" class="card ${type}">
                <p class="title">${title}</p>
                <p class="text">${text}</p>
                <label onClick="readMore(${i})" class="readMore" style="display: none">ReadMore<label>
            </div>
        `;

        $("body").append(card);
        $(`#${i}`).css("margin-left", 2400 * i);
        if(text.length < 550) {
            $(`#${i} .text`).css("top","auto");
            $(`#${i} .text`).css("margin-top","105px");
        }

        if (text.length > 650) {
            $(`#${i} .readMore`).css("display", "flex");
        }
    }
}