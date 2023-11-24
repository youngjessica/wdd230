const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

localStorage.setItem("lastVesitedTime", JSON.stringify(new Date()));

let numVisits = Number(window.localStorage.getItem("timeBetween"));

var time = localStorage.getItem("lastVesitedTime");
var lastVisitedTime = JSON.parse(time);
var now =new Date();
var diffDays =now.getDate() - lastVisitedTime.getDate(); 
const visitsDisplay = document.querySelector('.timeBetween');
visitedDisplay.innerText=diffDays + " days"

const visitDifference = "pastvisit" - Date.now();

localStorage.setItem("timeBetween", visitDifference);
