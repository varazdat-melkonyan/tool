let set = { index: 0 };

const onLoad = fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    set.data = data.data;
    for(let i = 0; i < set.data.left.length; i++) {
      view.createLeftWord(i, set.data.left[i].text);
      
      view.scrollWords(i, set.data.left[i].text);
    }
    for(let j = 0; j < set.data.right.length; j++) {
      view.createRightWord(j, set.data.right[j].text);
    }
  });

function checkStatus() {

}

$("#divOne").scroll(function() {
  for(let i = 0; i < set.data.left.length; i++) {
    $(`${i}`).css("margin-top", i - 4)
  }
})

$(onLoad)