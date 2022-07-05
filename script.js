 "use strict"

const input1=document.querySelector('.input_1');
const input2=document.querySelector('.input_2');

const label1=document.querySelector('.label_1');
const label2=document.querySelector('.label_2');
const btn=document.querySelector(".btn");

const btn1=document.querySelector('.btn1');

function izla(a){
let aMap=new Map([
  ["a","а"],
  ["b","б"],
  ["d","д"],
  ["e","э"],
  ["f","ф"],
  ["g","г"],
  ["h","х"],
  ["i","и"],
  ["j","ж"],
  ["k","к"],
  ["l","л"],
  ["m","м"],
  ["n",'Н'],
  ["o","о"],
  ["p","п"],
  ["q","к"],
  ["r","р"],
  ["s","с"],
  ["t","т"],
  ["u","у"],
  ["v","в"],
  ["x","х"],
  ["y","е"],
  ["z","з"],
  ["o'","у"],
  ["sh","ш"],
  ["ch","ч"],
  [" "," "],
   


  
    ["А", "A"],
    ["Б", "B"],
    ["С", "C"],
    ["Д", "D"],
    ["Е", "E"],
    ["Ф", "F"],
    ["Г", "G"],
    ["Х", "H"],
    ["И", "I"],
    ["Ж", "J"],
    ["К", "K"],
    ["Л", "L"],
    ["М", "M"],
    ["Н", "N"],
    ["О", "O"],
    ["П", "P"],
    ["К", "Q"],
    ["Р", "R"],
    ["С", "S"],
    ["Т", "T"],
    ["У", "U"],
    ["В", "V"],
    ["Х", "X"],
    ["Й", "Y"],
    ["Я", "Ya"],
    ["Ю", "Yu"],
    ["Щ", "Sh"],
    ["Ш", "Sh"],
    ["Ч", "Ch"],
    ["З", "Z"],
    ["а", "a"],
    ["б", "b"],
    ["с", "c"],
    ["д", "d"],
    ["е", "e"],
    ["ф", "f"],
    ["г", "g"],
    ["х", "h"],
    ["и", "i"],
    ["ж", "j"],
    ["к", "k"],
    ["л", "l"],
    ["м", "m"],
    ["н", "n"],
    ["о", "o"],
    ["п", "p"],
    ["к", "q"],
    ["p", "r"],
    ["с", "s"],
    ["т", "t"],
    ["у", "u"],
    ["в", "v"],
    ["x", "x"],
    ["й", "y"],
    ["з", "z"],
    ["щ", "sh"],
    ["ч", "ch"],
    [" ", " "],
    [".", "."],
    [",", ","],
    ["-", "-"],
    ["0", "0"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7", "7"],
    ["8", "8"],
    ["9", "9"],
  
])
let arr=a.split("");
console.log(arr);
let arr1=[];
for(let i=0;i<arr.length;i++){

aMap.forEach(function(val,key){
  if(key==a[i]){
    arr1.push(val);
    console.log(arr1);
    input2.value=arr1.join("");
  }
  

})

}

}

 
input1.addEventListener("input",function(){
  let a=input1.value;
  izla(a);
  
});
////////////////////////////////
btn.addEventListener("click",function(){
   input1.value=input2.value="";
})
btn1.addEventListener("click",function(){
  label1.textContent="Kril";
  label2.textContent="Lotin";
  input1.placeholder="Kril";
  input2.placeholder="Lotin";
})
////////////////////////////////////////////////////////////////////////////



// const btn2=document.querySelector(".btn");
// console.log(btn2);

// const btn=document.getElementsByClassName('input');
// console.log(btn);

// const btn3=document.getSelection();
// console.log(btn3);

// const btn4=document.getElementsByTagName("body");
// console.log(btn4);

// const btn5=document.getElementsByTagName("input")
// console.log(btn5);

// const btn6=document.querySelectorAll("input");
// console.log(btn6);

// const btn7=document.getElementById("w");
// console.log(btn7);



///////////////////////////////

// const box=document.createElement("div");
// const form=document.querySelector("form");
// box.classList.add("box___1");

// box.innerHTML=`<p>Assalomu alaykum <button class="btn10"> Yopish </button></p>`;

// form.prepend(box.cloneNode(true));
// form.append(box.cloneNode(true));

// form.before(box.cloneNode(true));
// form.after(box.cloneNode(true));

// document.querySelector(".btn10").addEventListener("click",function(){
//   document.querySelector(".box___1").remove();
// })

//// style