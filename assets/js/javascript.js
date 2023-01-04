document.querySelector("#github").onclick = () => {
	window.open("http://www.github.com/Zukicode");
}

let SPACE_KEYCODE=32;
document.onkeydown=function(e){
    var keycode=e.keyCode||e.charCode,
        body=document.body;
 
    if(keycode!=SPACE_KEYCODE)
        return;
     
    e.preventDefault();
}

//Check LocalStorage

function checkLocal () {
	for (var i = 0; i <= 1000; i++) {
		if	(localStorage.getItem(i)) {
			let li = document.createElement("li");
			document.querySelector("#ul-last-result").appendChild(li);
			li.setAttribute("onclick", `localStorage.removeItem(${JSON.stringify(i)}); this.remove()`)
			li.innerHTML = localStorage.getItem(JSON.stringify(i));
		}
	}
}

checkLocal()

//Language for cubic
let langRubik = ["F", "B", "L",
						"R", "U", "D",
						"F'", "B'", "L'",
						"R'", "U'", "D'",
						"F2", "B2", "L2",
						"R2", "U2", "D2"];

//Shuffle cubic
function mixRubik() {
	for (var i = 1 ; i <= 20; i++) {
		let langR = Math.floor(Math.random() * langRubik.length);
		document.getElementById(i).innerHTML = langRubik[langR];
	}
}

mixRubik();

//For start timer
let timer = document.querySelector("#number-for-timer");
let second = 0;
let minute = 0;
let milesecond = 0;

let timers;

document.querySelector("#start").onclick = start;
document.querySelector("#stop").onclick = stop;
document.querySelector("#reset").onclick = reset;

// Start timer
function start () {
	timers = setInterval(mileseconds, 16);
}

//Stop timer
function stop () {
	clearInterval(timers);
	localStorage.setItem(JSON.stringify(second), timer.textContent);
	//Create list
	let li = document.createElement("li");
	document.querySelector("#ul-last-result").appendChild(li);
	li.setAttribute("onclick", `localStorage.removeItem(${JSON.stringify(second)}); this.remove()`)
	li.innerHTML = localStorage.getItem(JSON.stringify(second));
}

//Reset timer
function reset() {
	second = 0;
	minute = 0;
	milesecond = 0;
	timer.innerHTML = minute + ':' + second + ":" + milesecond;
	clearInterval(timers);
	mixRubik()
	
}

//Work timer
function mileseconds() {
	if(milesecond >= 60) {
		second++;
		milesecond = 0;
	};

	if (second >= 60) {
		minute++;
		second = 0;
	}
	milesecond++;
	timer.innerHTML = minute + ':' + second + ":" + milesecond;
}

//2021 js native