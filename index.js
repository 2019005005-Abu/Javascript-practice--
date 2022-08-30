//1.Es6 syntax
//2.Arrow function
//3.Destructure
//4.
//5.
//6.

console.clear();
function addNumber(x,y,z){
    return x+y+z;
}
let number=[1,2,3];
console.log(addNumber(number[0],number[1],number[2]));


const subtractionNumber=(a,b,c,d)=>{
   return a+b+c+d;
}
let number1=[10,20,30,40];
let number2=[50,60,70,80];
console.log(subtractionNumber(number1[0],number1[1],number1[2],number1[3]));

using spread operator
function add$Numbers(a,b,c,d){
  return a+b+c+d;
}
var $number2=[78,45,56,89]; 
console.log(add$Numbers(...$number2));

function $$addnumbers(x,y,z){
    return x+y+z;
}
var number3=[5,...$number2,7];
console.log(number3);
console.log([...number1,...number2,...number3]);
console.log([number1.concat(...number2)]);


var p1={
    name:"Abu Al Shahriar Rifat",
    age:30
}
var p2={
    nationality:"Bangladeshi",
    occupation:"Student"
}
let p={...p1,...p2};
console.log(p);
var object1={
    name:"Abu Al Shahriar Rifat",
    System_id:2019005005,
    email:"rifatdiu2686@gmail.com",
    profession:"Software Enginnering"
}
var arr1=[10,20,30,40,50,60,70,80];

for loope;
for(var i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
// for in
// for of
// forEach
console.log("\n");
arr1.forEach((x)=>{
    console.log(x)
})
console.log("\n");

console.log("\n");
var sqaureNumber=arr1.forEach(function(x){
    console.log(x);
})

var pussing_arr=[];
arr1.forEach((x)=>{
    pussing_arr.push(x*x)
})
var n1=[56,45,67,34];
n1.forEach((x,index,myFullarr)=>{
  myFullarr[index]=x+5;
})
console.log(n1);

// map function
var squaring=n1.map(function(x){
    return(
        x*x
    )
})
console.log(squaring);

var filtering=squaring.filter((x)=>{
    return x>3721;
}).map((x)=>{
    return(
        x*2
    )}

console.log(filtering);
var finding=n1.find((x)=>x>45);
console.log(finding);
var finding=n1.find((x)=>x>62);
// filter function
// for in function
var forinFunction={
    name:"Abu Al Shahriar Rifat",
    System_Id:2019005005,
    University:"University Of Sharda"
}

for(var x in forinFunction){
    console.log(forinFunction[x]);
}
//for of function
for(var x in forinFunction){
    console.log(forinFunction[x]);
}
var students=[
   {
    id:101,
    name:"Abu Al shahriar Rifat",
    gpa:3.56
   },{
    id:102,
    name:"Shahriar Rifat",
    gpa:3.46,
   }
]

//starts.endswith()
//starts.enswith()
//string.includes()

//startsWith(Searching,position)->chaek a string starts with another staring
// const message="Today is friday";
console.log(message.endsWith('Today',0));
console.log(message.endsWith('friday'));
console.log(message.includes('friday'));
console.log(message.indexOf('is'));
console.log(message.lastIndexOf('friday'));

//DOM events
//1.Event Object
/**
 -event type:chane,submit,reset,load,unload,
 open,play
 --canplay,pause,progress,ended,volumechange,
 resize,scroll,toggle,waiting
 */
//video event
var video=document.querySelector('video');
video.addEventListener('canplay',()=>{
   console.log("This event is playing");
})
video.addEventListener('play',()=>{
   console.log("The video is playing");
})
video.addEventListener('pause',()=>{
   console.log('The video is pausing');
})
video.addEventListener('playing',()=>{
   console.log("The video is plaing now");
})
video.addEventListener('ended',()=>{
   console.log("The video is ending");
})
video.addEventListener("volumechange",()=>{
   console.log('The volume is changing');
})



//1.load event

window.addEventListener('load',()=>{
    console.log("The function is loaded");
})


window.addEventListener("unload",()=>{
    console.log("The function is unloaded");
})

//2.scrool event

window.addEventListener('scroll',()=>{
    console.log('scroll');
})

//3.resize event

window.addEventListener('resize',()=>{
    const width=window.outerHeight;
    const height=window.outerWidth;
    console.log(`Height=${height} and the Width=${width}`);
})

//4.toggle event

const details=document.querySelector('details');
details.addEventListener('toggle',(e)=>{
 console.log(e.target.open)
})

 
  //1.onclick event

//   var varName=document.querySelector('div');
  varName.addEventListener('click',(event)=>{
      console.log(event.target);
      console.log(event.target.className);
      console.log(event.target.id);
      console.log(event.target.innerHTML);
      console.log(event.target.innerHTML.textContent);
  })

  //2.ondblclick event

  varName.addEventListener('dblclick',()=>{
    console.log('Please dbl click');
})
//   3.onmousedown event

varName.addEventListener('mousedown',()=>{
    console.log('Mouse down ');
})

  //4.onmouseup event

// varName.addEventListener('mouseup',()=>{
//     console.log('Mouse UP');
// })
//   5.onmouseeenteer event

// varName.addEventListener('mouseenter',()=>{
//     console.log("Mouse is clicking in the center");
// })

  //6.onmouseleave event

varName.addEventListener("mousemove",(event)=>{
    console.log('The mouse is moving from here');
    console.log("ClientX="+event.clientX);
    console.log("ClientY="+event.clientY);
    console.log("OffsetX="+event.offsetX);
    console.log("OffsetY="+event.offsetY);
})
  //7.onmousemove event

varName.addEventListener("mousedown",()=>{
    console.log("The mouse is  down from here")
})

//   //8.onmouseover event

  varName.addEventListener('mouseover',()=>{
    console.log('Mouse event is staring from here');
  })

var btns=document.querySelectorAll('.btn');
Array.from(btns).map((button)=>{
  button.addEventListener("click",(e)=>{
     console.log("clicked");
     console.log(e.target.innerText);
  })
})

 //Keyboard Object
//->Keydown

const textarea1=document.querySelector('textarea');
textarea1.addEventListener("keydown",()=>{
    console.log('Keydown')
})

// ->Keypress

const textarea2=document.querySelector('keypress',()=>{
  console.log('keypress');
})

//keyup

const textarea3=document.querySelector('keyup',(e)=>{
    console.log('Keyup');
    console.log(e.target);
    console.log(e.key);
    console.log(e.code);
    console.log(e.shiftKey);
    if(e.shiftKey+'Shift'){
        console.log("shift"+e.key +"Is Pressed");
    }
})


const textarea11=document.querySelector('textarea');
textarea1.addEventListener("keydown",(event)=>{
    if(event.repeat){
        alert("Do not repeat")
    }else{
        alert(
            "Repaet"
        )
    }
})

 //FocusEvent
 //1.onblur--property

const input=document.querySelector('input')
 input.addEventListener(("blur"),(event)=>{
    console.log("Blur is occur")
    console.log(event.target.value);
    input.value=event.target.value.toUpperCase();
 })

 //2.onfocus-property

input.addEventListener("focus",()=>{
    input.style.background="orange";
})

 //3.onfocusin--property

 input.addEventListener('focusin',()=>{
    console.log('Input is foucs in');
 })

 //4.onfocusout--property

 input.addEventListener('focusout',()=>{
    console.log('Input is focus out');
 })


 //ClipboardEvent Object
 //1.oncopy
  var input=document.querySelector('input');
  var para=document.querySelector('p');
  var div=document.querySelector('div');
  console.log(input);
  input.addEventListener("copy",()=>{
     para.innerHTML='you have copied text'
  })

 //2.oncut
 input.addEventListener("cut",()=>{
    console.log('You have cut the text')
 })

 //3.onpaste
 input.addEventListener('paste',()=>{
    console.log('You habe pasted the copy');
 })

para.addEventListener('dragstart',(event)=>{
  console.log('You have dragged the file');
event.dataTransfer.setData("Text",event.target.id);
})

// //1
div.addEventListener('dragover',function(e){
    e.preventDefault();
})
 //DragEvent Object

 //1.ondragstart
 
 //2.ondrag

 //3.ondragend

 //4.ondragenter

 //5.ondragleave

 //6.ondragover
 div.addEventListener("dragover",function(e){
    e.preventDefault();
 })

//  //7.ondrop
  div.addEventListener("drop",function(e){
    let id=e.dataTransfer.getData("Text");
    console.log(id);
    div.appendChild(document.getElementById(id));
    e.preventDefault();
  })

 //MouseEvent Object

 //document.querySelector
 document.querySelectorAll
const div=document.querySelector('div');
const p_1=document.querySelector('p');
p_1.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('Text',e.target.id);
})

