let set = { };


const onLoad = fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    set.data = data.data;
    let length = set.data.left.length;

    view.createLeftWord(0, set.data.left[Math.floor(Math.random() * length)].text);
    view.createLeftWord(1, set.data.left[Math.floor(Math.random() * length)].text);
    view.createLeftWord(2, set.data.left[Math.floor(Math.random() * length)].text);

    view.createRightWord(0, set.data.right[Math.floor(Math.random() * length)].text);
    view.createRightWord(1, set.data.right[Math.floor(Math.random() * length)].text);
    view.createRightWord(2, set.data.right[Math.floor(Math.random() * length)].text);
  });

function checkStatus() {
  $("#1").animate({"left": -200}, 32);
  $("#tw1").animate({"right": -200}, 32);

  setTimeout(() => {
    view.removeWord(1);
    $("#tw1").remove();
    $("#0").animate({"top": 60}, 32);
    $("#tw0").animate({"top": 60}, 32);
  }, 333);

  view.editWord();
}


$(onLoad);