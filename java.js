
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let arr= [5,"Rashid", 782.0];

for(let key in arr){
  console.log(arr[key]);
}

clickBtn.onClick() = function(){
  alert("Hello world");
}

et x1 = Math.floor((Math.random() * 20) + 20);
let x2 = Math.floor((Math.random() * 20) + 18);
let x3 = Math.floor((Math.random() * 20) + 16);
let x4 = Math.floor((Math.random() * 20) + 16);
let x5 = Math.floor((Math.random() * 20) + 16);

let y1 = Math.floor((Math.random() * 10) + 14);
let y2 = Math.floor((Math.random() * 10) + 15);
let y3 = Math.floor((Math.random() * 7) + 14);
let y4 = Math.floor((Math.random() * 10) + 14);
let y5 = Math.floor((Math.random() * 10) + 14);

document.getElementById("t1").innerHTML+= x1;
document.getElementById("t2").innerHTML+= x1 - 10;
document.getElementById("t3").innerHTML+= x2;
document.getElementById("t4").innerHTML+= x2 - 7;
document.getElementById("t5").innerHTML+= x3;
document.getElementById("t6").innerHTML+= x3 - 9;
document.getElementById("t7").innerHTML+= x4;
document.getElementById("t8").innerHTML+= x4 - 8;
document.getElementById("t9").innerHTML+= x5;
document.getElementById("t10").innerHTML+= x5 - 9;
 
document.getElementById("w1").innerHTML+= y1;
document.getElementById("w2").innerHTML+= y2;
document.getElementById("w3").innerHTML+= y3;
document.getElementById("w4").innerHTML+= y4;
document.getElementById("w5").innerHTML+= y5;

const date = new Date();

document.getElementById("currDate1").innerHTML+= date.getDate();

document.getElementById("currDate2").innerHTML+= date.getDate() +1;
document.getElementById("currDate3").innerHTML+= date.getDate() +2;
document.getElementById("currDate4").innerHTML+= date.getDate()+3;
document.getElementById("currDate5").innerHTML+= date.getDate()+4;