div.addEventListener('dragover',(e)=>{
   e.preventDefault();
})

div.addEventListener('drop',function(e){
    let id=e.dataTransfer.getData("Text");
    div.appendChild(document.getElementById(id));
    e.preventDefault();
})


//BOM=(browser Object Model)=>=>
//Window Object
//Location Object
console.clear()
console.log(document);
console.log(window.location);
console.log(location);
console.log(location.href);
console.log(location.port);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.pathname);

var locationDiv=document.querySelector('.location-div1');
console.log(locationDiv);
var p1=locationDiv.children[0];
p1.textContent=location.href;
var p2=locationDiv.children[1]
p2.textContent=location.hostname;
var p3=locationDiv.children[2];
p3.textContent=location.port;
var p4=locationDiv.children[3];
p4.textContent=location.host;
var p5=locationDiv.children[4];
p5.textContent=location.port;

//button add
const visitButton=document.getElementById('#btn1');
visitButton.addEventListener('click',function(){
    location.assign('https://youtu.be/Naim9y4n3jI?list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7');
})
//pop us box


function deleteSomeTing(){
    var conftrmationIs=confirm("Are you want to delete");
    if(conftrmationIs){
        console.log("delete");
    }else{
        console.log("Not Delete");
    }
}
deleteSomeTing();

function deleteMgs() { 
    var h1=document.createElement('h1');
    let text;
   var name=prompt("Enter your name");
   if(name==null ||name=='')text='no name found';
   else text=name;

   var textNode=document.createTextNode(text);
   h1.appendChild(textNode);
   document.body.appendChild(h1);
 }

 deleteMgs();

 function fullName(){
    var name=prompt("Enter The Name");
    var text;
    if(name==null ||name==''){
      text="No name found";
    }else{
        text="Welcome"+name;
    }
 }

 fullName();

 //JS BOM
 //JS TIMING events method
  
 //setTimeout()
   setTimeout(display,2000);
   function display(){
      console.log("I am a full stack developer");
   }

 //setInterval()
 

 const saveButton=document.querySelector('.save-btn');
 const message=document.querySelector('.message');
 saveButton.addEventListener("click",()=>{
    let count=1;
    message.textContent=count;
    setInterval(()=>{
      count++;
      message.textContent=count;
    },1000)
 })

