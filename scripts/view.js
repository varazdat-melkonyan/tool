const view = {
  createWord: (i, text, type, parent) => {
      let htmlWord = `
          <div id="${i}" class="word ${type}">
              <p class="text">${text}</p>
          </div>
      `;
      $(`#${parent}`).append(htmlWord);

      $(`#${parent} #${i}`).css("margin-top", 120 * i);
  },
  editWord: (i, text) => {
      $(`#${i} .text`).html(text);
  },
  removeWord: (i) => {
      $(`#${i} .text`).remove();
  },
  scrollToWord: async(direction) => {
    if (direction > 0) {
      let count = -1;
      for(let i = 0; i < 10; i++)
      {
          $(`#divOne #${i}`).css("margin-top", 120 * count);
          count++;
      }
    }

    $("#divOne .word").removeClass("top center bottom");
    $(`#divOne #${set.index + 1}`).addClass("center");

    view.editWord(set.index, set.data.left[set.index].text);
    
    if (direction > 0) {
        $(`#divOne #${set.index}`).addClass("top");
        $(`#divOne #${set.index - 1}`).addClass("bottom");
        $(`#divOne #${set.index - 1}`).hide();
        $(`#divOne #${set.index - 1}`).css("margin-top", "240px");
        $(`#divOne #${set.index + 1}`).css("margin-top", "120px");
        $(`#divOne #${set.index}`).css("margin-top", "0");

        $(`#divOne #${set.index - 1}`).attr("id", set.index + 2);
        setTimeout(()=> $(`#${set.index + 2}`).show());
    } 
  }
}
