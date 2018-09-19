const listLetter = ['a', 'b', 'c'];
const listNum = [1, 2, 3];

function zipList(list1, list2) {
  const endList = [];
  for (let i = 0; i < list1.length; i++) {
    endList.push(list1[i], list2[i]);
  }
  return endList;
}

console.log(zipList(listLetter, listNum));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(listLetter, listNum));
