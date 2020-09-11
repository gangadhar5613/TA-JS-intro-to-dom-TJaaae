/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here

function createInputElm(label,type = "text"){
  let labelElm = document.createElement("label");
  labelElm.append(label);

  let inputElm = document.createElement("input");
 inputElm.setAttribute("type",type);

 labelElm.append(inputElm);
 return labelElm;
 
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
function createInputElm(label,type = "text"){
  let labelElm = document.createElement("label");
  labelElm.append(label);

 labelElm.innerHTML = `${label}:<input type = "${type}">`;

 return labelElm;
 
}


// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

function createList(arr){
  let ul = document.createElement("ul");

  document.body.append(ul);
 

  arr.forEach(element => {
    let li = document.createElement("li");

    li.innerText = element;
    ul.append(li)
    
    
  });
  return ul;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

function createTodoList(array){
  let ulElm = document.createElement("ul");
  document.body.append(ulElm);

  array.forEach(elm =>{
    let liElm = document.createElement("li");
    ulElm.append(liElm);

    let para = document.createElement("p");
    liElm.append(para);
    para.innerText = elm.name;
    
    let inputElm = document.createElement("input");
    liElm.append(inputElm);
    inputElm.setAttribute("type","checkbox");
    inputElm.setAttribute("name","");
    inputElm.setAttribute("id","");
    if(elm.isDone){
      inputElm.setAttribute("checked",true);
      let spanElm = document.createElement("span");
      spanElm.innerText = "X";
      liElm.append(spanElm);
    }

  });
  return ulElm;
 
}




// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
