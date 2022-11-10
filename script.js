// script src
// 1. head -  <script src="script.js"></script>
// html იwyebs gaparsvas -> elodeba js is kods -> html asrulebs gapasrvas

// 2. body - <script src="script.js"></script>
// html gaparsva -> js kodis amogeba -> gashveba

// 3.head -  <script async src="script.js"></script>
// html parsingi da js amogeba paralelurad -> js is kodis gashveba -> htmlis gaparsvis dasruleba

// 4.head -  <script defer src="script.js"></script>
// html parsingi da js amogeba paralelurad -> gashveba

//events
// let inputField = document.getElementById('username');

// inputField.addEventListener('keydown', function(event) {
//     if (event.keyCode == 13) {
//         alert('You pressed Enter')
//     } else {
//         console.log('hello');
//     }
// })

// inputField.addEventListener('keydown', function(y) {
//    y.target.classList.add('inputClass');
// })

// let link = document.getElementById('link');

// link.addEventListener('click', function(event) {
//     event.preventDefault();

//     console.log('hello');
// })

//practice
// let ulItem = document.querySelector('.ul-list');

// let liItem = document.createElement('li');
// // liItem.textContent = 'javscript';
// liItem.innerText = 'javscript';

// let liItem2 = document.createElement('li');
// liItem2.innerText = 'html';

// ulItem.appendChild(liItem);
// ulItem.appendChild(liItem2);

//to do practice
let input = document.querySelector(".input-form");
let addButton = document.querySelector(".btn-add");
let ul = document.querySelector(".ul-items");
let clearAllItems = document.querySelector(".clearall");
let form = document.querySelector(".form-wraper");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // 1. get input value
  let inpuValue = input.value;
  if (inpuValue == " ") {
    return;
  }
  // 2. add value in li -> ul
  let li = document.createElement("li");

  let btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete This Item";
  btnDelete.addEventListener("click", function () {
    li.remove();
  });
  li.textContent = inpuValue;

  li.appendChild(btnDelete);
  ul.appendChild(li);

  // 3. clear input
  input.value = " ";
});

clearAllItems.addEventListener("click", function () {
  ul.innerHTML = " ";
});

// burger bar
let navigation = document.getElementById("navbar");
let burgerbar = document.getElementById("burgerBar");

//pirveli varianti - bugrer bar fontawesome
// burgerbar.addEventListener('click', function() {
//     navigation.classList.toggle('activeNav')
// })

//meore varianti - burger div
burgerbar.addEventListener("click", function () {
  burgerbar.classList.toggle("activeBar");
  navigation.classList.toggle("toggle");
});
