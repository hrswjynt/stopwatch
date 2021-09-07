let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;
let start = false;

// Concatenating "0" if the time is only one digit
function twoDigits(s, m, h) {
	if (s < 10) {
		dispaySeconds = "0" + s;
	} else {
		dispaySeconds = s;
	}
	if (m < 10) {
		displayMinutes = "0" + m;
	} else {
		displayMinutes = m;
	}
	if (h < 10) {
		displayHours = "0" + h;
	} else {
		displayHours = h;
	}
}

// Clock
function clock() {
	let date = new Date();
	let seconds = date.getSeconds();
	let minutes = date.getMinutes();
	let hours = date.getHours();

	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"clock"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}

// Stopwatch
function stopwatch() {
	seconds++;

	if (seconds / 60 === 1) {
		seconds = 0;
		minutes++;

		if (minutes / 20 === 1) {
			minutes = 0;
			hours++;
		}
	}

	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"time"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}

// Start and Stop stopwatch
function toggleStart() {
	if (start === false) {
		interval = window.setInterval(stopwatch, 100);
		document.getElementById("play").innerHTML = "Stop";
		start = true;
	} else {
		window.clearInterval(interval);
		document.getElementById("play").innerHTML = "Start";
		start = false;
	}
}

// Reset stopwatch
function reset() {
	seconds = 0;
	minutes = 0;
	hours = 0;

	document.getElementById("time").innerHTML = "00:00:00";

	document
		.querySelectorAll(".lap-time")
		.forEach((element) => (element.innerHTML = "00:00:00"));
}

// Finish
function user1() {
	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"user-01"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}
function user2() {
	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"user-02"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}
function user3() {
	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"user-03"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}
function user4() {
	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"user-04"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}
function user5() {
	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"user-05"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}
function user6() {
	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"user-06"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}
function user7() {
	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"user-07"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}
function user8() {
	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"user-08"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}

window.setInterval(clock, 1000);
