
// in: list of name
// out: groups 3-5 -> randomized
function groups(list) {
  if (list.length <= 5) {
    return [list];
  }

  const groups = [];

  const numGroups = Math.floor(list.length / 5) + 1; // size of the group
  // console.log('num groups', numGroups);
  for(var i = 0; i < numGroups; i++) {
    groups.push([]);
  }

  let groupsCtr = 0;

  while(list.length > 0) {
    let index = selectRandom(list);
    groups[groupsCtr].push(list[index]);

    if (groupsCtr == numGroups -1) {
      groupsCtr = 0;
    } else {
      groupsCtr += 1;
    }
    const a = list.slice(0, index) ;
    const b = list.slice(index + 1, list.length);
    list = a.concat(b);
  }

  return groups;
}

function selectRandom(list) {
  return Math.floor(Math.random() * (list.length - 1));
}

// const people = ['a', 'b', 'c', 'd', 'e'];
// console.log(groups(people));

// const people2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// console.log(groups(people2));

// const people3 = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(groups(people3));

// const people4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// console.log(groups(people4));

const people2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'];
console.log(groups(people2));

//sahil@apartmentlist.com
