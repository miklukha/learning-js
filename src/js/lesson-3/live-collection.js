// https://www.designcise.com/web/tutorial/what-is-the-difference-between-live-and-static-collections-in-javascript

const ul = document.querySelector('.id');
const AllLi = document.querySelectorAll('.id1');
const liveArray = document.getElementsByClassName('id1');

console.log(AllLi);
console.log(liveArray);

ul.insertAdjacentHTML('beforeend', `<li class='id1'></li>`);

console.log(AllLi);
console.log(liveArray);

// non-live NodeList
const staticList = document.querySelectorAll('[name="foo"]');
console.log(staticList.length); // 2

// live NodeList
const liveList = document.getElementsByName('foo');
console.log(liveList.length); // 2

// add new radio button
const radioBox = document.createElement('input');
radioBox.type = 'radio';
radioBox.name = 'foo';
radioBox.value = 'qux';

document.getElementById('my-form').appendChild(radioBox);

console.log(staticList.length); // 2
console.log(liveList.length); // 3
