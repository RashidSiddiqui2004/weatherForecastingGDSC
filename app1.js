// JavaScript code
function search_Places() {
	let input = document.getElementById('searchbar').value
	input= input.toLowerCase();
	let x = document.getElementsByClassName('places');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}

let x1 = Math.floor((Math.random() * 10) + 15);
let x2 = Math.floor((Math.random() * 10) + 15);
let x3 = Math.floor((Math.random() * 10) + 15);
let x4 = Math.floor((Math.random() * 10) + 15);
let x5 = Math.floor((Math.random() * 10) + 15);

let y1 = Math.floor((Math.random() * 10) + 14);
let y2 = Math.floor((Math.random() * 10) + 15);
let y3 = Math.floor((Math.random() * 7) + 13);
let y4 = Math.floor((Math.random() * 10) + 14);
let y5 = Math.floor((Math.random() * 10) + 14);

document.getElementById("t1").innerHTML+= x1;
document.getElementById("t2").innerHTML+= x1 - 5;
document.getElementById("t3").innerHTML+= x2;
document.getElementById("t4").innerHTML+= x2 - 7;
document.getElementById("t5").innerHTML+= x3;
document.getElementById("t6").innerHTML+= x3 - 5;
document.getElementById("t7").innerHTML+= x4;
document.getElementById("t8").innerHTML+= x4 - 7;
document.getElementById("t9").innerHTML+= x5;
document.getElementById("t10").innerHTML+= x5 - 5;
 
document.getElementById("w1").innerHTML+= y1;
document.getElementById("w2").innerHTML+= y2;
document.getElementById("w3").innerHTML+= y3;
document.getElementById("w4").innerHTML+= y4;
document.getElementById("w5").innerHTML+= y5;

const date = new Date();

document.getElementById("currDate1").innerHTML+= date.getDate();

document.getElementById("currDate2").innerHTML+= date.getDate()+1;
document.getElementById("currDate3").innerHTML+= date.getDate()+2;
document.getElementById("currDate4").innerHTML+= date.getDate()+3;
document.getElementById("currDate5").innerHTML+= date.getDate()+4;

