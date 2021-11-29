const view = {
  createLeftWord: (i, text) => {
      let leftWord = `
          <div id="${i}" class="word">
              <p class="text">${text}</p>
          </div>
      `;
      $("#divOne").append(leftWord);

      $(`#${i}`).css("margin-top", 120 * i);
  },

  createRightWord: (j,text) => {
      let rightWord = `
          <div id="tw${j}" class="word">
              <p class="text">${text}</p>
          </div>
      `;

      $("#divTwo").append(rightWord);

      $(`#tw${j}`).css("margin-top", 120 * j);
  },
  editWord: (i, text) => {
      $(`#${i} p`).html(text);
  },
  removeWord: (i) => {
      $(`#${i}`).remove();
  },
  scrollWord: async(direction) => {
    if (direction > 0) {
      let count = -1;
      for(let i = set.index - 1; i < set.index + direction; i++)
      {
          $(`#${i}`).css("margin-top", 120 * count);
          count++;
      }
  } else {
      let count = 1;
      for(let i = set.index + 1; i > set.index + direction; i--)
      {
          $(`#${i}`).css("margin-top", 120 * count);
          count--;
      }
    }

    
    $("#divOne .word").removeClass("top center bottom");
    $(`#${set.index}`).addClass("center");
    
    view.editWord(set.index, set.data.left[Math.floor(Math.random() * length)].text);
    
    if (direction > 0) {
        $(`#${set.index - 1}`).addClass("top");
        $(`#${set.index - 2}`).addClass("bottom");
        $(`#${set.index - 2}`).hide();
        setTimeout(() => {
        $(`#${set.index - 2}`).css("margin-top", "120px");
        $(`#${set.index - 2}`).attr("id", set.index + 1);
        },10);

        setTimeout(() => {
            $(`#${set.index + 1}`).show();
        },100);
    } else {
        $(`#${set.index + 1}`).addClass("bottom");
        $(`#${set.index + 2}`).addClass("top");
        $(`#${set.index + 2}`).hide();
        setTimeout(() => {
        $(`#${set.index + 2}`).css("margin-top", "-120px");
        $(`#${set.index + 2}`).attr("id", set.index - 1);
        },10);
        setTimeout(() => {
            $(`#${set.index - 1}`).show();
        },100);
    }
  }
}
