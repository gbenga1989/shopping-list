// let output;

// output = document.all;
// output = document.all[11];
// output = document.all.length;

// output = document.documentElement;


// output = document.head;
// output = document.body;


// output = document.head.children;
// output = document.body.children;

// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;

// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;

// // document.forms[0].id = 'new-id';


// output = document.links;

// console.log(output);

// 04. dom selectors: single elements
// document.getElementById()
 
// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').getAttribute('id'));

// // set attribute
// document.getElementById('app-title').title = 'shopping list';
// document.getElementById('app-title').setAttribute('class', 'tittle');

// const title = document.getElementById('app-title')
// console.log(title);

// // Get/change content
// console.log(title.textContent);
// title.textContent ='hello world'
// title.innerText ='hello again'
// title.innerHTML = '<strong> shopping list  </strong>';

// // change styles
// title.style.color = 'red';
// title.style.backgroundColor = 'blue';
// title.style.padding = '10px';
// title.style.borderRadius = '10px';

// // document.queryselctor() for` single elements
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type ="text"]'));
// console.log(document.querySelector('li:nth-child(2').innerText);

// const secondItem = document.querySelector('li:nth-child(2');
// secondItem.innerText = 'Apple juice';
// secondItem.style.color = 'red'

// // use these methods on other elements
// const list = document.querySelector('ul');
// console.log(list);

// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue';

// 5.Dom selection- multiple elements
// queryselectorAll

// const listItems = document.querySelectorAll('.item');
// console.log(listItems);

// // listItems[1].style.color = 'red';

// listItems.forEach((item) =>
// {
//   item.style.color = 'red';

//   if (index ===1 ){
//     item.remove();
//   }
// })

// SHOPPING LIST  PROJECT SPECS
// 1. Add items to list via Form
// 2.Remove items from the list by clicking the "x" Button 
// 3.Clear all items with the "clear" Button
// 4.Filter items by typing in the fiter field
// 5.Add localstorage to presist items
// 6. click on an item to put into edit mode and add to form update item
// 7. update item and deploy to netlify


// Bringing in all we need and putting this element into variables

const itemForm =  document.getElementById('item-form');
const itemInput =  document.getElementById('item-input');
const itemList =  document.getElementById('item-list');
const clearBtn = document.getElementById('clear')
const itemFilter = document.getElementById('filter')


function addItem(e){
  e.preventDefault();

  const newItem = itemInput.value 

  // validate input
  if(newItem === ''){
    alert('please add an item')
    return;
  }

  // create list intem
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem))

 const button = createButton('remove-item btn-link text-red');
 
//  Add the li to the dom
 li.appendChild(button);
 
 

 itemList.appendChild(li);

 checkUI();

 itemInput.value = '';
}

function createButton(classes){
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)
  return button;
}

function createIcon(classes){
  const icon = document.createElement('i')
  icon.className = classes;
  return icon;
}


function removeItem(e){
  if(e.target.parentElement.classList.contains('remove-item')){
    if(window.confirm('Are you sure')){
      e.target.parentElement.parentElement.remove();
    }
    e.target.parentElement.parentElement.remove();

    checkUI();
  }
}

function clearItems(){
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
  }

  checkUI();
}

function checkUI(){
  const items = itemList.querySelectorAll('li')
  if(items.length === 0){
    clearBtn.style.display = 'none,2,3,4,5,6,7 ';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}


// Event listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

checkUI();