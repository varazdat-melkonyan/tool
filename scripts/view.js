let set = { index: 0 };

const onLoad = fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    set.data = data.data;

    view.createLeftWord(0, set.data.left[0].text);
    view.createLeftWord(1, set.data.left[1].text);
    view.createLeftWord(2, set.data.left[2].text);

    view.createRightWord(0, set.data.right[0].text);
    view.createRightWord(1, set.data.right[1].text);
    view.createRightWord(2, set.data.right[2].text);
  });

function checkStatus() {
  $("#1").animate({"left": -200}, 32);
  $("#tw1").animate({"right": -200}, 32);

  setTimeout(() => {
    $("#1").remove();
    $("#tw1").remove();
    $("#0").animate({"top": 60}, 32);
    $("#tw0").animate({"top": 60}, 32);
  }, 333);
}

$("#divOne").scroll(function() {

})

$(onLoad)