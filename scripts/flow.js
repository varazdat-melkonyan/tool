let set = {index:0};

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

const scrollWord = (direction) => {
    let newIndex = set.index + direction;

    if (newIndex < 0 || newIndex >= set.data.length) {
        return;
    }
    else {
        set.index += direction;
        console.log(set.index);
        view.scrollWord(direction);
    }
}

// function checkStatus() {
//   $("#1").animate({"left": -200}, 32);
//   $("#tw1").animate({"right": -200}, 32);

//   setTimeout(() => {
//     view.removeWord(1);
//     $("#tw1").remove();
//     $("#0").animate({"top": 60}, 32);
//     $("#tw0").animate({"top": 60}, 32);
//   }, 333);

//   view.editWord();
// }



// const shuffle = (array) => {
// 	let currentIndex = array.length, tempVal, randomIndex;

// 	while (0 !== currentIndex)
// 	{
// 		randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex -= 1;

// 		tempVal = array[currentIndex];
// 		array[currentIndex] = array[randomIndex];
// 		array[randomIndex] = tempVal;
// 	}

// 	return array;
// }


$(onLoad);
